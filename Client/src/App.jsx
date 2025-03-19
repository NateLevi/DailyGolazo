//Page Imports
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LeaguePage from './pages/LeaguePage';
import StandingsPage from './pages/StandingsPage';
import TournamentPage from './pages/TournamentPage';
import SchedulePage from './pages/SchedulePage';

// Router
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> {/* Default route for "/" */}
      <Route path='/standings'element={<StandingsPage/>}/>
      <Route path='/tournaments'element={<TournamentPage/>}/>
        <Route path="/tournaments/:tournamentId" element={<TournamentPage />} />
        <Route path="/tournaments/:tournamentId/highlightId" element={<TournamentPage />} />
      <Route path='/leagues'element={<LeaguePage/>}/>
        <Route path="/leagues/:leagueId" element={<LeaguePage />} />
        <Route path="/leagues/:leagueId/highlightId" element={<LeaguePage />} />
      <Route path='/schedule'element={<SchedulePage/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;


};

export default App
