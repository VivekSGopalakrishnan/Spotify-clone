import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataLayer from './Datalayer/DataLayer';
import reducer from './Reducer/Reducer';
import { initialState } from './Reducer/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer ={reducer}>
    <App />
    </DataLayer>
  </React.StrictMode>
);

