import * as Yup from 'yup';
export const productSchema = Yup.object().shape({
    productName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(3, 'Must be 3 characters or more')
        .required('Name of product is required'),

    description: Yup.string()
        .max(40, 'Must be 15 characters or less')
        .min(3, 'Must be 3 characters or more')
        .required('description is required'),

    price: Yup.number()
    .required('price is required')
        .integer()
        .default(0)
        .positive(),

    quantity: Yup.number()
        .required('quantity is required')
        .integer()
        .default(0)
        .positive(),

});