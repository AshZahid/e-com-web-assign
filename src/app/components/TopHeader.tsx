import { ChevronDown } from 'lucide-react';

const TopHeader = () => {
  return (

    <div className="flex justify-around w-full bg-black text-white">

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 text-left gap-y-1 lg:gap-y-0 lg:text-center h-auto">

      <p>Summer Sale For All Swim Suits And</p>
      <p>Free Express Delivery - OFF 50%!</p>
      <p className="underline text-left lg:text-center">ShopNow</p>
      

      <div className='flex'>
        
        <p>English</p>
        <ChevronDown />
      </div>
      </div>
    </div>
  );
};

export default TopHeader
