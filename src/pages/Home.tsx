import { IonContent, IonButton, IonPage, IonText } from '@ionic/react';


import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import top from "../assets/top-rectangle.svg"
import bottom from "../assets/bottom-rectangle.svg"

import Login from '../pages/Login'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <img src={top} alt='top'/>
        <IonContent className="home">
          <div className='container'>
              <img src={logo} alt='logo'/>

              <div className="text-group">
                <img src={title} alt='title'/>
                
                <IonText>
                    <h4>Stay Locked, Stay Located</h4>
                </IonText>
              </div> 
              <IonButton buttonType='button' expand="block" className='get-started-button'>Get Started</IonButton>
          </div>
          
        </IonContent>
      <img src={bottom} alt='bottom'/>
    </IonPage>
  );
};

export default Home;
