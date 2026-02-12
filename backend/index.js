import express from 'express';
import {products} from './data/dummyData.js';
import cors from 'cors';
const app = express()
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/getProducts', (req, res) => {
  res.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


