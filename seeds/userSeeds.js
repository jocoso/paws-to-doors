// const User = require("../models/User");
// const bcrypt = require('bcrypt');

// const userData = [
//     {
//         name: "john_doe",
//         email: "john_doe@example.com",
//         password: "password123",
//     },
//     {
//         name: "jane_smith",
//         email: "jane_smith@example.com",
//         password: "password456",
//     },
//     {
//         name: "mike_jones",
//         email: "mike_jones@example.com",
//         password: "password789",
//     },
//     {
//         name: "sara_brown",
//         email: "sara_brown@example.com",
//         password: "password101",
//     },
//     {
//         name: "alex_lee",
//         email: "alex_lee@example.com",
//         password: "password202",
//     },
// ];

// const seedUsers = async () => {
//     for (let user of userData) {
//         user.password = await bcrypt.hash(user.password, 10);
//         await User.create(user);
//     }
// };

// seedUsers();


const bcrypt = require('bcrypt');
const { User } = require('../models');

// Function to hash passwords
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Function to create a user
const createUser = async (name, email, password) => {
    const hashedPassword = await hashPassword(password);
    return User.create({ name, email, password: hashedPassword });
};

// User data
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

// Seed users function
const seedUsers = async () => {
    for (let user of userData) {
        await createUser(user.name, user.email, user.password);
    }
};

// Export the seed function
module.exports = seedUsers;

