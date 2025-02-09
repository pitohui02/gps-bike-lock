import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonText, IonIcon, IonCheckbox } from "@ionic/react"
import top from "../assets/top-rectangle-reversed.svg"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigate, lockClosed } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import '../components/Login_Form.css'

import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import signup from "../assets/signup-txt.svg"
import register_txt from "../assets/register-txt.svg"
import './Register.css'

const loginSchema = z.object({
    lock_key: z.string().length(6, "Username must be exactly 6 uppercase letters").regex(/^[A-Z]{6}$/, "Lock Key must be uppercase"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})

type FormValues = z.infer<typeof loginSchema>;

const Register: React.FC = () => {

    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm<FormValues>({
            resolver: zodResolver(loginSchema),
          });
    
          const onSubmit = (data: FormValues) => {
            console.log("Form Data:", data);
          };
          
    return(
        <>

        <IonPage className="main-container">
            <img src={top} className="top-design" alt="top-rectangle-login" />

                {/* <IonText>
                    <h2>Welcome!</h2>
                </IonText> */}
                <div className="register-text">
                    <img src={register_txt} alt="register" />
                </div>

                <div className="create-acc">
                    <IonText className="create-account">
                        Create your new account
                    </IonText>
                </div>

                    
                <div className="div-container">
                    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                        <IonInput   labelPlacement="stacked" 
                                    type="text" autoCapitalize="on" 
                                    fill="outline"{...register("lock_key")} 
                                    placeholder="Email" 
                                    className="lock-key-input">
                            
                            <IonIcon slot="start" name="mail" className="icon-padding"aria-hidden="true"></IonIcon>
                        </IonInput>
                    
                        <IonInput   labelPlacement="stacked" 
                                    type="password" 
                                    fill="outline" {...register("password")} 
                                    placeholder="Password" 
                                    className="password-input">

                            <IonIcon slot="start" icon={lockClosed} aria-hidden="true" className="icon-padding"></IonIcon>
                        </IonInput>
                    
                        <IonInput   labelPlacement="stacked" 
                                    type="password" 
                                    fill="outline" {...register("password")} 
                                    placeholder="Confirm Password" 
                                    className="password-input">

                            <IonIcon slot="start" icon={lockClosed} aria-hidden="true" className="icon-padding"></IonIcon>
                        </IonInput>

                        <div className="register-btn">
                            <IonButton type="button" className="register-button" routerLink="/login">
                                <img src={signup} alt="logo" />
                                </IonButton>
                        </div>
                        {/* <IonButton type="submit" className="login-button">Login</IonButton>
                         */}
                        <div className="signup-options">
                            <IonText className="dont-have-account">
                                Already have an account?
                            </IonText>
                            <div className="signup-link">
                                <Link to="/register" className="link-signup">
                                Sign Up
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>

        </IonPage>

        </>
    )
}

export default Register