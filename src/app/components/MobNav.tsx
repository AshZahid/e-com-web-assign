import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';
  import Link from "next/link";
  import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';


export default function MobNav() {
    return (
        <div className="flex w-full justify-evenly">
          <div className="flex justify-around gap-3">

            <div className="flex flex-col md:flex-row gap-1">
          <div className="text-2xl md:text-4xl text-left font-bold pl-6 md:pl-12 pt-4">Exclusive</div>

          <div className="flex pl-5 bg-gray-100 mt-7 h-8 border border-none rounded gap-2 sm:mr-5">
                 
                 <input className="bg-gray-100" type="text" placeholder="What are you looking for?" />
                 <div>
                 <Search />
               </div>
            </div>
            </div>

          <div className="flex w-full justify-between pt-7 pr-16 mr-48 gap-3">
                <Heart />
                <ShoppingCart />
               </div>
               </div>

             <Sheet>
  <SheetTrigger className="lg:hidden">
    
    <Menu />
    
  </SheetTrigger>
  <SheetContent>
  
    <SheetHeader>
    
      <SheetDescription className="bg-slate-800 text-white hover:text-gray-500">
      
      <div className="text-3xl font-bold pl-12 pt-4">Exclusive</div>
      <ul className="flex flex-col lg:flex-row justify-center gap-5 items-center pt-5">
      <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
        <button className="pt-5">Sign Up</button>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
    )
}