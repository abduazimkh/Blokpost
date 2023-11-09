import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
const App = lazy(()=> import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
    </BrowserRouter>
);

reportWebVitals();
