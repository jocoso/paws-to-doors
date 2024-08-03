const router = require('express').Router();
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

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


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signin', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signin');
});


router.get('/aboutUs', (req, res) => {
  res.render('aboutUs', {
    logged_in: req.session.logged_in
  });
});

router.get('/donation', (req, res) => {
  res.render('donation', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;
