import { IonContent, IonIcon, IonLabel, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery';
import Saved from '../../components/ProfileSaved/Saved';
import { bookmarkOutline, imageOutline } from 'ionicons/icons';
import EventDetail from './EventDetail';
import InviteFriends from './InviteFriends';

const Events = () => {
    const [selectedTab, setSelectedTab] = useState('EventDetail');
  const history=useHistory();

    const renderComponent = () => {
        switch (selectedTab) {
          case 'EventDetail':
            return <EventDetail />;
          case 'InviteFriends':
            return <InviteFriends/>;
        
          default:
            return null;
        }
      };
  return (
    <IonPage>
        <IonContent>
        <div style={{width:"90%",margin:"auto"}}>
                
                <div style={{marginTop:"30px",marginBottom:"20px"}}>
                 <IonText style={{fontSize:"30px",color:"#2D3F65",fontWeight:"500"}}>Events</IonText>
                </div>
 
 {/* search bar */}
               
             </div>


             <div>
    <IonToolbar>
<IonSegment  value={selectedTab} onIonChange={(e) => setSelectedTab(e.detail.value)}>
  <IonSegmentButton value="EventDetail" >
  <IonLabel style={{color:"#2D3F65",fontSize:"15px",fontWeight:"500"}} >EVENT DETAILS</IonLabel>
  </IonSegmentButton>
  <IonSegmentButton value="InviteFriends" >
  <IonLabel style={{color:"#2D3F65",fontSize:"15px",fontWeight:"500"}} >INVITE FRIENDS</IonLabel>
  </IonSegmentButton>
 
</IonSegment>
</IonToolbar>
    </div>


    <div style={{marginTop:"10px",width:"100%"}}>

    {
        renderComponent()
    }
    
  </div>
        </IonContent>
    </IonPage>
  )
}

export default Events
