import { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('chicken');

  const categories = [
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'sides', name: 'Sides', icon: '🍟' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const menuItems = {
    chicken: [
      {
        id: 1,
        name: "Original Recipe Chicken",
        description: "Our signature blend of 11 herbs and spices, crispy outside, juicy inside",
        price: "$12.99",
        image: "🍗",
        popular: true,
        pieces: "8 pieces"
      },
      {
        id: 2,
        name: "Hot & Spicy Chicken",
        description: "Marinated in our fiery blend of spices for those who like it hot",
        price: "$13.99",
        image: "🔥",
        spicy: true,
        pieces: "8 pieces"
      },
      {
        id: 3,
        name: "Chicken Tenders",
        description: "Hand-breaded tender strips, perfect for dipping",
        price: "$9.99",
        image: "🍗",
        pieces: "6 pieces"
      },
      {
        id: 4,
        name: "Buffalo Wings",
        description: "Crispy wings tossed in our tangy buffalo sauce",
        price: "$11.99",
        image: "🔥",
        pieces: "10 pieces"
      },
      {
        id: 5,
        name: "Family Bucket",
        description: "Perfect for sharing - feeds 4-6 people",
        price: "$29.99",
        image: "👨‍👩‍👧‍👦",
        popular: true,
        pieces: "16 pieces"
      }
    ],
    burgers: [
      {
        id: 6,
        name: "Crispy Chicken Burger",
        description: "Crispy chicken breast, lettuce, mayo, pickles on a toasted bun",
        price: "$8.99",
        image: "🍔",
        popular: true
      },
      {
        id: 7,
        name: "Spicy Chicken Deluxe",
        description: "Spicy chicken breast with pepper jack cheese and jalapeños",
        price: "$9.99",
        image: "🌶️",
        spicy: true
      },
      {
        id: 8,
        name: "BBQ Chicken Burger",
        description: "Grilled chicken with BBQ sauce, onion rings, and bacon",
        price: "$10.99",
        image: "🍖"
      },
      {
        id: 9,
        name: "Double Crunch Burger",
        description: "Two crispy chicken fillets with cheese and special sauce",
        price: "$12.99",
        image: "🍔"
      }
    ],
    sides: [
      {
        id: 10,
        name: "Crispy Fries",
        description: "Golden, crispy potato fries seasoned to perfection",
        price: "$3.99",
        image: "🍟",
        popular: true
      },
      {
        id: 11,
        name: "Coleslaw",
        description: "Fresh, creamy coleslaw made daily",
        price: "$2.99",
        image: "🥗"
      },
      {
        id: 12,
        name: "Mac & Cheese",
        description: "Creamy, cheesy macaroni that's comfort in a bowl",
        price: "$4.99",
        image: "🧀"
      },
      {
        id: 13,
        name: "Mashed Potatoes",
        description: "Smooth, buttery mashed potatoes with gravy",
        price: "$3.99",
        image: "🥔"
      },
      {
        id: 14,
        name: "Biscuits",
        description: "Warm, flaky buttermilk biscuits",
        price: "$2.99",
        image: "🥖"
      }
    ],
    drinks: [
      {
        id: 15,
        name: "Coca-Cola",
        description: "Classic Coca-Cola, ice cold",
        price: "$2.49",
        image: "🥤",
        popular: true
      },
      {
        id: 16,
        name: "Lemonade",
        description: "Fresh squeezed lemonade",
        price: "$2.99",
        image: "🍋"
      },
      {
        id: 17,
        name: "Sweet Tea",
        description: "Southern-style sweet iced tea",
        price: "$2.49",
        image: "🧊"
      },
      {
        id: 18,
        name: "Coffee",
        description: "Freshly brewed hot coffee",
        price: "$1.99",
        image: "☕"
      }
    ],
    desserts: [
      {
        id: 19,
        name: "Apple Pie",
        description: "Warm apple pie with cinnamon and flaky crust",
        price: "$4.99",
        image: "🥧",
        popular: true
      },
      {
        id: 20,
        name: "Chocolate Cake",
        description: "Rich, moist chocolate cake with chocolate frosting",
        price: "$5.99",
        image: "🍰"
      },
      {
        id: 21,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream with your choice of topping",
        price: "$3.99",
        image: "🍨"
      },
      {
        id: 22,
        name: "Cookies",
        description: "Freshly baked chocolate chip cookies",
        price: "$2.99",
        image: "🍪"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-red text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-red-100">Delicious food made fresh daily</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-brand-red text-white shadow-lg transform scale-105'
                  : 'bg-white text-brand-dark border-2 border-gray-200 hover:border-brand-red hover:text-brand-red'
              }`}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory]?.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-32 bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center text-4xl">
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-brand-dark">{item.name}</h3>
                  <span className="text-xl font-bold text-brand-red">{item.price}</span>
                </div>
                {item.pieces && (
                  <p className="text-sm text-gray-500 mb-2">{item.pieces}</p>
                )}
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-brand-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-brand-red to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Family Deal</h3>
                <p className="text-red-100 mb-4">Family Bucket + 4 Sides + 4 Drinks</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm line-through text-red-200">$45.99</span>
                  <span className="text-2xl font-bold">$39.99</span>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Lunch Special</h3>
                <p className="text-red-100 mb-4">Any Burger + Fries + Drink</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm line-through text-red-200">$14.99</span>
                  <span className="text-2xl font-bold">$11.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;