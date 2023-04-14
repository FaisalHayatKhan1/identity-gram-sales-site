import React from 'react';
import { serviceCardDataOfHome, solutionCardDataOfHome } from '@constants';
import { automated, verifHome } from '@images';
import { DashboardLayout } from '@layouts';
import { Box } from '@mui/system';
import {
  CustomCardOrgan,
  HeroSectionorgan,
  NocompromisesOrgan,
  ServiceHomeCard,
} from '@organisms';

export const HomePage = (): JSX.Element => (
  <React.Fragment>
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeroSectionorgan
        heading1="IDENTITY VERIFICATION SOLUTION"
        bigHeading1="Stop fraud. Build trust. Identity verification made simple."
        paragraph="AI-powered identity verification solution for identity fraud prevention, Know Your Customer compliance, and fast conversions of valuable customers with Identity Gram. Entrust identity verification to us and our identity experts, and focus on what you do best. "
        image={verifHome}
      />
      <NocompromisesOrgan
        image={automated}
        title="Make identity verification quick & easy"
        subTitle="Identity Gram ensures the safety of both users and businesses by bringing transparency to digital interactions. Our 
        state-of-the-art technology and team of experts verify that only trustworthy people have access to your digital spaces."
        left="-180px"
        top="35px"
        width="100%"
      />
      <CustomCardOrgan data={solutionCardDataOfHome} />
    </Box>
    <ServiceHomeCard
      data={serviceCardDataOfHome}
      heading="Services"
      subHeading="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    />
  </React.Fragment>
);

HomePage.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
