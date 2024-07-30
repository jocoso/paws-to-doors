const sequelize = require('../config/connection');
const seedUsers = require('./seedUsers');
const seedDogs = require('./seedDogs');
const seedCats = require('./seedCats');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedDogs();
    await seedCats();
    process.exit(0);
};

seedAll();
