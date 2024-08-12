const router = require("express").Router();
const { Pet, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const petData = await Pet.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        // Serialize data so the template can read it
        const pet = petData.map((data) => data.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("aboutus", {
            pet,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;