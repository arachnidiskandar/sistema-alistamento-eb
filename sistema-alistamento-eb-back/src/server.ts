import express from 'express';

import db from './database/index';
// import routes from "./routes/routes";

const data = db.select().from('TIPO_PERGUNTA').then((result: any) => {
  console.log(result);
}).catch((err: any) => {
  console.log(err);
});
const app = express();

app.use(express.json());
// app.use('/api', routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));

console.log(data);
