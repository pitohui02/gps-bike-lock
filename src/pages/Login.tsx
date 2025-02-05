import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonText, IonIcon, IonCheckbox } from "@ionic/react"
import top_rectangle from "../assets/top-login-rectangle.svg"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigate, lockClosed } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import '../components/Login_Form.css'

import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"
import login from "../assets/login-txt.svg"
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
                        <IonList className="login-list">
                            <IonItem lines="none" className="input-border-radius">
                                <IonInput   labelPlacement="stacked" 
                                            type="text" autoCapitalize="on" 
                                            fill="outline"{...register("lock_key")} 
                                            placeholder="Email" 
                                            className="lock-key-input">
                                    
                                    <IonIcon slot="start" name="mail" className="icon-padding"aria-hidden="true"></IonIcon>
                                </IonInput>
                            </IonItem>
                                
                            <IonItem lines="none" className="input-border-radius">
                                <IonInput   labelPlacement="stacked" 
                                            type="password" 
                                            fill="outline" {...register("password")} 
                                            placeholder="Password" className="password-input">

                                    <IonIcon slot="start" icon={lockClosed} aria-hidden="true" className="icon-padding"></IonIcon>
                                </IonInput>
                            </IonItem> 
                        </IonList>

                        <div className="login-options">
                            <IonCheckbox 
                                labelPlacement="end" 
                                className="checkbox">
                                Remember Me
                            </IonCheckbox>
                            <div className="forget-password-link">
                                <Link to="/forgetpassword" className="link-forgot">
                                Forget Password?
                                </Link>
                            </div>
                        </div>
                        
                        <div className="login-btn">
                            <IonButton type="submit" className="login-button">
                                <img src={login} alt="logo" />
                                </IonButton>
                        </div>
                        {/* <IonButton type="submit" className="login-button">Login</IonButton>
                         */}
                        <div className="signup-options">
                            <IonText className="dont-have-account">
                                Dont have an account?
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

export default Login