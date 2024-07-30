const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');
const catRoutes = require('./catRoutes');

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/cats', catRoutes);

module.exports = router;
