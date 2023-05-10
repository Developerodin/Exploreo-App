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
import React from "react";
import LoginImg from "./LoginImg.png";
import {callOutline,checkmarkCircleOutline,alertCircleOutline,arrowBackOutline} from 'ionicons/icons';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {

  const history=useHistory();

  const handelClick=()=>{
    history.push("/verification")
  }

  const handelBackClick=()=>{
    history.push("/home")
  }
  return (
    <IonPage>
      <IonContent>

        <div style={{position:"relative",height:"100%"}}>
          
          <IonIcon onClick={handelBackClick} style={{margin:"30px 0px 0px 10px"}} slot="start" icon={arrowBackOutline} size="large" color="dark"></IonIcon>
          
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={LoginImg} alt="Login" />
          </div>
          {/* Login text */}

          <div style={{marginBottom:"70px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
            <IonText style={{fontSize:"35px",fontWeight:"600"}}>Log In</IonText>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <IonText style={{fontSize:"15px",fontWeight:"400"}}>Enter your<span style={{fontSize:"17px",fontWeight:"bold"}}> Phone Number </span></IonText>
            </div>
            
            
          </div>
          {/* Phone otp seaction */}
          <div >
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              
              <div style={{width:"90%"}}>
                <IonList>
                  <IonItem>
                  
                  <IonInput type="number" placeholder="Enter mobile number" style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                  <IonIcon slot="start" icon={callOutline} size="small" style={{marginRight:"10px"}} color="dark"></IonIcon>
                  </IonInput>
                  <IonIcon slot="end" icon={false ? checkmarkCircleOutline : alertCircleOutline } size="large" color={true ? "btnS" : "danger"}></IonIcon>
                  </IonItem>
                </IonList>
             
              </div>
              
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
              <IonButton color="btnS" shape="round" onClick={handelClick}>Send OTP</IonButton>
            </div>
          </div>
          {/* Bottam */}

          
          
        </div>
      </IonContent>
      <IonFooter>
          <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"30px"}}>
           
           <IonText style={{fontSize:"15px",fontWeight:"500"}}>Dont have an account ? / <Link to="/signup"><span style={{color:"#00C9B5"}}> Sign up</span></Link> </IonText>
           

         </div>
          </IonFooter>
    </IonPage>
  );
};

export default Login;
