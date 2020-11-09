const db = require('./models');

module.exports = () => {
  db.sequelize.sync()
    .then(() => {
        console.log("DB 연결 성공")
    }).catch((err) => {
        console.log(err);
    });
}