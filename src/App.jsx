import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import BigCard from './components/BigCard'
import ProductCarouselCard from "./components/ProductCarouselCard";

const App = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?w=300&q=80",
      title: "Apple AirPods Pro (2nd Gen)",
      price: 21999,
      originalPrice: 26999,
      rating: 5,
      reviews: 12453,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80",
      title: "Samsung Galaxy Watch 6",
      price: 17999,
      originalPrice: 24999,
      rating: 4,
      reviews: 8432,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
      title: "Sony WH-1000XM5 Headphones",
      price: 24990,
      originalPrice: 34990,
      rating: 5,
      reviews: 6210,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80",
      title: "Levi's Men's 511 Slim Fit Jeans",
      price: 1799,
      originalPrice: 3599,
      rating: 4,
      reviews: 9871,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
      title: "Nike Revolution Running Shoes",
      price: 2999,
      originalPrice: 4999,
      rating: 4,
      reviews: 15670,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&q=80",
      title: "boAt Stone Bluetooth Speaker",
      price: 1499,
      originalPrice: 2999,
      rating: 4,
      reviews: 22234,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80",
      title: "Canon EOS M50 Mirrorless Camera",
      price: 54999,
      originalPrice: 62999,
      rating: 5,
      reviews: 2351,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80",
      title: "HP Pavilion Gaming Laptop",
      price: 64999,
      originalPrice: 79999,
      rating: 4,
      reviews: 4923,
    },
  ];


  
const carouselData = [
  {
    img: "https://m.media-amazon.com/images/I/41K-sS0Wb7L._AC_SY200_.jpg",
    label: "Up to 80% off",
  },
  {
    img: "https://m.media-amazon.com/images/I/41LzY1LzK7L._AC_SY200_.jpg",
    label: "Up to 50% off",
  },
  {
    img: "https://m.media-amazon.com/images/I/31gK-G1dG4L._AC_SY200_.jpg",
    label: "Up to 40% off",
  },
  {
    img: "https://m.media-amazon.com/images/I/41-y17eK8rL._AC_SY200_.jpg",
    label: "Limited deal",
  },
  {
    img: "https://m.media-amazon.com/images/I/51AALQp+3DL._AC_SY200_.jpg",
    label: "Up to 60% off",
  },
  {
    img: "https://m.media-amazon.com/images/I/41V1fC9S+8L._AC_SY200_.jpg",
    label: "Great Indian Festival",
  },
  {
    img: "https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg",
    label: "Up to 70% off",
  },
  {
    img: "https://m.media-amazon.com/images/I/41j-G5G+T3L._AC_SY200_.jpg",
    label: "Mega Deal",
  },
];


  return (
    <>
      <Navbar />
      <main className='px-4 md:px-6 lg:px-8 relative bg-gray-200'>
        <Hero />

        <section className='flex gap-4 flex-col sm:flex-row flex-wrap md:flex-nowrap w-full'>
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
        </section>

        <AdBanner />

        <section className='my-5 p-4 bg-white rounded-xl flex gap-4 sm:flex-row flex-nowrap w-full overflow-y-hidden overflow-x-scroll'>
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-35 sm:w-40 md:w-45 lg:w-50 xl:w-55"
            >
              <ProductCard
                {...product}
              // onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </section>

        <section className='flex gap-4 flex-col sm:flex-row flex-wrap md:flex-nowrap w-full'>
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
          <BigCard title="Great Deals" name="Bue Cups" image="../assets/logo.png" />
        </section>

        <section className='my-5 p-4 bg-white gap-2 rounded-xl flex flex-col flex-wrap'>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#0f1111] inline">
              Hello World
            </h2>

            <a
              href="/"
              className="text-[#007185] text-xs sm:text-sm hover:text-[#c45500] hover:underline inline "
            >
              See all deals
            </a>
          </div>

          <div className="flex gap-4 flex-row md:flex-nowrap w-full overflow-y-hidden overflow-x-scroll">
           {carouselData.map((item) => (
                <ProductCarouselCard
                  item={item}
                />
              ))}

          </div>
        </section>



        <section className='my-5 p-4 bg-white rounded-xl flex gap-4 sm:flex-row flex-nowrap w-full overflow-y-hidden overflow-x-scroll'>
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-35 sm:w-40 md:w-45 lg:w-50 xl:w-55"
            >
              <ProductCard
                {...product}
              // onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </section>
      </main>


      <Footer />
    </>
  )
}

export default App