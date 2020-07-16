import React, { Component , useRef } from 'react';
import Router from 'next/router'
import Layout from '../Components/layout';



   class App extends React.Component {
        render() {
return(
  <Layout>
     <main><div className="container-box">
        <div className="box">

        <h1>INIVTA</h1>

        <div >
            
        <div className="button-box">
    
        </div>
        </div>

        </div>
       
<style>{`
.container-box{
    width: 100%;
    // backdrop-filter: blur(50px);
    // padding: 45px;
}
main {
//   padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
}


.box{
    // justify-content: center;
    // align-items: center;
    display: flex;
    color:white;
 
    flex-direction: column;
}
.box>h1{
    font-size:10rem;
       margin-left:4rem;
}
@media (max-width: 800px) and (min-width: 320px) {
  .box>h1{
    font-size:4rem;
       margin-left:4rem;
}
}

    `}</style>
    </div> </main></Layout>
)
}}
export default App;
