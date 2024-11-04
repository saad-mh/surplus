import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 md:hidden ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={onClose} className="p-2">
              <span className="material-icons">close</span>
            </button>
          </div>
          
          <nav className="space-y-4">
            <Link to="/" className="block hover:text-gray-600" onClick={onClose}>
              Home
            </Link>
            <Link to="/marketplace" className="block hover:text-gray-600" onClick={onClose}>
              Marketplace
            </Link>
            <Link to="/donations" className="block hover:text-gray-600" onClick={onClose}>
              Donations
            </Link>
            <Link to="/profile" className="block hover:text-gray-600" onClick={onClose}>
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar; 