import { IonButton, IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import frame from "./IntroScreenBg.png"
import AvtarImg from "./AvtarImg/AvtarLogo.png"
import AvtarImg2 from "./AvtarImg/AvtarLogo2.png"
import AvtarImg3 from "./AvtarImg/AvtarLogo3.png"
import AvtarImg4 from "./AvtarImg/AvtarLogo4.png"

import "./Style.css";
import { useHistory } from 'react-router';
const IntroScreen = () => {
const history=useHistory();
const handelClick=()=>{
history.push("/login");
}

const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3_iJHZlpga0eLL_VRGVUhPpYc5N-cOJNMQ&usqp=CAU"

const img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3_iJHZlpga0eLL_VRGVUhPpYc5N-cOJNMQ&usqp=CAU"
  
const img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wuSCruSMdKO5B8ZKTRx_PIUxnpCUyjPIoA&usqp=CAU"

return (
   <IonPage>
    <IonContent >
        <div style={{backgroundColor:"#00C9B5",height:"100%",border:"0.1px solid #00C9B5"}}>
        <div style={{border:"0.1px solid #00C9B5",background:`url(${frame})`,backgroundRepeat: "no-repeat",backgroundPosition:"center",position:"relative",top:"50px",backgroundColor:"#00C9B5"}}>
       
        <div className='circle-container'>

        <a href='#' className='deg90'><img alt="deg90" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src= {AvtarImg}/></a>

        <a href='#' className='deg225'><img alt="deg225" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg2}/></a>
        <a href='#' className='deg270'><img alt="deg270" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg3}/></a>
        <a href='#' className='deg315'><img alt="deg315" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg4}/></a>
        </div>

        </div>
 


         
         <div style={{position:"absolute",top:"56%",backgroundColor:"#00C9B5",margin:"auto",left:"0",right:"0"}}>
         
         <div style={{fontSize:"45px",textAlign:"center",fontWeight:"bold"}}>
            <IonText color="light">
            Find Your 
             Community!
            </IonText>
         </div>
        
        <div style={{marginTop:"109px",display:"flex",justifyContent:"center"}}>
            <IonButton onClick={handelClick} color="light" shape="round" style={{fontSize:"14px",fontWeight:600,height:"68px"}}>Get Started</IonButton>
        </div>

         </div>
       
        </div>
      
    </IonContent>
   </IonPage>
  )
}

export default IntroScreen
