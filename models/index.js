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

<<<<<<< HEAD
module.exports = { User, };
=======
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

>>>>>>> e67214e68f505b6199e6cb30e2fe0bf95a31a3aa
