import { IonButton, IonContent, IonInput, IonItem, IonList, IonPage, IonText, IonIcon } from "@ionic/react"
import top_rectangle from "../assets/top-login-rectangle.svg"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigate, lockClosed } from 'ionicons/icons';

import Login_Form from "../components/Login_Form.module"
import '../components/Login_Form.css'

import logo from "../assets/lockate-logo.svg"
import title from "../assets/lockate-title.svg"

import './Login.css'

const loginSchema = z.object({
    lock_key: z.string().length(6, "Lock Key must be exactly 6 uppercase letters").regex(/^[A-Z]{6}$/, "Lock Key must be uppercase"),
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
        <IonPage>
        <img src={top_rectangle} alt="top-rectangle-login" />
            <div className="logo">
                <img src={logo} alt="logo" />
                <img src={title} alt="title" />
            </div>

            <IonText>
                <h2>Login</h2>
            </IonText>
            <IonContent className="content-container">
                    
                <div className="div-container">
                
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                        <IonList className="login-list">
                            <IonItem lines="none">
                                <IonInput   labelPlacement="stacked" 
                                            type="text" autoCapitalize="on" 
                                            fill="outline"{...register("lock_key")} 
                                            placeholder="Lock Key" 
                                            className="lock-key-input">
                                    
                                    <IonIcon slot="start" icon={navigate} aria-hidden="true"></IonIcon>
                                </IonInput>
                            </IonItem>
                                
                            <IonItem lines="none">
                                <IonInput   labelPlacement="stacked" 
                                            type="password" 
                                            fill="outline" {...register("password")} 
                                            placeholder="Password" className="password-input">

                                    <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                                </IonInput>
                            </IonItem> 
                        </IonList>

                        <IonButton type="submit" className="login-button">Login</IonButton>
                    </form>
                </div>
            </IonContent>
        </IonPage>
        
        </>
    )
}

export default Login