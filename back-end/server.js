import express, { json } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import { createPool } from "mysql";
import { urlencoded } from "body-parser";

/* CONNECTION (Root = default user) */

const db = createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* IETS GAAT ER NIET GOED MET BODY-PARSER !!!!!!*/
app.use(cors());
app.use(json())
app.use(bodyParser,urlencoded({extended:true}))

app.post("/api/insert", (req, res)=> {

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

app.listen(3001, () => {
    console.log("running on port 3001");
});

