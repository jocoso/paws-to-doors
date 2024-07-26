const squelize = require('../config/connection');
const User = require('../models/User');

const userData = [
    {
        username: ,
        email: ,
        password: ,
    },
    {
        username: ,
        email: ,
        password: ,
    },
    {
        username: ,
        email: ,
        password: ,
    },
    {
        username: ,
        email: ,
        password: ,
    },
    {
        username: ,
        email: ,
        password: ,
    },

];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true});

module.exports = seedUsers;