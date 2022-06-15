import React from 'react';
import { Formik, Form } from 'formik';
import { registerSchema } from '../../Validations/register';
import InputFields from '../../Reusable/input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Register = () => {

    let navigate = useNavigate();


    const handleSubmit = (values) => {
        let getstoredCredentials = JSON.parse(localStorage.getItem("registrated"));
        console.log("vlaues")
        if (getstoredCredentials) {
            if (getstoredCredentials.email === values.email) {
                toast.error("Email already exist.");
                console.log("vlaues1")
            }
            else {
                let storedCredentials = localStorage.setItem("registrated", JSON.stringify(values));
                console.log(storedCredentials)
                toast.success("You are registered successfully.")  
                console.log("vlaues2")           
            }
           
        }
        else {
            let storedCredentials = localStorage.setItem("registrated", JSON.stringify(values));
            console.log(storedCredentials)
            toast.success("You are registered successfully.")  
            console.log("vlaues2")           
        }
    }
    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    confirm_password: '',
                    password: '',
                    email: '',
                }}
                validationSchema={registerSchema}
                onSubmit={values => {
                    handleSubmit(values)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-outline mb-3">
                            <InputFields
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                errorMsg={touched.username && errors.username && errors.username}
                            />
                        </div>
                        <div className="form-outline mb-3">
                            <InputFields
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                errorMsg={touched.email && errors.email && errors.email}
                            />
                        </div>
                        <div className="form-outline mb-3">
                            <InputFields
                                name="password"
                                className="form-control"
                                placeholder="password"
                                errorMsg={touched.password && errors.password && errors.password}
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <InputFields
                                name="confirm_password"
                                className="form-control"
                                placeholder="Confirm Password"
                                errorMsg={touched.confirm_password && errors.confirm_password && errors.confirm_password} />
                        </div>

                        <div className="row mb-3">
                            <div className=''>
                                <input type="checkbox" id='agreeInput' />
                                <label for="agreeInput" className='ms-2'>I have read all the terms and conditions.</label>
                            </div>


                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer 
            />
        </>
    )
}
export default Register
