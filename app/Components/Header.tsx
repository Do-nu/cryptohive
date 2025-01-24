import { Search } from "lucide-react"; 
import {Input } from "@/components/ui/input";
import { GiTreeBeehive } from "react-icons/gi";
import { ModeToggle } from "../mode.toggle";

export function Header() {
    return (
        <nav className="flex h-[73px] items-center justify-between px-6">
        <Logo />
         <div className="flex items-center justify-between gap-4 w-[30%] ">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
                <Input 
                type="search" 
                placeholder="search a coin..."  
                className="pl-8 border-none shadow-none w-[300px]"
                />
            </div>
             <ModeToggle />

         </div>

        </nav>
    );
}


function Logo() {
    return (
        <header className="flex items-center gap-2 left-10 top-8">
            <div className="size-7 bg-primary rounded-md flex justify-center items-center">
                <GiTreeBeehive className="text-yellow-600 text-3xl" aria-hidden='true' />
            </div>
            <h1 className="text-2xl font-semibold font-poppins max-md:hidden">Crypto <span className="font-normal text-yellow-600">Hive</span>
            </h1>
        </header>
    )
}