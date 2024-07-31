const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedPets = require('./petseeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPets();
  process.exit(0);
};

seedAll();

