import { IonFooter } from '@ionic/react'
import React, { useContext } from 'react'
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
import PersonalChat from '../../components/Chats/PersonalChat';
import { AppContext } from '../../Context/AppContext';
import GroupChatting from '../../components/Chats/GroupChatting';
import Profile from '../ProfilePage/Profile';
import Activity from '../Activity Page/Activity';
import AddPost from '../AddPost Page/AddPost';
import Events from '../Events Page/Events';
import OthersProfilePage from '../ProfilePage/OthersProfilePage';
const NavBar = () => {
  const{setTabBarVisibility,TabBarVisibility}=useContext(AppContext);


  let HideTabBarValue;
  if(TabBarVisibility === "/group-chat" || TabBarVisibility === "/personal-chat/2" ){
    HideTabBarValue=TabBarVisibility;
    console.log("i am in if bro")
   }
   else{
    HideTabBarValue="false"
    console.log("i am in else bro")
   }

  return (
   
         <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/mainhome" render={() => <Feeds/>} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} />
          <Route path="/chats" render={() => <Chats/>} exact={true} />
          <Route path="/profile" render={() => <Profile/>} exact={true} />
          <Route path="/othersprofile/:id" render={() => <OthersProfilePage/>} exact={true} />
          <Route path="/personal-chat/:id" render={() => <PersonalChat hidetaskbar={setTabBarVisibility} pathvalue={TabBarVisibility}/>} exact={true} />
          <Route path="/group-chat" render={() => <GroupChatting hidetaskbar={setTabBarVisibility} pathvalue={TabBarVisibility}/>} exact={true} />
          <Route path="/activity" render={() => <Activity hidetaskbar={setTabBarVisibility} pathvalue={TabBarVisibility}/>} exact={true} />
          <Route path="/addpost" render={() => <AddPost hidetaskbar={setTabBarVisibility} pathvalue={TabBarVisibility}/>} exact={true} />
          <Route path="/events" render={() => <Events hidetaskbar={setTabBarVisibility} pathvalue={TabBarVisibility}/>} exact={true} />
          <Redirect exact path="/" to="/mainhome" />
        </IonRouterOutlet>


        <IonTabBar slot="bottom" style={{border:"none",marginBottam:"20px",display:`${TabBarVisibility===HideTabBarValue ? "none" : "flex" }`}}>
          <IonTabButton color="dark" tab="home" href="/mainhome" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={homeOutline} />
            
          </IonTabButton>

          <IonTabButton tab="search" href="/search" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={searchOutline} />
           
          </IonTabButton>

          <IonTabButton tab="addpost" href="/addpost" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={addCircleOutline} />
           
          </IonTabButton>

          <IonTabButton tab="activity" href="/activity" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={heartOutline} />
           
          </IonTabButton>

          <IonTabButton tab="user" href="/profile" style={{backgroundColor:"#FFF",color:"grey"}}>
            <IonIcon icon={personOutline} />
            
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
   
  )
}

export default NavBar
