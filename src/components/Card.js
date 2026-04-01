export default function Card() {
  return (
    <div className="bg-white p-5 rounded-xl border shadow-sm">
      
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg">Test</h3>
        <button>⋮</button>
      </div>

      <p className="text-gray-500 mt-2 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="mt-4 text-xs text-gray-400">
        Created On: 14/07/2025
      </div>
    </div>
  );
}