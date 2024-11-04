import { Link } from 'react-router-dom';

function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2"
            >
              <span className="material-icons">menu</span>
            </button>
            <Link to="/" className="font-bold text-xl">
              Surplus
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/marketplace" className="hover:text-gray-600">Marketplace</Link>
            <Link to="/donations" className="hover:text-gray-600">Donations</Link>
            <Link to="/profile" className="hover:text-gray-600">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 