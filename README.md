# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Healthcare Web App
The Healthcare Web App is a React-based application that allows users to manage healthcare services. Users can add, edit, and remove services, and the data persists in localStorage to retain services across browser sessions.

Features
Add Healthcare Services: Users can add new healthcare services with a name, description, and price.
Edit Healthcare Services: Users can edit existing services.
Delete Healthcare Services: Users can remove services they no longer need.
LocalStorage Integration: Services persist across page reloads using localStorage.
Responsive Design: The app uses Tailwind CSS to ensure a user-friendly experience on both desktop and mobile devices.

Tech Stack
React: Front-end JavaScript library for building user interfaces.
Redux Toolkit: State management library used to manage the application's services.
Tailwind CSS: Utility-first CSS framework for styling.
LocalStorage: For persisting services data across sessions.

Installation

Clone the repository: git clone https://<repository_url>.git

Navigate to the project directory:

cd HealthCare

Install dependencies using Bun:
bun install

Start the development server:
bun run start

The app will be available at http://localhost:3000/ in your browser.

Usage
Open the app in your browser.
Add a new service by filling out the form.
View the list of services in the table below the form.
Edit or delete services as needed.
The data will persist even after you refresh the page due to the localStorage integration.
