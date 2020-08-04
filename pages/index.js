import React, { Component , useRef } from 'react';
import Router from 'next/router'
import Layout from '../Components/Layout/layout';
import "./styles.scss";


   class App extends React.Component {
        render() {
         console.log( this.props.val)
return(

     <main><div className="container-box">
        <div className="box">

       {this.props.sideBar?<div className="side-bar-hidden"><h1 className="example">A digital firm that create unique products</h1><h3>VIDEO SHARING . HYPERLOCAL</h3></div> :
       <h1 className="small-screen" style={{marginBottom:this.props.sideBar?'5rem':'2rem'}}>INIVTA</h1>
       
      
      
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
}}
export default App;
