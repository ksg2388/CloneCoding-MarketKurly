import MainLayout from 'layout/MainLayout';
import CartPage from 'pages/CartPage';
import CategoryPage from 'pages/CategoryPage';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<div>Test</div>} />
          <Route path="/category">
            <Route path="1" element={<CategoryPage title="채소" />} />
            <Route path="2" element={<CategoryPage title="과일·견과·쌀" />} />
            <Route
              path="3"
              element={<CategoryPage title="수산·해산·건어물" />}
            />
          </Route>
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
