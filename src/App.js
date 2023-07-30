
import { useState } from 'react';
import './App.css';

function App() {

  const [result,setResult] = useState("");

  const  clickHandler = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () =>{
      setResult("");
  }

  const backSpace = () =>{
    setResult(result.slice(0,result.length - 1))
  }
  const calculate =()=>{
    
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
      
    } catch (error) {
      setResult("Error");
    }
    
  }
  return (
    <>
    <div >
      <div className='min-h-screen bg-gray-700 flex items-center justify-center'>
        <div className='bg-gray-800 border-2 border-gray-900 shadow-2xl rounded-lg'>
          <form action="" className='border-b-2 border-gray-900'>
            <input value={result} type="text" className='bg-transparent p-8 text-3xl outline-none rounded-t-lg text-right text-white focus:bg-gray-700  font-mono' placeholder='0' id='answer'/>
          </form>
          <div className='p-6 text-gray-800 text-xl grid grid-cols-4 gap-4'>
            <button  className='col-span-2 bg-blue-500 rounded-full p-5 hover:bg-blue-400 font-mono' id='clear' onClick={clear}>Clear</button>
            <button name="/" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='backspace' onClick={backSpace}>C</button>
            <button name="/" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>&divide;</button>
            <button name="1" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>1</button>
            <button name="2" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>2</button>
            <button name="3" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>3</button>
            <button name="*" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>&times;</button>
            <button name="4" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>4</button>
            <button name="5" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>5</button>
            <button name="6" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>6</button>
            <button name="+" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>+</button>
            <button name="7" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>7</button>
            <button name="8" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>8</button>
            <button name="9" className='bg-gray-500 hover:bg-gray-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>9</button>
            <button name="-" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>-</button>
            <button name="0" className='col-span-2 bg-blue-500 rounded-full p-5 hover:bg-blue-400 font-mono' id='button' onClick={clickHandler}>0</button>
            <button name="." className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={clickHandler}>.</button>
            <button name="=" className='bg-purple-500 hover:bg-purple-400 rounded-full p-5 font-mono' id='button' onClick={calculate}>=</button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
