 const Pool = require("pg").Pool;

 const pool = new Pool ( {
    user:"postgres",
    password:"Simple12",
    host: "localhost",
   port: 5432,
    database: "pernMovies"
    
 });
 module.exports = pool;