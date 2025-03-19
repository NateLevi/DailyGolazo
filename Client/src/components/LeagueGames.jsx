import { useParams, Link } from "react-router-dom";
import { getCompetitionByLeagueId } from "../assets/helpers";

// Helper to format date as MM/DD/YYYY
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};




const LeagueGames = ({ highlightsData, setSelectedGame }) => {
  const { leagueId } = useParams();
  const competitionFilter = getCompetitionByLeagueId(leagueId);

  const filteredGames = highlightsData.filter(
    (game) => game.competition === competitionFilter
  );

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h2 className="text-center text-4xl font-bold py-4">
        {competitionFilter} Recent Games
      </h2>
      <ul>
        {filteredGames.map((game) => (
          <li key={game.id} className="mb-2">
            <div
              onClick={() => {
                setSelectedGame(game);
              }}
              className="cursor-pointer block bg-white rounded shadow p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-indigo-600 uppercase mr-4 w-40">
                  {game.competition}
                </span>
                <span className="flex-1 text-gray-800">{game.title}</span>
                <span className="text-sm text-gray-500">
                  {formatDate(game.date)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {filteredGames.length === 0 && (
        <p className="text-center text-gray-500">
          No games found for this competition.
        </p>
      )}
    </div>
  );
};

export default LeagueGames;
