import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-sm font-[var(--font-outfit)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                {/* Left Section - Logo */}
                <div className="text-3xl font-extrabold text-[#E23744]">Tomato.</div>

                {/* Center Section - Navigation */}
                <nav className="flex space-x-8 text-md text-gray-700">
                    {["home", "menu", "mobile-app", "contact us"].map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`relative pb-1 no-underline transition 
              ${item === "menu"}
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[2px] after:bg-[#0D3B66] after:w-0 hover:after:w-full 
              after:transition-all after:duration-300`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Right Section - Search, Cart, Sign In */}
                <div className="flex items-center space-x-6">
                    <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <div className="relative">
                        <Link href='/cart'>
                            <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
                        </Link>
                        <span className="absolute top-0 right-0 w-2 h-2 rounded-full"></span>
                    </div>
                    <Link href="/login">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer"
                        >
                           login
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer"
                        >
                            sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
