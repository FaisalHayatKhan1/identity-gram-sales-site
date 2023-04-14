import React from 'react';
import { automated, proofHero } from '@images';
import { DashboardLayout } from '@layouts';
import { Box } from '@mui/material';
import {
  CustomCardOrgan,
  HeroSectionorgan,
  NocompromisesOrgan,
  ProofAddressTab,
} from '@organisms';
import { proofCardDataOfProofAddress } from '@constants';

export const ProofOfAddress = (): JSX.Element => (
  <React.Fragment>
    <Box sx={{ backgroundColor: '#fff' }}>
      <HeroSectionorgan
        heading1="PROOF OF ADDRESS"
        bigHeading1="Approve more users with Identity gram’s"
        paragraph="Verify identity documents in real time and detect fake and tampered documents with Identity Gram AI-powered ID Verification."
        image={proofHero}
      />
      <NocompromisesOrgan
        image={automated}
        title="How Identity Gram Proof of Address helps businesses"
        subTitle="Identity Gram automates your manual processes and makes it easier, faster, and cheaper to confirm that your users live where they say they live."
        left="-230px"
        top="35px"
        width="100%"
      />
      <CustomCardOrgan data={proofCardDataOfProofAddress} />
      <ProofAddressTab />
    </Box>
  </React.Fragment>
);

ProofOfAddress.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);
