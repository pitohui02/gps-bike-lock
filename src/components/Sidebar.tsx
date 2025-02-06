import React, { useState } from 'react';
import { IonText, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import PopupLogout from '../components/Popup-Logout'; 
import './Sidebar.css';
import logout from "../assets/logout-txt-sb.svg";
import about from "../assets/about-txt-sb.svg";
import ridehistory from "../assets/ridehistory-txt-sb.svg";
import mybike from "../assets/mybike-txt-sb.svg";

const Sidebar: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control modal visibility

  return (
    <div className='main-container-sb'>
      <IonMenu side="end" contentId="main-content" type="overlay" className='main-sidebar-cont'>
        <div className='menu-content'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList className='item-list'>
            <IonItem detail-icon="none" lines='none' className='my-bike' button onClick={() => { console.log('My Bike Clicked'); }}>
              <img src={mybike} alt='My Bike'/>
            </IonItem>

            <IonItem detail-icon="none" lines='none' className='ride-history' button onClick={() => { console.log('Ride History Clicked'); }}>
              <img src={ridehistory} alt='Ride History'/>
            </IonItem>

            <IonItem detail-icon="none" lines='none' className='about' button onClick={() => { console.log('About Clicked'); }}>
              <img src={about} alt='About'/>
            </IonItem>

            <IonItem detail-icon="none" lines='none' className='log-out-btn' button onClick={() => setShowLogoutModal(true)}>
              <img src={logout} alt='Logout button'/>
            </IonItem>
          </IonList>
        </div>
        <div className='legal-info'> 
          <IonText>
            <span className='legal'>Legal Information</span> 
            <br/> V 1.0
          </IonText>
        </div> 
      </IonMenu>
      <PopupLogout isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />

    </div>
  );
};

export default Sidebar;
