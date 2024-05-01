import React from "react";
export default function Portfolio(){
    const cardItem = [
        {
            id:1,
            logo: "https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo.png",
            name: "MondoDB"
        },
        {
            id:2,
            logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            name: "Express"
        },
        {
            id:3,
            logo: "https://imgs.search.brave.com/rYgXtcxrJ0JnUEju8F4HsG0ysjbA4BwCkrnqb_CQwbU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tMDY1MjU3/REUyNC1zZWVrbG9n/by5jb20ucG5n",
            name: "NodeJs"
        },
        {
            id:4,
            logo:"https://imgs.search.brave.com/_regFAa4l9DxlqOraegbTkkM_wM0gSzc5MY7muD2etU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzBmNWNlZjEw/MTRjMGI1ZTRhYTEu/cG5n",
            name: "ReactJS"
        },
        {
            id:5,
            logo: "https://imgs.search.brave.com/nfc0RFAmd3Ej2w4XLDoj6xN-hW_Qmr9VDRwjdlHScVg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QeXRob24tTG9n/by1QTkctSW1hZ2Uu/cG5n",
            name: "Python"
        },
        {
            id:6,
            logo:"https://logodix.com/logo/283048.jpg",
            name: "Java"
        },
    ]
    return(
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                <h2 className="underline font-semibold mb-5">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {
                        cardItem.map(({id, logo, name}) => (
                            <div className="md:w-[300px] md:h-[300px] rounded-lg shadow-lg cursor-pointer border-2 p-4 hover:scale-105 duration-500 mt-2"  key={id}>
                                <img src={logo} className="w-[120px] h-[120px] object-contain p-1 rounded-full border shadow-xl" alt="" />
                                <h2 className="font-bold mt-2 text-xl md:text-2xl">{name}</h2>
                                <p className="font-light text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="flex justify-around items-center p-5">
                                    <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold text-white rounded">open</button>
                                    <button className="bg-green-500 hover:bg-green-700 px-4 py-2 font-bold text-white rounded">source code</button>
                                </div> 
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}