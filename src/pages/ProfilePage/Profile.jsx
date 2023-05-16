import { IonButton, IonCard, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import SearchPageGallery from '../../components/SearchPageGallery/SearchPageGallery';
import GroupsChat from '../../components/Chats/GroupsChat';
import { addCircleOutline, menuOutline,imageOutline,bookmarkOutline } from 'ionicons/icons';
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery';
import Saved from '../../components/ProfileSaved/Saved';

const Profile = () => {

  const [selectedTab, setSelectedTab] = useState('Images');

    const renderComponent = () => {
        switch (selectedTab) {
          case 'Images':
            return <ProfileGallery />;
          case 'Saved':
            return <Saved/>;
        
          default:
            return null;
        }
      };
  return (
    <IonPage >
      <IonContent style={{padding:"0px"}}>
        
<div style={{padding:"0px",backgroundColor:"#F6F6F6"}}>

<div style={{height:"80px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 30px"}}>
          
          <IonIcon size="large" icon={addCircleOutline} slot="start"></IonIcon>
          <IonIcon size="large" icon={menuOutline} slot='end'></IonIcon>

 </div>



<div style={{height:"100%",borderRadius:"30px",padding:"10px",backgroundColor:"#FFF"}}>

<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
  <div  style={{textAlign:"center"}}>
    <div>
    <IonText style={{fontSize:"18px",fontWeight:"700"}}>125K</IonText>
    </div>

    <div>
    <IonText style={{fontSize:"12px"}}>followers</IonText>
    </div>
 
  
  </div>
       
   <div style={{width:"92px",height:"92px",borderRadius:"100px",marginTop:"-30px"}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlFHgBImzh3JF_Sb24kDBDnPMJ4F53ecw_Q&usqp=CAU" alt='img' style={{borderRadius:"100px",width:"100%",height:"100%"}} />
   </div>

   <div style={{textAlign:"center"}}>
    <div>
    <IonText style={{fontSize:"18px",fontWeight:"700"}}>105</IonText>
    </div>

    <div>
    <IonText  style={{fontSize:"12px"}}>following</IonText>
    </div>
    
    
   </div>


</div>


<div style={{textAlign:"center",margin:"20px"}}>
  <div>
    <IonText style={{fontSize:"25px"}}>Lora Silvia</IonText>
  </div>

  <div>
    <IonText style={{fontSize:"12px",color:"#828796"}}>
    UI/UX Designer at @Ecommercex
    </IonText>
  </div>
</div>


<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"15px"}}> 
  <IonButton shape='round' color="btnS">Edit Profile</IonButton>
  <IonButton shape='round' color="light">Friends</IonButton>
</div>


<div>
    <IonToolbar>
<IonSegment  value={selectedTab} onIonChange={(e) => setSelectedTab(e.detail.value)}>
  <IonSegmentButton value="Images" >
    <IonIcon icon={imageOutline} ></IonIcon>
  </IonSegmentButton>
  <IonSegmentButton value="Saved" >
  <IonIcon icon={bookmarkOutline} ></IonIcon>
  </IonSegmentButton>
 
</IonSegment>
</IonToolbar>
    </div>


    <div style={{marginTop:"10px",width:"100%"}}>

    {
        renderComponent()
    }
    
  </div>

</div>

</div>
       

      
      </IonContent>
    </IonPage>
  )
}

export default Profile
