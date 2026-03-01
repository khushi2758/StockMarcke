import Image from "next/image";

export default function Home() {
  
  return (
    <div className="h-screen bg-gradient-to-br from-[#04022a] via-[#020012] to-[#090909] bg-url bg-[url('/images/bg.jpg')] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat  ">

    <div className="absolute  z-0 inset-0 top-1/2 left-[77%] -translate-x-1/2 w-full max-w-5xl px-4 text-center text-white/45  ">

     {/*   <Image
          src={"/images/robo-bg-layer.png"}
          alt="Background"
          layout="fill"
          className="object-cover opacity-70  "
        />*/}

        <h1 className="font-bold text-9xl uppercase font-mono tracking-widest">VEC TOR</h1>
      </div>
      <div className="absolute top-[20%] left-[90%] -translate-x-1/2 z-20  w-full max-w-3xl px-4 text-center">
        <Image
          src={"/images/robo.png"}
          alt="Background"
          width={300}
          height={300}
          className="object-cover opacity-100  rounded-lg shadow-lg"
        
        />
      
      </div>

   

      
 
      <main className="relative z-20 font-medium pt-30  tracking-widest text-white  min-h-screen px-10 ">
    
    <h1 className="font-mono text-3xl pb-25 t uppercase "><span className="text-indigo-300">Welcome,</span><br /> to the future of stock <br/> market analysis and  <br /> <span className="text-olive-300">AI-powered trend <br/> prediction</span></h1>
    <div className="max-w-xl border-2 border-white/20 rounded-lg p-6  bg-white/10 backdrop-blur-3xl  ">
    <p className="  text-mauve-400 text-xs font-mono uppercase tracking-widest ">Analyze market trends and predict future movements with our,<br /> advanced AI-powered platform.</p>
        <p className="  text-mauve-400 text-xs font-mono uppercase tracking-widest">Advanced stock market analysis and trend,<br /> prediction using machine learning algorithms to help investors ,<br />make smarter and faster decisions.</p>
      </div> 
      </main>
    </div>
  );
}
