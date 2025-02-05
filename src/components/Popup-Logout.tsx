import React from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonText } from '@ionic/react';

const PopupLogout: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div className='main-cont-popup'>
        <IonModal isOpen={isOpen} onDidDismiss={onClose} className="logout-modal">
        <IonContent className="ion-padding">
            <IonText className='alert-txt'>
            Are you sure?
            </IonText>
            <IonButton expand="block" onClick={() => { console.log('Logout confirmed'); onClose(); }}>Logout</IonButton>
            <IonButton expand="block" color="medium" onClick={onClose}>Cancel</IonButton>
        </IonContent>
        </IonModal>
    </div>
  );
};

export default PopupLogout;
