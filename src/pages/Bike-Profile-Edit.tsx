import { IonImg, IonIcon,IonToolbar,IonHeader,IonContent, IonButtons, IonPage, IonText, IonTitle, IonFooter } from '@ionic/react';

import './Bike-Profile-Edit.css';
const BikeProfileEdit: React.FC = () => {

  return (
    <IonPage className='bikeprofile-main-cont'>
        <IonHeader>
          <IonToolbar className='bike-profile'>
              <IonButtons slot="start" className='back-btn'>
              <IonButtons>
                  <IonIcon slot="icon-only" name="arrow-back"></IonIcon>
              </IonButtons>
              </IonButtons>
              <IonTitle className='bikeprofile-title'>
                Edit Bike
              </IonTitle>
          </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};

export default BikeProfileEdit;
