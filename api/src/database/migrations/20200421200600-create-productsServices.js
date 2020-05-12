'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('products_services', 
    { 
      id: {
        type : Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      description: {
        type : Sequelize.STRING(100),
        allowNull: false
      },
      detailing: {
        type : Sequelize.STRING,
        allowNull: false
      },
      type: {
        type : Sequelize.STRING(20),
        allowNull: false,
      },
      value: {
        type : Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type : Sequelize.CHAR(1),
        deafaultValue: 'A', //A - active or I - inactive
        allowNull: false,
      },
      userId: {
        field: "user_id",
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    
    });
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products_services');
  }
};
