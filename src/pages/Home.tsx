import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import logo from "../assets/lockate-logo.svg"
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <div className="logo">
          <img src={logo} alt='logo'/>
        </div>
    </IonPage>
  );
};

export default Home;
