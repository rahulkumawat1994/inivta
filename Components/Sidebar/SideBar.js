import React,{useState,useEffect} from 'react'
import Router from 'next/router';
// import cookie from "js-cookie";
import {useRouter} from 'next/router';
import "./sidebar.scss";


const SideBar=(props)=>{
  const  deleteItems=(e)=> {
        // cookie.remove("token");
         Router.push("/login")
       }
       const router = useRouter();
       let menuStatus = props.sideBar ? '' : 'isopen';
    return(
        <div class={`layoutSidenav  ${menuStatus}`} >        
        <div class={`layoutSidenav_nav  ${menuStatus}`}>
        <nav class="sb-sidenav accordion sb-sidenav-dark">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                    <a class={`nav-link  ${router.pathname==='/'&&'active'}`} href="javascript:void(null);"
                    onClick={()=>Router.push("/")} >
                                <div class={`sb-nav-link-icon`}></div>
                                Home
                            </a>
                            <a class={`nav-link  ${router.pathname==='/product'&&'active'}`} href="javascript:void(null);" onClick={()=>Router.push("/product")}>
                                <div class="sb-nav-link-icon example"></div>
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

      .nav-link{
        color: ${ props.sideBar?'rgb(0, 0, 0) ':'rgb(255, 255, 255)'};
        
       
      }
     
      .active{
        color:blue;
      }       
    `}</style>
       
        </div>
    )
}
export default SideBar;