import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import TournamentGames from "../components/TournamentGames";
import TournamentList from "../components/TournamentList";
import { useParams } from "react-router-dom";
import { getCompetitionByTournamentId } from "../assets/helpers";

const TournamentPage = () => {
  const [highlightsData, setHighlightsData] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { tournamentId } = useParams();
  const competitionFilter = tournamentId ? getCompetitionByTournamentId(tournamentId) : "";

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

  // If no game is selected, show a message; otherwise, extract embed HTML from the selected game.
  const embedHtml =
    selectedGame &&
    selectedGame.videos &&
    selectedGame.videos.length > 0
      ? selectedGame.videos[0].embed
      : null;

  return (
    <section className="mx-auto max-w-3xl p-4">
      {selectedGame ? (
        <VideoCard embedHtml={embedHtml} />
      ) : (
        <p className="text-center text-xl mb-4">
          
        </p>
      )}

      {/* TournamentGames list receives the filtered data and a callback for setting the selected game */}
      <TournamentGames
        highlightsData={highlightsData}
        setSelectedGame={setSelectedGame}
      />

      {/* Render the tournament list for navigation */}
      <TournamentList />
    </section>
  );
};

export default TournamentPage;
