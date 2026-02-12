import express from 'express';
import productRoute from './router/products.js'
import cors from 'cors';
const app = express()
const port = 3000;
app.use(cors());
app.use(express.json());

app.use(productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


