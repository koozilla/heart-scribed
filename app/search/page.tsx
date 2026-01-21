import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Search() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black pb-20">
      <Header title="Search" />
      
      <main className="px-4 py-6">
        <h2 className="text-white text-xl font-bold mb-6">Find a Verse</h2>
        
        <div className="space-y-6">
          {/* Book Input */}
          <div>
            <label className="block text-gray-400 text-sm mb-2">Book</label>
            <input
              type="text"
              placeholder="e.g. John, Genesis, Psalms"
              className="w-full bg-gray-800 dark:bg-gray-800 text-white rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Chapter and Verse Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Chapter</label>
              <input
                type="text"
                placeholder="e.g. 3"
                className="w-full bg-gray-800 dark:bg-gray-800 text-white rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Verse</label>
              <input
                type="text"
                placeholder="e.g. 16"
                className="w-full bg-gray-800 dark:bg-gray-800 text-white rounded-xl px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Search Results Area */}
        <div className="mt-8 min-h-64 bg-gray-800 dark:bg-gray-800 rounded-xl"></div>
      </main>

      <Navigation />
    </div>
  );
}
