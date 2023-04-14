import React from 'react';
import { DashboardLayout } from '@layouts';
import {
  CustomCardOrgan,
  HeroSectionorgan,
  NocompromisesOrgan,
  StandingUpOrgan,
  VerificationSoftwareTab,
} from '@organisms';
import { automated, softwareHero } from '@images';
import { Box } from '@mui/system';
import {
  softwareCardDataOfDocumentVerification,
  standingCardDataOfDocumentVerification,
} from '@constants';

export const DocumentsVerificationSoftware = (): JSX.Element => (
  <React.Fragment>
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeroSectionorgan
        heading1="ID VERIFICATION SOFTWARE"
        bigHeading1="Verify IDs in seconds anywhere in the world"
        paragraph="Verify identity documents in real time and detect fake and tampered documents with Identity Gram AI-powered ID Verification software."
        image={softwareHero}
        // width="100%"
      />
      <NocompromisesOrgan
        image={automated}
        title="Automated ID verification with real-time user feedback"
        subTitle="Identity document fraud detection that gets users through quickly, and the first time, leading to a higher rate of new customer conversions."
        left="-230px"
        top="35px"
        width="100%"
      />
      <CustomCardOrgan data={softwareCardDataOfDocumentVerification} />
      <StandingUpOrgan
        data={standingCardDataOfDocumentVerification}
        heading="Compliance and fraud detection combined with easy onboarding"
        subHeading="Complying with KYC regulations and prioritizing user experience isn’t a compromise with Identity gram. Automated AML screening and identity proofing focused on fraud detection, coupled with a seamless user experience, keep bad actors out while converting more new account holders."
      />
      <VerificationSoftwareTab />
    </Box>
  </React.Fragment>
);

DocumentsVerificationSoftware.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
