
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, IonIcon } from "@ionic/react"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { navigate, lockClosed } from 'ionicons/icons';

import './Login_Form.css'


const loginSchema = z.object({
    lock_key: z.string().length(6, "Lock Key must be exactly 6 uppercase letters").regex(/^[A-Z]{6}$/, "Lock Key must be uppercase"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})


type FormValues = z.infer<typeof loginSchema>;

const Login_Form: React.FC = () => {

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
        <IonPage>
            <IonContent>
                
            </IonContent>
        </IonPage>
    )
}

export default Login_Form;