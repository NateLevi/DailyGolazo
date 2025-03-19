import { useState } from 'react';
import { leagues } from '../assets/leagueInfo';
import ScheduleCard from '../components/ScheduleCard';

const SchedulePage = () => {
  const [selectedLeague, setSelectedLeague] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Matches Calendar</h1>
      <div className="mb-4">
        <label className="mr-2 font-semibold">Select League:</label>
        <select
          value={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
          className="select select-bordered"
        >
          <option value="">Choose League</option>
          {leagues.map((league) => (
            <option key={league.leagueId} value={league.leagueId}>
              {league.label}
            </option>
          ))}
        </select>
      </div>
      {/* Only render the schedule card when a league is selected */}
      {selectedLeague && <ScheduleCard selectedLeague={selectedLeague} />}
    </div>
  );
};

export default SchedulePage;
