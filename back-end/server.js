import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const register = express();
const login = express();
import { createPool } from "mysql";
import bcrypt, { hash } from 'bcrypt'; // BCRYPT IS THE ENCRYPTION ALGORITHM
const saltRounds = 10;
import Encrypt from './EncryptionHandler.js';
import Decrypt from './EncryptionHandler.js';

/* DATABASE CONNECTION --> */

const db = createPool({
    host: "localhost",
    user: "root", //DEFAULT = "ROOT"
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

//info pakken van database
register.get("/admin", (req, res) => {
    const sqlSelect = "SELECT * FROM userinformation";
        db.query(sqlSelect, (err, result) => {
            res.send(result);
        });
});

//info inzetten in database
register.post("/register", (req, res)=> {
    const userfirstname = req.body.userFirstName
    const usermiddlename = req.body.userMiddleName
    const userlastname = req.body.userLastName
    const useremail = req.body.userEmail
    const userpassword = req.body.userPassword


// register.post("/register", (req, res)=> {
//     const { userFirstName, 
//             userMiddleName, 
//             userLastName, 
//             userEmail, 
//             userPassword } = req.body

// USER DETAIL ENCRYPTION

    const userFirstNameEncrypt = Encrypt.encrypt(userfirstname);
    const userMiddleNameEncrypt = Encrypt.encrypt(usermiddlename);
    const userLastNameEncrypt = Encrypt.encrypt(userlastname);

    const userEmailEncrypt = Encrypt.encrypt(userEmail);
    const userEmailDecrypt = Decrypt.decrypt(userEmailEncrypt);

// PASSWORD HASH FUNCTION    

    bcrypt.hash(userpassword, saltRounds, (err, passwordHash) => { 
        if (err) {
            console.log(err)
        }
           
// CHECK IF EMAIL ADRESS ALREADY EXISTS IN DATABASE. 
// IF TRUE RETURN MESSAGE THAT EMAIL ALREADY EXISTS
// IF FALSE INSERT INTO THE DATABASE AND COMPLETE REGISTRATION

    const userExist = "SELECT email FROM userinformation WHERE email = ?";
    const sqlInsert = "INSERT INTO userinformation (email, iv, password, firstName, middleName, lastName) VALUES (?,?,?,?,?,?)"

        db.query(userExist, [userEmail],
            (err, result) => {
                if (result) {
                    console.log (result);
                }   

                if (result.length > 0) {
                        res.send ({ registrationFailur: "This email already exists" }) 
                    } else { 
                        db.query(sqlInsert, [
                            userEmail, 
                            userEmailEncrypt.iv, 
                            passwordHash, 
                            userFirstNameEncrypt.text, 
                            userMiddleNameEncrypt.text, 
                            userLastNameEncrypt.text],
                        (err, res)=> { 
                        console.log(err)
                    });
                        res.send({ registrationSuccesfull: "You have been registrated!"}) // SEND EMAIL TO THE EMAIL IN HERE??? //
                        }
                    });
                });              
            });  

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
                bcrypt.compare(loginpassword, result[0].password, (err, response) => { 
                        if (response) {
                            res.send({ conformation: "Succesvol ingelogt!"}); // Message send when login is succesfull
                        } else {
                            res.send({ message: "Email of wachtwoord is incorrect!"}); //Message that is send back to the frontend when password is incorrect
                        }
                    }
                );

            } else {
                res.send({ message: "Email of wachtwoord is incorrect!"}); //Message that is send back to the frontend when email is incorrect
            }
        }           
    );
});