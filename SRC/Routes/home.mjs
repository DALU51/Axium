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
    const id  = 529955
    db.query('SELECT firstname FROM Users where userID = ?',[id],(err,rows) => {
        if (err) throw err
        const name = rows[0].firstname
        console.log(name)
        res.render('home',{layout: "home",title: `welcome! ${name}`,user: `${name}`,time: `${message()}`})
    })
})

router.get('/accounts',(req,res) => {
    const id = 529955
    db.query('SELECT * FROM Accounts where user_id = ?',[id],(err,rows) => {
        
        console.log(rows)
        const data = rows
        console.log(data)
        res.json(data)
    })
})

router.get('/balances',(req,res) => {

    const id = 529955

    db.query('SELECT SUM(available_balance) AS Total_balance FROM Accounts WHERE user_id = ?',[id],(err,rows) => {

        if (err) throw err

        const balance = rows[0].Total_balance
        console.log(balance)
        res.json(balance)
    })
})

router.get('/transfer',(req,res) => {
    res.render('home.ejs',{layout: "layouts/accountTransfer",title:"Account Transfer",user: "Henry",time: `${message()}`})
})

export default router