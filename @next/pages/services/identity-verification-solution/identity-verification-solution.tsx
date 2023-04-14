import React from 'react';
import {
  complianceAndFraud,
  solutionCardDataOfIdentityVerification,
} from '@constants';
import { compromisesImage, identityHeroImage } from '@images';
import { DashboardLayout } from '@layouts';
import { Box } from '@mui/system';
import {
  CustomCardOrgan,
  HeroSectionorgan,
  NocompromisesOrgan,
  StandingUpOrgan,
  VerificationStepper,
} from '@organisms';

export const IdentityVerificationSolution = (): JSX.Element => (
  <React.Fragment>
    <Box sx={{ backgroundColor: '#ffff' }}>
      <HeroSectionorgan
        heading1="ONLINE IDENTITY VERIFICATION"
        bigHeading1="Identity Verification Solution"
        paragraph="Convert and onboard more real customers while stopping bad actors with Identity Gram verification solution. We offer the fastest and easiest way to convert more users, prevent fraud, and comply with regulations."
        image={identityHeroImage}
      />

      <NocompromisesOrgan
        title="No compromises"
        image={compromisesImage}
        subTitle="Prevent fraud, build trust, and onboard more customers faster with Identity gram’s identity verification solution."
        left="-80px"
        top="40px"
        width="100%"
      />
      <CustomCardOrgan data={solutionCardDataOfIdentityVerification} />
      <StandingUpOrgan
        data={complianceAndFraud}
        heading="Standing up to online identity fraud couldn’t be easier"
        subHeading="It’s as simple as taking a selfie and snapping a photo of an ID for end users to get verified in a matter of seconds. Identity gram’s accurate fraud prevention will stop bad actors, while bringing in more customers for your business. "
      />
      <VerificationStepper />
    </Box>
  </React.Fragment>
);

IdentityVerificationSolution.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
