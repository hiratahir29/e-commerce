import express from 'express';
const router = express.Router();
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg'
import { authenticateToken } from './authMiddleware.js';

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

router.get('/getProducts',authenticateToken, async (req, res) => {
  const data = await prisma.product.findMany({
  take: 5,
  orderBy: { price: 'asc' },
  include: {
    comments: true, // include all related comments
  },
});
  console.log(data);
  return res.json(data);
})

export default router;