import React,{useState} from 'react'
import Router from 'next/router'
import {useRouter} from 'next/router';
const Footer=(props)=>{
    const [active,SetActive]=useState('home')
    const router = useRouter()
return(
    <div className="footerWrapper">
        <div className="footer">
               <ul className="list row">
                <li className={`home nav-item   col ${router.pathname==='/follow-us'&&'active'}`}   onClick={() =>{SetActive('follow-us');Router.push('/')}}>Follow us</li>
                <li className={`contests nav-item  col ${router.pathname==='/FaceBook'&&'active'}`} onClick={() =>{SetActive('FaceBook'); Router.push('/FaceBook')}} style={{fontFamily:'MyriadPro-Bold'}}   >facebook</li>
                <li className={`featured nav-item col ${router.pathname==='/Instagram'&&'active'}`} onClick={() =>{SetActive('Instagram'); Router.push('/Instagram')}} style={{fontFamily: 'Billabong', textAlign: 'center'}}>Instagram</li>
                <li className="blog nav-item col" ><img src="/Linkedin/png-ios/Group-3.png" style={{width:160}}/></li>
                
                </ul>
            
        </div>
<style>{`
.footerWrapper{
    background:black;

    width: 100%;
 display:${props.settings.display?props.settings.display:''}
}
.list{
    width: 72%;
}

.nav-item{
    display: flex;
    align-items: center;
    padding: 18px 30px 18px 30px;
    font-weight:900;
    font-size:43px;
    cursor: pointer;
    color:${props.sideBar?'#000 ':'#fff' };
 
 }
 ul>li:hover{
    opacity:.8;
 }
.footer{
    -ms-flex-line-pack: center;
    background:${props.sideBar?'#fff ':'#000' };
    align-content: center;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    font-size: 1rem;
    height: auto;
    letter-spacing: 1px;
    padding: 12px 30px;
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
    
}

.border{
    margin-top:1rem;
    border-top: 0.5px inset;
    padding-bottom: 1rem;
}
ul>li:hover{
   opacity:.8;
}
ul>h6{
    font-size:1.4rem;
}


    `}</style>
    </div>
)
}
export default Footer;