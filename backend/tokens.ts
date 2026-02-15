

import jwt from 'jsonwebtoken'


export const getAccessToken = (user: any) => {
    return jwt.sign({user},"secretCanada",{expiresIn: '1h'});
}
export const getRefreshToken = (userId: any, tokenID: any) => {
    return jwt.sign({userId:userId, tokenID},"secretCanada",{expiresIn: '7d'});
}
export const verifyAccessToken = (token: any) => {
    return jwt.verify(token,"secretCanada");
}
export const verifyRefreshToken = (token: any) => {
    return jwt.verify(token,"secretCanada");
}