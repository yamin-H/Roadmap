import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || "ymjf*($Y@E92kcdh965)ef8y98"

export async function POST(req:Request) {
    try {
        
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({
                msg: "All fields are required",
                
            }, { status: 400 });
        }

        const existUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existUser) {
            return NextResponse.json({
                msg: "User already exist"
            }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            secret,
            { expiresIn: "7d" }
        );

        const response = NextResponse.json({
            success: true,
            message: "User created"
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", 
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });

        return response;

    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}