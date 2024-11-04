import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Surplus
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A sustainable marketplace and food donation platform
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Link 
            to="/marketplace"
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Marketplace</h2>
            <p className="text-gray-600">
              Buy and sell pre-owned items sustainably
            </p>
          </Link>
          
          <Link 
            to="/donations"
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Food Donations</h2>
            <p className="text-gray-600">
              Connect with local food donation opportunities
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 