"use client"

import { useState, useEffect, useCallback, use } from "react";
import CanvasArea from "@/components/roadmap/CanvasArea";
import SideBar from "@/components/roadmap/SideBar";
import PropertiesDrawer from "@/components/roadmap/PropertiesDrawer";
import { 
    ReactFlowProvider, 
    useNodesState, 
    useEdgesState, 
    addEdge, 
    Connection,
    Node,
    Edge
} from "@xyflow/react";
import { Save, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RoadmapBuilder({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();

    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const [title, setTitle] = useState("Loading Roadmap...");
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const fetchRoadmap = async () => {
            try {
                const res = await fetch(`/api/roadmap/${resolvedParams.id}`);
                if (!res.ok) {
                    router.push('/dashboard');
                    return;
                }
                const data = await res.json();
                setTitle(data.title || "Untitled Roadmap");
                if (data.nodes && Array.isArray(data.nodes)) {
                    setNodes(data.nodes);
                }
                if (data.edges && Array.isArray(data.edges)) {
                    setEdges(data.edges);
                }
            } catch (error) {
                console.error("Failed to load roadmap", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRoadmap();
    }, [resolvedParams.id, setNodes, setEdges, router]);

    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    const onUpdateNode = useCallback((nodeId: string, data: any) => {
        setNodes((nds) =>
            nds.map((n) => {
                if (n.id === nodeId) {
                    const updatedNode = { ...n, data: { ...n.data, ...data } };
                    setSelectedNode(updatedNode); // Update drawer immediately
                    return updatedNode;
                }
                return n;
            })
        );
    }, [setNodes]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await fetch(`/api/roadmap/${resolvedParams.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nodes, edges })
            });
            // Could add a toast notification here
        } catch (error) {
            console.error("Failed to save roadmap", error);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020817]">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
                <p className="text-slate-500 font-medium">Loading Canvas...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-[#020817]">
            {/* Topbar */}
            <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 z-20">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{title}</h1>
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Draft • Saved</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isSaving ? "Saving..." : "Save Roadmap"}
                    </button>
                </div>
            </header>

            {/* Main Editor Area */}
            <div className="flex-1 flex overflow-hidden">
                <ReactFlowProvider>
                    <SideBar />
                    <CanvasArea 
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeSelect={setSelectedNode}
                        setNodes={setNodes}
                    />
                </ReactFlowProvider>
                
                {selectedNode && (
                    <PropertiesDrawer 
                        selectedNode={selectedNode}
                        onUpdateNode={onUpdateNode}
                        onClose={() => setSelectedNode(null)}
                    />
                )}
            </div>
        </div>
    );
}