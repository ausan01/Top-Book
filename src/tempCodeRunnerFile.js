import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import sdata from './stdcomp';

const App=()=>(
<>
    <h1 className="heading_style"> List of Famous Book</h1>

    
    {sdata.map(
      function bCard(val){
return(
  <Card
    imgsrc={val.imgsrc}
    info={val.info}
    title={val.title}
    links={val.links}
  />

);
})}
  </>);
export default App;