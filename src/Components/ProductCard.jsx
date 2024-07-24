// components/ProductCard.js

import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ img, description, price, inStock, hasDiscount,id }) => {
  return (
    <>
   <div >
 
    <Link href={`/products/${id}`} className='no-underline'>
      <div className=" p-2 rounded-lg  relative cursor-pointer " style={{ height: "300px" }}>
        {inStock ? null : (
          <div className="transition-transform duration-300 hover:scale-95 absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded z-10">Out of Stock</div>
        )}
        {hasDiscount && <div className="absolute top-2 z-10 left-2 bg-green-500 text-white px-2 py-1 rounded">20% OFF</div>}
        <img src={img} alt={description} className="w-96 h-44 object-cover mb-2 rounded-t-lg cursor-pointer transition-transform duration-300 hover:scale-95" />

        <div className="text-gray-800 text-center text-sm no-underline">{description}</div>
        <div className='flex justify-between mt-1'>
        <div className=" mb-2 text-gray-800 font-medium  ">₹ {price}</div>
        <div>
        {inStock ? (
          <button className="bg-yellow-300 text-dark px-3 py-1 rounded-full hover:bg-yellow-500 text-sm font-semibold">Add to Cart</button>
        ) : (
          <button className="bg-red-400 text-black px-3 py-1 rounded-full hover:bg-red-500 cursor-not-allowed text-sm" disabled>Add to Cart</button>
        )}
        </div>
        </div>
      </div>
    </Link>
    </div>

    </>
  );
};

export default ProductCard;
