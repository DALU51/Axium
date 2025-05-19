import express from "express";
const router = express()
import db from "./database.mjs"

router.post('/',(req,res) => {

    const transfer = req.body

    console.log(transfer)

    db.query('SELECT available_balance FROM Accounts where account_id = ?',[transfer.Debit_Account],(err,rows) => {

        if (err) throw err
        console.log('Account info')
        console.log(rows)
        try {
            if(rows[0] == undefined){
                console.log('No debit account available')
                res.status(404).json('No debit account available')
            }else{
                if(rows[0].available_balance < transfer.amount){
                    console.log(rows[0].available_balance < transfer.amount)
                    console.log('Insufficient Available Balance')
                    res.status(404).json('You have an insufficient available balance')
                } else{
                        db.query(`UPDATE Accounts SET available_balance = available_balance - ${transfer.amount} WHERE account_id = ${transfer.Debit_Account}`,(err,rows)=> {
                            if (err) throw err

                            console.log("Account debited")

                            db.query(`UPDATE Accounts SET available_balance = available_balance + ${transfer.amount} WHERE account_id = ${transfer.Credit_Account}`,(err,rows)=> {
                                if (err) throw err

                                console.log('Account Credited')
                                console.log(rows.info)

                                const transaction_id = (Math.random() + 1).toString(24).substring(2);;
                                transfer.trans_id = transaction_id

                                const transactionDTM = new Date();
                                let x = transactionDTM.toLocaleDateString()
                                let y = transactionDTM.toTimeString().split('GMT')[0]
                                transfer.trans_date_time = x +' '+ y

                                db.query(`SELECT user_id FROM Accounts WHERE account_id = ${transfer.Debit_Account}`,(err,rows) => {
                                    
                                    if (err) throw err

                                    const UserID = rows[0].user_id
                                    console.log('Getting user ID')
                                    transfer.userID = UserID

                                try{
                                    db.promise().query(
                                        `INSERT into Transactions VALUES(?,?,?,?,?,?)`,
                                        [
                                            transfer.trans_id,
                                            transfer.Debit_Account,
                                            transfer.Credit_Account,
                                            transfer.trans_date_time,
                                            transfer.amount,
                                            transfer.userID
                                        ])

                                    console.log("Transaction Logged")
                                    res.json("Transaction completed")
                                    
                                }catch{
                                    if (err) throw err
                                }
                             })
                        })
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }
    })
})


export default router