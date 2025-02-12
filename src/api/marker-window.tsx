// import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonNote, IonRow } from '@ionic/react';
// import { globeOutline, heartOutline, locationOutline, navigateOutline, phonePortraitOutline } from "ionicons/icons";

// export const MarkerInfoWindow = ({marker, dismiss}) => {

// 	return (
// 		<IonContent>
// 			<IonGrid className="ion-padding">

// 				<IonRow className="ion-margin-bottom">
// 					<IonCol size="12">
// 						<IonLabel>
// 							<h1>{marker.title}</h1>
// 							<IonNote>{marker.description}</IonNote>
// 						</IonLabel>
// 					</IonCol>
// 				</IonRow>

// 				<IonRow className="ion-justify-content-start ion-align-items-center">
// 					<IonCol size="2">
// 						<IonIcon icon={locationOutline} color="primary" style={{fontSize: "1.5rem"}} />
// 					</IonCol>

// 					<IonCol size="10">{marker.address}</IonCol>
// 				</IonRow>

// 				<IonRow className="ion-justify-content-start ion-align-items-center">
// 					<IonCol size="2">
// 						<IonIcon icon={globeOutline} color="primary" style={{fontSize: "1.5rem"}} />
// 					</IonCol>

// 					<IonCol size="10">{marker.website}</IonCol>
// 				</IonRow>

// 				<IonRow className="ion-justify-content-start ion-align-items-center">
// 					<IonCol size="2">
// 						<IonIcon icon={phonePortraitOutline} color="primary" style={{fontSize: "1.5rem"}} />
// 					</IonCol>

// 					<IonCol size="10">{marker.phone}</IonCol>
// 				</IonRow>

// 				<IonRow>
// 					<IonButton>
// 						<IonIcon icon={heartOutline} />&nbsp;
// 						Favourite
// 					</IonButton>
// 					<IonButton>
// 						<IonIcon icon={navigateOutline} />&nbsp;
// 						Navigate
// 					</IonButton>
// 				</IonRow>
// 			</IonGrid>
// 		</IonContent>
// 	);
// }

import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonNote, IonRow, IonPage } from '@ionic/react';
import { globeOutline, heartOutline, locationOutline, navigateOutline, phonePortraitOutline } from "ionicons/icons";
import './marker-window.css'
// Define an interface for Marker if it's not already defined
interface Marker {
    title: string;
    description: string;
    address: string;
    website?: string;
    phone?: string;
}

// Define the props for the MarkerInfoWindow component
interface MarkerInfoWindowProps {
    marker: Marker;
    dismiss: () => void;  // Assuming dismiss is a function with no parameters returning void
}

export const MarkerInfoWindow = ({marker, dismiss}: MarkerInfoWindowProps) => {

    return (
        <IonContent>
            <div className="ion-padding-">

                <IonRow className="ion-margin-bottom">
                    <IonCol size="12">
                        <IonLabel>
                            <h1>{marker.title}</h1>
                            <IonNote>{marker.description}</IonNote>
                        </IonLabel>
                    </IonCol>
                </IonRow>

                <IonRow className="ion-justify-content-start ion-align-items-center">
                    <IonCol size="2">
                        <IonIcon icon={locationOutline} color="primary" style={{fontSize: "1.5rem"}} />
                    </IonCol>

                    <IonCol size="10">{marker.address}</IonCol>
                </IonRow>

                <IonRow className="ion-justify-content-start ion-align-items-center">
                    <IonCol size="2">
                        <IonIcon icon={globeOutline} color="primary" style={{fontSize: "1.5rem"}} />
                    </IonCol>

                    <IonCol size="10">{marker.website}</IonCol>
                </IonRow>

                <IonRow className="ion-justify-content-start ion-align-items-center">
                    <IonCol size="2">
                        <IonIcon icon={phonePortraitOutline} color="primary" style={{fontSize: "1.5rem"}} />
                    </IonCol>

                    <IonCol size="10">{marker.phone}</IonCol>
                </IonRow>

                <IonRow>
                    <IonButton>
                        <IonIcon icon={heartOutline} />&nbsp;
                        Favourite
                    </IonButton>
                    <IonButton>
                        <IonIcon icon={navigateOutline} />&nbsp;
                        Nav
                    </IonButton>
                </IonRow>
            </div>
        </IonContent>
    );
}
