import express from "express";
const app = express();
import index from "./SRC/index.mjs"
import expressEjsLayouts from "express-ejs-layouts"; 

const PORT = process.env.PORT || 2025;

app.use(express.json({limit: '5mb'}))
app.use(express.static('Client'))

//View engine
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views','/views');
app.set('layout','index');

app.use('/',index);

app.listen(PORT,() => console.log(`on ${PORT}, i am listening. ☄️`))