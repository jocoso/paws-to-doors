const User = require('./User');
const Cat = require('./Cat');
const Dog = require('./Dog');

//TODO: Instead of cats and dogs... Pet?
User.hasMany(Cat, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Dog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
