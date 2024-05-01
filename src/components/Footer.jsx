import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Footer(){
    return(
        <>
        <hr />
        <footer className="py-12">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                <div className="flex flex-col items-center justify-center">
                <ul className="flex gap-5">
                    <li><RiTwitterXFill size={24}/></li>
                    <li><FaInstagram size={24}/></li>
                    <li><FaFacebook size={24}/></li>
                    <li><FaLinkedin size={24}/></li>
                </ul>
                <div className="mt-8 border-t-2 border-black pt-8 flex flex-col items-center">
                    <p> &copy; 2024. All rights reserved.</p>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}