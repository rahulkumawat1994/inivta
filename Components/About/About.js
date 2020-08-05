import React,{useState} from 'react';
import MemberData from './MemberData';
const About =(props)=>{
    
    const [memberID,setMemberId]=useState(1)

    const handleMemberId =(e)=>{
        setMemberId(e)
    }

    
return(
    <div className="main-container">
        <div className="row row-1">
 
    <div className="col-lg-6 col-sm-12 img-box">  
    {MemberData.map((e)=>(memberID===e.id&& <div className="img-container" style={{backgroundImage: `url(${e.photo})`}}> 
    </div>))}
    </div>
    <div className="col-sm-12 member-select">
        {MemberData.map((e)=>(
        <div className="thumbs" style={{backgroundImage: `url(${e.photo})`,marginLeft:10,opacity:e.id===memberID?10:0.5 }} onClick={()=>handleMemberId(e.id)}></div>
        ))}</div>
    <div className="col-lg-4 col-sm-12 member-details">
        {MemberData.map((e)=>(memberID===e.id&& <div>
            <h6>{e.name}</h6>
            <h2>ABOUT ME</h2>
            <p>{e.details}
            </p>
            <h6 style={{fontWeight:600}}>EXPERIENCE:</h6>
       {/* <h6 >{e.details2}</h6> */}
       {e.experience.map((indata)=><p style={{marginBottom: '0rem'}}>{indata}</p>)}
            <div>
            <h6 style={{fontWeight:600,marginTop:10}}>PROJECTS:</h6>
       <p>{e.project} </p>
            </div>
            </div>))}
    </div>
    <div className="row-1 sticky-select">
       {MemberData.map((e)=>(<div className="thumbs" 
       style={{backgroundImage: `url(${e.photo})`,opacity:e.id===memberID?10:0.5 }} onClick={()=>handleMemberId(e.id)}></div>))}
        </div>
    <div className="col-lg-2 col-sm-1 extra"> </div>
<style>{`
 .main-container{
     display:flex;
 }
    .row-1{
        color:black;
        margin-right: 0px;
    }
    .side-bar-hidden{
        margin-top: 3rem;
    }
    .img-box{
        display: flex;
        max-width:28rem;
        justify-content: flex-end;
    }
    .profile-img{
            width: 26rem;
    }
    .main-container{
       display:flex;
    }
    .img-container{
        display: flex;
        min-width: 28rem;
        max-height: 30rem;
        min-height: 34rem;
        max-width: 28rem;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        }
    .sticky-select{
        display: flex;
        flex-direction: column;
        right: 121px;
        border-radius:50%;
     margin-top: 7rem;
        cursor:pointer;
        position: fixed;
        z-index:10;

    }
    .thumbs{
        background-size: cover;
        background-position: center center;
        width: 60px;
        height: 60px;
        margin-top: 5px;
        margin-bottom: 5px;
        -webkit-border-radius: 60px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 60px;
        -moz-background-clip: padding;
        border-radius: 60px;
        background-clip: padding-box;
        float: left;
    }
    
    .sticky-img{
        border-radius:50%;
        vertical-align: middle;
        height:100px;
        width:100px;
    }
    .member-select{
        display:none;
        cursor:pointer;
    }

    @media only screen and (max-width:992px){
        .member-select{
            display:flex;
            justify-content: center;
            margin-top:15px;

        }
        .profile-img{
            width: 20rem;
    }
        .img-box{
            max-width:100%;
            justify-content: center;
            margin-left: 0px;
        }
       
        .sticky-select{
            margin-top: 11rem;
            position:relative;
        }
        .sticky-select{
            display:none;
            margin-top:0px;
         }
         .member-details {
            padding-left: 41px;
            padding-right: 41px;
        }
        .extra{
            display:none;
        }
    }
    @media only screen and (max-width:750px){
        .thumbs{
            width:100px;
            height:100px;
        }
        
        .member-select{
            display:flex;
            align-items: center;
            margin-top:1rem;
            justify-content: center;
            margin-bottom: 3rem;
        }
        .main-container{
            flex-direction:column;
        }
        .img-box{
                display:none;
        }
        .sticky-select{
           display:none;
        }
        .extra{
            display:none;
        }
       
      
    }
    @media only screen and (max-width:480px){
        .thumbs{
            width:60px;
            height:60px;
        }
    }



`}</style>
</div>
</div>
)
}
export default About