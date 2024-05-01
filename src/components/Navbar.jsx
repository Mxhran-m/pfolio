import React, { useState } from "react"
import pic from "../../src/assets/pfp.png"
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import {Link } from "react-scroll"

export default function Navbar(){
    const [menu, setMenu]= useState(true);
    const navItems =[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },       
        {
            id:5,
            text:"Contact"
        }
    ]
    return (
        <>
        <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
           <div className="flex justify-between align-center h-16">
             <div className="flex items-center space-x-2">
                    <img src={pic} className="h-12 w-12 rounded-full" alt="" draggable="false"/>
                    <h1 className="font-semibold text-xl cursor-pointer">Mehran<span className="text-green-500 text-xl">M</span>
                    <p className="text-sm">Web Developer</p>
                    </h1>
             </div>
             <div className="items-center justify-center flex">
                 <ul className="hidden md:flex gap-5 cursor-pointer">
                    {navItems.map(({id, text}) => (
                        <li className="hover:scale-125 duration-500" key={id}>
                            <Link
                                to={text}
                                smooth={true}
                                duration={500}
                                activeClass="active"
                                >{text}
                            </Link>
                        </li>
                    ))}
                 </ul>
                 <div onClick={()=>setMenu(!menu)} className="md:hidden">
                    {menu ? <HiMenu size={24} /> : <IoMdClose size={24} />}
                 </div>
             </div>  
           </div>
           {
            menu || (
           <div>
                <ul className="md:hidden flex flex-col items-center justify-center space-y-5 text-xl h-screen bg-white drop-shadow-2xl">
                {navItems.map(({id, text}) => (
                        <li className="hover:scale-125 duration-500 font-bold cursor-pointer" key={id}>
                            <Link
                            onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            activeClass="active"
                            >{text}</Link>
                        </li>
                    ))}
                 </ul>
           </div> 
           )
           }
        </div>
        </>
    )
}