import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const headerList = await headers();
        const userId = headerList.get("x-user-id");

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const resolvedParams = await params;

        const roadmap = await prisma.roadmap.findUnique({
            where: {
                id: resolvedParams.id,
                ownerId: userId
            }
        });

        if (!roadmap) {
            return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
        }

        return NextResponse.json(roadmap);
    } catch (error: any) {
        console.error("Error fetching roadmap:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const headerList = await headers();
        const userId = headerList.get("x-user-id");

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const resolvedParams = await params;
        
        // Wait for the request body
        const { title, description, nodes, edges } = await req.json();

        // Optional: Ensure the roadmap exists and belongs to the user before updating
        const existingRoadmap = await prisma.roadmap.findUnique({
            where: {
                id: resolvedParams.id,
                ownerId: userId
            }
        });

        if (!existingRoadmap) {
            return NextResponse.json({ error: "Roadmap not found" }, { status: 404 });
        }

        const roadmap = await prisma.roadmap.update({
            where: {
                id: resolvedParams.id,
            },
            data: {
                title: title !== undefined ? title : existingRoadmap.title,
                description: description !== undefined ? description : existingRoadmap.description,
                nodes: nodes !== undefined ? nodes : existingRoadmap.nodes,
                edges: edges !== undefined ? edges : existingRoadmap.edges,
            }
        });

        return NextResponse.json(roadmap);
    } catch (error: any) {
        console.error("Error updating roadmap:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
