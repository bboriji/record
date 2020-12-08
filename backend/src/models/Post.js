/* jshint indent: 2 */

const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      contents: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'Post',
      schema: 'public',
      timestamps: true,
      paranoid: true,
    },
  )

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: 'userid',
    })
  }

  return Post
}
