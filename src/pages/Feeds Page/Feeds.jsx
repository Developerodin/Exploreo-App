import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import FeedCard from '../../components/Cards/FeedCard'

const Data =[
    {},{},{},{},{},{},{},{},{},{}
]


const Feeds = () => {
  return (
    <IonPage>
        <IonContent>
            {Data.map((el)=>{
                return (
                    <>
                     <FeedCard/>
                    </>
                )
            })}
        
        </IonContent>
    </IonPage>
  )
}

export default Feeds
