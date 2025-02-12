import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login'
import ForgetPassword from './pages/Forget-Password';
import Dashboard from './pages/Dashboard';
import BikeProfile from './pages/Bike-Profile-Main';
import BikeProfileEdit from './pages/Bike-Profile-Edit';
import MapDashboard from './api/api';
import Register from './pages/Register';

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
// import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Home */}
        <Route exact path="/home">
          <Home />
        </Route>
        
        {/* Login */}
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        {/* Forget Password */}
        <Route exact path="/forgetpassword">
          <ForgetPassword />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>

        <Route exact path="/bikeprofile">
          <BikeProfile/>
        </Route>

        <Route exact path="/bikeprofileedit">
          <BikeProfileEdit/>
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>
        

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
