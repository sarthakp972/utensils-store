"use client"
// pages/products/[productId].js

import { useRouter } from 'next/navigation';

import React from 'react'

const page = () => {
  const router=useRouter();
  const pageNo=router.query;
  return (
    <div>
      {pageNo}
    </div>
  )
}

export default page
