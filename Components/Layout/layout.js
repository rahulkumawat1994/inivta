
import React,{useState} from 'react'
import Head from '../head'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
export default ({ children, settings = {},sideBar,hideSidebar }) => {


return(
    <div >
    <Head />
    <Header settings={settings} hideSidebar={e=>hideSidebar(e)} sideBar={sideBar}/>

    <div className="container1">
      <SideBar  sideBar={sideBar} hideSidebar={e=>hideSidebar(e)}/>
      <div id="layoutSidenav_content">
      {children}
      <Footer settings={settings} sideBar={sideBar}/>
      </div> 

      </div>
      
   
    <style jsx global>{`
      .container1 {
        min-height: 90vh;
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        background:${sideBar?'white ':'black'};
        
      }
      #layoutSidenav_content{
   
        top: 56px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 0;
        flex-grow: 1;
        min-height: calc(100vh - 56px);
     }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .logo {
        height: 1em;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'segoeui', sans-serif;
          background-color: #cccccc;
          background: ${settings.background?settings.background:`url("/purple-fireworks-effect.jpg")`}; 
          background-size: cover;
      }
      @font-face {
        font-family: Billabong;
        src: url(font/Billabong/Billabong.ttf);
      }
      @font-face {
        font-family: MyriadPro-Bold;
        src: url(font/MyriadPro/MyriadPro-Bold.otf);
      }
      @font-face {
        font-family: segoeui;
        src: url(font/SegoeUI/segoeui.ttf);
      }
      @font-face{
        font-family: segoeuib;
        src: url(font/SegoeUI/segoeuib.ttf);
      }
      * {
        box-sizing: border-box;
      }
  `}</style>
  </div>
)}