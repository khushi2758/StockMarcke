import React from 'react'
import Image from 'next/image'
const login = () => {
  return (
    <div className="h-screen bg-neutral-900  text-white relative overflow-hidden    backdrop-blur-2xl   ">
    <div className="absolute inset-0 z-0">
        <Image
          src={"/images/bg.jpg"}
          alt="Background"
          fill
           className='opacity-10'
          priority
        />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#020617]/60 to-[#020617]" />
      </div> 
    <div className="absolute  z-50 inset-0  left-[50%]   ">

     <Image
          src={"/images/robo.png"}
          alt="Background"
       className="object-cover drop-shadow-[0_20px_50px_rgba(0,150,255,0.3)]"
          width={400}
          height={400}
        />
     </div>
            
               <div className="absolute inset-0 z-0  ">
             <Image
               src={"/images/bg.jpg"}
               alt="Background"
                layout='fill'
               className="object-cover   rounded-lg shadow-lg opacity-20"
             
             />
           
           </div>
            <main className="relative z-0 font-medium pt-50  tracking-widest text-white  min-h-screen px-30 left-[15%] -top-[34%] p-60 ">
              <div className='rounded-full h-170 w-170   bg-blue-200/20 backdrop-blur-2xl   sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border border-white/10 mt-10 '>
                <div className='p-20'>
                    <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
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
              
           
                <p className='pr-10 font-bold text-shadow-md'> Login with Google</p>
              </button>
                </div>
               </div>
              </div>
              </div>
      </main>
      </div>
     
  )
}

export default login