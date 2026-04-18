"use client"

import { Handle, Position, NodeProps, NodeResizer, useReactFlow } from "@xyflow/react";
import { CheckSquare, Upload, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";

type Data = {
    label: string;
    type?: string;
    color?: string;
    imageUrl?: string;
}

export default function CustomNode({ id, data: nodeData, selected }: NodeProps) {
    const data = nodeData as Data;
    const { setNodes } = useReactFlow();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const nodeType = data.type || 'topic';
    
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setNodes((nds) => 
                    nds.map((node) => {
                        if (node.id === id) {
                            return { ...node, data: { ...node.data, imageUrl: base64String } };
                        }
                        return node;
                    })
                );
            };
            reader.readAsDataURL(file);
        }
    };

    const getStyle = () => {
        switch (nodeType) {
            case 'title':
                return "w-full h-full px-0 py-0 bg-transparent border-none text-3xl font-black text-slate-900 dark:text-white flex items-center";
            case 'topic':
                return "w-full h-full px-6 py-4 bg-[#ffff00] border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-lg font-black text-black text-center flex items-center justify-center";
            case 'subtopic':
                return "w-full h-full px-4 py-2 bg-[#fff9c4] border-2 border-black rounded-sm shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-md font-bold text-black text-center flex items-center justify-center";
            case 'button':
                return "w-full h-full px-6 py-2 bg-[#3b82f6] border-none rounded-lg shadow-lg text-sm font-black text-white text-center flex items-center justify-center transition-all hover:brightness-110";
            case 'todo':
                return "w-full h-full px-0 py-0 bg-transparent border-none flex items-center gap-3 text-sm font-bold text-slate-800 dark:text-slate-200";
            case 'paragraph':
                return "w-full h-full px-0 py-0 bg-transparent border-none max-w-[300px] text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed";
            case 'label':
                return "w-full h-full px-0 py-0 bg-transparent border-none text-sm font-black text-slate-900 dark:text-white flex items-center";
            case 'image':
                return "w-full h-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col items-center justify-center group/img relative transition-all hover:border-blue-400";
            case 'h-line':
                return "w-full h-[2px] bg-slate-300 dark:bg-slate-700";
            case 'v-line':
                return "w-[2px] h-full bg-slate-300 dark:bg-slate-700";
            case 'resource':
                return "w-full h-full px-6 py-3 bg-white border-2 border-slate-200 rounded-xl shadow-md text-sm font-black text-blue-600 dark:bg-slate-900 dark:border-slate-800 flex items-center justify-center transition-all hover:shadow-lg";
            default:
                return "w-full h-full px-6 py-4 bg-white border-2 border-slate-200 rounded-xl text-sm font-bold shadow-sm dark:bg-slate-900 dark:border-slate-800 flex items-center justify-center";
        }
    };

    return (
        <div className={`relative group transition-all duration-200 h-full w-full ${selected ? "z-50" : ""}`}>
            <NodeResizer 
                minWidth={50} 
                minHeight={30} 
                isVisible={selected} 
                lineClassName="!border-blue-400 !border-opacity-50 !border-[1px]" 
                handleClassName="!h-2 !w-2 !bg-blue-600 !border-none !rounded-none" 
            />
            
            {nodeType !== 'todo' && nodeType !== 'paragraph' && nodeType !== 'h-line' && nodeType !== 'v-line' && (
                <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-slate-400 !border-none opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            
            <div className={getStyle()}>
                {nodeType === 'todo' && <CheckSquare className="w-5 h-5 text-slate-900 dark:text-white flex-shrink-0" />}
                
                {nodeType === 'image' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center relative">
                        {data.imageUrl ? (
                            <>
                                <img src={data.imageUrl} alt="Uploaded" className="w-full h-full object-cover" />
                                <button 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-2"
                                >
                                    <Upload className="w-4 h-4" /> Change Image
                                </button>
                            </>
                        ) : (
                            <button 
                                onClick={() => fileInputRef.current?.click()}
                                className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors"
                            >
                                <ImageIcon className="w-8 h-8" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Import Image</span>
                            </button>
                        )}
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={onFileChange} 
                            accept="image/*" 
                            className="hidden" 
                        />
                    </div>
                ) : (
                    <span className="w-full text-center truncate">{data.label}</span>
                )}
            </div>

            {nodeType !== 'todo' && nodeType !== 'paragraph' && nodeType !== 'h-line' && nodeType !== 'v-line' && (
                <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-slate-400 !border-none opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </div>
    )
}