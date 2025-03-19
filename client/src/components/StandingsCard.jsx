import { NavLink, useLocation } from 'react-router-dom';

const StandingsCard = ({ standings }) => {
  const location = useLocation();
  // Show more teams on the full standings page; otherwise, show 3 leaders.
  const numTeams = location.pathname === '/standings' ? 5 : 3;

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">#</th>
                <th className="text-left">Team</th>
                <th className="text-center">P</th>
                <th className="text-center">W-D-L</th>
                <th className="text-center">GF</th>
                <th className="text-center">GA</th>
                <th className="text-center">GD</th>
                <th className="text-center">PTS</th>
              </tr>
            </thead>
            <tbody>
              {standings.slice(0, numTeams).map((item) => (
                <tr key={item.team.id}>
                  <td className="text-left">{item.position}</td>
                  <td className="text-left flex items-center">
                    <img
                      src={`${item.team.crest}`}
                      alt={item.team.shortName}
                      className="w-6 h-6 inline-block mr-2"
                    />
                    {item.team.name}
                  </td>
                  <td className="text-center">{item.playedGames}</td>
                  <td className="text-center">{`${item.won}-${item.draw}-${item.lost}`}</td>
                  <td className="text-center">{item.goalsFor}</td>
                  <td className="text-center">{item.goalsAgainst}</td>
                  <td className="text-center">{item.goalDifference}</td>
                  <td className="text-center">{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-actions justify-end mt-4">
          <NavLink to="/standings">
            <button className="btn btn-primary">View More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StandingsCard;
