import express from "express";
const app = express();
import index from "./SRC/index.mjs"

const PORT = process.env.PORT || 2025;

app.use(express.json({limit: '5mb'}))
app.use(express.static('Client'))


app.use('/',index);

app.listen(PORT,() => console.log(`on ${PORT}, i am listening. ☄️`))