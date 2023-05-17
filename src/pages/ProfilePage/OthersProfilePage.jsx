import { IonButton, IonCard, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton, IonText, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import SearchPageGallery from '../../components/SearchPageGallery/SearchPageGallery';
import GroupsChat from '../../components/Chats/GroupsChat';
import { addCircleOutline, menuOutline,imageOutline,bookmarkOutline } from 'ionicons/icons';
import ProfileGallery from '../../components/ProfileGallery/ProfileGallery';
import Saved from '../../components/ProfileSaved/Saved';
import { useHistory, useParams } from 'react-router';
import { AppContext } from '../../Context/AppContext';

const OthersProfilePage = () => {

  const [selectedTab, setSelectedTab] = useState('Images');
  const [loading, setLoading] = useState('');

  const {itemData}=useContext(AppContext);

  const history=useHistory();
  const {id}=useParams();
  const[userData,setUserData]=useState({});
    const renderComponent = () => {
        switch (selectedTab) {
          case 'Images':
            return ;
          case 'Saved':
            return <Saved/>;
        
          default:
            return null;
        }
      };

const handelAddEvent=()=>{
  history.push("/events")
}
const handelState=()=>{
    itemData.map((item)=>{
        if(item.id === id){
            return setUserData(item);
        }
        
    })
     
    console.log("DAta",itemData)
    console.log("User Data",userData);
}


useEffect(()=>{
    console.log("User Id",id);
    handelState();

  },[id]);

let count=1;
  const handelFollowClick=(e)=>{
    count=count+1;
     console.log("Event",e.target.innerText);
     if(count % 2===0){
        e.target.innerText="Unfollow";
        
    }
        
     else{
        e.target.innerText="Follow"
     }

  }

  return (
    <IonPage >
      <IonContent style={{padding:"0px"}}>
        
<div style={{padding:"0px",backgroundColor:"#F6F6F6"}}>

<div style={{height:"80px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 30px"}}>
          
          <IonIcon onClick={handelAddEvent} size="large" icon={addCircleOutline} slot="start"></IonIcon>
          <IonIcon size="large" icon={menuOutline} slot='end'></IonIcon>

 </div>



<div style={{height:"100%",borderRadius:"30px",padding:"0px",backgroundColor:"#FFF"}}>

<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
  <div  style={{textAlign:"center"}}>
    <div>
    <IonText style={{fontSize:"18px",fontWeight:"700"}}>{userData.followers}</IonText>
    </div>

    <div>
    <IonText style={{fontSize:"12px"}}>followers</IonText>
    </div>
 
  
  </div>
       
   <div style={{width:"92px",height:"92px",borderRadius:"100px",marginTop:"-30px"}}>
    <img src={userData.userImg} alt='img' style={{borderRadius:"100px",width:"100%",height:"100%"}} />
   </div>

   <div style={{textAlign:"center"}}>
    <div>
    <IonText style={{fontSize:"18px",fontWeight:"700"}}>{userData.following}</IonText>
    </div>

    <div>
    <IonText  style={{fontSize:"12px"}}>following</IonText>
    </div>
    
    
   </div>


</div>


<div style={{textAlign:"center",margin:"20px"}}>
  <div>
    <IonText style={{fontSize:"25px"}}>{userData.name}</IonText>
  </div>

  <div>
    <IonText style={{fontSize:"12px",color:"#828796"}}>
    {userData.discription}
    </IonText>
  </div>
</div>


<div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginBottom:"15px"}}> 
  <IonButton onClick={handelFollowClick} shape='round' color="btnS">Follow</IonButton>
  <IonButton shape='round' color="light">Message</IonButton>
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

export default OthersProfilePage
