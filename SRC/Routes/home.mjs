import express from "express"
const router = express()

import db from "./database.mjs"

    const message = function getTime(x){
        x = new Date()
        x = x.getHours()
        if(x >= 0 && x <= 12){
            return "Morning"
        }
        if(x >= 12 && x <= 19){
            return "Afternoon"
        }
        if(x >= 19 && x <= 23){
            return "Evening"
    }}

router.get("/",(req,res) => {
    const id  = 1
    db.query('SELECT firstname FROM Users where userID = ?',[id],(err,rows) => {
        if (err) throw err
        const name = rows[0].firstname
        console.log(name)
        res.render('home',{layout: "home",title: `welcome! ${name}`,user: `${name}`,time: `${message()}`})
    })
})

router.get('/accounts',(req,res) => {
    const id = 1
    db.query('SELECT * FROM Accounts where user_id = ?',[id],(err,rows) => {
        
        console.log(rows)

        const data = [
            rows[0].account_id,
            rows[0].account_nickname,
            rows[0].account_balance,
            rows[0].available_balance
        ]
        console.log(data)
        res.json(data)
    })
})

router.get('/transfer',(req,res) => {
    res.render('home.ejs',{layout: "layouts/accountTransfer",title:"Account Transfer",user: "John",time: `${message()}`})
})

export default router