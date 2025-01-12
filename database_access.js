var mysql = require('mysql');
function test_db_connection(a, b) { // do a simple select to see that we can accquire and close a connection to the database as a test.
    let db_result = null;
    let connection_res = false;
    let close_res = false;
    let con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "mydb"
    });
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            connection_res = true
            db_result = result
        });
    });
    con.end((error) => {
        if (error) {
          console.error('Error closing MySQL connection:', error);
          return;
        }
        else {
            close_res = true;
            console.log('MySQL connection closed');}
    });
    return [db_result, connection_res, close_res];

}
module.exports = test_db_connection;