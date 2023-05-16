import { IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import ActivityFR from '../../components/Cards/ActivityCards/ActivityFR'
import { AppContext } from '../../Context/AppContext'
import CommanCard from '../../components/Cards/ActivityCards/CommanCard'
import { searchOutline } from 'ionicons/icons'
import NotificationCard from '../../components/Cards/ActivityCards/NotificationCard'

const Activity = () => {
    const {itemData}=useContext(AppContext);
  return (
    <IonPage>
        
        <IonContent>

        <div style={{width:"90%",margin:"auto"}}>
                
                <div style={{marginTop:"30px",marginBottom:"20px"}}>
                 <IonText style={{fontSize:"30px",color:"#2D3F65",fontWeight:"500"}}>Activity</IonText>
                </div>
 
                  <div style={{marginBottom:"20px",borderBottom:"1px solid black"}}>

                  </div>
 {/* search bar */}
               
             </div>

             <div style={{marginBottom:"30px",width:"90%",margin:"auto"}}>
                <ActivityFR Value={446} Img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU"} />
            </div>
        

       
             <div style={{width:"90%",margin:"auto"}}>
                
                <div style={{marginTop:"30px",marginBottom:"20px"}}>
                 <IonText style={{fontSize:"20px",color:"#000000",fontWeight:"700"}}>New</IonText>
                </div>
 
                
 {/* search bar */}
 <div>
            {itemData.map((el,index)=>{
                if(index %10===0){
                    return(
                        <CommanCard Data={el}/> 
                    )
                }
               
            })}
            </div>
             </div>
            
          



            <div style={{width:"90%",margin:"auto"}}>
                
                <div style={{marginTop:"30px",marginBottom:"20px"}}>
                 <IonText style={{fontSize:"20px",color:"#000000",fontWeight:"700"}}>Today</IonText>
                </div>
 
                
 {/* search bar */}
 <div>
            {itemData.map((el,index)=>{
                if(index %9===0 && index!=0){
                    return(
                        <NotificationCard Data={el}/> 
                    )
                }
               
            })}
            </div>
               
             </div>
            
           
           
        </IonContent>
    </IonPage>
  )
}

export default Activity
