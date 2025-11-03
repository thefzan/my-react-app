import React from 'react'
import Cat1 from '../assets/cat1.jpg'
import Cat2 from '../assets/cat2.jpg'
import Cat3 from '../assets/cat3.jpg'

const Catagory = () => {
  return (
    <div className='w-[350px] h-[150px] bg-[#ffffff] m-auto rounded-2xl mt-4 shadow-2xl'>
    <h1 className='ms-9 font-semibold mb-1'>Shop By Category</h1>
    <div className='flex   w-[300px] m-auto h-[110px] justify-between'>
      <div className='bg-white h-full rounded-xl  w-20 shadow-2xl'>
        <div className='bg-amber-950 w-full h-[75px] rounded-t-xl overflow-hidden'>
            <img src={Cat1} alt="Category" className='h-full w-full ' />
        </div>
        <div>
            <h3 className='text-[10px] font-bold text-center'>Mushab Bashir Attar</h3>
        </div>
        
      </div>
      <div className='bg-white h-full rounded-xl w-20 shadow-2xl'>
        <div className='bg-amber-950 w-full h-[75px] rounded-t-xl overflow-hidden'>
            <img src={Cat2} alt="Category" className='h-full w-full ' />
        </div>
        <div>
            <h3 className='text-[10px] font-bold text-center'>Unani<br/> Medicine</h3>
        </div>
        
      </div>
      <div className='bg-white h-full rounded-xl w-20 shadow-2xl'>
        <div className='bg-amber-950 w-full h-[75px] rounded-t-xl overflow-hidden'>
            <img src={Cat3} alt="Category" className='h-full w-full ' />
        </div>
        <div>
            <h3 className='text-[10px] font-bold text-center'>Islamic <br /> Products</h3>
        </div>
        
      </div>
    </div>
    
    </div>
  )
}

export default Catagory