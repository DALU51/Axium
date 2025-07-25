import express from "express";
const router = express();

import home from "./Routes/home.mjs"
import transferLogic from "./Routes/transfer_logic.mjs"
import users from "./Routes/users.mjs"
import transactions from "./Routes/transactions.mjs"
import cars from "./Routes/cars.mjs"


router.use("/home",home)
router.use("/acctransfer",transferLogic)
router.use("/users",users)
router.use("/transact",transactions)
router.use("/cars",cars)

router.get('/',(req,res) => {
    res.render('index')
})

export default router