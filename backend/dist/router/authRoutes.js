import express from 'express';
const router = express.Router();
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import { getAccessToken } from '../tokens.js';
//db setup
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password)
        return res.json("Fields are empty");
    const user = await prisma.user.findMany({
        where: {
            email: email,
        }
    });
    if (!user || password !== user[0].password)
        return res.json("Invalid email oe password");
    const { password: _, ...userWithoutPassword } = user[0];
    const data = getAccessToken(userWithoutPassword);
    //@ts-ignore
    res.json({ message: "Login successful", token: data });
});
export default router;
