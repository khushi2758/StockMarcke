import Image from "next/image";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-orbitron",
});
export default function Home() {
  const data = ["90%", "20%", "90%"];
  const data2 = ["accuracy", "precision", "sensitivity"];

  return (
    <div className="h-screen bg-neutral-900 relative      overflow-x-hidden  backdrop-blur-3xl  ">
         <div className="absolute  z-0 inset-0  w-full trxt-bold  text-center text-white top-[15%] left-[60%]  ">
        <h1 className={`${orbitron.className} text-4xl text-extrabold uppercase  font-Orbitron tracking-wider`}>VECTOR</h1>
        
      </div>
      <div className="absolute  z-0 inset-0    text-center text-white top-55 left-[66%] ">
        <div className="h-[250px]  border-2 border-white/20 rounded-lg shadow-lg w-[450px] bg-blue-200/20 backdrop-blur-3xl pl-50 p-9  b-l ">
          <h1
            className={`${orbitron.className} text-xl text-extrabold uppercase text-blue-300  font-Orbitron `}
          >
            Smart stock analysis powered by AI.
          </h1>
          <p className="  text-cyan-200 text-xs font-mono uppercase tracking-widest  ">
            Analyze market trends and predict future movements with our,
            <br /> advanced AI-powered platform.
          </p>
        </div>
      </div>
      <div className="absolute  z-50 inset-0 top-[24%] left-[65%]   ">
        <Image
          src={"/images/robo2.png"}
          alt="Background"
          className="object-cover drop-shadow-[0_20px_50px_rgba(0,150,255,0.3)] opacity-85"
          width={250}
          height={250}
        />
      </div>
      <div className="  absolute inset-0 z-30 left-[38%]  top-20 ">
        <Image
          src={"/images/robo.png"}
          alt="Background"
          width={380}
          height={380}
          className="drop-shadow-2xl"
          style={{ filter: "grayscale(10%)" }}
        />
      </div>
      <div></div>
    <div className="absolute inset-0 z-0  ">
                 <Image
                   src={"/images/bg.jpg"}
                   alt="Background"
                    layout='fill'
                   className="object-cover opacity-10  rounded-lg shadow-lg"
                 
                 />
               
               </div>
      <div className=" font-mono text-gray-300 z-50 flex flex-row absolute inset-0 top-[70%] left-[69%] gap-10   ">
        {data.map((line, i) => (
          <div
            key={i}
            className="border-2 border-white/60 p-4 h-20 w-20 bg-blue-300/20 rounded-sm shadow-lg backdrop-blur-sm justify-center items-center flex flex-col bg-[url('/images/ring.png')] bg-cover bg-center"
          >
            {line} <br />{" "}
            <span className="text-xs text-gray-400 ">{data2[i]}</span>
          </div>
        ))}
      </div>
      {/*
      <div className=" font-mono text-gray-300 z-50  absolute inset-0 top-[55%] left-[35%] gap-7 ">
        <div className="border-2 border-white/60 p-4 uppercase h-10 w-40 rounded-sm shadow-lg bg-transparent backdrop-blur-sm justify-center items-center flex flex-col">
          stock market
        </div>
      </div>
      <div className=" font-mono text-gray-300 z-50  absolute inset-0 top-[95%] left-[57%] gap-7 ">
        <div className="border-2 border-white/60 p-4 uppercase h-10 w-50 rounded-sm shadow-lg bg-transparent backdrop-blur-sm justify-center items-center flex flex-col">
          stock market
        </div>
      </div>
        */}
      <main className="relative z-20 tracking-widest text-white  min-h-screen p-23 top-[10%] space-y-6 max-w-xl ">
        {/*<h1 className="font-Poppins text-3xl  font-extrabold    max-w-3xl top-0 pt-10 "><span className="text-purple-300">Welcome,</span> market analysis <br/> and   <span className="text-olive-300">trend prediction</span> </h1>*/}

        <div className="  pt-40   ">
             <h1 className="text-4xl font-extrabold leading-tight tracking-tighter uppercase mb-4">
        Stock market analysis and <br/>trend prediction with AI.
      </h1>
          <p className="   text-xs font-mono uppercase tracking-widest text-cyan-200  ">
            Analyze market trends and predict future movements with our,
            <br /> advanced AI-powered platform.
          </p>
          <p className="   text-xs font-mono uppercase tracking-widest  ">
            Analyze market trends and predict future movements with our,
            <br /> advanced AI-powered platform.
          </p>

          <div className=" pt-4">
            <button className="border-2 border-white text-white   uppercase shadow-lg hover:bg-white/30   py-2 px-4 rounded-bl-2xl rounded-tr-2xl transition duration-300 ease-in-out transform hover:scale-105 font-mono">
              Get Started {">"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
