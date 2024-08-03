const User = require("../models/User");

const userData = [
    {
        name: "john_doe",
        email: "john_doe@example.com",
        password: "password123",
    },
    {
        name: "jane_smith",
        email: "jane_smith@example.com",
        password: "password456",
    },
    {
        name: "mike_jones",
        email: "mike_jones@example.com",
        password: "password789",
    },
    {
        name: "sara_brown",
        email: "sara_brown@example.com",
        password: "password101",
    },
    {
        name: "alex_lee",
        email: "alex_lee@example.com",
        password: "password202",
    },
];

const seedUsers = async () => {
    await User.bulkCreate(userData, { individualHooks: true });
};

module.exports = seedUsers;
