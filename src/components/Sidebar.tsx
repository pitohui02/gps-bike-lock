import React from 'react';
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import './Sidebar.css'
import logout from "../assets/logout-txt-sb.svg"
import about from "../assets/about-txt-sb.svg"
import ridehistory from "../assets/ridehistory-txt-sb.svg"
import mybike from "../assets/mybike-txt-sb.svg"

const Sidebar: React.FC = () => {
  return (
    <div className='main-container-sb'>
      <IonMenu side="end" contentId="main-content" type="overlay" className='main-sidebar-cont'>
        <div className='menu-content'>
          <IonHeader>
            {/* <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar> */}
          </IonHeader>
            <IonList className='item-list'>

                <IonItem detail-icon="none" lines='none' className='my-bike' button onClick={() => { console.log('My Bike Clicked'); }}>
                  {/* <IonLabel>My Bike</IonLabel> */}
                  <img src={mybike} alt='ridehistory'/>
                </IonItem>

                <IonItem detail-icon="none" lines='none' className='ride-history' button onClick={() => { console.log('Ride History Clicked'); }}>
                  {/* <IonLabel>Ride History</IonLabel> */}
                  <img src={ridehistory} alt='ridehistory'/>
                </IonItem>

                <IonItem detail-icon="none" lines='none' className='about' button onClick={() => { console.log('About Clicked'); }}>
                  {/* <IonLabel>About</IonLabel> */}
                  <img src={about} alt='about'/>
                </IonItem>

                <IonItem detail-icon="none" lines='none' className='log-out-btn' button onClick={() => { console.log('Logout Clicked'); }}>
                  <img src={logout} alt='logout button'/>
                </IonItem>

            </IonList>
          </div>

      </IonMenu>
      </div>
  );
};

export default Sidebar;
