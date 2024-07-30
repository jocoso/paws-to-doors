const User = require('./User');
const Dog = require('./Dog');
const Cat = require('./Cat');

User.hasMany(Dog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Cat, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Dog.belongsTo(User, {
    foreignKey: 'user_id',
});

Cat.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Dog, 
    Cat,
};

