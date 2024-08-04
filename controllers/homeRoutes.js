const router = require('express').Router();
const { Pet, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [{ model: User }],
    });

    const pets = petData.map(pet => pet.get({ plain: true }));

    res.render('homepage', {
      pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
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

router.get('/adopt', async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [{ model: User }],
    });

    const pets = petData.map(pet => pet.get({ plain: true }));

    res.render('adopt', {
      pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pet/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    const pet = petData.get({ plain: true });
    console.log(pet); 

    res.render('petDetails', {
      pet,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
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

module.exports = router;

