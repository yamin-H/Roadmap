import { 
    Type, 
    Square, 
    LayoutTemplate, 
    ListTodo, 
    Circle, 
    Heading1, 
    Tag, 
    MousePointer2, 
    Image as ImageIcon, 
    Map, 
    CheckSquare, 
    Link, 
    Minus, 
    SeparatorVertical, 
    ExternalLink, 
    Focus,
    MessageSquare
} from "lucide-react";

const NODE_TYPES = [
    { type: 'title', label: 'H1 Title', color: 'transparent', icon: <Heading1 className="w-4 h-4" /> },
    { type: 'topic', label: 'Topic', color: '#ffff00', icon: <Square className="w-4 h-4" /> },
    { type: 'subtopic', label: 'Sub Topic', color: '#fff9c4', icon: <LayoutTemplate className="w-4 h-4" /> },
    { type: 'paragraph', label: 'Paragraph', color: 'transparent', icon: <Type className="w-4 h-4" /> },
    { type: 'label', label: 'Label', color: 'transparent', icon: <Tag className="w-4 h-4" /> },
    { type: 'button', label: 'Button', color: '#3b82f6', icon: <MousePointer2 className="w-4 h-4" /> },
    { type: 'image', label: 'Image', color: '#e2e8f0', icon: <ImageIcon className="w-4 h-4" /> },
    { type: 'legend', label: 'Legend', color: '#f8fafc', icon: <Map className="w-4 h-4" /> },
    { type: 'todo', label: 'Todo', color: 'transparent', icon: <CheckSquare className="w-4 h-4" /> },
    { type: 'checklist', label: 'Checklist', color: 'transparent', icon: <ListTodo className="w-4 h-4" /> },
    { type: 'links', label: 'Links Group', color: 'transparent', icon: <Link className="w-4 h-4" /> },
    { type: 'h-line', label: 'Horizontal Line', color: '#cbd5e1', icon: <Minus className="w-4 h-4" /> },
    { type: 'v-line', label: 'Vertical Line', color: '#cbd5e1', icon: <SeparatorVertical className="w-4 h-4" /> },
    { type: 'resource', label: 'Resource Button', color: '#3b82f6', icon: <ExternalLink className="w-4 h-4" /> },
    { type: 'section', label: 'Section', color: 'transparent', icon: <Focus className="w-4 h-4" /> },
];

export default function SideBar() {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string, label: string, color: string) => {
        event.dataTransfer.setData('application/reactflow', 'customNode'); // We use one customNode component but pass type
        event.dataTransfer.setData('application/reactflow-type', nodeType);
        event.dataTransfer.setData('application/reactflow-label', label);
        event.dataTransfer.setData('application/reactflow-color', color);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full z-10 transition-colors shadow-sm">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Components (Drag & Drop)</h2>
                <div className="h-0.5 w-8 bg-blue-500 rounded-full mt-2" />
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto space-y-2 scrollbar-hide">
                {NODE_TYPES.map((node, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-100 bg-white shadow-sm cursor-grab active:cursor-grabbing hover:border-blue-400 hover:shadow-md transition-all dark:bg-slate-800 dark:border-slate-800 dark:hover:border-blue-500 text-slate-600 dark:text-slate-300 group"
                        onDragStart={(event) => onDragStart(event, node.type, node.label, node.color)}
                        draggable
                    >
                        <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                            {node.icon}
                        </div>
                        <span className="text-xs font-black tracking-tight">{node.label}</span>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 bg-slate-950 dark:bg-white dark:text-slate-950 text-white py-3 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-slate-800 transition-all shadow-lg active:scale-95">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Submit Feedback
                </button>
            </div>
        </aside>
    );
}