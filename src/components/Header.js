export default function Header() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5] px-6 py-3 text-white">
      
      
      <h2 className="font-semibold text-lg">Workspace</h2>

    
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 rounded-lg text-black"
      />

      
      <div className="flex items-center gap-4">
        <button className="text-xl">🔔</button>
        <button className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">
          GK
        </button>
      </div>

    </div>
  );
}
