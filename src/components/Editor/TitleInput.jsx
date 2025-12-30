export default function TitleInput({ value, onChange}) {
    return (
        <div className="mb-6">
            <input 
              type="text" 
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Entry title..."
              className="w-full text-[1.8rem] font-bold text-gray-900 placeholder-gray-400 border-none outline-none focus:ring-0 bg-transparent"
              autoFocus
            />
        </div>
    )
}