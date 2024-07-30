const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('index')

})

router.get('/test', async (req, res) => {

    res.render('test')

})

module.exports = router;