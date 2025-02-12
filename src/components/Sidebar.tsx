import React, { useState } from 'react';
import { IonText, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import PopupLogout from '../components/Popup-Logout'; 
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control modal visibility

  return (
    <div className='main-container-sb'>
      <IonMenu side="end" contentId="main-content" type="overlay" className='main-sidebar-cont'>
        <div className='menu-content-sidebar'>
          {/* <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          <IonList className='item-list'>
            <IonItem routerLink='/bikeprofile' detail-icon="none" lines='none' className='my-bike' button onClick={() => { console.log('My Bike Clicked'); }}>
              My Bike
            </IonItem>

            <IonItem detail-icon="none" lines='none' className='ride-history' button onClick={() => { console.log('Ride History Clicked'); }}>
              Ride History
            </IonItem>

            <IonItem detail-icon="none" lines='none' className='log-out-btn' button onClick={() => setShowLogoutModal(true)}>
              Logout
            </IonItem>
          </IonList>
        </div>
        <div className='legal-info'> 
          <IonText>
            <span className='legal'>Legal Information</span> 
            <br/> 
            <span className='version'>V 1.0</span>
          </IonText>
        </div> 
      </IonMenu>
      <PopupLogout isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />

    </div>
  );
};

export default Sidebar;
