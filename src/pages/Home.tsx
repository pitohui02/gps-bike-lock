import { IonContent, IonButton, IonPage, IonText } from '@ionic/react';


import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import top from "../assets/top-rectangle.svg"
import bottom from "../assets/bottom-rectangle.svg"
import getstarted from "../assets/get-started-txt.svg"

import './Home.css';

const Home: React.FC = () => {

  return (
    <IonPage className='home-main-cont'>
      <img src={top} alt='top'/>
          <div className='container'>
              <div className='logo'>
                <img src={logo} alt='logo'/>
                <img src={title} alt='title'/>
              </div>

              <div className='txt-btn-grp'>
                <div className="text-group">
                  <IonText>
                      <h4>"Stay Locked, Stay Located"</h4>
                  </IonText>
                </div> 
                
                <IonButton buttonType='button' routerLink="/login" expand="block" className='get-button'>
                  <img src={getstarted}/>
                </IonButton>
              </div>


          </div>
      <img src={bottom} alt='bottom'/>
    </IonPage>
  );
};

export default Home;
