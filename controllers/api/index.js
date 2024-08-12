const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const donationRoutes = require('./donationRoutes');
const ticketRoutes = require('./ticketRoutes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/donate', donationRoutes);
router.use('/tickets', ticketRoutes);

module.exports = router;


