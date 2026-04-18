"use client"

import { 
    ReactFlow, 
    Background, 
    Controls, 
    Connection,
    Edge,
    Node,
    NodeChange,
    EdgeChange,
    useReactFlow,
    NodeTypes
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { useCallback, useRef, useMemo } from "react";
import CustomNode from "./CustomNode";

type CanvasAreaProps = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: (changes: NodeChange[]) => void;
    onEdgesChange: (changes: EdgeChange[]) => void;
    onConnect: (connection: Connection) => void;
    onNodeSelect: (node: Node | null) => void;
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
};

let id_counter = 0;
const getId = () => `node_${id_counter++}_${Date.now()}`;

export default function CanvasArea({ 
    nodes, 
    edges, 
    onNodesChange, 
    onEdgesChange, 
    onConnect,
    onNodeSelect,
    setNodes
}: CanvasAreaProps) {
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const { screenToFlowPosition } = useReactFlow();

    const nodeTypes: NodeTypes = useMemo(() => ({
        customNode: CustomNode,
    }), []);

    const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();

            const flowType = event.dataTransfer.getData('application/reactflow');
            const nodeType = event.dataTransfer.getData('application/reactflow-type');
            const label = event.dataTransfer.getData('application/reactflow-label');
            const color = event.dataTransfer.getData('application/reactflow-color');

            if (!flowType) return;

            const position = screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });

            const newNode: Node = {
                id: getId(),
                type: flowType,
                position,
                data: { label, color, type: nodeType },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [screenToFlowPosition, setNodes],
    );

    const onSelectionChange = useCallback((params: { nodes: Node[]; edges: Edge[] }) => {
        if (params.nodes.length > 0) {
            onNodeSelect(params.nodes[0]);
        } else {
            onNodeSelect(null);
        }
    }, [onNodeSelect]);

    return (
        <div className="flex-1 h-full w-full bg-slate-50 relative dark:bg-[#020817]" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onSelectionChange={onSelectionChange}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 2 }}
            >
                <Background color="#94a3b8" gap={25} size={1} variant={"dots" as any} />
                <Controls className="!bg-white dark:!bg-slate-900 !border-slate-200 dark:!border-slate-800 !shadow-xl !rounded-2xl overflow-hidden !m-6" />
            </ReactFlow>
        </div>
    )
}