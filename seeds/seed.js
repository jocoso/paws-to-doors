const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const catData = require('./catSeeds.json');
const dogData = require('./dogSeeds.json');
const userData = require('./userSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  for (const cat of catData) {
    await Project.create({
      ...cat,
      cat_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  

  process.exit(0);
};

seedDatabase();