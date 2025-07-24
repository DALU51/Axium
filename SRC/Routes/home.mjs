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
        res.render('home',{layout: "home",title: `welcome! ${name}`,user: `${name}`,time: `${message()}`})
        console.log("Home page rendered")
    })
})

router.get('/accounts',(req,res) => {
    const id = 529955
    db.query('SELECT * FROM Accounts where user_id = ?',[id],(err,rows) => {
        
        const data = rows
        res.json(data)
        console.log("Accounts sent")
    })
})

router.post('/CreateAccs',(req,res) => {

    console.log("New user info received")
    const account = req.body
    const accountID = Math.random().toString().slice(2,8);
    account.account_id = accountID;
    const nickname = accountID.slice(2,6)
    account.account_nickname = "account " + nickname
    const accBal = 0
    account.account_balance = accBal
    const availBal = 0
    account.available_balance =availBal
    const createDate = new Date();
    account.opened_date = createDate.toISOString().split('T')[0];
    
    try {
        db.query(
            'INSERT INTO Accounts VALUES (?,?,?,?,?,?)',
            [
                account.account_id,
                account.account_nickname,
                account.opened_date,
                account.account_balance,
                account.available_balance,
                account.user_id
            ])
        console.log(account)
        console.log (`Account ${account.account_id} for user id ${account.user_id}, created`)
    } catch (error) {
        console.error('Did not post')
        console.log(error)
    }
    res.json(`${account.account_id} Created`)
})

router.get('/accountID',(req,res) => {
    const id = 529955
    db.query('SELECT account_id,account_nickname FROM Accounts where user_id = ?',[id],(err,rows) => {
        
        const data = rows
        res.json(data)
        console.log("Account ID sent")
    })
})

router.get('/balances',(req,res) => {

    const id = 529955

    db.query('SELECT SUM(available_balance) AS Total_balance FROM Accounts WHERE user_id = ?',[id],(err,rows) => {

        if (err) throw err

        const balance = rows[0].Total_balance
        res.json(balance)
        console.log("Balances sent")
    })
})

router.get('/transfer',(req,res) => {
    res.render('home.ejs',{layout: "layouts/accountTransfer",title:"Account Transfer",user: "Henry",time: `${message()}`})
})

export default router