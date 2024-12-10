import Link from "next/link";
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <div>
      <nav className="flex w-full justify-between">

        <div className="text-4xl font-bold pl-1 lg:pl-20 pt-5">Exclusive</div>
        <div className="flex gap-5 ml-8 pt-5">

        <ul className="flex justify-between items-center gap-12 ml-[98px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
            </ul>
            <button>Sign Up</button>
            </div>


               <div className="flex bg-gray-100 mt-7 h-8 border border-none rounded gap-2 mb-2 pl-2">
                 
                 <input className="bg-gray-100" type="text" placeholder="What are you looking for?" />
                 <div>
                 <Search />
               </div>
            </div>
        
                
               <div className="flex pt-8 pr-8 gap-10 mr-12">
                <Heart />
                <ShoppingCart />
               </div>

      </nav>
      <hr/>
    </div>
    
  );
};

