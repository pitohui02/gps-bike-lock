import React from 'react';
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import MyMap from '../api/api';
import Sidebar from '../components/Sidebar';
import '../components/Sidebar.css'
import Clock from '../components/Clock'

const Dashboard: React.FC = () => {
  return (
    <>
      <Sidebar />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar className='dashboard-header'>
            <IonTitle>
                <Clock />

            </IonTitle>
            <IonButtons slot="end">
              <IonMenuButton autoHide={false}>
                <IonIcon name="menu" className='menu-icon'></IonIcon>
              </IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <MyMap />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;
