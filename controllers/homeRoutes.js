const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');

require('dotenv').config();

const OPENCAGE_API_KEY = process.env.OPENCAGE_API_KEY;



router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const petData = await Pet.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // Serialize data so the template can read it
    const pet = petData.map((data) => data.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      pet, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Pet/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          // attributes: ['name'],
        },
      ],
    });

    const Pet = petData.get({ plain: true });

    res.render('pet', {
      ...pet,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/dog-breeds', async (req, res) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogBreeds = response.data;
    res.render('dog-breeds', { dogBreeds });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cat-breeds', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    const catBreeds = response.data;
    res.render('cat-breeds', { catBreeds });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/geolocation', async (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ error: 'Address query parameter is required' });
  }

  try {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=YOUR_OPENCAGE_API_KEY`);
    const geolocationData = response.data;
    res.json(geolocationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
