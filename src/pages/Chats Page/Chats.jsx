import { IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { heartOutline,sendOutline,chatbubbleOutline,notificationsOutline,chatbubbleEllipsesOutline,searchOutline} from 'ionicons/icons';
import ContactsChat from '../../components/Chats/ContactsChat';
import GroupsChat from '../../components/Chats/GroupsChat';
import Threds from '../../components/Chats/Threds';
const Chats = () => {
    const [selectedTab, setSelectedTab] = useState('Contacts');

    const renderComponent = () => {
        switch (selectedTab) {
          case 'Contacts':
            return <ContactsChat />;
          case 'Group':
            return <GroupsChat />;
          case 'Threads':
            return <Threds />;
          default:
            return null;
        }
      };



  return (
    <IonPage>
        <IonContent>
            <div style={{width:"90%",margin:"auto"}}>
                
               <div style={{marginTop:"30px"}}>
                <IonText style={{fontSize:"48px",color:"#2D3F65",fontWeight:"500"}}>Chats</IonText>
               </div>


{/* search bar */}
               <div>
                <IonList style={{width:"95%"}}>
                    <IonItem>
                        <IonInput placeholder='search...'></IonInput>
                        <IonIcon icon={searchOutline} size='small' slot='end'></IonIcon>
                    </IonItem>
                </IonList>
               </div>
            </div>



            <div>
            <IonToolbar>
        <IonSegment  value={selectedTab} onIonChange={(e) => setSelectedTab(e.detail.value)}>
          <IonSegmentButton value="Contacts" >
            <IonLabel style={{color:"#2D3F65",fontSize:"15px",fontWeight:"500"}} >CONTACTS</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Group" >
            <IonLabel style={{color:"#2D3F65",fontSize:"15px",fontWeight:"500"}} >GROUPS</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Threads" >
            <IonLabel style={{color:"#2D3F65",fontSize:"15px",fontWeight:"500"}} >THREADS</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
            </div>

          <div style={{marginTop:"10px",width:"95%",margin:"auto"}}>

            {
                renderComponent()
            }
            
          </div>



        </IonContent>
    </IonPage>
  )
}

export default Chats
