import React from 'react'
import Pro1 from '../assets/pro1.jpg'

const BestSellingProduct = () => {
  return (
    <div>
        <div className="w-[166px] bg-white rounded-md p-2 shadow-2xl">
                  <img src={Pro1} alt="" className="w-full h-auto" />
                  <h2 className="font-bold">₹80.00</h2>
                  <h3 className="font-bold">Majoon Suranjaan</h3>
                  <button className="w-full bg-blue-950 text-white font-bold text-center rounded-md h-8">
                    Buy Now
                  </button>
                </div>
    </div>
  )
}

export default BestSellingProduct