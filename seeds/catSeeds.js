const Cat = require('../models/Cat');

const catData = [
    {
        name: ,
        breed: ,
        age: ,
        health_status: ,
        description: ,
        location: ,
        user_id: ,
    },
    {
        name: ,
        breed: ,
        age: ,
        health_status: ,
        description: ,
        location: ,
        user_id: ,
    },
    {
        name: ,
        breed: ,
        age: ,
        health_status: ,
        description: ,
        location: ,
        user_id: ,
    },
    {
        name: ,
        breed: ,
        age: ,
        health_status: ,
        description: ,
        location: ,
        user_id: ,
    },
    {
        name: ,
        breed: ,
        age: ,
        health_status: ,
        description: ,
        location: ,
        user_id: ,
    },
];

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;
