import Image from "next/image";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-orbitron",
});
export default function Home() {
  const data = ["90%", "20%", "90%","88%"];
  const data2 = ["accuracy", "precision", "sensitivity","accuracy"];

  return (
    <div className="h-screen bg-neutral-900 relative      overflow-x-hidden  backdrop-blur-3xl  ">
       <div className="absolute  z-0 inset-0    text-center text-blue-300 top-[10%] left-[50%] rotate-90 ">
         <h1 className={`text-7xl ${orbitron.className} font-extrabold tracking-[0.7em] uppercase mb-4 blur-xs`}>VECTOR</h1>
        
      </div>

       <div className="absolute  z-0 inset-0    text-center text-white top-[85%] left-[3%] ">
        <div className="h-[90]  border-2 border-white/20 rounded-sm shadow-lg w-[450] bg-blue-100/10 backdrop-blur-3xl p-6 flex justify-center items-center  ">
          <h1
            className={`${orbitron.className} text-sm text-extrabold uppercase text-stone-100  font-Orbitron `}
          >
            Smart stock analysis powered by AI.
          </h1>
          
        </div>
      </div>
   <div className="absolute  z-50 inset-0 top-[85%] left-[3%]   ">
    <Image
          src={"/images/robo2.png"}
          alt="Background"
          className="object-cover drop-shadow-[0_20px_50px_rgba(0,150,255,0.3)] opacity-85"
          width={70}
          height={70}
        />
      </div>
      <div className="  absolute inset-0 z-30 left-[47%]  top-5 ">
        <Image
          src={"/images/robo.png"}
          alt="Background"
          width={420}
          height={420}
          className=" object-cover drop-shadow-2xl"
          style={{ filter: "grayscale(10%)" }}
        />
      </div>
      <div></div>
   <div className="absolute inset-0 z-0  ">
                 <Image
                   src={"/images/bg.jpg"}
                   alt="Background"
                    layout='fill'
                   className="object-cover opacity-40  rounded-lg shadow-lg"
                 
                 />
               
               </div>
      <div className=" font-mono text-gray-300 z-50 flex flex-row absolute inset-0 top-[70%] left-[57%] gap-5   ">
        {data.map((line, i) => (
          <div
            key={i}
            className="border-2 border-blue-200/60 p-4 h-20 w-20 bg-blue-30/20 rounded-sm shadow-lg backdrop-blur-sm justify-center items-center flex flex-col "
          >
            {line} <br />{" "}
            <span className="text-xs text-gray-400 ">{data2[i]}</span>
          </div>
        ))}
      </div>
      
      <div className=" font-mono text-gray-300 z-50  absolute inset-0 top-[50%] left-[50%] gap-7 ">
        <div className="border-2 border-blue-200/60 p-4 uppercase h-10 w-40 rounded-sm shadow-lg bg-transparent backdrop-blur-sm justify-center items-center flex flex-col">
          stock market
        </div>
      </div>
      <div className=" font-mono text-gray-300 z-50  absolute inset-0 top-[60%] left-[69%] gap-7 ">
        <div className="border-2 border-blue-200/60 p-4 uppercase h-10 w-50 rounded-sm shadow-lg bg-transparent backdrop-blur-sm justify-center items-center flex flex-col">
          stock market
        </div>
        
      </div>
       <div className=" font-mono text-gray-300 z-50  absolute inset-0 top-[28%] left-[69%] gap-7 ">
        <div className="border-2 border-blue-200/60 p-4 uppercase h-10 w-50 rounded-sm shadow-lg bg-transparent backdrop-blur-sm justify-center items-center flex flex-col">
          stock market
        </div>
        
      </div>
      
      <main className="relative z-20 tracking-widest  min-h-screen text-white p-12 top-[10%] space-y-6 ">
        {/*<h1 className="font-Poppins text-3xl  font-extrabold    max-w-3xl top-0 pt-10 "><span className="text-purple-300">Welcome,</span> market analysis <br/> and   <span className="text-olive-300">trend prediction</span> </h1>*/}

        <div className="  pt-10   ">
            <h1 className={`${orbitron.className} text-2xl  text-blue-200 text-extrabold uppercase  font-Orbitron tracking-wider`}>
        Stock market analysis and ,<br />trend prediction with AI.
      </h1>
          <p className="   text-xs font-mono uppercase tracking-widest  ">
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
