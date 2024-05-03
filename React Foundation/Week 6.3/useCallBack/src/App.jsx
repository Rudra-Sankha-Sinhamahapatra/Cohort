import { memo, useCallback, useEffect, useMemo, useState } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },5000)
  }, [])

  //useCallBack is not anout minimizing the amount of code that is run
//useCallBack is about not rendering a child component,if the function hasnt/dosent need to change across renders
  const cryptoReturns=useCallback(()=>{
    console.log("Hii there before");
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data,exchange2Data])

  const incomeTax = (cryptoReturns() + bankData.income) * 0.3

  return (
    <div>
      incomeTax is {incomeTax}
       <Child cryptoReturns={cryptoReturns} />
    </div>
  )
}



const Child=memo(function({cryptoReturns}){
  console.log('child re rendered');
return(
  <>
  <div>
    Your Crypto returns are {cryptoReturns()}
  </div>
  </>
)
});

export default App