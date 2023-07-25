// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING
    },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    price: { 
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      // References the category model's id
      references: {
        model: "category",
        key: "id",
      },
    },
  },

  {
    // Link to database connection
    sequelize,
    // Set to false to remove 'created_at', and 'updated_at'
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
// Export

module.exports = Product;
