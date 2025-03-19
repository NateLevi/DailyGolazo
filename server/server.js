const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const axios = require('axios');
const path = require('path');
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? process.env.CLIENT_URL
    : 'http://localhost:5173'
};
app.use(cors(corsOptions));



//Serve React build
app.use(express.static(path.join(__dirname, '../client/dist')));

//Highlights API
app.get('/api/highlights', async (req, res) => {
  const ScorebatUrl = `https://www.scorebat.com/video-api/v3/feed/?token=${process.env.SCOREBATAPI_KEY}`;
  try {
    const response = await fetch(ScorebatUrl);
    const result = await response.json();
    
    res.json(result.response);
  } catch (error) {
    console.error("Error in /api/highlights:", error);
    res.status(500).json({ error: 'Failed to fetch highlights data' });
  }
});


//Schedule API
app.get('/api/schedule', async (req, res) => {
  const { league } = req.query;
  if (!league) {
    return res.status(400).json({ error: 'League query parameter is required' });
  }
  const url = `https://api.football-data.org/v4/competitions/${league}/matches?status=SCHEDULED`;
  const options = {
    headers: {
      'X-Auth-Token': process.env.X_AUTH_KEY
    }
  };

  try {
    const response = await axios.get(url, options);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'Failed to fetch matches data' });
  }
});



// Standings API
app.get('/api/standings', async (req, res) => {
  const { league } = req.query;
  if (!league) {
    return res.status(400).json({ error: 'No league specified' });
  }
  const scheduleUrl = `https://api.football-data.org/v4/competitions/${league}/standings`;
  const fdOptions = {
    headers: {
      'X-Auth-Token': process.env.X_AUTH_KEY
    }
  };

  try {
    const response = await axios.get(scheduleUrl, fdOptions);
    res.json(response.data);
  } catch (error) {
    console.error(`Error in /api/standings for league ${league}:`, error);
    res.status(500).json({ error: 'Failed to fetch schedule data' });
  }
});


// Fallback to index.html for client‑side routing
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
