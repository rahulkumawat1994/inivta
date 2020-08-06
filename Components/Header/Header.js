import React,{useState} from 'react'
import Router from 'next/router';
import {useRouter} from 'next/router';
import {MdClose} from 'react-icons/md';
import './header.scss'
const Header=(props)=>{
 
    const router = useRouter()
    let menuStatus = props.sideBar ? '' : 'isopen';
return(
    <div className="headerWrapper">
        <div className="header">
            <div className="logo-container">
 
            <img src="" style={{width:53}}/>
            </div>
            <div className="navigation-container">
                

            <div className="name" onClick={()=>Router.push('/')}>{props.sideBar&&'INIVTA'}</div>
            <div className="small-size" onClick={()=>Router.push('/')}>{!props.sideBar&&'INIVTA'}</div>
            <div onClick={()=>props.hideSidebar(!props.sideBar)} className="menu-line">
            {/* {props.sideBar?<><span id='line1'></span ><span id='line2'></span><span id='line3'></span></>:<MdClose /> } */}
            <div id="hambmenu" className={menuStatus} ><span></span><span></span><span></span><span></span></div>
            </div>
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
.small-size{
    color:${props.sideBar?'#000 ':'#fff' };
}
.headerWrapper{
    background:${props.sideBar?'#fff ':'#000 ' };
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

.name{
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    color:${props.sideBar?'#000 ':'#fff' };
    cursor:pointer
}
#hambmenu span{
    background:${props.sideBar?'#000 ':'#fff' };
} 

@media only screen and (max-width:480px){
	.small-size{
		display: flex;
	}
	.name{
		display: ${props.sideBar?'flex':'none !important'};
	}
}


    `}</style>
    </div>
)
}
export default Header;