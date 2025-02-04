import { IonContent, IonButton, IonPage, IonText, IonInput, IonIcon, IonItem } from '@ionic/react';

import top from "../assets/top-rectangle-reversed.svg"
// import './Login.css';
import './Forget-Password.css'
import '../theme/variables.css'
// import '../components/Login_Form.css'
const ForgetPassword: React.FC = () => {

  return (
    <IonPage>
      <img src={top} alt='top'/>
        <IonContent className="home">
          <div className='container'>
            <div className='forgot-pw-text'>
              <IonText className='forgot-pw'>
                  Forgot
                  <br></br>
                  Password
              </IonText>
            </div>

            <div className='forgot-password-note'>
              <IonText className='forgot-pw'>
                    Enter the email associated with
                    <br/>
                    your account and we'll send you
                    <br/>
                    password reset instructions.
              </IonText>
            </div>
            <IonItem lines='none'>
              <div className='email-txtbox'>
                <IonInput   labelPlacement="stacked" 
                            type="text" autoCapitalize="off" 
                            // fill="outline"{...register("lock_key")} 
                            placeholder="Email" 
                            className="lock-key-input">
                                      
                            <IonIcon slot="start" name="mail" className="icon-padding"aria-hidden="true"></IonIcon>
                  </IonInput>
              </div>
            </IonItem>

            <IonButton type='button' className="login-button">
              Reset
            </IonButton>
              
          </div>
        </IonContent>
    </IonPage>
  );
};

export default ForgetPassword;
