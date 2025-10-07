
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GreenPage from './pages/GreenPage';
import BuildifyFeedback from "./components/BuildifyFeedback";

function App() {
  return (
    <BrowserRouter>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/green" className="text-foreground hover:text-primary transition-colors">
            Green Page
          </Link>
        </div>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/green" element={<GreenPage />} />
        </Routes>
      </div>
    </BrowserRouter>
<BuildifyFeedback />
  );
}

export default App;