import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const register = express();
const login = express();
import { createPool } from "mysql";
import bcrypt, { hash } from 'bcrypt'; // BCRYPT IS THE ENCRYPTION ALGORITHM
const saltRounds = 10;

/* DATABASE CONNECTION --> */

const db = createPool({
    host: "localhost",
<<<<<<< HEAD
    user: "root",
=======
    user: "sqluser", //DEFAULT = "ROOT"
>>>>>>> Development
    password: "password",
    database: "kapperszaakdb",
});

/* LOCALHOST --> */

register.listen(3001, () => {
    console.log("running on port 3001");
});

login.listen(3002, () => {
    console.log("running on port 3002");
});

/* REGISTER --> */

register.use(cors());
register.use(express.json())
register.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
login.use(cors());
login.use(express.json())
login.use(bodyParser.urlencoded({ extended: true }));

/* REGISTER --> VARIABLES PULLED FROM FRONTEND */
/* REGISTER --> INSERT STATEMENT OF PARAMETER VARIABLES - SQL injection preventing - QUERY INSERT INTO DATABASE */

=======
>>>>>>> Development
register.post("/register", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userLastName
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword

// DATA ENCRYPTION USING BCRYPT AND SALT    

    bcrypt.hash(userpassword, saltRounds, (err, passwordHash) => { 
        if (err) {
            console.log(err)
        }

        bcrypt.hash(usermiddlename, saltRounds, (err, middleNameHash) => {
                if (err) {
                    console.log (err)
            }
        
            bcrypt.hash(userlastname, saltRounds, (err, lastNameHash) => {
                if (err) {
                    console.log (err)
                }
            
<<<<<<< HEAD
       db.query(sqlInsert, [useremail, passwordHash, userfirstname, usermiddlename, userlastname], (err, result)=> {
        console.log(result);
        });  
    });
});
=======
                bcrypt.hash(userfirstname, saltRounds, (err, firstNameHash) => {
                    if (err) {
                        console.log (err)
                    }

// CHECK IF EMAIL ADRESS ALREADY EXISTS IN DATABASE. 
// IF TRUE RETURN MESSAGE THAT EMAIL ALREADY EXISTS
// IF FALSE INSERT INTO THE DATABASE AND COMPLETE REGISTRATION

    const userExist = "SELECT email FROM userinformation WHERE email = ?";
    const sqlInsert = "INSERT INTO userinformation (email, password, firstName, middleName, lastName) VALUES (?,?,?,?,?)"

        db.query(userExist, [useremail],
            (err, result) => {
                if (err) {
                    console.log (err);
                }   

                if (result.length > 0) {
                        res.send ({registrationFailur: "This email already exists" }) 
                    } else {
                        db.query(sqlInsert, [useremail, passwordHash, firstNameHash, middleNameHash, lastNameHash], (err, res)=> { 
                        });
                        res.send({ registrationSuccesfull: "You have been registrated!"}) // SEND EMAIL TO THE EMAIL IN HERE??? //
                        }
                    });
                });              
            }); 
        }); 
    }); 
});

>>>>>>> Development

/* Login --> */

login.use(cors());
login.use(express.json())
login.use(bodyParser.urlencoded({ extended: true }));

login.post("/userlogin", (req, res)=> {

    const loginemail = req.body.loginEmail
    const loginpassword = req.body.loginPassword

    const sqlSelect = "SELECT email, password FROM userinformation WHERE email = ?"

    db.query(sqlSelect, [loginemail],
        (err, result) => {
            if (err) {
                res.send({ err: err });    
            }

// Comparison of the email input with the hashed password

            if (result.length > 0) {
<<<<<<< HEAD
                res.send(result);({ message:"Okay, let's go!"}); // Message that is send back to the frontend when inlog is correct
=======
                bcrypt.compare(loginpassword, result[0].password, (err, response) => { 
                        if (response) {
                            res.send({ conformation: "Succesvol ingelogt!"}); // Message send when login is succesfull
                        } else {
                            res.send({ message: "Email of wachtwoord is incorrect!"}); //Message that is send back to the frontend when password is incorrect
                        }
                    }
                );

>>>>>>> Development
            } else {
                res.send({ message: "Email of wachtwoord is incorrect!"}); //Message that is send back to the frontend when email is incorrect
            }
        }           
    );
});