import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Home({ openModal }) {
  return (
    <div>
      
      {/* TOP NAVBAR */}
      <Header />

      {/* BODY */}
      <div className="flex">
        
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 bg-gray-50 min-h-screen flex flex-col">

          {/* TITLE + ACTIONS */}
          <div className="flex justify-between items-center mb-6">
            
            <h1 className="text-xl font-semibold text-gray-800">
              Knowledge Base
            </h1>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search..."
                className="border px-4 py-2 rounded-lg"
              />

              <button
                onClick={openModal}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700"
              >
                + Create New
              </button>
            </div>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          {/* SPACE BETWEEN CARDS & BOTTOM */}
          <div className="flex-1"></div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-600">
            
            {/* LEFT */}
            <div>6 rows</div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              
              <div className="flex items-center gap-2">
                <span>Rows per page</span>
                <select className="border px-2 py-1 rounded">
                  <option>10</option>
                </select>
              </div>

              <div>page 1 of 1</div>

              <div className="flex gap-2">
                <button className="border px-2 py-1 rounded hover:bg-gray-200">«</button>
                <button className="border px-2 py-1 rounded hover:bg-gray-200">‹</button>
                <button className="border px-2 py-1 rounded hover:bg-gray-200">›</button>
                <button className="border px-2 py-1 rounded hover:bg-gray-200">»</button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}