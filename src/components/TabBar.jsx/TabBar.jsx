import React from 'react'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';
const TabBar = () => {
  return (
    <>
     Tabbar
    </>
   
    // <IonReactRouter>
    //   <IonTabs>
    //     <IonRouterOutlet>
    //       <Redirect exact path="/" to="/home" />
    //       {/*
    //       Use the render method to reduce the number of renders your component will have due to a route change.

    //       Use the component prop when your component depends on the RouterComponentProps passed in automatically.
    //     */}
    //       <Route path="/home" render={() => } exact={true} />
    //       <Route path="/radio" render={() => } exact={true} />
    //       <Route path="/library" render={() => } exact={true} />
    //       <Route path="/search" render={() => } exact={true} />
    //     </IonRouterOutlet>

    //     <IonTabBar slot="bottom">
    //       <IonTabButton tab="home" href="/home">
    //         <IonIcon icon={playCircle} />
    //         <IonLabel>Listen now</IonLabel>
    //       </IonTabButton>

    //       <IonTabButton tab="radio" href="/radio">
    //         <IonIcon icon={radio} />
    //         <IonLabel>Radio</IonLabel>
    //       </IonTabButton>

    //       <IonTabButton tab="library" href="/library">
    //         <IonIcon icon={library} />
    //         <IonLabel>Library</IonLabel>
    //       </IonTabButton>

    //       <IonTabButton tab="search" href="/search">
    //         <IonIcon icon={search} />
    //         <IonLabel>Search</IonLabel>
    //       </IonTabButton>
    //     </IonTabBar>
    //   </IonTabs>
    // </IonReactRouter>
  )
}

export default TabBar