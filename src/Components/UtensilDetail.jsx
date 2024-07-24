// pages/UtensilDetail.js
import React from 'react';

const UtensilDetail = ({ product }) => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-light p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.description} className="w-96 h-44 object-cover mb-2 rounded-t-lg" />
        <div className="text-gray-800">{product.description}</div>
        <div className="text-gray-600 mb-2">${product.price}</div>
        
        {/* Display Size Variations */}
        <div className="font-semibold">Sizes:</div>
        <ul>
          {product.sizes.map((size) => (
            <li key={size.id}>
              {size.name} - ${size.price} | Material: {size.material} | Weight: {size.weight} | Capacity: {size.capacity} | Diameter: {size.diameter} | Height: {size.height} | Depth: {size.depth} | Thickness: {size.thickness}
            </li>
          ))}
        </ul>

        <button className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-500">Add to Cart</button>
      </div>
    </div>
  );
}

export default UtensilDetail;
