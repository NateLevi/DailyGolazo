import React from 'react';
import { Link } from 'react-router-dom'; 
import { tournaments } from '../assets/leagueInfo';
const TournamentList = () => {
  
  return (
    <div className="mx-auto max-w-3xl p-4">
{/*League Selection Labels-------------------------------------------------------------------------------------------------------------------- */}
      <div className="mx-auto max-w-3xl p-4">
      <h2 className="text-center text-3xl font-bold mb-4">Select a Tournament</h2>
        <ul>
        {tournaments.map((tournament)=>{
          return(
                  <li key={tournament.id} className="mb-2">
                  <Link
                    to={`/tournaments/${tournament.tournamentId}`}
                    className="block bg-white rounded shadow p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <img
                        src={tournament.src} 
                        alt={`${tournament.label} Logo`}
                        className="h-6 w-6 mr-2"
                      />
                      <div className="border-2 border-black h-6 mx-2"></div>
                      <span className="text-gray-800 font-semibold">
                        {tournament.label}
                      </span>
                    </div>
                  </Link>
                </li>
          )
        })}
        </ul>
    </div>
    </div>
  );
};

export default TournamentList;
