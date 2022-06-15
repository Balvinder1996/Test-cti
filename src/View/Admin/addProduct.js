import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import InputFields from '../../Reusable/input';
import { productSchema } from '../../Validations/addProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    let navigate = useNavigate();

    const [imagePath, setImagePath] = useState('');

    const handleSubmit = (values) => {
        console.log(imagePath);
        let getstoredProduct = JSON.parse(localStorage.getItem("storedProduct"));
        if (getstoredProduct) {

            let temp = getstoredProduct;
            let modifiedValues = {
                productName:values.productName,
                price: values.price,
                quantity: values.quantity,
                description:values.description,
                image: imagePath
            }
            temp.push(modifiedValues);
            let storedProduct = localStorage.setItem("storedProduct", JSON.stringify(temp));
            toast.success("Product saved successfully.");
            navigate('/home')
        }
        else {
            let temp = [];
            let modifiedValues = {
                productName:values.productName,
                price: values.price,
                quantity: values.quantity,
                description:values.description,
                image:imagePath
            }
            console.log(modifiedValues)
            temp.push(modifiedValues)
            let storedProduct = localStorage.setItem("storedProduct", JSON.stringify(temp));
            toast.success("Product saved successfully.")
            navigate('/home')
        }
    }
    const handleInputChange= (event) => {
        let files = event.target.files;
        // console.log(event.target.files[0])
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            console.log(e.target.result)
           setImagePath(e.target.result)
        }
    }
    return (
        <>
            <section className='container min-height'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-md-6 mt-5'>
                        <div className='card'>
                            <div className='card-header bg-color-nb'>
                                <h5 className='text-white'>Add product</h5>
                            </div>
                            <div className='card-body'>
                                <Formik
                                    initialValues={{
                                        productName: '',
                                        price: '',
                                        quantity: '',
                                        description: '',
                                    }}
                                    validationSchema={productSchema}
                                    onSubmit={values => {
                                        handleSubmit(values)
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>

                                            <div className="form-outline mb-3">
                                                <InputFields
                                                    name="productName"
                                                    className="form-control"
                                                    placeholder="Name of product"
                                                    errorMsg={touched.productName && errors.productName && errors.productName}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <InputFields
                                                    name="price"
                                                    className="form-control"
                                                    placeholder="Price"
                                                    errorMsg={touched.price && errors.price && errors.price} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <InputFields
                                                    name="quantity"
                                                    className="form-control"
                                                    placeholder="Quantity"
                                                    errorMsg={touched.quantity && errors.quantity && errors.quantity} />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <div class="input-group mb-3">
                                                    <input type="file" class="form-control"
                                                        id="inputGroupFile01"
                                                        placeholder='Image'
                                                        name='image'
                                                        onChange = {handleInputChange}
                                                    />

                                                </div>
                                                {/* <div className='errorMsgWrapper'>
                                                    {touched.image && errors.image && errors.image}
                                                </div> */}
                                            </div>

                                            <div className="form-outline mb-4">
                                                
                                                <InputFields
                                                    name="description"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    errorMsg={touched.description && errors.description && errors.description} />
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block mb-4">Add product</button>


                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
            />
        </>
    )
}
export default AddProduct