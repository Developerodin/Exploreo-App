import { IonButton, IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import frame from "./IntroScreenBg.png"
import AvtarImg from "./AvtarImg/AvtarLogo.png"
import "./Style.css";
const IntroScreen = () => {
  return (
   <IonPage>
    <IonContent >
        <div style={{backgroundColor:"#00C9B5",height:"100%",border:"0.1px solid #00C9B5"}}>
        <div style={{border:"0.1px solid #00C9B5",background:`url(${frame})`,backgroundRepeat: "no-repeat",backgroundPosition:"center",position:"relative",top:"50px"}}>
       
        <div class='circle-container'>
        <a href='#' class='deg45 bgImg'><img alt="deg45" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg}/></a>
        <a href='#' class='deg90'><img alt="deg90" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src= {AvtarImg}/></a>
        <a href='#' class='deg135'><img alt="deg135" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg}/></a>
        <a href='#' class='deg225'><img alt="deg225" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg}/></a>
        <a href='#' class='deg270'><img alt="deg270" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg}/></a>
        <a href='#' class='deg315'><img alt="deg315" style={{borderRadius:"50px",backgroundColor:"#bcbcbce0"}} src={AvtarImg}/></a>
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
            <IonButton color="light" shape="round" style={{fontSize:"22px",fontWeight:600}}>Get Started</IonButton>
        </div>

         </div>
       
        </div>
      
    </IonContent>
   </IonPage>
  )
}

export default IntroScreen
