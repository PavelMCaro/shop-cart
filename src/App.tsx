import React from 'react';
import '../public/scss/style.scss';
import { Header } from './components/Header';
import { PageContainer } from './components/Page/container';

export const App = () => (
  <div className="col-flex">
    <Header />
    <PageContainer />
  </div>
);
