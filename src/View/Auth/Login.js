import React from 'react';
import { Formik, Form} from 'formik';
import { authSchema } from '../../Validations/auth';
import InputFields from '../../Reusable/input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useStore } from '../../store';

const Login = () => {

    let navigate = useNavigate();

    const { handleToken } = useStore();
    const { handleAdmin } = useStore();
    
    const handleSubmit = (values) => {
        let getstoredCredentials = JSON.parse(localStorage.getItem("registrated"));
        if(getstoredCredentials)
        {
            if(values.email === getstoredCredentials.email && values.password === getstoredCredentials.password)
            {
               let oneString =  Math.random().toString(36).substr(2); 
               let twoString =  Math.random().toString(36).substr(2); 
               let token = oneString + twoString;
               localStorage.setItem("tokenCti",JSON.stringify(token));
               navigate('/home')
               toast.success("Logged in successfully.");
               handleToken()
            }
            else if(values.email === "test@cti.com" && values.password === "test12345678")
            {
                let oneString =  Math.random().toString(36).substr(2); 
                let twoString =  Math.random().toString(36).substr(2); 
                let token = oneString + twoString;
                localStorage.setItem("tokenCti",JSON.stringify(token));
                localStorage.setItem("admin",JSON.stringify("true"));
                navigate('/home')
                toast.success("Logged in successfully.");
                handleToken();
                handleAdmin();
            }
            else
            {
                toast.error("Invalid credentials")
            }
        }
        else
        {
            toast.error("Invalid credentials")
        }
       
    }
    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                }}
                validationSchema={authSchema}
                onSubmit={values => {
                    handleSubmit(values)
                }}
            >
                {({ errors, touched }) => (
                    <Form>

                        <div className="form-outline mb-3">
                            <InputFields
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                errorMsg={touched.email && errors.email && errors.email}
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <InputFields
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                errorMsg={touched.password && errors.password && errors.password} />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 ">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </>
    )
}
export default Login