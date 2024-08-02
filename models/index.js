const User = require('./User');
const Pet = require('./Pet');

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = { User, Pet };
