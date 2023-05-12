import { IonFooter } from '@ionic/react'
import React from 'react'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search,homeOutline ,searchOutline,addCircleOutline,heartOutline,personOutline} from 'ionicons/icons';
import Login from '../Login Page/Login';
import SignUP from '../SignUp Page/SignUp';
import Verifiacation from '../Verification Page/Verifiacation';
import Home from '../Home';
import Feeds from '../Feeds Page/Feeds';
import SearchPage from '../Search Page/SearchPage';
import Chats from '../Chats Page/Chats';
const NavBar = () => {
  return (
   
         <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/mainhome" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/mainhome" render={() => <Feeds/>} exact={true} />
          <Route path="/radio" render={() => <SignUP />} exact={true} />
          <Route path="/library" render={() => <Verifiacation />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} />
          <Route path="/chats" render={() => <Chats/>} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" style={{border:"none",marginBottam:"20px"}}>
          <IonTabButton color="dark" tab="home" href="/mainhome" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={homeOutline} />
            
          </IonTabButton>

          <IonTabButton tab="radio" href="/search" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={searchOutline} />
           
          </IonTabButton>

          <IonTabButton tab="library" href="/library" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={addCircleOutline} />
           
          </IonTabButton>

          <IonTabButton tab="search" href="/radio" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={heartOutline} />
           
          </IonTabButton>

          <IonTabButton tab="user" href="/radio" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={personOutline} />
            
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
   
  )
}

export default NavBar
