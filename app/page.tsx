import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-black pb-20">
      <Header title="Heart Scribed" />
      
      <main className="px-4 py-6">
        {/* Verse Card */}
        <div className="relative rounded-2xl overflow-hidden mb-6 shadow-xl">
          {/* Background Image - using gradient as placeholder, replace with actual image */}
          <div 
            className="relative h-96 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"
            style={{
              backgroundImage: "url('/verse-background.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Verse Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-6 py-8 text-white">
              <div className="w-full mb-4">
                <span className="text-sm font-semibold tracking-wider">JOHN 14:6</span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-serif text-center leading-relaxed mb-6">
                Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.
              </blockquote>
              
              {/* Favorite Icon */}
              <button className="absolute bottom-4 right-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-gray-800 dark:bg-gray-800 text-white py-4 rounded-xl font-medium hover:bg-gray-700 transition-colors">
            Suggest Another Verse
          </button>
          <button className="w-full bg-blue-700 dark:bg-blue-700 text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors">
            Practice Memorization
          </button>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
