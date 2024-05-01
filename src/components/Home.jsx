import React from "react";
import pic from "../../src/assets/pfp.png"

import { FaSquareFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";

export default function Home(){
    return(
        <>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Welcome To My Feed</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1 className="">Hello, I am a</h1>
                    {/* <span className="text-red-700 bold">Developer</span> */}
                    <ReactTyped
                        className="text-red-700 bold"
                        strings={["Developer", "Programmer", "Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                     />  
                    </div>
                    <br />
                    <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis error eum esse facilis distinctio minima molestiae ad deleniti impedit labore adipisci quas corporis recusandae voluptas fuga, aperiam doloribus vitae. Velit.</p>
                    <br />
                    <div className="flex md:flex-row flex-col items-center md:justify-between justify-center">
                        <div className="space-y-2">
                            <h1 className="font-bold">Available on</h1>
                            <ul className="flex space-x-5">
                                <li><FaSquareFacebook className="text-2xl cursor-pointer"/></li>
                                <li><IoLogoLinkedin className="text-2xl cursor-pointer"/></li>
                                <li><FaYoutube className="text-2xl cursor-pointer"/></li>
                                <li><FaTelegram className="text-2xl cursor-pointer"/></li>
                            </ul>                      
                        </div>
                        <div className="space-y-2 mt-5">
                            <h1 className="font-bold">Currently Working on</h1>
                            <ul className="flex space-x-5">
                                <li><SiMongodb className="text-2xl cursor-pointer"/></li>
                                <li><SiExpress className="text-2xl cursor-pointer"/></li>
                                <li><FaNodeJs className="text-2xl cursor-pointer"/></li>
                                <li><FaReact className="text-2xl cursor-pointer"/></li>
                            </ul>                      
                        </div>
                 </div>
             </div>
             <div className="md:w-1/2 md:ml-48 md:mt-16 order-1">
                <img src={pic} className="rounded-full" alt="" draggable="false" />
             </div>
         </div>
    </div>
    <hr />
</>
    )
}