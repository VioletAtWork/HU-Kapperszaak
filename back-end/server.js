const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const RegisterForm = express();
const mysql = require("mysql");

/* CONNECTION (Root = default user) */

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* IETS GAAT ER NIET GOED MET BODY-PARSER !!!!!!*/
RegisterForm.use(cors());
RegisterForm.use(express.json());
RegisterForm.use(bodyParser.urlencoded({ extended: true }));

RegisterForm.post("/api/insert", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userlastname
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword

    const sqlInsert = "INSERT INTO user_information (email, password, firstName, middleName, lastName) VALUES (?,?)"
    db.query(sqlInsert, [userfirstname, usermiddlename, userlastname, useremail, userpassword], (err, result)=> {
        console.log(err);
    })
    
});

RegisterForm.listen(3002, () => {
    console.log("running on port 3002");
});

