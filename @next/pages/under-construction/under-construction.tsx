import React from 'react';
import { DashboardLayout } from '@layouts';
import { UnderConstructionMol } from '@molecules';

export const UnderConstruction = () => {
  return (
    <React.Fragment>
      <UnderConstructionMol />
    </React.Fragment>
  );
};

UnderConstruction.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
