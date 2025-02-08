import { IonImg, IonIcon,IonToolbar,IonHeader,IonContent, IonButtons, IonPage, IonText, IonTitle, IonFooter } from '@ionic/react';

import './Bike-Profile-Main.css';
import sample from '../assets/sample-img-cont.svg'
import edit from '../assets/edit-icon.svg'
import details from '../assets/bike-details-txt.svg'
import line from '../assets/bike-details-line.svg'
const BikeProfile: React.FC = () => {

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
                My Bike
              </IonTitle>
              <IonButtons slot="end" className='create-btn'>
              <IonButtons>
                  {/* <IonIcon slot="icon-only" name="create" ></IonIcon> */}
                  Edit
              </IonButtons>
              </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className='img-edit-cont'>
            <IonImg className='img-container' src={sample}> </IonImg>
            <IonButtons className='edit-btn'>
                  {/* <IonIcon slot="icon-only" name="create"></IonIcon> */}
                  <img src={edit}></img>
              </IonButtons>
        </div>

        <div className='bike-name-lock-status-cont'>
            <IonText>
              Bike Name
            </IonText>
        </div>
        

        <div className='bike-details'>
          {/* <IonText className='details'>
            Bike Details
          </IonText> */}
          <IonImg className='details' src={details}></IonImg>
          

          {/* For Brand */}
          <IonText className='brand'>
            Brand
          </IonText>
          <IonText className='brand-input'>
            Specialized
          </IonText>

          {/* For Model */}
          <IonText className='model'>
            Model
          </IonText>
          <IonText className='model-input'>
            Turbo Levo
          </IonText>

          {/* For Color */}
          <IonText className='color'>
            Color
          </IonText>
          <IonText className='color-input'>
            Black
          </IonText>

          {/* For Serial # */}
          <IonText className='serial-no'>
            Serial #
          </IonText>
          <IonText className='serial-no-input'>
            S625TYE2
          </IonText>


          <div className='last-edited'>
            <IonText className='edited-txt'>
              Last Changed
            </IonText>

            <IonFooter className='date-time'>
              <IonText className='date'>
                01-01-2025
              </IonText>
              <IonText className='time'>
                10:15:21
              </IonText>
            </IonFooter>
          </div>
        </div>
        
    </IonPage>
  );
};

export default BikeProfile;
