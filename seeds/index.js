const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedPets = require('./petseeds');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced');

    await seedUsers();
    console.log('Users seeded');

    await seedPets();
    console.log('Pets seeded');

    process.exit(0);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
};

seedAll();
