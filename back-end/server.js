const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const RegisterForm = express();
const mysql = require("mysql");

/* DATABASE CONNECTION (Root = default user) */

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* THESE LINES ARE NEEDED TO BE ABLE TO GRAB A VARIABLE FROM THE OBJECT SEND FROM THE FRONTEND */

RegisterForm.use(cors());
RegisterForm.use(express.json())
RegisterForm.use(bodyParser.urlencoded({ extended: true }));

/* VARIBLES PULLED FROM FRONTEND */

RegisterForm.post("/api/insert", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userLastName
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword


/* INSERT STATEMENT OF VARIBLES PULLED FROM THE FRONTEND, SET INTO THE CORRECT TABLE (COLUMS) */

    const sqlInsert = "INSERT INTO user_information (firstName, middleName, lastName, email, password) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [userfirstname, usermiddlename, userlastname, useremail, userpassword], (err, result)=> {
        console.log(result);
    })
    
});

/* LOCALHOST PORT (3002) , npm run devStart , RUNS ON NODEMON */

RegisterForm.listen(3002, () => {
    console.log("running on port 3002");
});
