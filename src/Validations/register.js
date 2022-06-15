import * as Yup from 'yup';
export const registerSchema = Yup.object().shape({
    username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(3,'Must be 3 characters or more')
        .required('Name is required'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    confirm_password: Yup.string()
    .required("confirm password is required")
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});