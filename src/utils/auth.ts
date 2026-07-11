import { hash, compare } from "bcryptjs";


export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword

};


export async function isVerifyPassword(password: string, hashedPassword: string) {
    const isVerify = await compare(password, hashedPassword);
    return isVerify
};