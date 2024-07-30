const Dog = require('../models/Dog');

const dogData = [
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

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;

