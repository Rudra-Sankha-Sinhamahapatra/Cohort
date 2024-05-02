import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
const [input,setInputValue]=useState(0);

//we can also use useEffect instead of useMemo as different codebases use different approaches
//useMemo help us to memoize 
let sum=useMemo(()=>{
  console.log('memo got called')
  let summ=0;
  for(var i=1;i<=input;i++){
    summ=summ+i;
    }
    return summ;
},[input]);


  return (
    <>
    <div>
    <input placeholder='Find sum of 1 to n' type='number' onChange={function(e){
      setInputValue(e.target.value)
    }} /> <br />
    <p>Sum from 1 to {input} is:{sum}</p>
  </div>
  <div>
    <button onClick={function(){
      setCount(count=>count+1)
    }}>Counter:{count}</button>

    </div>

    </>
  )
}

export default App
