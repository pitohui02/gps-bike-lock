import { IonContent, IonButton, IonPage, IonText } from '@ionic/react';


import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import top from "../assets/top-rectangle.svg"
import bottom from "../assets/bottom-rectangle.svg"

import Login from './Login'
import './Home.css';

const ForgetPassword: React.FC = () => {

  return (
    <IonPage>
      <img src={top} alt='top'/>
        <IonContent className="home">
          <div className='container'>
              <div className='logo'>
                <img src={logo} alt='logo'/>
                <img src={title} alt='title'/>
              </div>
              <IonButton buttonType='button' href="/login" expand="block" className='get-started-button'>Get Started</IonButton>
          </div>
        </IonContent>
      <img src={bottom} alt='bottom'/>
    </IonPage>
  );
};

export default ForgetPassword;
