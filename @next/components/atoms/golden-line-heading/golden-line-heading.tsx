import React from 'react';
import { Box, Typography } from '@mui/material';
import { GoldenLineHeadingType } from './golden-line-heading.type';

export const GoldenLineHeading = ({ text, top }: GoldenLineHeadingType) => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Typography
          variant="body1"
          sx={{ fontSize: { md: '36px', xs: '20px' }, color: '#2E285C' }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: top ? top : '70%',
            display: { sm: 'block', xs: 'none' },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="344"
            height="24"
            viewBox="0 0 344 24"
            fill="none"
          >
            <path
              d="M1 23C37.8873 8.51978 157.929 -13.4721 343 14.4024"
              stroke="#FEAA10"
              stroke-width="2"
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};
