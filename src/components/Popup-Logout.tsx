import React from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonText } from '@ionic/react';
import './Popup-Logout.css'
import logo from '../assets/lockate-logo.svg'
const PopupLogout: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div className='main-cont-popup'>
        <IonModal isOpen={isOpen} onDidDismiss={onClose} className="logout-modal">

            <div className='app-logo'>
              <img src={logo} alt='app-logo'/>
            </div>
            <div className='alert-txt'>
              <IonText>
              Are you sure?
              </IonText>
            </div>

            <div className='cancel-logout'>
              <IonButton className='cancel-btn' expand="block" onClick={onClose}>Cancel</IonButton>

              <IonButton routerLink='/login' className='logout-btn' expand="block" onClick={() => { console.log('Logout confirmed'); onClose(); }}>Logout</IonButton>

            </div>
        </IonModal>
    </div>
  );
};

export default PopupLogout;
