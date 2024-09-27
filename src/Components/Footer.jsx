import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>Email: contact@healthcare.com</p>
                        <p>Phone: +91 12345 67890</p>
                        <p>Address: 123, Health Street, New Delhi, India</p>
                    </div>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:underline">Our Services</a></li>
                            <li><a href="#about" className="hover:underline">About Us</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22 12a10 10 0 10-11 9.95V14.9h-2.74v-2.88H11v-2.2a2.6 2.6 0 012.6-2.6h1.72v2.88h-1.5a1.1 1.1 0 00-1.1 1.1v2.2h2.88L15.7 15v2.88h-3.1v7.05A10 10 0 0022 12z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M23.95 4.57a10 10 0 01-2.82.77 4.88 4.88 0 002.15-2.69 10.15 10.15 0 01-3.17 1.21 4.92 4.92 0 00-8.38 4.48A13.93 13.93 0 011.67 3.15a4.93 4.93 0 001.53 6.57 4.91 4.91 0 01-2.23-.61v.06a4.92 4.92 0 003.94 4.83 4.97 4.97 0 01-2.21.08 4.93 4.93 0 004.6 3.41A9.9 9.9 0 010 21.94a13.91 13.91 0 007.55 2.21A13.91 13.91 0 0021.5 10.64c0-.21 0-.43-.02-.64a9.94 9.94 0 002.47-2.54z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.06 20.45H3.89v-9.73h3.17v9.73zM5.47 9.15a1.84 1.84 0 110-3.68 1.84 1.84 0 010 3.68zm15.05 11.3h-3.17v-4.98c0-1.19-.02-2.73-1.66-2.73-1.66 0-1.92 1.3-1.92 2.64v5.07h-3.17v-9.73h3.04v1.33h.04c.42-.8 1.44-1.66 2.98-1.66 3.18 0 3.77 2.09 3.77 4.81v5.25z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-500 mt-6 pt-6 text-center text-gray-400">
                    © {new Date().getFullYear()} Healthcare Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
