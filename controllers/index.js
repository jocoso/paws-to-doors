const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const adoptionRoutes = require('./adoptionRoutes');
const contactRoutes = require('./contactRoutes');
const aboutusRoutes = require('./aboutusRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/adoption', adoptionRoutes);
router.use('/contact', contactRoutes);
router.use('/about-us', aboutusRoutes);

module.exports = router;
