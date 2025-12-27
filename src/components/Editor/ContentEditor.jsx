import { useEffect, useRef } from "react";

export default function ContentEditor({ value, onChange }) {
    const textareaRef = useRef(null)

    // Auto-resize textarea based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [value])

    return (
        <div>
            <textarea 
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Start writing your thoughts..."
              className="w-full min-h-[400px] text-lg text-gray-800 placeholder-gray-400 border-none outline-none focus:ring-0 resize-none bg-transparent leading-relaxed"
            />
        </div>
    )
}