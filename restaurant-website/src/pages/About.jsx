const About = () => {
  const stats = [
    { number: "39", label: "Years of Service", icon: "🏆" },
    { number: "150+", label: "Locations Worldwide", icon: "🌍" },
    { number: "10M+", label: "Happy Customers", icon: "😊" },
    { number: "24/7", label: "Customer Support", icon: "📞" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients or preparation methods.",
      icon: "⭐"
    },
    {
      title: "Community Focus",
      description: "Supporting local communities and creating jobs wherever we operate.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Constantly improving our recipes and service to exceed expectations.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sourcing.",
      icon: "🌱"
    }
  ];

  const timeline = [
    {
      year: "1985",
      title: "The Beginning",
      description: "Started as a small family restaurant with a big dream and secret recipe."
    },
    {
      year: "1992",
      title: "First Franchise",
      description: "Opened our first franchise location, beginning our expansion journey."
    },
    {
      year: "2005",
      title: "Going Global",
      description: "Expanded internationally, bringing our flavors to customers worldwide."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched our mobile app and enhanced delivery services."
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "Committed to 100% sustainable packaging and carbon-neutral operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">About ChickenCraze</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              For nearly four decades, we've been serving communities with delicious, high-quality food 
              and creating memorable experiences for families and friends.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                It all started in 1985 when Colonel Mike opened the first ChickenCraze restaurant 
                in a small town with a simple mission: to serve the best fried chicken using a 
                secret blend of 11 herbs and spices.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What began as a family recipe passed down through generations has now become a 
                global phenomenon, but we've never forgotten our roots. Every piece of chicken 
                is still prepared with the same care and attention to detail that made us famous.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to serve millions of customers worldwide while maintaining 
                the same commitment to quality, community, and that finger-lickin' good taste 
                that started it all.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-8xl">👨‍🍳</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
              By the Numbers
            </h2>
            <p className="text-gray-600 text-lg">Our journey in numbers</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-red mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and help us serve our communities better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-brand-dark">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg">Key milestones in our growth story</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-brand-red text-white px-4 py-2 rounded-full font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-red to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Join Our Story
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a career opportunity or want to bring ChickenCraze to your community, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-red px-8 py-3 rounded-full font-semibold text-lg hover:bg-brand-cream transition-colors duration-200">
              Franchise Opportunities
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-brand-red transition-all duration-200">
              Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;