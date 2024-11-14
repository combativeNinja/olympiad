import React from 'react';
import { useFormik } from "formik";
import axios from 'axios';
import { schoolValidation } from "../validationSchema/schoolVal";

const SchoolReg = () => {
    const onSubmit = async (values, actions) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/school/register`, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            actions.resetForm();
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            schoolName: '',
            state: '',
            city: '',
            pincode: '',
            contactName: '',
            email: '',
            phone: '',
            address: ''
        },
        validationSchema: schoolValidation,
        onSubmit,
    });

    return (
        <div className='h-full'>
            <h1 className='mt-4 text-3xl font-bold text-center'>School Registration</h1>
            <div className='h-full flex justify-center mt-8'>
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="schoolName">
                                School Name
                            </label>
                            <input
                                className={`${errors.schoolName && touched.schoolName ? "input-error" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="schoolName"
                                type="text"
                                name="schoolName"
                                value={values.schoolName}
                                onChange={handleChange}
                                placeholder="School Name"
                                onBlur={handleBlur}
                            />
                            {errors.schoolName && touched.schoolName && <p className='error'>{errors.schoolName}</p>}
                        </div>
                        
                        <div className='flex flex-wrap -mx-3 mb-2'>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                                    State
                                </label>
                                <input
                                    className={`${errors.state && touched.state ? "input-error" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                    id="state"
                                    type="text"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    onBlur={handleBlur}
                                />
                                {errors.state && touched.state && <p className='error'>{errors.state}</p>}
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className={`${errors.city && touched.city ? "input-error" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                    id="city"
                                    type="text"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    onBlur={handleBlur}
                                />
                                {errors.city && touched.city && <p className='error'>{errors.city}</p>}
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pincode">
                                    Pincode
                                </label>
                                <input
                                    className={`${errors.pincode && touched.pincode ? "input-error" : ""} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                    id="pincode"
                                    type="text"
                                    name="pincode"
                                    value={values.pincode}
                                    onChange={handleChange}
                                    placeholder="Pincode"
                                    onBlur={handleBlur}
                                />
                                {errors.pincode && touched.pincode && <p className='error'>{errors.pincode}</p>}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactName">
                                Contact Name
                            </label>
                            <input
                                className={`${errors.contactName && touched.contactName ? "input-error" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="contactName"
                                type="text"
                                name="contactName"
                                value={values.contactName}
                                onChange={handleChange}
                                placeholder="Contact Name"
                                onBlur={handleBlur}
                            />
                            {errors.contactName && touched.contactName && <p className='error'>{errors.contactName}</p>}
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className={`${errors.email && touched.email ? "input-error" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email"
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className={`${errors.phone && touched.phone ? "input-error" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="phone"
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                onBlur={handleBlur}
                            />
                            {errors.phone && touched.phone && <p className='error'>{errors.phone}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <textarea
                                className={`${errors.address && touched.address ? "input-error" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="address"
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                                placeholder="Address"
                                onBlur={handleBlur}
                            />
                            {errors.address && touched.address && <p className='error'>{errors.address}</p>}
                        </div>

                        <div className="flex items-center justify-end">
                            <button disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SchoolReg;