import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { registerSchema } from '../../Validations/register';
import InputFields from '../../Reusable/input';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {

    let navigate = useNavigate();

    const [showPass, setShowPass] = useState(false)
    const [showPass1, setShowPass1] = useState(false)
    const [button , setButton ] = useState(true)
    const handleShow = () => {
        setShowPass(!showPass)
    }

    const handleShow1 = () => {
        setShowPass1(!showPass1)
    }
    
    const handleCheckbox = () =>
    {
        setButton(!button)
    }

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
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="Username"
                                errorMsg={touched.username && errors.username && errors.username}
                            />
                        </div>
                        <div className="form-outline mb-3">
                            <InputFields
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                errorMsg={touched.email && errors.email && errors.email}
                            />
                        </div>
                        <div className="form-outline mb-3 position-relative">
                            <InputFields
                                type={showPass ? "text" : "password"}
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                errorMsg={touched.password && errors.password && errors.password}
                            />
                            {
                                showPass ?
                                    <AiFillEye className='eye-icons' onClick={handleShow} /> :
                                    <AiFillEyeInvisible className='eye-icons' onClick={handleShow} />
                            }


                        </div>

                        <div className="form-outline mb-4 position-relative">
                            <InputFields
                               type={showPass1 ? "text" : "password"}
                                name="confirm_password"
                                className="form-control"
                                placeholder="Confirm Password"
                                errorMsg={touched.confirm_password && errors.confirm_password && errors.confirm_password} />
                            {
                                showPass1 ?
                                    <AiFillEye className='eye-icons' onClick={handleShow1} /> :
                                    <AiFillEyeInvisible className='eye-icons' onClick={handleShow1} />
                            }
                        </div>

                        <div className="row mb-3">
                            <div className=''>
                                <input type="checkbox" id='agreeInput' onChange={handleCheckbox}/>
                                <label for="agreeInput" className='ms-2'>I have read all the terms and conditions.</label>
                            </div>


                        </div>

                        <button type="submit" disabled={button} className="btn btn-primary btn-block mb-4">Sign up</button>

                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div>
                    </Form>
                )}
            </Formik>
           
        </>
    )
}
export default Register
