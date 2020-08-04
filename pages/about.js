import React from 'react';
import "./styles.scss";
import About from '../Components/About/About'
const AboutUs=(props)=>{
return (
    <main><div className="container-box">
    <div className="box">

   {props.sideBar?<div className="side-bar-hidden">
      <About />
       </div> :
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <h1 className="small-screen" style={{marginBottom:props.sideBar?'5rem':'2rem'}}>INIVTA</h1>
   
  
  
  }

    <div >
        
    <div className="button-box">

    </div>
    </div>

    </div>
   

</div>
<style>
{`


`}</style> </main>
)
}
export default AboutUs;