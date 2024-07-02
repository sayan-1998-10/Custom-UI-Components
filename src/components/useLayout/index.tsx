import { Button } from "@/components/ui/button";
import { useEffect, useLayoutEffect, useState } from "react"


//UseLayoutEffect should be used only if we are doing computationallly intensive tasks
//which will mutate the DOM. If we use useEffect in this case, it might cause a flicker
//after the computation which would lead to bad UX.
//Instead, make the user wait for the inital render after all the computation is done 
//and the entire side effect has run. Then only paint the browser for the first time.
function UseLayoutDemo() {
  const [toggle,setToggle] = useState(false);
  const [bgColor, setBgColor] = useState('bg-yellow-200')

  useLayoutEffect(()=>{
    for(let i=0;i<10000000;i++){}
    setBgColor('bg-green-600')
  },[])

  return (
    <div className={`w-[100vw] h-[100vh]  ${bgColor}`}>
        <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    </div>
  )
}

export default UseLayoutDemo