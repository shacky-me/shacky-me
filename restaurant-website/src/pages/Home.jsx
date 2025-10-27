import { Link } from 'react-router-dom';

const Home = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Original Recipe Chicken",
      description: "Our signature blend of 11 herbs and spices",
      price: "$12.99",
      image: "🍗",
      popular: true
    },
    {
      id: 2,
      name: "Crispy Chicken Burger",
      description: "Crispy chicken breast with fresh lettuce and mayo",
      price: "$8.99",
      image: "🍔"
    },
    {
      id: 3,
      name: "Spicy Wings Bucket",
      description: "10 pieces of our spiciest wings",
      price: "$15.99",
      image: "🔥",
      spicy: true
    },
    {
      id: 4,
      name: "Family Feast",
      description: "12 pieces of chicken with sides for the whole family",
      price: "$29.99",
      image: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-red to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Finger Lickin' Good
                <span className="block text-brand-cream">Fried Chicken</span>
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Experience the original taste that made us famous. Fresh, crispy, and bursting with flavor in every bite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-brand-red px-8 py-3 rounded-full font-semibold text-lg hover:bg-brand-cream transition-all duration-200 transform hover:scale-105">
                  Order Now
                </button>
                <Link
                  to="/menu"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-red transition-all duration-200 text-center"
                >
                  View Menu
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-9xl animate-bounce">🍗</div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
              Why Choose ChickenCraze?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to serving the best fried chicken with unmatched quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Fast Service</h3>
              <p className="text-gray-600">Quick preparation and delivery to satisfy your cravings instantly</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Fresh Ingredients</h3>
              <p className="text-gray-600">Only the finest, locally-sourced ingredients in every dish</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Secret Recipe</h3>
              <p className="text-gray-600">Our signature blend of 11 herbs and spices passed down for generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
              Our Featured Items
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most popular dishes that keep customers coming back for more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-brand-dark px-2 py-1 rounded-full text-xs font-semibold">
                      POPULAR
                    </div>
                  )}
                  {item.spicy && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SPICY
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-brand-dark">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-red">{item.price}</span>
                    <button className="bg-brand-red text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="bg-brand-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200 inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Satisfy Your Cravings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Order now and taste the difference that made us the neighborhood favorite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-red text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors duration-200">
              Order for Delivery
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-dark transition-all duration-200">
              Find Location
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;