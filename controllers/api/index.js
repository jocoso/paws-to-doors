const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petController');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);

module.exports = router;


