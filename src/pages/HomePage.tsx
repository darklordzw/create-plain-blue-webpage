
export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-page text-blue-page-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-blue bg-clip-text text-transparent">
            Welcome to the Blue Page
          </h1>
          <p className="text-xl text-blue-page-foreground/80">
            This is your beautiful blue-themed homepage with ocean vibes
          </p>
          <div 
            className="rounded-2xl overflow-hidden shadow-blue h-96 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=600&fit=crop)' }}
          >
            <div className="w-full h-full bg-gradient-to-b from-blue-500/20 to-blue-900/40 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">Ocean Paradise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}