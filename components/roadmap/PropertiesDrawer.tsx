"use client"

import { Node } from "@xyflow/react";
import { X, Palette, Type, Settings2 } from "lucide-react";

type PropertiesDrawerProps = {
    selectedNode: Node | null;
    onUpdateNode: (nodeId: string, data: any) => void;
    onClose: () => void;
};

const COLORS = [
    { label: "Emerald", hex: "#10b981" },
    { label: "Indigo", hex: "#6366f1" },
    { label: "Slate", hex: "#64748b" },
    { label: "Amber", hex: "#f59e0b" },
    { label: "Pink", hex: "#ec4899" },
    { label: "Blue", hex: "#3b82f6" },
];

export default function PropertiesDrawer({ selectedNode, onUpdateNode, onClose }: PropertiesDrawerProps) {
    if (!selectedNode) return null;

    const data = selectedNode.data as { label: string; color?: string };

    const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateNode(selectedNode.id, { ...data, label: e.target.value });
    };

    const handleColorChange = (hex: string) => {
        onUpdateNode(selectedNode.id, { ...data, color: hex });
    };

    return (
        <aside className="w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col h-full z-10 shadow-2xl transition-all">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-blue-500" />
                    <h2 className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">Properties</h2>
                </div>
                <button 
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-8">
                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        <Type className="w-3.5 h-3.5" />
                        Label
                    </label>
                    <input
                        type="text"
                        value={data.label || ""}
                        onChange={handleLabelChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white transition-all shadow-sm"
                        placeholder="Node text..."
                    />
                </div>

                <div className="space-y-3">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        <Palette className="w-3.5 h-3.5" />
                        Node Color
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                        {COLORS.map((color) => (
                            <button
                                key={color.hex}
                                onClick={() => handleColorChange(color.hex)}
                                className={`w-8 h-8 rounded-full shadow-sm border-2 transition-all hover:scale-110 ${
                                    data.color === color.hex 
                                        ? "border-slate-800 dark:border-white scale-110" 
                                        : "border-transparent"
                                }`}
                                style={{ backgroundColor: color.hex }}
                                title={color.label}
                            />
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-400 text-center">More properties can be added here.</p>
                </div>
            </div>
        </aside>
    );
}
