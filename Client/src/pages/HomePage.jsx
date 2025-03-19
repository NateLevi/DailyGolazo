import { useEffect, useState, useRef } from 'react';
import HomeCarousel from "../components/HomeCarousel";
import StandingsCard from "../components/StandingsCard";
import { leagues } from '../assets/leagueInfo';

const HomePage = () => {
  const [leagueData, setLeagueData] = useState({});
  // Use ref to ensure the fetch is run once
  const fetchRan = useRef(false);

  useEffect(() => {
    if (fetchRan.current) return;
    fetchRan.current = true;

    const fetchLeagueData = async () => {
      const newLeagueData = {};

      await Promise.all(
        leagues.map(async (league) => {
          try {
            const response = await fetch(`/api/standings?league=${league.leagueId}`);
            const data = await response.json();
            newLeagueData[league.leagueId] = data.standings?.[0]?.table ?? [];
          } catch (error) {
            console.error(`Error fetching ${league.label} data:`, error);
            newLeagueData[league.leagueId] = [];
          }
        })
      );
      setLeagueData(newLeagueData);
    };

    fetchLeagueData();
  }, []);

  // Split the leagues into two groups
  const topRowLeagues = leagues.slice(0, 3);
  const bottomRowLeagues = leagues.slice(3);

  return (
    <>
      {/* Carousel Section */}
      <section className='mt-5'>
        <HomeCarousel />
      </section>
      <header className="relative z-10 mt-8">
        <h1 className="text-5xl font-bold text-center">League Standings</h1>
      </header>
      <section className="py-1 mb-20">
        <div className="container mx-auto px-4 mt-2 space-y-8">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {topRowLeagues.map((league) => (
              <div key={league.leagueId} className={league.className}>
                <h2 className="text-3xl font-bold mb-4 text-center">{league.label} Leaders</h2>
                <StandingsCard standings={leagueData[league.leagueId] || []} />
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-4">
            {bottomRowLeagues.map((league) => (
              <div key={league.leagueId} className={league.className}>
                <h2 className="text-3xl font-bold mb-4 text-center">{league.label} Leaders</h2>
                <StandingsCard standings={leagueData[league.leagueId] || []} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
