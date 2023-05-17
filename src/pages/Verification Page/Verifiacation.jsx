import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import LoginImg from "./LoginImg.png";
import OtpInput from 'react-otp-input';
import {callOutline,checkmarkCircleOutline,alertCircleOutline,arrowBackOutline} from 'ionicons/icons';
import { useHistory } from "react-router";
const Verifiacation = () => {

const[otp,setOtp]=useState(null);
const history = useHistory();

const handelOtp=()=>{
  if(otp.length === 4){
    if(otp === "1234"){
      console.log("Auth =",true)
      localStorage.setItem('Auth',true);
        history.push('/mainhome');
    }
    else{
      console.log("wrong otp")
    }
  }
  else{
    console.log("Fill Complete Otp of 4 digit")
  }
}

const handelBack=()=>{
  console.log("Back Button");
  history.push('/login');
}
  return (
    <IonPage>
      <IonContent>

        <div style={{position:"relative",height:"100%"}}>
          
          <IonIcon onClick={handelBack} style={{margin:"30px 0px 0px 10px"}} slot="start" icon={arrowBackOutline} size="large" color="dark"></IonIcon>
          
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={LoginImg} alt="Login" />
          </div>
          {/* Login text */}

          <div style={{marginBottom:"70px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
            <IonText style={{fontSize:"35px",fontWeight:"600"}}>Verification</IonText>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <IonText style={{fontSize:"15px",fontWeight:"400"}}>Enter<span style={{fontSize:"17px",fontWeight:"bold"}}> OTP </span> Sent to +91-1234567891</IonText>
            </div>
            
            
          </div>
          {/* Phone otp seaction */}
          <div >
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              
              <div style={{width:"90%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                {/* <IonList>
                  <IonItem >
                 
                    <IonInput maxlength="1" style={{backgroundColor:"#98E9E1",width:"50px",height:"50px",margin:"10px"}}></IonInput>
                  <IonInput style={{backgroundColor:"#98E9E1",width:"50px",height:"50px",margin:"10px"}}></IonInput>
                   
                  
                  </IonItem>
                </IonList> */}
                        
                       <OtpInput
                         inputType="password"
                          value={otp}
                          onChange={setOtp}
                          numInputs={4}
                          renderSeparator={<span style={{margin:"10px"}}></span>}
                          inputStyle={{backgroundColor:"#98E9E1",border:"none",width:"50px",height:"50px"}}
                          renderInput={(props) => <input {...props} />}
                          
                          />
                  
             
              </div>
              
            </div>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"70px"}}>
              <div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
                <IonText style={{fontSize:"15px",color:"#868686"}}>Not Recieved Yet? </IonText>
                </div>
                <div>
                <IonText style={{fontSize:"15px",fontWeight:"bold"}}>Resend OTP in  00:55 </IonText>
                </div>
             
              
              </div>
              
            </div>

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"40px"}}>
              <IonButton color="btnS" shape="round" onClick={handelOtp} >Verify</IonButton>
            </div>
          </div>
          {/* Bottam */}

          
          
        </div>
      </IonContent>
      {/* <IonFooter>
          <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"30px"}}>
           
           <IonText style={{fontSize:"15px",fontWeight:"500"}}>Dont have an account ? / <span style={{color:"#00C9B5"}}> Sign up</span></IonText>
           

         </div>
          </IonFooter> */}
    </IonPage>
  );
};

export default Verifiacation;
