const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
};

// Creates new user (signup)
router.post("/", async (req, res) => {
    try {
        req.body.password = await hashPassword(req.body.password);
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json({
            message: "Failed to create user",
            error: err.toString(),
        });
    }
});

// Login user
router.post("/login", async (req, res) => {
    try {
      
        const userData = await User.findOne({
            where: { email: req.body.email },
        });

       
        if (!userData) {
            res.status(400).json({
                message: "Incorrect email, please try again",
            });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userData.password);
        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect password, please try again",
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ userData, message: "You are now logged in!" });
        });
    } catch (err) {
        res.status(500).json({
            message: "Login failed",
            error: err.toString(),
        });
    }
});

// Logout user
router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Get user ID
router.get("/:id", async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving user",
            error: err.toString(),
        });
    }
});

// Update user by ID
router.put("/:id", async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            where: { id: req.params.id },
            individualHooks: true,
        });
        if (!userData[0]) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }
        res.status(200).json({
            message: "User updated successfully",
            userData,
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to update user",
            error: err.toString(),
        });
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({
            message: "Failed to retrieve users",
            error: err.toString(),
        });
    }
});

module.exports = router;
