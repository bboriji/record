var DataTypes = require("sequelize").DataTypes;
var _User = require("./User");
var _Post = require("./Post");

function initModels(sequelize) {
  var User = _User(sequelize, DataTypes);
  var Post = _Post(sequelize, DataTypes);

  return {
    User,
    Post,
  };
}
module.exports = { initModels };
