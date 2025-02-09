import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonText, IonIcon, IonCheckbox } from "@ionic/react"
import top_rectangle from "../assets/top-login-rectangle.svg"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigate, lockClosed } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import welcome from "../assets/welcome-txt.svg"
import './Login.css'

const loginSchema = z.object({
    lock_key: z.string().length(6, "Username must be exactly 6 uppercase letters").regex(/^[A-Z]{6}$/, "Lock Key must be uppercase"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})

type FormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {

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
            <img src={top_rectangle} alt="top-rectangle-login" />
                <div className="logo-title">
                    <img src={logo} alt="logo" />
                    <img src={title} alt="title" />
                </div>

                {/* <IonText>
                    <h2>Welcome!</h2>
                </IonText> */}
                <div className="welcome-text">
                    <img src={welcome} alt="welcome" />
                </div>
                <div className="div-container">
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <div className="login-list">
                                <IonInput   labelPlacement="stacked" 
                                            type="text" autoCapitalize="on" 
                                            fill="outline"{...register("lock_key")} 
                                            placeholder="Lock ID" 
                                            className="lock-key-input">
                                    
                                    <IonIcon slot="start" name="key" className="icon-padding-key"aria-hidden="true"></IonIcon>
                                </IonInput>
                                
                                <IonInput   labelPlacement="stacked" 
                                            type="password" 
                                            fill="outline" {...register("password")} 
                                            placeholder="Password" className="password-input">

                                    <IonIcon slot="start" icon={lockClosed} aria-hidden="true" className="icon-padding"></IonIcon>
                                </IonInput>
                        </div>

                        <IonButton type="button" className="login-button" routerLink="/dashboard">
                            Login
                        </IonButton>
                        <div className="login-options">
                            <IonCheckbox 
                                labelPlacement="end" 
                                className="checkbox">
                                Remember Me
                            </IonCheckbox>
                                <Link to="/forgetpassword" className="link-forgot">
                                    Forget Password?
                                </Link>
                        </div>
                        
                        <div className="signup-options">
                            <IonText className="dont-have-account">
                                Dont have an account?          
                            </IonText>

                            <Link to="/register" className="link-signup">
                                <IonText>Sign Up</IonText>
                            </Link>
                        </div>
                    </form>
                </div>

        </IonPage>

        </>
    )
}

export default Login