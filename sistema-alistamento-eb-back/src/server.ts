import express from "express";
const db = require("./database/index");
// import routes from "./routes/routes";

const app = express();

app.use(express.json());
// app.use('/api', routes);

app.listen(3000, () => console.log("Server started at http://localhost:3000"));

db.select()
  .from("tipo_pergunta")
  .then((data: any) => console.log(data));
