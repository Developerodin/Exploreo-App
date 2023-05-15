import { IonContent, IonIcon, IonInput, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import { heartOutline ,closeOutline,happyOutline,attachOutline,cameraOutline} from 'ionicons/icons'
import React, { useContext } from 'react'

import ChattingCardSender from '../Cards/ChattingCardSender'
import ChattingCardRecived from '../Cards/ChattingCardRecived'
import { useHistory, useLocation } from 'react-router'
import { AppContext } from '../../Context/AppContext'



const RecivedData=[
    {sender:"Hello, Akshay"},
    {sender:"Oh ok , I am comming"}

]

const SenderData =[
    {sender:"Hii akshay this side"},
    {sender:"Please come more closer, I can’t see you i am standing at Parking Area."}

]


const PersonalChat = (props) => {

const history=useHistory()

const{MarkerData,setTabBarVisibility,TabBarVisibility}=useContext(AppContext);
  const location = useLocation();
  const{hidetaskbar}=props;
  const path=location.pathname;
  console.log("path",TabBarVisibility);
  setTabBarVisibility(path);

const handelClose=()=>{
    console.log("close trigger");
    history.goBack();
}



  return (
    <IonPage>
        <IonContent>
        <div style={{padding:"10px",position:"fixed",zIndex:"1",background:"#FFFF",width:"100%"}}>
        <div style={{ display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>


        <div style={{width:"50px", height:"50px"}}>
        <img src="data:image/jpeg;base64,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" 
        alt='user Image' style={{ width:"100%",height:"100%",borderRadius:"100px"}}/>
        </div>
        
        <div style={{marginLeft:"10px"}}>
            <div>
            <IonText style={{fontSize:"14px",fontWeight:"bold"}}>Harshul</IonText>
            </div>
            <div>
                <IonText style={{fontSize:"11px",color:"grey"}}>12 min ago</IonText>
            </div>
        
        </div>
        
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
            <IonIcon onClick={handelClose}  style={{margin:"5px 3px 0px"}} icon={closeOutline} size="large" color="dark"></IonIcon>
            </div>
           
        
        
        </div>
       
       
      </div>
        </div>
         
         <div style={{marginTop:"100px",marginBottom:"60px"}}>
         <ChattingCardSender Data={"Hii akshay this side"} time={"12 min ago"} />
         <ChattingCardRecived Data={"Hello, Akshay"} time={"10 min ago"}/>
         
         <ChattingCardSender Data={"Please come more closer, I can’t see you i am standing at Parking Area."} time={"8 min ago"} />
         <ChattingCardRecived Data={"Oh ok , I am comming"} time={"5 min ago"}/>
         <ChattingCardSender Data={"ok"} time={"3 seconds ago"} />
         <ChattingCardSender Data={"I am near a black car"} time={"just now"} />
         <ChattingCardRecived Data={"Ok ,Is it You with white shirt"} time={"just now"}/>

         <ChattingCardSender Data={"Hii akshay this side"} time={"12 min ago"} />
         <ChattingCardRecived Data={"Hello, Akshay"} time={"10 min ago"}/>
         
         <ChattingCardSender Data={"Please come more closer, I can’t see you i am standing at Parking Area."} time={"8 min ago"} />
         <ChattingCardRecived Data={"Oh ok , I am comming"} time={"5 min ago"}/>
         <ChattingCardSender Data={"ok"} time={"3 seconds ago"} />
         <ChattingCardSender Data={"I am near a black car"} time={"just now"} />
         <ChattingCardRecived Data={"Ok ,Is it You with white shirt"} time={"just now"}/>
         <ChattingCardSender Data={"ok"} time={"3 seconds ago"} />
         </div>


         <div style={{position:"absolute",bottom:"0",width:"100%",backgroundColor:"#F6F6F6",position:"sticky",padding:"15px"}}>
            <IonList style={{borderRadius:"20px",height:"47px",display:"flex",alignItems:"center"}}>
                <IonItem style={{width:"100%"}} >
                <IonInput type='text'  placeholder='type something...'></IonInput>

            
                <IonIcon  icon={happyOutline} size='small' slot="end"></IonIcon>
                <IonIcon icon={attachOutline}size='small' slot='end'></IonIcon>
                <IonIcon icon={cameraOutline} size='small'  slot='end'></IonIcon>
              
                
                </IonItem>
            </IonList>
                
         </div>
         
        </IonContent>
    </IonPage>
  )
}

export default PersonalChat
