
const User = require('../models/User');

const userData = [
    {
        username: 'john_doe',
        email: 'john_doe@example.com',
        password: 'password123',
    },
    {
        username: 'jane_smith',
        email: 'jane_smith@example.com',
        password: 'password456',
    },
    {
        username: 'mike_jones',
        email: 'mike_jones@example.com',
        password: 'password789',
    },
    {
        username: 'sara_brown',
        email: 'sara_brown@example.com',
        password: 'password101',
    },
    {
        username: 'alex_lee',
        email: 'alex_lee@example.com',
        password: 'password202',
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
