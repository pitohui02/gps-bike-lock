import { IonInput ,IonImg, IonButton, IonIcon,IonToolbar,IonHeader,IonContent, IonButtons, IonPage, IonText, IonTitle, IonFooter } from '@ionic/react';
import './Bike-Profile-Main'
import './Bike-Profile-Edit.css';
import setup from '../assets/edit-bike-txt.svg'
import save from '../assets/save-txt.svg'
const BikeProfileEdit: React.FC = () => {

  return (
    <IonPage className='bikeprofile-main-cont'>
        <IonHeader>
          <IonToolbar className='bike-profile'>
              <IonButtons slot="start" className='back-btn'>
              <IonButton href="/bikeprofile" className='back-btn'>
                  <IonIcon slot="icon-only" name="arrow-back"></IonIcon>
              </IonButton>
              </IonButtons>
              <IonTitle className='bikeprofile-title'>
                Edit Bike
              </IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='setup-profile'>
          <IonImg src={setup}></IonImg>
        </div>
        
        <div className='details-bike-txt'>
          <IonText>Bike Details</IonText>
        </div>


        <div className='edit-profile'>
          <div className='brand-edit'>
            <IonText>
              Brand
            </IonText>
            <IonInput   labelPlacement="stacked" 
                        type="text" autoCapitalize="on"            
                        placeholder="Brand" 
                        className="edit-key-input">
            </IonInput>
          </div>

          <div className='model-edit'>
            <IonText>
              Model
            </IonText>
            <IonInput   labelPlacement="stacked" 
                        type="text" autoCapitalize="on"            
                        placeholder="Model" 
                        className="edit-key-input">
            </IonInput>
          </div>

          <div className='color-edit'>
            <IonText>
              Color
            </IonText>
            <IonInput   labelPlacement="stacked" 
                        type="text" autoCapitalize="on"            
                        placeholder="Color" 
                        className="edit-key-input">
            </IonInput>
          </div>

          <div className='serial-edit'>
            <IonText>
              Serial No.
            </IonText>
            <IonInput   labelPlacement="stacked" 
                        type="text" autoCapitalize="on"            
                        placeholder="Serial No." 
                        className="edit-key-input">
            </IonInput>
          </div>

          <div className='save-btn'>
            <IonButton type='button' className="save-button" href='/bikeprofile'>
              <img src={save} alt='top'/>
              </IonButton>
          </div>

        </div>


    </IonPage>
  );
};

export default BikeProfileEdit;
