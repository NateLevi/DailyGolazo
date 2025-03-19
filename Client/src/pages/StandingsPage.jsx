import { useEffect, useState, useRef } from 'react';
import StandingsCard from "../components/StandingsCard";
import { leagues } from '../assets/leagueInfo';

const StandingsPage = () => {
  // leagueData will store standings keyed by leagueId
  const [leagueData, setLeagueData] = useState({});
  // Ref guard to prevent duplicate fetching (helpful in React Strict Mode)
  const fetchRan = useRef(false);

  useEffect(() => {
    if (fetchRan.current) return;
    fetchRan.current = true;

    const fetchLeagueData = async () => {
      const newLeagueData = {};

      //Promise.all to fetch each league's standings concurrently
      await Promise.all(
        leagues.map(async (league) => {
          try {
            const response = await fetch(`/api/standings?league=${league.leagueId}`);
            const data = await response.json();
            // Extract the "table" array from the first standings object
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

  return (
    <>
      <header className="relative z-10 mt-8">
        <h1 className="text-5xl font-bold text-center">League Standings</h1>
      </header>
      <section className="py-1 mb-20">
        <div className="container mx-auto px-4 mt-2 space-y-8">
          {leagues.map((league) => (
            <div key={league.leagueId} className={league.className}>
              <h2 className="text-3xl font-bold mb-4">{league.label} Top 5</h2>
              {/* Pass the standings data for this league; if not fetched yet, default to an empty array */}
              <StandingsCard standings={leagueData[league.leagueId] || []} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StandingsPage;
