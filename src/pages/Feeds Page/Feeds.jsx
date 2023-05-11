import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import FeedCard from '../../components/Cards/FeedCard'
import Header from '../../components/HeaderMain/Header'
import OnlineFriends from '../../components/OnlineFriends Swiper/OnlineFriends'
import EventFeedCard from '../../components/EventsFeedCards/EventFeedCard'

const Data =[
    {},{},{},{},{},{},{},{},{},{}
]


const Feeds = () => {
  return (
    <IonPage>
        <IonContent>
           
           <Header/>

           <div>
            <div style={{width:"90%",margin:"auto"}}>
                <IonText style={{fontSize:"20px",fontWeight:"500px"}}>Discover Events</IonText>
            </div>

            <div>
            <EventFeedCard/>
            </div>
          
           </div>
        


            <div>
            <div style={{width:"90%",margin:"auto"}}>
                <IonText style={{fontSize:"14px",fontWeight:"400px"}}>20 Friends Online</IonText>
            </div>
            <div>
            <OnlineFriends/>
            </div>
         
           </div>

             

                <div style={{marginTop:"30px"}}>
                  <div style={{margin:"auto"}}>
                     {Data.map((el)=>{
                          return (
                            <div>
                           <FeedCard/>
                            </div>
                             )
                          })}
                      </div>
                    </div>
          
          
         
           
         
           
        
        </IonContent>
    </IonPage>
  )
}

export default Feeds
