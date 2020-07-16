import React,{useState} from 'react'
import Router from 'next/router';
import {useRouter} from 'next/router';
import {MdClose} from 'react-icons/md';

const Header=(props)=>{
 
    const router = useRouter()
return(
    <div className="headerWrapper">
        <div className="header">
            <div className="logo-container">
 
            <img src="" style={{width:53}}/>
            </div>
            <div className="navigation-container">
                

            <div className="name" onClick={()=>Router.push('/')}>{!props.sideBar&&'INIVTA'}</div>
            <div onClick={()=>props.hideSidebar(!props.sideBar)} className="menu-line">
            {props.sideBar?<><span id='line1'></span ><span id='line2'></span><span id='line3'></span></>:<MdClose /> }</div>
            {/* <ul className="list">
                <li className={`home nav-item ${router.pathname==='/'&&'active'}`}   onClick={() =>{SetActive('home');Router.push('/')}}>Home</li>
                <li className={`contests nav-item ${router.pathname==='/KnowMore'&&'active'}`} onClick={() =>{SetActive('KnowMore'); Router.push('/KnowMore')}}    >Know More</li>
                <li className={`featured nav-item ${router.pathname==='/WhatsNew'&&'active'}`} onClick={() =>{SetActive('whatsNew'); Router.push('/WhatsNew')}}>Featured</li>
                <li className="blog nav-item">Blog</li>
                <li className={`about nav-item ${router.pathname==='/AboutUs'&&'active'}`} onClick={() =>{SetActive('about'); Router.push('/AboutUs')}}>About Us</li>
                </ul> */}


            </div>
        </div>
<style>{`
.headerWrapper{position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
}
.logo-container{
    margin-right: 20px;
}
.menu-line{
    display: flex;
    align-items: flex-end;
    cursor:pointer;
    flex-direction: column;
}
.menu-line>svg{
    width:30px;
    height:30px;
}
#line1{
    width:30px;
}
#line2{
    width:25px;
}
#line3{
    width:20px;
}
#line1, #line2, #line3{
    border-top: 1.5px solid white;
    margin-top:5px;
    border-color:${props.sideBar?'#000 ':'#fff' };
}
.header{
    font-weight: 700;
    font-family: proxima-nova,Helvetica Neue,Helvetica,Arial,sans-serif;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-align: center;
    align-items: center;
    color: ${props.sideBar?'#000 ':'#fff' };
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    font-size: 1rem;
    height: 5.6rem;
    letter-spacing: 1px;
    padding: 12px 30px;
    background:${props.settings.background?props.settings.background:''}
}
.active{
    opacity:0.8;    
}
.header>svg{
height: 20px;
    width: 20px;
}
.navigation-container{
    display:flex;
    justify-content: space-between;
    width: 100%;
}
.name{
    justify-content: center;
    align-items: center;
    display: flex;
    font-size:20px;
    color:${props.sideBar?'#000 ':'#fff' };
    cursor:pointer
}

@media (max-width: 790px) and (min-width: 620px) {
    .nav-item{
    padding: 18px 10px 18px 10px;
    }
}
@media (max-width: 620px) and (min-width: 480px) {
    .nav-item{
    padding: 18px 8px 18px 8px;
    }
}
@media (max-width: 480px) and (min-width: 320px) {
    .nav-item{
    padding: 18px 10px 18px 10px;
    }
}

    `}</style>
    </div>
)
}
export default Header;