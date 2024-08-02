const router = require('express').Router();
const { User } = require('../../models');

// Creates new user (signup)
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Login user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData){
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
    

    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ userData, message: 'You are now logged in!'});
    });
    } catch (err) {
    res.status(400).json(err);
  }
});

// Logout user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Get user ID
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPkk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update user by ID
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update user
router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
            individualHooks: true,
        });
        if (!userData[0]) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

