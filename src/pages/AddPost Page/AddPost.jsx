import { IonContent, IonIcon, IonPage, IonText } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import React from 'react'

const AddPost = () => {
  return (
    <IonPage>
        <IonContent>
        <div style={{width:"80%",margin:"auto",position:"absolute",top:"50%",left:"13%"}}>
                
                <div style={{marginTop:"30px",marginBottom:"20px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                 <IonText style={{fontSize:"30px",color:"#2D3F65",fontWeight:"500"}}>Add New Post</IonText>
                 <IonIcon size="large" icon={addCircleOutline}></IonIcon>
                </div>
 
                  
 {/* search bar */}
               
             </div>
        </IonContent>
    </IonPage>
  )
}

export default AddPost
