const Sequelize = require("sequelize");

const config = {
<<<<<<< HEAD
  host: process.env.CORONABOARD_MYSQL_HOST || "coronaboard.c63fmvj5yhbm.ap-northeast-2.rds.amazonaws.com",
=======
  host:
    process.env.CORONABOARD_MYSQL_HOST ||
    "coronaboard.c63fmvj5yhbm.ap-northeast-2.rds.amazonaws.com",
>>>>>>> refs/remotes/origin/main
  port: 3306,
  database: "coronaboard",
  user: "admin",
  password: process.env.CORONABOARD_MYSQL_PASSWORD || "coronaboard",
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

module.exports = {
  sequelize,
  GlobalStat: require("./global-stat.model")(sequelize),
  KeyValue: require("./key-value.model")(sequelize),
};
