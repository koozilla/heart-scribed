import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black pb-20">
      <Header title="Settings" />
      
      <main className="px-4 py-6">
        <div className="bg-gray-800 dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-white text-xl font-bold mb-4">Settings</h2>
          <p className="text-gray-400 text-sm">
            Settings page coming soon...
          </p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
