
"use client"
import React, {useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";




const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed-mx-auto top-0 left-0 right-0 z-10 p-2 bg-white border border-b-green-500">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2">
   
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-black via-green-500 to-green-500 text-3xl md:text-5xl lg:text-6xl font-bold">
             <a href="/">
            
                 Profile Energy Inc.
    
              </a>
             </div> 

        <div className="mobile-menu block md:hidden lg:hidden">
            {!navbarOpen ? (
                 <button onClick={() => setNavbarOpen(true)}
                  className="flex items-center px-3 py-2 border rounded border-green-500 text-green-500"
                  >
                    <Bars3Icon className="h-5 w-5"/>
                 </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-green-500 text-green-500">
                    <XMarkIcon className="h-5 w-5" />
                </button>
            )
        }
           

        </div>
        <div className="menu hidden md:block md:auto" id="navbar">
       <ul className="flex p-2 md:p-0 md:flex-row md:space-x-4 mt-3">
        <li>
            <span className="bg-green-500 hover:bg-green-600 p-2 rounded-md">
            <a href="/" className="text-white">Home</a>
            </span>
        </li>
        <li>
        <span className="bg-green-500 hover:bg-green-600  p-2 rounded-md">
            <a href="/about" className="text-white">About Us</a>
            </span>
        </li>
        <li>
        <span className="bg-green-500 hover:bg-green-600 p-2 rounded-md">
            <a href="/" className="text-white">News</a>
            </span>
        </li>
        <li>
        <span className="bg-green-500 hover:bg-green-600 p-2 rounded-md">
            <a href="#contact" className="text-white">Contact</a>
            </span>
        </li>
        <li>
        <span className="bg-green-500 hover:bg-green-600  p-2 rounded-md">
            <a href="https://login.energycap.com/login?loginRedirectUrl=%2Frecent" className="text-white">Customer Login</a>
            </span>
        </li>
    </ul>
    </div>
   </div>

        {navbarOpen ? <MenuOverlay/> : null}

    </nav>

    )
}

export default Navbar;