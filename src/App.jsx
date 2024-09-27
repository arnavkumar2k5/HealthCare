import React, { useState } from 'react';
import AddService from './Components/AddService';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
    const [editingService, setEditingService] = useState(null);

    const clearEditingService = () => setEditingService(null);

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">
            <header className="text-center p-10">
                <h1 className="text-5xl font-bold text-blue-900">Healthcare Services</h1>
            </header>

            <main className="flex-grow">
                <AddService editingService={editingService} clearEditingService={clearEditingService} />
                <Services setEditingService={setEditingService} />
            </main>
            
            <Footer />
        </div>
    );
}

export default App;
