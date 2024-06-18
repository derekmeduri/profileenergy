import React from "react";

const MenuOverlay = () => {
    return ( 
    <ul className="bg-white flex flex-col py-2 text-right">
    <li>
        <span className=" p-2 rounded-md">
        <a href="/" className="text-green-500">Home</a>
        </span>
    </li>
    <li>
    <span className=" p-2 rounded-md">
        <a href="/" className="text-green-500">About</a>
        </span>
    </li>
    <li>
    <span className="p-2 rounded-md">
        <a href="/" className="text-green-500">News</a>
        </span>
    </li>
    <li>
    <span className=" p-2 rounded-md">
        <a href="/" className="text-green-500">Contact</a>
        </span>
    </li>
    <li>
    <span className=" p-2 rounded-md">
        <a href="https://login.energycap.com/login?loginRedirectUrl=%2Frecent" className="text-green-500">Customer Login</a>
        </span>
    </li>
</ul>)

}

export default MenuOverlay;