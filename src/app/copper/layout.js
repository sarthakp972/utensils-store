import React from "react";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/ProductCard";

import Side_categ from "@/Components/Side_categ";


import Data from '@/utils/allProductInfo';


export default function Layout({childern}){
    const products = Data.products.slice(13, 30); 
    return(
        <>
        <div className='flex gap-3 container mt-3'>
            <div>
        <Side_categ/>
        </div>
{/* /////////////////////// */}
        <div>
        <div>
      <div className="grid grid-cols-3 gap-10 border border-gray-300">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <ProductCard {...product} />
          
          </React.Fragment>
        ))}
      </div>
    </div>
        </div>

        </div>
        <Footer/>
     
       
        {childern}
        </>
    )
}
