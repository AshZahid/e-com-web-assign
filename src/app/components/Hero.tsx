import { ChevronRight } from 'lucide-react';
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full flex col-span-3 justify-between'>

        <div className='hidden sm:hidden lg:flex lg:w-3/12 lg:flex-col lg:text-left lg:pl-40 lg:pt-8 lg:space-y-4'>
          <div className='flex pl-1 gap-3'>
            <p>Woman&apos;s Fashion</p>
            < ChevronRight />
        </div>

         <div className='flex pl-1 gap-9'>
            <p>Men&apos;s Fashion</p>
            < ChevronRight />
        </div>

        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sport & Outdoor</p>
        <p>Baby&apos;s & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>

    </div>
    
          {/* middle div */}
       <div className='bg-black w-auto ml-7 lg:ml-0 lg:w-3/5 mr-20 mt-7 text-white h-auto sm:h-auto'>
       
         <div className='flex flex-col sm:flex-col lg:flex-row'> 
          <div>
            <div className='flex ml-3 lg:ml-9 mt-9 gap-5'>
              < FaApple className='w-12 h-12' />
              <p className='pl-0.5 lg:pl-3 pt-4'>iPhone 14 Sereis</p>
            </div>

            <div className='font-bold text-3xl mt-6 ml-3 lg:ml-12'>
              Up to 10% <br/> off Voucher
            </div>

            <div className='flex underline gap-2 ml-3 lg:ml-12 mt-6'>
              <button>Shop Now</button>
               < FaArrowRight className='mt-2' />              
            </div>
          </div>
        
        {/* right div */}
        <div>
          <div className=' sm:pt-8 lg:pt-6 sm:pr-32  lg:pr-0 lg:pl-40 h-auto'>
            <Image src={"/heroimg.jpg"} alt='iPhone img' width={400} height={400}  />
          </div>
        </div>
        
      </div>
       
       
       
       
       
       
       
       
       
       
       

       </div>


















</div>   


  );
};
export default Hero