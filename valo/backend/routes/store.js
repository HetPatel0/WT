const express = require('express');
const axios = require('axios');
const router = express.Router();
const User = require('../models/User'); // Import User model

// Route to fetch Valorant skins
router.get('/:valorantId', async (req, res) => {
  try {
    const valorantId = req.params.valorantId;
    const storeResponse = await axios.get(`https://valorant-api.com/v1/store/offers?userId=${valorantId}`);
    res.json(storeResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching store data' });
  }
});

module.exports = router;
