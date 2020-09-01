import React from 'react';
// switch garante que apenas uma rota seja mostrada a cada momento
import { BrowserRouter, Route } from 'react-router-dom';

import ProductsList from '../pages/ProductsList';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Route path="/" exact component={ProductsList} />
    </BrowserRouter>
);

export default Routes;
