const router = require('express').Router();
const { Pet, User } = require('../../models');

// Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.findAll({
      include: [{ model: User, attributes: ['username', 'email'] }]
    });
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get pet by ID
router.get('/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username', 'email'] }]
    });
    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new pet
router.post('/', async (req, res) => {
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update pet
router.put('/:id', async (req, res) => {
  try {
    const petData = await Pet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!petData[0]) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to adopt a pet
router.post('/adopt/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.status(401).json({ message: 'You need to be logged in to adopt a pet' });
      return;
    }

    const petData = await Pet.findByPk(req.params.id);

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    await Pet.update({ user_id: req.session.user_id }, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: 'Pet adopted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete pet
router.delete('/:id', async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
