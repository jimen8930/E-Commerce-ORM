// Import important parts of sequelize library 
const { Model, DataTypes } = require('sequelize');
// Import our database connection
const sequelize = require('../config/connection.js');

// Initialize the category table by extending off sequelize model class
class Category extends Model {}

Category.init(
  {
    // define columns
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    // This will allow the table to stay the same and match mySQl
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
