import { useEffect, useState } from 'react';

const ScheduleCard = ({ selectedLeague }) => {
  const [scheduleData, setScheduleData] = useState(null);
  const [groupedMatches, setGroupedMatches] = useState({});

  useEffect(() => {
    // If no league is selected, do not fetch.
    if (!selectedLeague) return;

    const fetchSchedule = async () => {
      try {
        const response = await fetch(`/api/schedule?league=${selectedLeague}`);
        const data = await response.json();
        setScheduleData(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, [selectedLeague]);

  useEffect(() => {
    if (scheduleData && scheduleData.matches) {
      // Group matches by date (YYYY-MM-DD)
      const groups = scheduleData.matches.reduce((acc, match) => {
        const date = match.utcDate.split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(match);
        return acc;
      }, {});
      setGroupedMatches(groups);
    }
  }, [scheduleData]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {Object.keys(groupedMatches)
        .sort() // Sort dates ascending
        .map(date => (
          <div key={date} className="card bg-base-100 shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{date}</h2>
            {groupedMatches[date].map(match => (
              <div key={match.id} className="flex items-center border-b py-2">
              <div className="flex items-center w-1/3">
                <img
                  src={match.homeTeam.crest}
                  alt={match.homeTeam.shortName}
                  className="w-8 h-8 mr-2"
                />
                <span>{match.homeTeam.name}</span>
              </div>
              <div className="w-1/3 text-center">
                <span className="font-bold">vs</span>
              </div>
              <div className="flex items-center justify-end w-1/3">
                <span>{match.awayTeam.name}</span>
                <img
                  src={match.awayTeam.crest}
                  alt={match.awayTeam.shortName}
                  className="w-8 h-8 ml-2"
                />
              </div>
            </div>
            
            ))}
          </div>
        ))}
    </div>
  );
};

export default ScheduleCard;
