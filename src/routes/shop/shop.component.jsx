import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../catogories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useContext } from 'react';
import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
