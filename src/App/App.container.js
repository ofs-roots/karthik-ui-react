import React from 'react';
import './App.css';
import Overstock from './Overstock/Overstock.component';
import { BrowserRouter } from 'react-router-dom';

const app = () => {
    return(
        <BrowserRouter basename='/'>
            <Overstock />
        </BrowserRouter>
    );
}
export default app;
