import * as yup from "yup";

export const studValidation = yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters long'),

    parentName: yup.string()
        .required('Parent name is required')
        .min(2, 'Parent name should be at least 2 characters long'),

    dob: yup.date()
        .required('Date of birth is required')
        .max(new Date(), 'Date of birth cannot be in the future'),

    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number should be exactly 10 digits'),

    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),

    schoolName: yup.string()
        .required('School name is required')
        .min(2, 'School name should be at least 2 characters long'),

    state: yup.number()
        .required('State is required')
        .min(2, 'State should be at least 2 characters long'),

    city: yup.number()
        .required('City is required')
        .min(2, 'City should be at least 2 characters long'),

    pincode: yup.string()
        .required('Pincode is required')
        .matches(/^[0-9]{6}$/, 'Pincode should be exactly 6 digits'),

    address: yup.string()
        .required('Address is required')
        .min(5, 'Address should be at least 5 characters long'),

    class: yup.number()
        .required('Class is required')
        .integer('Class should be an integer')
        .positive('Class should be a positive number')
        .min(1, 'Class should be at least 1')
        .max(12, 'Class should be no more than 12'),

    gender: yup.string()
        .required('Gender is required')
        .oneOf(['Male', 'Female', 'Other'], 'Invalid gender selection'),

    subjects: yup.array()
        .of(yup.string())
        .min(1, 'At least one subject is required')
        .required('Subjects are required')
});