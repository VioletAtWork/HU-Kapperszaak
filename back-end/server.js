import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const register = express();
const login = express();
import { createPool } from "mysql";

/* DATABASE CONNECTION (Root = default user) */

const db = createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* THESE LINES ARE NEEDED TO BE ABLE TO GRAB A VARIABLE FROM THE OBJECT SEND FROM THE FRONTEND */

register.use(cors());
register.use(express.json())
register.use(bodyParser.urlencoded({ extended: true }));

login.use(cors());
login.use(express.json())
login.use(bodyParser.urlencoded({ extended: true }));

/* REGISTER --> VARIBLES PULLED FROM FRONTEND */

register.post("/register", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userLastName
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword


/* REGISTER --> INSERT STATEMENT OF PARAMETER VARIBLES - SQL injection preventing - QUERY INSERT INTO DATABASE */

    const sqlInsert = "INSERT INTO user_information (firstName, middleName, lastName, email, password) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [userfirstname, usermiddlename, userlastname, useremail, userpassword], (err, result)=> {
        console.log(result);
    })   
});

/* Login --> */
login.post("/userlogin", (req, res)=> {

    const loginemail = req.body.loginEmail
    const loginpassword = req.body.loginPassword


/* LOGIN --> SELCET ALL */
    
    const sqlSelect = "SELECT email, password FROM user_information WHERE email = ? AND password = ?"
    db.query(sqlSelect, [loginemail, loginpassword],
        (err, result) => {
            if (err) {
                res.send({ err: err} );    
            }

            if (result.length > 0) {
                res.send(result); // Mesage that is send back to the frontend when inlog is correct
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