import React,{useState} from 'react'
import Router from 'next/router'
import {useRouter} from 'next/router';
import LinkedIn from './linkedin'
import './footer.scss'
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
                <li className="blog nav-item col" ><LinkedIn/></li>
                
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



    `}</style>
    </div>
)
}
export default Footer;