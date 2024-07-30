const sequelize = require('../config/connection');
const seedUsers = require('./seedUsers');
const seedPets = require('./seedPets');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPets();
  process.exit(0);
};

seedAll();

