import React from "react";
import Footer from "@/Components/Footer";
import ProductCard from "@/Components/ProductCard";

import Side_categ from "@/Components/Side_categ";
import Image from 'next/image';
import Link from 'next/link';

import Data from '@/utils/allProductInfo';


export default function Layout({childern}){
    const products = Data.products.slice(13, 25); 
    return(
        <>
        <div className='flex gap-10 container'>
            <div>
        <Side_categ/>
        </div>
{/* /////////////////////// */}
        <div>
        <div className='mb-5'>
     <Link href="https://wa.me/7649062706"> <Image src="/slide-images/whatsaap-connect.jpeg" className='no-underline cursor-pointer' width={1000} height={200}/></Link>
    </div>
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
