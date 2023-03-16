import React from 'react';
//import './index.css';
//import logo from './logo.svg';
import Card from "./Cards";
import Sdata from "./Sdata";

function App ()  {
return(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>

    {Sdata.map((val, index) => {
      console.log(index);
       return(
        <Card 
        key={val.id}
     imgsrc={val.imgscr}
     title={val.title}
     sname={val.sname}
     link={val.links}
     />
       );
    })}
    
     </>
     
    
    );
  }
    

export default App;
