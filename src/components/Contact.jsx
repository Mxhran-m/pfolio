import React from "react";
import { useForm } from "react-hook-form"

export default function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return(
        <>
            <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <span>Make sure you fill the form</span>
                <div className="flex flex-col items-center justify-center mt-5">
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    action="https://getform.io/f/navvpgea" method="POST" 
                    className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                        <h1 className="font-semibold text-xl">Send Your Message</h1>
                       <div className="flex flex-col mb-4">
                       <label className="block text-grey-700">Full Name</label>
                        <input 
                            {...register("NameRequired", { required: true })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" 
                            name=""
                            type="name"  
                            placeholder="Enter your full name" 
                        />
                         {errors.nameRequired && <span>This field is required</span>}
                       </div>
                       <div className="flex flex-col mb-4">
                       <label className="block text-grey-700">Email Address</label>
                        <input 
                            {...register("EmailRequired", { required: true })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" 
                            name="email"
                            type="email"  
                            placeholder="Enter your email address" 
                        />
                         {errors.emailRequired && <span>This field is required</span>}
                       </div>
                       <div className="flex flex-col mb-4">
                       <label className="block text-grey-700">Message</label>
                        <textarea 
                            {...register("Type something", { required: true })}
                            className="shadow appearance-none border rounded-lg py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message" 
                            name="message"
                            type="text"  
                            placeholder="Enter your Query" 
                        />
                         {errors.exampleRequired && <span>This field is required</span>}
                       </div>
                       <button type="submit" className="bg-black hover:bg-slate-700 text-white rounded-xl px-3 py-2">Send</button>
                    </form>
                </div>
            </div>       
        </>
    )
}