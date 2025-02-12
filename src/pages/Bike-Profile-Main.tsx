import { IonButton, IonImg, IonIcon, IonToolbar, IonHeader, IonContent, IonButtons, IonPage, IonText, IonTitle, IonFooter } from '@ionic/react';
import React, { useState, useRef } from 'react'; // Import useRef here

import './Bike-Profile-Main.css';
import sample from '../assets/sample-img-cont.svg'
import edit from '../assets/edit-icon.svg'
import details from '../assets/bike-details-txt.svg'
import line from '../assets/bike-details-line.svg'

const BikeProfile: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(sample); // Default image set to 'sample'
  const fileInputRef = useRef<HTMLInputElement>(null); // Create a ref using useRef

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImageSrc(e.target.result.toString()); // Update the image source
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) { // Ensure the ref is not null
      fileInputRef.current.click();
    }
  };

  return (
    <IonPage className='bikeprofile-main-cont'>
        <IonHeader>
          <IonToolbar className='bike-profile'>
              <IonButtons slot="start" className='back-btn'>
                <IonButton routerLink='/dashboard' className='back-btn'>
                    <IonIcon slot="icon-only" name="arrow-back"></IonIcon>
                </IonButton>
              </IonButtons>
              <IonTitle className='bikeprofile-title'>
                My Bike
              </IonTitle>

              <IonButtons slot="end" className='create-btn'>
                <IonButton className='create-btn' routerLink='/bikeprofileedit'>
                    Edit
                </IonButton>
              </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className='profile-container'>
            <div className='img-edit-cont'>
              <IonImg src={imageSrc} className='img-container'>
              <input
                    type="file" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
              </IonImg>
                <IonButtons className='edit-btn' onClick={triggerFileInput}>
                                <img src={edit} alt="Edit Icon"/>
                </IonButtons>
            </div>
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
