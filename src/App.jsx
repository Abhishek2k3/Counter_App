import "./App.css";
import { useState } from "react";

function App() {
  
  const [count , setCount]= useState(0);

  function subHandler(event){
       setCount(count-1);
  }

  function addHandler(event){
    setCount(count+1);
}

function clickHandler(event){
  setCount(0);
}

  return (
    <>
    <div className="bg-[#344151] h-[100vh] w-[100vw] flex items-center justify-center flex-col gap-10">
        <div className="text-white text-5xl">Increment & Decrement</div>

        <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={subHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"  >-</button>
        <div  className="font-bold gap-12 text-5xl">{count}</div>
        <button  onClick={addHandler} className="border-l-2 w-20 border-[#bfbfbf] text-5xl">+</button>
        </div>

  
        <button  onClick={clickHandler}className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg ">Reset</button>
    </div>
    </>
  );
}

export default App;
