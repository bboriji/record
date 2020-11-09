/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile: {
      type: DataTypes.STRING,
    },
    githubLink: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'public',
    timestamps: true,
    paranoid: true
  });
};
