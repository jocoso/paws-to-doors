Module.exports = (sequelize, DataTypes) => {
    const Cat = sequelize.define('Cat', {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      info: DataTypes.TEXT,
      location: DataTypes.STRING
    });
  
    return Cat;
  };