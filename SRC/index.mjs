import express from "express";
const router = express();

import home from "./Routes/home.mjs"

router.use("/home",home)

router.get('/',(req,res) => {
    res.render('index')
})

export default router