const router = require('express').Router();
const { Ticket } = require('../../models');

// GET all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {

    try {
        const newTicket = await Ticket.create({
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        });

        res.status(201).json(newTicket);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;