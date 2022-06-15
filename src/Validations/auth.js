import * as Yup from 'yup';
export const authSchema = Yup.object().shape({
    password: Yup.string()
    .required('Password is required.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});