import React from 'react';
import Menubar from './Menubar';
import MenuGrid from './MenuGrid';

const click =(value)  => {
  value = !value; 
  console.log(value)
}

function App() {
  let flag = false;

  
  return (
    <div >
      <div>
        <img src="https://b2uaz1oxmi.user-space.cdn.idcfcloud.net/wp/wp-content/uploads/2019/02/001.jpg" width="600px" height="200px"></img>
      </div> 
      <Menubar flag={flag} click={click}/>      
      <MenuGrid/>      
    </div>
  );
}

export default App;
