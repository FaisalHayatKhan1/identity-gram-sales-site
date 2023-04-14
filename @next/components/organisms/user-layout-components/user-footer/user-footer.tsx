import React from 'react';
import Link from 'next/link';
import { PolicyLinks } from '@constants';
import { Box, Typography } from '@mui/material';

export const UserFooter = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'primary.dark',
          padding: '24px',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography sx={{ color: 'white' }}>
            Copyrights © 2023 All Rights Reserved by Identity Gram
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {PolicyLinks.map((item: any, index) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} key={item.id}>
              <Link
                href={item.link}
                passHref
                style={{ color: 'white', textDecoration: 'none' }}
              >
                {item.name}
              </Link>
              <Typography sx={{ color: 'white', px: 1 }}>
                {item.divider}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
