const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "127.0.0.1",
  user: "rachael",
  password: "password",
  database: "todo",
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log(`Database Connected!`);
});

module.exports = dbConn;
