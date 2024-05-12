import { useState,useEffect} from 'react'
import React from 'react';
import './App.css'

function App() {
const [render,setRender]=useState(true);

useEffect(()=>{
setTimeout(()=>{
 setRender(false);
},10000)
},[])

  return (
    <>
    {/* <MyComponent/> */}
    {/* <MyComponentt/> */}
    {/* {render?<MyComponent1/>:<div></div>} */}
    {render?<MyComponent2/>:<div></div>}
    </>
  )
}


function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

class MyComponentt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


function MyComponent1() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("Mounted");
    return () => {
      console.log("Component unmounted");
      // Cleanup code (similar to componentWillUnmount)
    };
  }, []);
return(
  <>
  <div>inside</div>
  </>
)
  // Render UI
}

class MyComponent2 extends React.Component {
  componentDidMount() {
    console.log('mounted');
    // Perform setup or data fetching here
  }

  componentWillUnmount() {
    console.log('unmounted');
    // Clean up (e.g., remove event listeners or cancel subscriptions)
  }

  render() {
    // Render UI
  }
}

export default App
