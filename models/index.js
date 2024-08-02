const User = require('./User');
const Pet = require('./Pet');

// Define associations here
User.hasMany(Pet, {
  foreignKey: 'pet_id',
  onDelete: 'CASCADE',
});


module.exports = {
  User,
  Pet,
};

