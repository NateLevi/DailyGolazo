import React from 'react';
import { Link } from 'react-router-dom';
import { leagues } from '../assets/leagueInfo';
const GamesList = () => {
  return (
    <div className="mx-auto max-w-3xl p-4">
{/*League Selection Labels-------------------------------------------------------------------------------------------------------------------- */}
      <div className="mx-auto max-w-3xl p-4">
      <h2 className="text-center text-3xl font-bold mb-4">Select a League</h2>
        <ul>
        {leagues.map((league)=>{
          return(
                  <li key={league.id} className="mb-2">
                  <Link
                    to={`/leagues/${league.leagueId}`}
                    className="block bg-white rounded shadow p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center">
                      {/* Placeholder image */}
                      <img
                        src={league.src} 
                        alt={`${league.label} Logo`}
                        className="h-6 w-6 mr-2"
                      />
                      <div className="border-2 border-black h-6 mx-2"></div>
                      <span className="text-gray-800 font-semibold">
                        {league.label}
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

export default GamesList;
