import MainLayout from 'layout/MainLayout';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/test" element={<div>Test</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
