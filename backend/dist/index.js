import express from 'express';
import productRoute from './router/products.js';
import loginRoute from './router/authRoutes.js';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use([productRoute, loginRoute]);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
