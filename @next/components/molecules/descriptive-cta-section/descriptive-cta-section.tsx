import React from 'react';
import { CustomButtonAtom, GoldenLineHeading } from '@atoms';
import { Box, Typography } from '@mui/material';
import { DescriptiveCTASectionType } from './descriptive-cta-section.type';

export const DescriptiveCTASection = ({
  heading,
  btnText,
  description,
  goldenLineTop,
}: DescriptiveCTASectionType) => {
  return (
    <>
      <Box>
        <GoldenLineHeading text={heading} top={goldenLineTop} />
        <Typography variant="subtitle1" sx={{ color: '#6E7191', mt: '30px' }}>
          {description}
        </Typography>
        <CustomButtonAtom>{btnText}</CustomButtonAtom>
      </Box>
    </>
  );
};
