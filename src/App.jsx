import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import IntroScreen from './pages/Intro Screens/IntroScreen';
import Login from './pages/Login Page/Login';
import Verifiacation from './pages/Verification Page/Verifiacation';
import SignUP from './pages/SignUp Page/SignUp';

import NavBar from './pages/NavBar /NavBar';
import PersonalChat from './components/Chats/PersonalChat';
import Chats from './pages/Chats Page/Chats';
import GroupChatting from './components/Chats/GroupChatting';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
         
      <Route exact path="/home">
          {/* <Home/> */}
          <IntroScreen/>
        </Route>

        <Route exact path="/mainhome">
          <NavBar/>
        </Route>
        <Route exact path="/chats">
          <Chats/>
        </Route>
        <Route exact path="/chats">
        <NavBar/>
        </Route>
        <Route exact path="/introscreen">
          <IntroScreen/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <SignUP/>
        </Route>
        <Route exact path="/verification">
          <Verifiacation/>
        </Route>
        <Route exact path="/personal-chat">
          <PersonalChat/>
        </Route>
        <Route exact path="/group-chat">
          <GroupChatting/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
       

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
