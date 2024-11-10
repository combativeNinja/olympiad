import React from 'react';

    const PartnerReg = () => {
    return (
        <div className='h-full'>
        <h1 className='mt-4 text-3xl font-bold text-center'>Partner Registration</h1>
        <div className='h-full flex justify-center mt-8'>
            <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="partnerName">
                    Partner Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="partnerName"
                    type="text"
                    placeholder="Partner Name"
                />
                </div>

                <div className='flex flex-wrap -mx-3 mb-2'>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                    State
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="state"
                    type="text"
                    placeholder="State"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                    City
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="city"
                    type="text"
                    placeholder="City"
                    />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pincode">
                    Pincode
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="pincode"
                    type="text"
                    placeholder="Pincode"
                    />
                </div>
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactName">
                    Contact Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contactName"
                    type="text"
                    placeholder="Contact Name"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    placeholder="Address"
                />
                </div>

                <div className="flex items-center justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}

export default PartnerReg;