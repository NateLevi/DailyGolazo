// src/utils/helpers.js
export const getCompetitionByLeagueId = (leagueId) => {
    switch (leagueId) {
      case 'PL':
        return 'ENGLAND: Premier League';
      case 'BL1':
        return 'GERMANY: Bundesliga';
      case 'PD':
        return 'SPAIN: La Liga';
      case 'SA':
        return 'ITALY: Serie A';
      case 'FL1':
        return 'FRANCE: Ligue 1';
      default:
        return '';
    }
  };
  export const getCompetitionByTournamentId = (tournamentId) => {
    switch (tournamentId) {
      case '1':
        return 'EUROPE: Champions League';
      case '2':
        return 'EUROPE: Europa League';
      case '3':
      default:
        return 'EUROPE: Conference League';
    }
  };