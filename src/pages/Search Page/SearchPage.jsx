import { IonContent, IonPage, IonSearchbar } from '@ionic/react'
import React from 'react'
import SearchPageSwiper from '../../components/SearchPage Swiper/SearchPageSwiper'
import SearchPageGallery from '../../components/SearchPageGallery/SearchPageGallery'

const SearchPage = () => {
  return (
    <IonPage>
        <IonContent>
            <div>
            <IonSearchbar></IonSearchbar>
            </div>
{/* Swiper */}
            <div>
<SearchPageSwiper/>
            </div>

{/* GAllery */}
            <div style={{border:"1px solid red"}}>
                  <SearchPageGallery/>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default SearchPage
