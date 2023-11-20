import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './context/AppProvider';
import { Loading } from './utils';
const App = lazy(() => import('./App'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <AppProvider>
        <App />
      </AppProvider>
    </Suspense>
  </BrowserRouter>
);
