import React from 'react';
import { Box, Typography } from '@mui/material';

export const VerificationWorkTab = (prop: any) => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: { lg: '1.25rem', md: '1.25rem', sm: '1.15rem', xs: '1rem' },
          color: 'primary.dark',
          lineHeight: '32px',
          '& .css-1sx6dkj-MuiButtonBase-root-MuiTab-root': {
            maxWidth: '5000px !important',
            backgroundColor: 'red !important',
          },
        }}
      >
        <Typography
          variant="h3"
          component="span"
          sx={{
            backgroundColor: 'primary.dark',
            px: '14px',
            py: '4px',
            borderRadius: '50%',
            color: '#fff',
            mr: '10px',
            display: { lg: 'inline', xs: 'none' },
          }}
          noWrap
        >
          {prop.numberTab}
        </Typography>
        {prop.headingTab}
      </Typography>
    </Box>
  );
};
