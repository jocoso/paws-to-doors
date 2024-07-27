Module.exports = (sequelize, DataTypes) => {
    const Dog = sequelize.define('Dog', {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      info: DataTypes.TEXT,
      location: DataTypes.STRING,
      breed: DataTypes.STRING 
    });
  
    return Dog;
  };