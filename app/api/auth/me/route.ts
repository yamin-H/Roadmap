import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET || "ymjf*($Y@E92kcdh965)ef8y98";

export async function GET() {
    const token = (await cookies()).get("token")?.value;
    if (!token) {
        return NextResponse.json({
            user: null
        })
    }

    try {
        
        const decoded = jwt.verify(token, secret);
        return NextResponse.json({
            user: decoded
        })

    } catch (error) {
        return NextResponse.json({ user: null });
    }
}