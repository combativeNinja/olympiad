import * as yup from 'yup';

export const schoolValidation = yup.object().shape({
    schoolName: yup.string()
        .required('School Name is required')
        .min(2, 'School Name should be at least 2 characters long'),
    state: yup.string()
        .required('State is required')
        .min(2, 'State should be at least 2 characters long'),
    city: yup.string()
        .required('City is required')
        .min(2, 'City should be at least 2 characters long'),
    pincode: yup.string()
        .required('Pincode is required')
        .matches(/^[0-9]{6}$/, 'Pincode should be exactly 6 digits'),
    contactName: yup.string()
        .required('Contact Name is required')
        .min(2, 'Contact Name should be at least 2 characters long'),
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number should be exactly 10 digits'),
    address: yup.string()
        .required('Address is required')
        .min(5, 'Address should be at least 5 characters long'),
});