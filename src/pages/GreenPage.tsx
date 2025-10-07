
export default function GreenPage() {
  return (
    <div className="min-h-screen bg-green-page text-green-page-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-green bg-clip-text text-transparent">
            Welcome to the Green Page
          </h1>
          <p className="text-xl text-green-page-foreground/80">
            This is your beautiful green-themed page with nature vibes
          </p>
          <div 
            className="rounded-2xl overflow-hidden shadow-green h-96 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop)' }}
          >
            <div className="w-full h-full bg-gradient-to-b from-green-500/20 to-green-900/40 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold">Nature's Beauty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}