import express from "express"
const router = express()

import db from "./database.mjs"

router.post('/',(req,res)=> {
        console.log("New user info received")
        const user = req.body;
        const signupDate = new Date();
        user.signupDate = signupDate.toISOString().split('T')[0];
        const userID = Math.random().toString().slice(2,8);
        user.userID = userID;
        
        try { 
            db.promise().query(
                'INSERT INTO Users VALUES (?,?,?,?,?,?,?)',
            [   user.firstname,
                user.lastname,
                user.username,
                user.email,
                user.password,
                user.signupDate,
                user.userID
            ])
            console.log(user)
            console.log (`User ${user.userID} (${user.firstname}), Sent to Database`)
        } catch (error){
            console.error('Did not post')
            console.log(error)
        }
        res.json(`${user.firstname} Registered`);
})

router.get('/', (req,res) => {
    db.query('SELECT * FROM Users',function (err,rows,fields){
        if (err) throw err
        try {
            res.json(rows)
            console.log("Data Sent")
        } catch (error) {
            console.log("There is an Error somewhere")
            console.log(error)   
        }
    })
})

router.get('/ind:userid',(req,res) => {
    
    const users = "529955"
    console.log(users)
    db.query('SELECT * FROM Users where userID = ?',[users],function(err,rows,fields){
        if(err) throw err
        else{
            console.log(rows)
            res.status(201).json(rows[0])
        }
       })
})

router.post('/delete',(req,res) =>{
    const remove_user = req.body

    db.query('SELECT * FROM Users WHERE firstname = ? and username = ?',[remove_user.firstname,remove_user.username],(err,rows) => {
        if (rows[0] === undefined){
            console.log(`No users found to delete`)
            res.status(201).json(`No users where found to delete`)
        }else{
            db.query(`DELETE FROM Users WHERE firstname = ? and username = ?`,[remove_user.firstname,remove_user.username], (err,rows) => {
        if (err){
            throw err
        }else{
            console.log(`${remove_user.firstname} deleted from database`)
            res.status(201).json(`${remove_user.firstname} Deleted 🤯`)
        }
        })}
    })
})

export default router
