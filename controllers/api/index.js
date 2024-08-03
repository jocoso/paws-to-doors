const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const ticketRoutes = require('./ticketRoutes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/tickets', ticketRoutes);

module.exports = router;


