import express from "express";
import expressEjsLayouts  from "express-ejs-layouts"; 
import routes from './routes/pokemon.js'
const layout = expressEjsLayouts

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set('layout', 'layouts/layout');
app.use(layout);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));