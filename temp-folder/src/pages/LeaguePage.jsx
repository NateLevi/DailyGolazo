import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import GamesList from "../components/GamesList";
import LeagueGames from "../components/LeagueGames";
import { useParams } from "react-router-dom";
import { getCompetitionByLeagueId } from "../assets/helpers";

const LeaguePage = () => {
  const [highlightsData, setHighlightsData] = useState(null);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { leagueId } = useParams();
  const competitionFilter = leagueId ? getCompetitionByLeagueId(leagueId) : "";

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/highlights`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setHighlightsData(json);
        // Filter data
        if (competitionFilter) {
          const filtered = json.filter(
            (game) => game.competition === competitionFilter
          );
          setFilteredGames(filtered);
        } else {
          setFilteredGames(json);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [competitionFilter]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

// Extract the embed HTML from the selected game
const embedHtml =
  selectedGame &&
  selectedGame.videos &&
  selectedGame.videos.length > 0
    ? selectedGame.videos[0].embed
    : null;

      return (
        <section className="mx-auto max-w-3xl p-4">
          {/* Display the video if a game is selected */}
          {embedHtml ? (
              <VideoCard embedHtml={embedHtml} />
            ) : (
              <p className="text-center"></p>
            )}

          {/* Pass setSelectedGame to the game list */}
          <LeagueGames
            highlightsData={filteredGames}
            setSelectedGame={setSelectedGame}
          />
          <GamesList highlightsData={highlightsData} />
        </section>
      );
    };

export default LeaguePage;
