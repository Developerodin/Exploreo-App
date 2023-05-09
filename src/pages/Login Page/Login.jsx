import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
  IonText,
} from "@ionic/react";
import React from "react";
import LoginImg from "./LoginImg.png";
const Login = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={{ border: "1px solid red" }}>
          <div>
            <img src={LoginImg} alt="Login" />
          </div>
          {/* Login text */}
          <div>
            <IonText>Log In</IonText>
            <IonText>Enter your Phone Number</IonText>
          </div>
          {/* Phone otp seaction */}
          <div>
            <div>
              <IonInput placeholder="Enter mobile number"> </IonInput>
            </div>
            <div>
              <IonButton>Send OTP</IonButton>
            </div>
          </div>
          {/* Bottam */}
          <div>
            Dont have an account ? / Sign Up
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
