import {IonRoute, IonContent, IonButton, IonPage, IonText, IonInput, IonIcon, IonItem } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {Route} from 'react-router-dom'
import top from "../assets/top-rectangle-reversed.svg"
import forgotpw from "../assets/forgot-password-txt.svg"
import reset from "../assets/reset-txt.svg"
// import './Login.css';
import './Forget-Password.css'
import '../theme/variables.css'
// import '../components/Login_Form.css'
const ForgetPassword: React.FC = () => {

  return (
    <IonPage className='fgt-pw'>
      <img src={top} alt='top'/>
      <div className='text-container'>
        <div className='forgot-pw-text'>
                {/* <IonText className='forgot-pw'>
                    Forgot
                    <br></br>
                    Password
                </IonText> */}
                <img src={forgotpw} alt='forgot-pw'/>
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
      </div>

          <div className='container'>
            <IonItem lines='none' className='email'>
              <div className='email-txtbox' >
                <IonInput   labelPlacement="stacked" 
                            type="text" autoCapitalize="off" 
                            // fill="outline"{...register("lock_key")} 
                            placeholder="Email" 
                            className="lock-key-input">
                                      
                            <IonIcon slot="start" name="mail" className="icon-padding"aria-hidden="true"></IonIcon>
                </IonInput>
              </div>
            </IonItem>

            <IonButton type='button' className="login-button" routerLink='/login'>
            Reset
            </IonButton>
              
          </div>

    </IonPage>
  );
};

export default ForgetPassword;
