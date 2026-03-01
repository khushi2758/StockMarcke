import Image from "next/image";

export default function Home() {
  
  return (
    <div className="h-screen bg-gradient-to-br from-[#04022a] via-[#020012] to-[#090909] bg-url bg-[url('/images/bg.jpg')] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat  ">

    <div className="absolute  z-0 inset-0 top-[40%] left-[70%] -translate-x-1/2 w-full max-w-5xl px-4 text-center text-white/45  ">

     {/*   <Image
          src={"/images/robo-bg-layer.png"}
          alt="Background"
          layout="fill"
          className="object-cover opacity-70  "
        />*/}

        <h1 className=" text-[10rem] uppercase font-mono tracking-widest">VEC TOR</h1>
      </div>
        <div className="absolute inset-0 z-20   ">
        <Image
          src={"/images/bg.png"}
          alt="Background"
         fill
          className="object-cover opacity-100  rounded-lg shadow-lg"
        
        />
      
      </div>
      <div className="absolute top-[20%] left-[83%] -translate-x-1/2 z-20  w-full max-w-3xl px-4 text-center">
        <Image
          src={"/images/robo.png"}
          alt="Background"
          width={300}
          height={300}
          className="object-cover opacity-100  rounded-lg shadow-lg"
        
        />
      
      </div>

   

      
 
      <main className="relative z-20 font-medium pt-50  tracking-widest text-white  min-h-screen px-30 ">
    
    <h1 className="font-mono text-3xl  font-bold   uppercase "><span className="text-indigo-300">Welcome,</span><br /> to the future of stock <br/> market analysis and  <br /> <span className="text-olive-300">AI-powered trend <br/> prediction</span>
    
    <p className="  text-mauve-400 text-xs font-mono uppercase tracking-widest ">Analyze market trends and predict future movements with our,<br /> advanced AI-powered platform.</p></h1>
    

              <div className=" pt-2">
       <button className="border-0 border-white/20  bg-white/10 backdrop-blur-3xl uppercase shadow-lg hover:bg-white/30 text-white/90  py-2 px-4 rounded-sm transition duration-300 ease-in-out transform hover:scale-105 font-mono">Get Started {">"}</button>
    </div>
 
      </main>
    </div>
  );
}
