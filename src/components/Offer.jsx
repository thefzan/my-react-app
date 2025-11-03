import Umra from '../assets/Umrah.png'
import New from '../assets/new.gif'

const Offer = () => {
  return (
    <div className='w-[350px] h-[150px] bg-[#ffffff] m-auto rounded-2xl mt-4 shadow-2xl'>
       <h1 className='ms-9 font-semibold mb-1'>Offer/ Latest Update <span ><img src={New} alt="" className='w-7 h-7 inline' /></span></h1>
       <div className='bg-amber-700 w-[350px] h-[125px] rounded-2xl'>
        <img src={Umra} alt="" className='w-full h-full rounded-2xl s' />
       </div>
    </div>
  )
}

export default Offer