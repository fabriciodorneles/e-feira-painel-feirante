import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductsList from '../pages/ProductsList';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={ProductsList} />
    </BrowserRouter>
);

export default Routes;
