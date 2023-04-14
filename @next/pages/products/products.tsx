import React from 'react';
import { DashboardLayout } from '@layouts';

export const Products = (): JSX.Element => (
  <React.Fragment>
    <h1>Products</h1>
  </React.Fragment>
);

Products.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
