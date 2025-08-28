
import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ProductCard from '../Productcard';
import "../App.css";
import Slide from './Slide';

const productsData = [
  {
    id: 1,
    name: "samosa",
    price: 50,
    category: "snacks",
    rating: 4.5,
    image: "https://cdn.tasteatlas.com/images/dishes/2a5bd798d848456f94f6a055cad515ed.jpg?w=600",
  },
  {
    id: 2,
    name: "puffs",
    price: 90,
    category: "snacks",
    rating: 4.2,
    image: "https://images.slurrp.com/webstories/wp-content/uploads/2024/08/shutterstock_1757168816.jpg",
  },
  {
    id: 3,
    name: "cutlet",
    price: 50,
    category: "snacks",
    rating: 4.8,
    image: "https://www.kannammacooks.com/wp-content/uploads/fish-cutlet-recipe-appetiser.jpg",
  },
  {
    id: 4,
    name: "chicken roll",
    price: 50,
    category: "snacks",
    rating: 4.0,
    image: "https://www.shutterstock.com/image-photo/selective-focus-indian-food-paneer-600nw-2441817529.jpg",
  },
  {
    id: 5,
    name: "Chicken biriyani",
    price: 400,
    category: "Arabian",
    rating: 4.1,
    image: "https://st2.depositphotos.com/49005766/47396/i/450/depositphotos_473966536-stock-photo-chicken-biryani-kerala-style-chicken.jpg",
  },
  {
    id: 6,
    name: "Mandi",
    price: 450,
    category: "Arabian",
    rating: 4.1,
    image: "https://deccanbawarchi.com/wp-content/uploads/2023/07/CHHICKEN-MANDI-1-1024x768.webp",
  },
  {
    id: 7,
    name: "kabsa",
    price: 500,
    category: "Arabian",
    rating: 4.1,
    image: "https://i.ytimg.com/vi/knAK7GfmwoU/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "mukboos",
    price: 1400,
    category: "Arabian",
    rating: 4.1,
    image: "https://i.ytimg.com/vi/iT6hMNKsEkQ/maxresdefault.jpg",
  },
  {
    id: 9,
    name: "Naan",
    price: 120,
    category: "Indian",
    rating: 4.1,
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2025-02-naan%2Fnaan-561",
  },
  {
    id: 10,
    name: "porotta",
    price: 20,
    category: "Indian",
    rating: 4.1,
    image: "https://kerala.me/wp-content/uploads/2016/04/porotta.jpg",
  },
  {
    id: 11,
    name: "palak panner",
    price: 250,
    category: "Indian",
    rating: 4.1,
    image: "https://www.chefajaychopra.com/assets/img/recipe/1-1666433552palakpaneer1webp.webp",
  },
  {
    id: 12,
    name: "kichadi",
    price: 250,
    category: "indian",
    rating: 4.1,
    image: "https://i.ytimg.com/vi/egnzo-b1Qtk/maxresdefault.jpg",
  }
];
function Home({ addToCart }) {
  

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = productsData
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      if (sort === "ratingHigh") return b.rating - a.rating;
      return 0;
    });
  return (
    <>
      
       {/* <header className="p-4 text-center bg-white shadow-md">
<div   className="w-full h-[10cm] bg-[url('https://051edfee763c558a6586-1f1d5ce824a176e93f42bb75edca05f7.ssl.cf1.rackcdn.com/mixt-food-photographer-healthy.jpg')] bg-cover bg-center">
 </div>
</header> */}
<Slide/>
<div className="bg-yellow-600 text-white text-2xl h-[2cm] text-center font-mono p-5">
  
 </div>
<div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 items-center justify-center">
        <input
          type="text"
          placeholder="Search products / restaurent..."
          className="border p-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>snacks</option>
          <option>Indian</option>
          <option>Arabian</option>
        </select>

        <select
          className="border p-2 rounded-md"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="ratingHigh">Rating: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
          
        ))}
      </div>
    
    </>
  )
}

export default Home
