const express =  require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* TESTING CONNECTION (Root = default user) */

app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO location (streetName, houseNumber, City, postalCode, phoneNumber) VALUES ('test', 'test', 'test', 'test', 'test');"
    db.query(sqlInsert, (err, result)=> {
        res.send("This is the backend connection hopefully");    
    })
    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});