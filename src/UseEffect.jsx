import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2]  = useState(0)

// TYPE 1 of UseEffect on the basis of execution
// useEffect(()=>{

//     // api bata data lyadey 
//     console.log("Hello World")
// },[])

// Type 2 of UseEffect on the basis of execution
// useEffect(()=>{
//     document.title  = count
//     console.log("useEffect Triggered")
// },[count,count2])

// Type 3 of useEffect on the basis of Execution

const consoleLog = ()=>console.log("UseEffect Triggered")

useEffect(()=>{
    consoleLog()
})


  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>Count2 : {count2}</h1>
        <button onClick={()=>setCount2(count2-1)}>-</button>
    </div>
  )
}

export default UseEffect