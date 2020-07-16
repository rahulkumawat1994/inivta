import React,{useState,useEffect} from 'react'
import Router from 'next/router';
// import cookie from "js-cookie";
import {useRouter} from 'next/router';


const SideBar=(props)=>{
  const  deleteItems=(e)=> {
        // cookie.remove("token");
         Router.push("/login")
       }
       const router = useRouter();
    return(
        <div id="layoutSidenav" hidden={props.sideBar}>        
        <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                    <a class={`nav-link  ${router.pathname==='/'&&'active'}`} href="javascript:void(null);"
                    onClick={()=>Router.push("/")} >
                                <div class="sb-nav-link-icon"></div>
                                Home
                            </a>
                            <a class={`nav-link  ${router.pathname==='/product'&&'active'}`} href="javascript:void(null);" onClick={()=>Router.push("/product")}>
                                <div class="sb-nav-link-icon"></div>
                                Product
                            </a>
                            <a class={`nav-link  ${router.pathname==='/about'&&'active'}`}href="javascript:void(null);" onClick={()=>Router.push("/about")}>
                                <div class="sb-nav-link-icon"></div>
                                About
                            </a>
                            <a class={`nav-link  ${router.pathname==='/contant'&&'active'}`}href="javascript:void(null);" onClick={()=>Router.push("/contant")}>
                                <div class="sb-nav-link-icon"></div>
                                Contant
                            </a>
                    </div>
                </div>
                </nav>
                </div>

    <style>{`
    #layoutSidenav {
        display: flex;
    }
    #layoutSidenav, #layoutSidenav_nav {
        width: 320px;
        height: 100vh;
        z-index: 1038;
        right:0;
        position: fixed;
    }
    #foo {
        transition-property: visibility, opacity;
        transition-duration: 0, 1s;
    }
    #foo.hidden {
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: 1s, 0;
        transition-delay: 0, 1s;
    }
    .nav{
        display:flex;
        margin-top: 90px;
        flex-direction:column;
    }
    .nav-link{
        color: rgba(255, 255, 255);
        font-size:4rem;
        font-weight: 900;
        font-family:segoeuib;
        padding: 12px 1px;
       
    }
    .sb-nav-link-icon{
       
        
    }
    .active{
        color:blue;
    }
    @media only screen and (max-width:1200px){
        #layoutSidenav, #layoutSidenav_nav {
            width: 300px;
        }
        .nav-link{
        font-size:4rem;}
    }
    @media only screen and (max-width:1024px){
        #layoutSidenav, #layoutSidenav_nav {
            width: 220px;
        }
        .nav-link{
        font-size:3rem;}
    }
    @media only screen and (max-width:768px){
        #layoutSidenav, #layoutSidenav_nav {
            width: 180px;
        }
        .nav-link{
        font-size:2.5rem;}
    }
    @media only screen and (max-width:620px){
        #layoutSidenav, #layoutSidenav_nav {
            width: 160px;
        }
        .nav-link{
        font-size:2rem}
    }
    @media only screen and (max-width:480px){
        #layoutSidenav, #layoutSidenav_nav {
            width: 140px;
        }
        
        .nav-link{
        font-size:1.5;}
    }
    `}</style>
       
        </div>
    )
}
export default SideBar;