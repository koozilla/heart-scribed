import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Favorites() {
  const favorites = [
    { reference: "Genesis 1:3", date: "Added Jan 19, 2026", book: "Genesis" },
    { reference: "Romans 12:2", date: "Added Jan 18, 2026", book: "Romans" },
    { reference: "Jeremiah 29:11", date: "Added Jan 17, 2026", book: "Jeremiah" },
    { reference: "Matthew 11:28", date: "Added Jan 16, 2026", book: "Matthew" },
  ];

  const filters = [
    { label: "All", count: 4, active: true },
    { label: "Genesis", count: 1, active: false },
    { label: "Jeremiah", count: 1, active: false },
    { label: "Matthew", count: 1, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black pb-20">
      <Header title="Favorites" />
      
      <main className="px-4 py-6">
        {/* Filter Pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                filter.active
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Favorites List */}
        <div className="space-y-3">
          {favorites.map((favorite, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-800 rounded-xl p-4"
            >
              <div className="text-blue-400 font-medium mb-1">
                {favorite.reference}
              </div>
              <div className="text-gray-400 text-sm">{favorite.date}</div>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
