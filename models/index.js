const User = require('./User');
const Pet = require('./Pet');

// Define associations here
User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

<<<<<<< HEAD
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
=======
Pet.belongsTo(User, {
  foreignKey: 'user_id',
>>>>>>> c51f815887a34dc45810d7f0b746587dd7c1d2d2
});

module.exports = {
  User,
  Pet,
};
<<<<<<< HEAD

>>>>>>> e67214e68f505b6199e6cb30e2fe0bf95a31a3aa
=======
>>>>>>> c51f815887a34dc45810d7f0b746587dd7c1d2d2
