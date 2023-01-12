import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const register = express();
const login = express();
import { createPool } from "mysql";

import bcrypt from 'bcrypt'; // BCRYPT IS THE ENCRYPTION ALGORITHM
const saltRounds = 10;

/* DATABASE CONNECTION (Root = default user) */

const db = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "kapperszaakdb",
});

/* THESE LINES ARE NEEDED TO BE ABLE TO GRAB A VARIABLE FROM THE OBJECT SEND FROM THE FRONTEND */

register.use(cors());
register.use(express.json())
register.use(bodyParser.urlencoded({ extended: true }));

login.use(cors());
login.use(express.json())
login.use(bodyParser.urlencoded({ extended: true }));

/* REGISTER --> VARIABLES PULLED FROM FRONTEND */
/* REGISTER --> INSERT STATEMENT OF PARAMETER VARIABLES - SQL injection preventing - QUERY INSERT INTO DATABASE */

register.post("/register", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userLastName
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword

    bcrypt.hash(userpassword, saltRounds, (err, passwordHash) => { // PASSWORD HASH + ADDING SALT
        if (err) {
            console.log(err)
        }       
    
    const sqlInsert = "INSERT INTO userinformation (email, password, firstName, middleName, lastName) VALUES (?,?,?,?,?)"
            
       db.query(sqlInsert, [useremail, passwordHash, userfirstname, usermiddlename, userlastname], (err, result)=> {
        console.log(result);
        });  
    });
});

/* Login --> */
login.post("/userlogin", (req, res)=> {

    const loginemail = req.body.loginEmail
    const loginpassword = req.body.loginPassword


/* LOGIN --> SELCET ALL */
    
    const sqlSelect = "SELECT email, password FROM userinformation WHERE email = ? AND password = ?"
    db.query(sqlSelect, [loginemail, loginpassword],
        (err, result) => {
            if (err) {
                res.send({ err: err });    
            }

            if (result.length > 0) {
                res.send(result);({ message:"Okay, let's go!"}); // Message that is send back to the frontend when inlog is correct
            } else {
                res.send({ message: "Email of wachtwoord is incorrect!"}); //Message that is send back to the frontend when inlog is incorrect
            }
        }           
    );
});

/* LOCALHOST PORT (3001 (Registerform), 3002 (Loginform)) , npm run devStart , RUNS ON NODEMON */

register.listen(3001, () => {
    console.log("running on port 3001");
});

login.listen(3002, () => {
    console.log("running on port 3002");
});