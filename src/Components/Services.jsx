import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService } from '../store/serviceSlice';

function Services({ setEditingService }) {
    const services = useSelector(state => state.services);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col justify-center items-center bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md w-full'>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-700">Healthcare Services</h1>
            <div className="w-full overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full lg:w-[80%] lg:mx-auto text-left bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-blue-900">Name</th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-blue-900">Description</th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-blue-900">Price</th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-blue-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id} className="hover:bg-blue-50">
                                <td className="border border-gray-300 px-2 sm:px-4 py-2">{service.name}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2">{service.description}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2">₹{service.price}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 flex flex-col sm:flex-row gap-2">
                                    <button
                                        onClick={() => setEditingService(service)}
                                        className="text-white bg-green-500 border-0 py-1 px-2 sm:px-4 focus:outline-none hover:bg-green-600 rounded text-sm sm:text-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeService(service.id))}
                                        className="text-white bg-red-500 border-0 py-1 px-2 sm:px-4 focus:outline-none hover:bg-red-600 rounded text-sm sm:text-md flex justify-center items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 sm:w-6 sm:h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Services;
