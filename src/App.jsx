import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import PriceList from './Components/pricelist/PriceList';
import Dashboard from './Components/Dashboard/Dashboard';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App () {
  // const [count,setCount]=useState(0)
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600  my-6'> Hello guys!!!</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
};

export default App;