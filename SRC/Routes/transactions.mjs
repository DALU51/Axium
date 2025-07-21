import express from "express"
const router = express()

import db from "./database.mjs"

router.get("/",(req,res) => {

    const account = 529955

    db.query("SELECT * FROM Transactions WHERE initiated_by =? ORDER BY transation_date_time DESC LIMIT 5 ",[account],(err,rows,fields) => {

        if (err) throw(err)
            
        const trnsactns = rows
        res.json(trnsactns)
        console.log("Transactions sent 🫥")

    })
})

export default router