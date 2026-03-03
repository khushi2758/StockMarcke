import React from 'react'
import Image from 'next/image'

import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-orbitron",
});
const login = () => {
  return (
    <div className="h-screen bg-[#020617]  text-white/40 relative overflow-hidden    ">
    <div className="absolute  z-40 inset-0    text-center text-blue-300/80 top-[70%] left-[40%]  ">
         <h1 className={`text-9xl ${orbitron.className}  tracking-[0.2em] uppercase mb-4 `}>VECTOR</h1>
        
      </div>
    
  
       
               <div className="absolute inset-0 z-10  ">
             <Image
               src={"/images/bg.jpg"}
               alt="Background"
                layout='fill'
               className="object-cover   rounded-lg  opacity-10"
             
             />
           
          
            </div>
            <div className="absolute inset-0 z-0  ">
             <Image
               src={"/images/laptop2.jpg"}
              alt="laptop"
                 
          width={450}
          height={450}
               className="object-cover   rounded-lg  "
             
             />
            </div>
            <div className="absolute inset-0 z-0  left-2/5 -top-[20%] ">
             <Image
               src={"/images/laptop2.jpg"}
               alt="laptop"
                 
          width={850}
          height={550}
               className="object-cover   rounded-lg opacity-40  "
             
             />
           </div>
            <main className="relative z-20 font-medium pt-50  tracking-widest text-white  min-h-screen px-30 -left-[10%] -top-[34%] p-60 ">
              <div className='rounded-2xl h-170 w-170   bg-blue-200/20 backdrop-blur-2xl   sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border border-white/10 mt-10 '>
                <div className='p-20'>
                    <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Welcome 
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Enter your details
            </p>
          </div>

          <form className="space-y-6">
            <div className="group">
              <label className="text-xs font-medium uppercase tracking-widest text-slate-300 mb-2 block ml-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-400"
              />
            </div>

            <div className="group">
              <label className="text-xs font-medium uppercase tracking-widest text-slate-300 mb-2 block ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-400"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-[0.98]">
              Sign In
            </button>
          </form>

          
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-white/10 w-full"></div>
              <span className="bg-transparent px-4 text-xs text-slate-500 uppercase tracking-widest absolute italic">Or connect via</span>
            </div>
            
            <div className="flex justify-center gap-4">
                  <button
                  className="w-80 h-22 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between  p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group "
                >
              
            <Image src={"/images/google.jpg"} alt="Google" className="w-20 h-20 rounded-full p-2 cursor-pointer" width={20} height={20} />
                <p className='pr-10 font-bold text-shadow-md'> Login with Google</p>
                    
              </button>
               
                </div>
                 <p className="text-center mt-8 text-slate-500 text-sm">
          Don&apos;t have an account? <span className="text-blue-400 cursor-pointer hover:underline">Launch a new profile</span>
        </p>
   
                
               </div>
               
              </div>
          
              </div>
      </main>
      </div>
     
  )
}

export default login