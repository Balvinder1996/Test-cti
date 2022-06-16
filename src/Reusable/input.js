import React from 'react';
import { Field } from 'formik';
const InputFields = (props) => {
    const { type, name, id, className, placeholder, errorMsg, onChange, onBlur, value } = props
    return (
        <>
            <Field
                type={type ? type : "text"}
                name={name}
                className={className}
                placeholder={placeholder}
            />
            <div className='errorMsgWrapper'>
                {errorMsg ? errorMsg : ""}
            </div>
        </>
    )
}
export default InputFields