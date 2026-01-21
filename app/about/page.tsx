import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black pb-20">
      <Header title="About" showBack />
      
      <main className="px-4 py-6">
        {/* App Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-blue-900 rounded-xl flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-white text-3xl font-bold mb-2">Heart Scribed</h1>
          <p className="text-gray-400 text-sm">Version 1.0.0</p>
        </div>

        {/* Our Mission */}
        <div className="bg-gray-800 dark:bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-white text-xl font-bold mb-4">Our Mission</h2>
          <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <p>
              Heart Scribed is a mobile app designed to help you encounter, remember, and internalize Scripture through daily verses and progressive memorization practice.
            </p>
            <p>
              We believe that hiding God's Word in your heart transforms lives. Our app provides a calming space for reflection with beautiful verse cards, helping you grow closer to God one verse at a time.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-800 dark:bg-gray-800 rounded-xl p-6">
          <h2 className="text-white text-xl font-bold mb-4">Features</h2>
          <div className="space-y-4">
            {[
              {
                icon: "📖",
                title: "Daily Verses",
                description: "A new inspiring verse every day.",
              },
              {
                icon: "✍️",
                title: "Memorization Mode",
                description: "Progressive word hiding to help you memorize.",
              },
              {
                icon: "❤️",
                title: "Save Favorites",
                description: "Keep your most meaningful verses close.",
              },
              {
                icon: "🌄",
                title: "Beautiful Backgrounds",
                description: "Serene imagery to inspire reflection.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
