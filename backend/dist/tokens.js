import jwt from 'jsonwebtoken';
export const getAccessToken = (user) => {
    return jwt.sign({ user }, "secretCanada", { expiresIn: '1h' });
};
export const getRefreshToken = (userId, tokenID) => {
    return jwt.sign({ userId: userId, tokenID }, "secretCanada", { expiresIn: '7d' });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, "secretCanada");
};
export const verifyRefreshToken = (token) => {
    return jwt.verify(token, "secretCanada");
};
