const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const homeRoutes = require('./homeRoutes')

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/', homeRoutes);

module.exports = router;


