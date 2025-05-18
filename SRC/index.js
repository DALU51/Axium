import express from "express";
const router = express();


router.get('/',(req,res) => {
    res.render('index.html')
})


export default router