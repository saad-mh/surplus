import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound; 