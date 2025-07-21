import express from "express";
const router = express()
import db from "./database.mjs"

router.post('/',(req,res) => {

    const transfer = req.body

    console.log(transfer);

    verifyAccounts();


    function verifyAccounts() {

        db.query('SELECT available_balance FROM Accounts where account_id = ?',[transfer.Dr_Acc],(err,rows) => {

            if (err) throw err

            console.log('Account info retrieved')
            try {
                if(rows[0] == undefined){

                    console.log('No debit account available')
                    res.status(400).json('No debit account available')
                    

                } else { 

                    console.log('Debit Account Verified')

                    db.query('SELECT available_balance FROM Accounts where account_id = ?',[transfer.Cr_Acc],(err,rows)=> {

                        if (err) throw err

                                if(rows[0] == undefined){
                                        console.log('Credit account not found')
                                        res.status(400).json('Credit account not found')
                                    
                                } else {
                                     console.log('Credit Account Verified')

                                     console.log('Accounts Verified')

                                    verify_Balance();
                                }

                       

                    })
                }
            } catch (error) {

                console.log(error)
            }
        })
    }

    function verify_Balance(){

        db.query('SELECT available_balance FROM Accounts where account_id = ?',[transfer.Dr_Acc],(err,rows) =>{

            console.log(transfer.Dr_Acc)
            console.log(rows)

            if (err) throw err

            let x = parseInt(transfer.amount); 
            let y = parseInt(rows[0].available_balance)

            if(x > y){

                console.log('Insufficient Available Balance')
                res.status(400).json('You have an insufficient available balance')
            }else{

                console.log('Balance Available')

                performTransaction();
            }
        })
    }

    function performTransaction(){

        db.query(`UPDATE Accounts SET available_balance = available_balance - ${transfer.amount} WHERE account_id = ${transfer.Dr_Acc}`,(err,rows)=> {
            
            if (err) throw err

            console.log("Account debited")

            db.query(`UPDATE Accounts SET available_balance = available_balance + ${transfer.amount} WHERE account_id = ${transfer.Cr_Acc}`,(err,rows)=> { 

                if (err) throw err

                console.log('Account Credited')
                console.log(rows.info)

                logTransaction()

            })
            
        })
    }

    function logTransaction(){

        const transaction_id = (Math.random() + 1).toString(24).substring(2);;
            transfer.trans_id = transaction_id

                const transactionDTM = new Date();
                let x = transactionDTM.toISOString().split('T')[0]
                let y = transactionDTM.toTimeString().split('GMT')[0]
                transfer.trans_date_time = x +' '+ y

                db.query(`SELECT user_id FROM Accounts WHERE account_id = ${transfer.Dr_Acc}`,(err,rows) => {

                if (err) throw err

                const UserID = rows[0].user_id
                console.log('Getting user ID')
                transfer.userID = UserID

                try{
                        db.promise().query(
                        `INSERT into Transactions VALUES(?,?,?,?,?,?)`,
                        [
                            transfer.trans_id,
                            transfer.Dr_Acc,
                            transfer.Cr_Acc,
                            transfer.trans_date_time,
                            transfer.amount,
                            transfer.userID
                        ])

                        console.log("Transaction Logged")
                        res.status(200).json("Transaction Completed")
                                        
                        }catch{
                            if (err) throw err
                        }
                })
    }
})

export default router







