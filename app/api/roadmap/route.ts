import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(req: Request) {
    try {
        const headerList = await headers();
        const userId = headerList.get("x-user-id");

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { title, description } = await req.json();

        if (!title) {
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }

        const roadmap = await prisma.roadmap.create({
            data: {
                title,
                description,
                ownerId: userId,
                nodes: [], // Initial empty nodes
                edges: [], // Initial empty edges
            },
        });

        return NextResponse.json(roadmap);
    } catch (error: any) {
        console.error("Error creating roadmap:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
