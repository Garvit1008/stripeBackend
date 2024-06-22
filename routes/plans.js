// routes/plans.js

const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');

// GET all plans
router.get('/plans', async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
