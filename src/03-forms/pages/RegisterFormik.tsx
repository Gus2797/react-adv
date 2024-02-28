import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormik = () => {

    return (
        <div>
            <h1>Register Formik</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ ( values ) => {
                    console.log( values );
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                .required('Requerido')
                                .min(2,'El nombre debe contener 2 caracteres o mas')
                                .max(15,'El nombre debe contener menos de 15 caracteres'),
                    email: Yup.string()
                                .required('Requerido')
                                .email('El correo no tiene un formato valido'),
                    password1: Yup.string()
                                .required('Requerido')
                                .min(6,'Debe contener minimo 6 caracteres'),
                    password2: Yup.string()
                                .required('Requerido')
                                .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales'),
                })}
            >
            { ( { handleReset } ) => (
                    <Form>
                        <MyTextInput label="Name:" name="name" type="text" placeholder="Name"/>
                        
                        <MyTextInput label="Email:" name="email" type="text" placeholder="Email"/>
                        
                        <MyTextInput label="Password:" name="password1" type="password" placeholder="Password"/>
                        
                        <MyTextInput label="Repeat Password:" name="password2" type="password" placeholder="Repeat Password"/>

                        <button type="submit">Create</button>

                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                )
            }
            </Formik>
        </div>
    )
}