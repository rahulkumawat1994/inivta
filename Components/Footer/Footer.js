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
                <li className={`follow-us nav-item   col-xl-3 col-lg-3 col-sm-6 ${router.pathname==='/follow-us'&&'active'}`}   onClick={() =>{SetActive('follow-us');Router.push('/')}}><span style={{marginRight: '5%'}}>Follow</span><span>
                     us</span></li>
                <li className={`contests nav-item  col-xl-3 col-lg-3 col-sm-6 ${router.pathname==='/FaceBook'&&'active'}`} onClick={() =>{SetActive('FaceBook'); Router.push('/FaceBook')}} style={{fontFamily:'MyriadPro-Bold'}}   >facebook</li>
                <li className={`instagram nav-item col-xl-3 col-lg-3 col-sm-6 ${router.pathname==='/Instagram'&&'active'}`} onClick={() =>{SetActive('Instagram'); Router.push('/Instagram')}} style={{fontFamily: 'Billabong', textAlign: 'center'}}>Instagram</li>
                <li className="blog nav-item col-xl-3 col-lg-3 col-sm-6" ><LinkedIn color={props.sideBar?'#000 ':'#fff'}/></li>
                
                </ul>
            
        </div>
<style>{`
.footerWrapper{
    background:black;
  
    width: 100%;
 display:${props.settings.display?props.settings.display:''}
}


.nav-item{
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