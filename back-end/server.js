const express =  require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");
const { urlencoded } = require("body-parser");

/* CONNECTION (Root = default user) ja*/

const db = mysql.createPool({
    host: "localhost",
    user: "sqluser",
    password: "password",
    database: "kapperzaak",
});

/* IETS GAAT ER NIET GOED MET BODY-PARSER !!!!!!*/
app.use(cors());
app.use(express.json())
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

