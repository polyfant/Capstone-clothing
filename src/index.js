import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';

import {
  CategoriesProvider,
  categoriesContext,
} from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
