import express from "express"
const router = express()

import db from "./database.mjs"

router.get("/",(req,res) => {
    const id  = 1
    db.query('SELECT firstname FROM Users where userID = ?',[id],(err,rows) => {
        if (err) throw err
        const name = rows[0].firstname
        console.log(name)
        res.render('home',{layout: "home",title: `welcome! ${name}`,user: `${name}`})
    })
})

export default router