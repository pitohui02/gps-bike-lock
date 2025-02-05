import React from 'react';
import { IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Sidebar from '../components/Sidebar'

const Dashboard: React.FC = () => {
  return (
    <>
      <Sidebar /> {/* Include the sidebar */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Main Content</IonTitle>
            <IonButtons slot="end">
              <IonMenuButton autoHide={false}>
                <IonIcon icon="menu" className='menu-icon'></IonIcon>  
              </IonMenuButton> 
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Welcome to the main content area</h2>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;
