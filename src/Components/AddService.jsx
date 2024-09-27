import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addService, editService } from '../store/serviceSlice';

function AddService({ editingService, clearEditingService }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (editingService) {
            setName(editingService.name);
            setDescription(editingService.description);
            setPrice(editingService.price);
        }
    }, [editingService]);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    const serviceHandler = (e) => {
        e.preventDefault();

        if (!name || !description || !price) {
            setError('All fields are required');
            return;
        }

        if (editingService) {
            dispatch(editService({ id: editingService.id, name, description, price }));
            clearEditingService();
        } else {
            dispatch(addService({ name, description, price }));
        }

        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className='bg-blue-50 p-6 rounded-lg shadow-md'>
            {error && (
                <p className="text-red-500 bg-red-100 border border-red-400 text-center py-2 px-4 mb-4 rounded">
                    {error}
                </p>
            )}

            <form onSubmit={serviceHandler} className="space-y-4">
                <input
                    type="text"
                    className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full"
                    placeholder="Service Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full"
                    placeholder="Service Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-full"
                    placeholder="Service Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg w-full"
                >
                    {editingService ? 'Edit Service' : 'Add Service'}
                </button>
            </form>
        </div>
    );
}

export default AddService;
