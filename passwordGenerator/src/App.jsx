import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [password, setPassword] = useState("")
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(specialCharAllowed) str +="!#%&()+,-/:;<=>?@[]^{|}~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
      
    }
    setPassword(pass);
  },[length,numberAllowed,specialCharAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,specialCharAllowed,passwordGenerator])
  return (
    <>
      <div className='h-screen w-auto flex items-center justify-center bg-black'>
        <div className='w-max h-auto justify-center bg-slate-600 rounded-lg'>
          <h1 className=' text-4xl text-white text-center m-10 '>Password Generator</h1>
          <div className='flex justify-center m-6'>
              <input className='w-full h-10 bg-white rounded'
                type='text'
                value={password}
                readOnly
                placeholder='Password'
                ref={passwordRef}
              ></input>
              <button 
              onClick={copyPasswordToClipboard}
              className='bg-blue-400 px-3 rounded hover:opacity-75 cursor-pointer'>Copy</button>
            </div>
            <div className='flex text-sm gap-x-2  text-teal-400 m-4'>
              <input
              type='range'
              min={8}
              max={30}
              value={length} 
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
              />
              <label className='text-base'>length: {length}</label>
              <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }}
              /><label htmlFor='numberInput' className='text-base'>Numbers</label>
              <input
              type='checkbox'
              defaultChecked={specialCharAllowed}
              id='specialCharInput'
              onChange={()=>{
                setSpecialCharAllowed((prev)=> !prev);
              }}
              /><label htmlFor='specialCharInput' className='text-base'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
