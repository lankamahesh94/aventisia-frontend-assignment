export default function Modal({ close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end">

      {/* RIGHT PANEL */}
      <div className="w-[420px] h-full bg-white p-6 shadow-lg overflow-y-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">
              Create New Knowledge Base
            </h2>
            <p className="text-sm text-gray-500">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          <button onClick={close} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        {/* FORM */}
        <div className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name (Cannot be edited later) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* VECTOR STORE */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>Qdrant</option>
            </select>
          </div>

          {/* LLM MODEL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded-lg px-3 py-2">
              <option>text-embedding-ada-002</option>
            </select>
          </div>

        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-8">
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
            Create
          </button>
        </div>

      </div>
    </div>
  );
}