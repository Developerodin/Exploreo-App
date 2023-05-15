import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText } from '@ionic/react';
import { heartOutline,sendOutline,chatbubbleOutline} from 'ionicons/icons';
const FeedCard = (props) => {

  const {Data}=props;
    const handelLike=()=>{
        console.log("like");
    }

  return (
    <>
    <div style={{padding:"0px",margin:"0px 0px 50px",borderRadius:"10px"}}>
     
      <div style={{ display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>


        <div style={{width:"50px", height:"50px"}}>
        <img src={Data.userImg} 
        alt='user Image' style={{ width:"100%",height:"100%",borderRadius:"100px"}}/>
        </div>
        
        <div style={{marginLeft:"6px"}}>
            <div>
            <IonText style={{fontSize:"14px",fontWeight:"bold"}}>{Data.name}</IonText>
            </div>
            <div>
                <IonText style={{fontSize:"11px",color:"grey"}}>12 min ago</IonText>
            </div>
        
        </div>
        
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
            <IonIcon onClick={handelLike} style={{margin:"5px 3px 0px"}} icon={heartOutline} size="small" color="dark"></IonIcon>
            </div>
            <div>
            <IonText style={{fontSize:"12px"}}>1,783 Likes</IonText>
            </div>
        
        
        </div>
       
       
      </div>


      <div style={{marginTop:"0px",padding:"10px",fontSize:"15px",fontWeight:"600"}}>
        <span>
        Here's a small text description for the card content. Nothing more, nothing less.
        </span><br/>
        <span>#akshay #odin #Theodin</span>
       
     </div>

        <div >
        <div style={{aspectRatio:"4/3",width:"100%"}}>
         <img  style={{width:"100%",height:"100%"}} alt={Data.title} src={Data.img} />
        </div>
        
      </div>

      <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
            <IonIcon onClick={handelLike} style={{margin:"5px 3px 0px"}} icon={chatbubbleOutline} size="small" color="dark"></IonIcon>
            <IonText style={{fontSize:"10px",marginTop:"5px"}}>927 comments</IonText>
           
        </div>
        <div>
        <IonIcon style={{transform:"rotate(-30deg)",margin:"5px 3px 0px"}}   icon={sendOutline} size="small" color="dark"></IonIcon>
        </div>
      </div>
    </div>
    </>
  )
}

export default FeedCard
