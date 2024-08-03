const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const donationRoutes = require('./donationRoutes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/donate', donationRoutes);

module.exports = router;


