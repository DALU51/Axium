import express from "express";
const router = express();
import db from "./Routes/database.js"

router.get('/test',(req,res) => {

    db.query('SELECT * FROM ACCOUNTS', function(err,rows,fields){
            if (err){
            console.log(err)
        } else {
            res.json(rows)
            console.log("Accounts sent")
        }
    })
 
})


router.get('/',(req,res) => {
    res.render('index.html')
})


export default router