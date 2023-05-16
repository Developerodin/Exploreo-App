import { IonContent, IonPage, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import FeedCard from '../../components/Cards/FeedCard'
import Header from '../../components/HeaderMain/Header'
import OnlineFriends from '../../components/OnlineFriends Swiper/OnlineFriends'
import EventFeedCard from '../../components/EventsFeedCards/EventFeedCard'
import { AppContext } from '../../Context/AppContext'




const Feeds = () => {

const {itemData}=useContext(AppContext);

  return (
    <IonPage>
        <IonContent>

           <div style={{position:"sticky",top:"0",backgroundColor:"#FFF",zIndex:"2"}}>
           <Header/>
           </div>
           
           <div>

           

           <div>
            <div style={{width:"90%",margin:"auto"}}>
                <IonText style={{fontSize:"20px",fontWeight:"500px"}}>Discover Events</IonText>
            </div>

            <div>
            <EventFeedCard/>
            </div>
          
            <div>
            <div style={{width:"90%",margin:"auto"}}>
                <IonText style={{fontSize:"14px",fontWeight:"400px"}}>20 Friends Online</IonText>
            </div>
            <div>
            <OnlineFriends/>
            </div>
         
           </div>
           </div>
        


            

             

                <div style={{marginTop:"10px"}}>
                  <div style={{margin:"auto"}}>
                     {itemData.map((el)=>{
                          return (
                            <div>
                           <FeedCard Data={el}/>
                            </div>
                             )
                          })}
                      </div>
                    </div>
          
                    </div>
         
           
         
           
        
        </IonContent>
    </IonPage>
  )
}

export default Feeds
