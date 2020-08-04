import React,{useState} from 'react';

const About =(props)=>{
    
    const [memberID,setMemberId]=useState(1)

    const handleMemberId =(e)=>{
        setMemberId(e)
    }

    const member=[{
        id:1,
        name:'JAMES CHARLETON',
        details:'Hi my name is Cassian, I\'m a react developer, I\'ve developing Web and Native Apps for about 3 years now. I love working with creative induviduals that can bring strong critique as well as laugha at latest meme',
        details2:'2016 to present PayPay inc.',
        details3:'Sr. User experience designer. Foundations',
        details4:'Establishing design system artifacts and processes to improve design across the rage of product design',
        photo:'profile.png'},
        {
            id:2,
            name:'Surya Singh',
            details:'Hi my name is Surya Singh, I\'m a react developer, I\'ve developing Web and Native Apps for about 3 years now. I love working with creative induviduals that can bring strong critique as well as laugha at latest meme',
            details2:'2016 to present PayPay inc.',
            details3:'Sr. User experience designer. Foundations',
            details4:'Establishing design system artifacts and processes to improve design across the rage of product design',
            photo:'profile2.jfif'}]
return(
    <div className="main-container">
    <div className="row-1 sticky-select">
       {member.map((e)=>(<div className="thumbs" 
       style={{backgroundImage: `url(${e.photo})`,opacity:e.id===memberID?10:0.5 }} onClick={()=>handleMemberId(e.id)}></div>))}
        </div>
        <div className="row row-1">
 
    <div className="col-lg-6 col-sm-12 img-box ">  
    <div className="img-container">
{member.map((e)=>(memberID===e.id&&<img src={e.photo} className="profile-img"/>))}  
    </div>
    </div>
    <div className="col-sm-12 member-select">
        {member.map((e)=>(
        <div className="thumbs" style={{backgroundImage: `url(${e.photo})`,marginLeft:10,opacity:e.id===memberID?10:0.5 }} onClick={()=>handleMemberId(e.id)}></div>
        ))}</div>
    <div className="col-lg-4 col-sm-12 member-details">
        {member.map((e)=>(memberID===e.id&& <div>
            <h6>{e.name}</h6>
            <h2>ABOUT ME</h2>
            <p>{e.details}
            </p>
            <h6>EXPERIENCE</h6>
       <h6>{e.details2}</h6>
       <p>{e.details3}</p>
            <div>
            <h6>PROJECTS:</h6>
       <p>{e.details4} </p>
            </div>
            </div>))}
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
        justify-content: flex-end;
        position: relative;
        margin-left: 44px;
    }
    .profile-img{
            width: 26rem;
    }
    .main-container{
       display:flex;
    }
    .img-container{
        display: flex;
        }
    .sticky-select{
        display: flex;
        flex-direction: column;
        margin-left:15px;
        border-radius:50%;
        margin-top: 15rem;
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
        .profile-img{
            width: 20rem;
    }
        .img-box{
            justify-content: center;
            margin-left: 0px;
        }
       
        .sticky-select{
            margin-top: 11rem;
            position:relative;
        }
    }
    @media only screen and (max-width:750px){
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
       
        .member-details{
            margin-left:15px;
            margin-right:15px;
         
        }
    }



`}</style>
</div>
</div>
)
}
export default About