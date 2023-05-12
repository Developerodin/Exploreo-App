import { IonContent, IonPage, IonSearchbar } from '@ionic/react'
import React from 'react'
import SearchPageSwiper from '../../components/SearchPage Swiper/SearchPageSwiper'
import SearchPageGallery from '../../components/SearchPageGallery/SearchPageGallery'

const SearchPage = () => {
  return (
    <IonPage>
        <IonContent>
            <div style={{borderRadius:"50px"}}>
            <IonSearchbar animated={true} show-clear-button="focus"></IonSearchbar>
            </div>
{/* Swiper */}
         
<SearchPageSwiper/>
          

{/* GAllery */}
            <div style={{marginTop:"10px"}}>
                  <SearchPageGallery/>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default SearchPage
