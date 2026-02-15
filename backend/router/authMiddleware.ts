import jwt from 'jsonwebtoken';
import { verifyAccessToken } from '../tokens.js';


export function authenticateToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    if (!token) return res.sendStatus(401);
  
    const verifyRes = verifyAccessToken(token);
    console.log(verifyRes);
    if (!verifyRes) return res.sendStatus(403);
    //   req.user = verifyRes.user;
    next();
}

