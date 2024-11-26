import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const rootE1 = document.querySelector('#app');

const root = createRoot(rootE1);


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

