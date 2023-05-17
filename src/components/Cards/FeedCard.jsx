import React, { useContext, useEffect } from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonText } from '@ionic/react';
import { heartOutline,paperPlaneOutline,chatbubbleOutline,ellipsisVertical,bookmarkOutline} from 'ionicons/icons';
import { useHistory } from 'react-router';
import { AppContext } from '../../Context/AppContext';
const FeedCard = (props) => {

const history=useHistory();
  const {Data}=props;
    const handelLike=()=>{
        console.log("like");
    }

const handelSelctedUser=(e)=>{
  history.push(`/othersprofile/${Data.id}`)
  
}

    useEffect(()=>{

    },[])

  return (
    <>
    <div style={{padding:"0px",margin:"0px 0px 20px",borderRadius:"10px"}}>
     
      <div style={{ display:"flex",justifyContent:"space-between",padding:"10px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>


        <div style={{width:"50px", height:"50px"}}>
        <img src={Data.userImg} 
        alt='user Image' style={{ width:"100%",height:"100%",borderRadius:"100px"}}/>
        </div>
        
        <div style={{marginLeft:"6px"}}>
            <div>
            <IonText onClick={handelSelctedUser} style={{fontSize:"14px",fontWeight:"bold"}}>{Data.name}</IonText>
            </div>
            <div>
                <IonText style={{fontSize:"11px",color:"grey"}}>Jaipur</IonText>
            </div>
        
        </div>
        
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
            <IonIcon onClick={handelLike} style={{margin:"5px 3px 0px"}} icon={ellipsisVertical} size="small" color="dark"></IonIcon>
            </div>
            {/* <div>
            <IonText style={{fontSize:"12px"}}>1,783 Likes</IonText>
            </div> */}
        
        
        </div>
       
       
      </div>


      

        <div >
        <div style={{aspectRatio:"4/3",width:"100%"}}>
         <img  style={{width:"100%",height:"100%"}} alt={Data.title} src={Data.img} />
        </div>
        
      </div>
     

      <div style={{display:"flex",justifyContent:"space-between",padding:"0px 7px",marginBottom:"5px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
            <IonIcon onClick={handelLike} style={{margin:"5px 7px 0px",fontSize:"26px"}} icon={heartOutline}  color="dark"></IonIcon>
            {/* <IonText style={{fontSize:"10px",marginTop:"5px"}}>927 comments</IonText> */}
            <IonIcon onClick={handelLike} style={{margin:"5px 7px 0px",fontSize:"26px",transform: "rotate(280deg)"}} icon={chatbubbleOutline}  color="dark"></IonIcon>
            <IonIcon onClick={handelLike} style={{margin:"5px 7px 0px",fontSize:"26px"}} icon={paperPlaneOutline}  color="dark"></IonIcon>
           
        </div>
        <div >
        <IonIcon style={{margin:"5px 3px 0px",fontSize:"26px"}}   icon={bookmarkOutline}  color="dark"></IonIcon>
        </div>
      </div>
 


      <div style={{margin:"0px 5px",padding:"0px 10px",fontSize:"12px",fontWeight:"600"}}>
        <div style={{marginBottom:"5px"}}>
        <span style={{fontSize:"13px"}}>39,586 likes</span>
        </div>
       
       
       
        <div style={{fontWeight:"400",display:"inherit",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}>
        <span style={{fontWeight:"600"}}>{Data.name} </span>
        <span >
         Here's a small text description for the card content. Nothing more, nothing less.
         Here's a small text description for the card content. Nothing more, nothing less.
         Here's a small text description for the card content. Nothing more, nothing less.
         Here's a small text description for the card content. Nothing more, nothing less.
        </span>
        </div>
         
        
       
        </div>

        <div style={{margin:"3px 5px",padding:"0px 10px",fontSize:"12px",fontWeight:"600",color:"grey"}}>
          <div>
          <span>View all 3 comments</span>
          </div>


          <div style={{display:"flex",justifyContent:"start",alignItems:"center",marginTop:"10px"}}>
          <div style={{width:"30px", height:"30px",marginLeft:"-2px"}}>
        <img src={Data.userImg} 
        alt='user Image' style={{ width:"100%",height:"100%",borderRadius:"100px"}}/>
        </div>
            <div style={{marginLeft:"10px"}}>
              <span>Add a comment..</span>
            </div>
          </div>

          <div style={{marginTop:"5px"}}>
            <span>2 days ago</span>
          </div>
        </div>

    </div>
    </>
  )
}

export default FeedCard
