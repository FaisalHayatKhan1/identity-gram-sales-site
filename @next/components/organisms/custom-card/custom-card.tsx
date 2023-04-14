import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';

export const CustomCardOrgan = ({ data }: any) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        px: { xs: 3, sm: 4, md: 5, xl: 13 },
        mt: { lg: '90px', md: '80px', sm: '60px', xs: '60px' },
        mb: { lg: '160px', md: '120px', sm: '80px', xs: '60px' },
      }}
    >
      <Box
        sx={{
          boxShadow: '6px 6px 24px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '48px',
          p: { xs: 0.5, md: 0.6 },
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            borderRadius: '48px',
            background:
              'linear-gradient(283.8deg, #F6DBFA -26.07%, #A084CA 95.53%);',
            alignItems: 'center',
          }}
        >
          {data?.map(({ title, subTitle, image }: any, index: any) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={2.5}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                borderRadius: '36px',
                color: 'white',
                textAlign: 'center',
                padding: '45px 30px',
                minHeight: '450px',
                transition: '0.3s',
                // border:{ sm: 'none', xs: '1px rgb(246,219,250) solid' },

                '&:hover': {
                  transition: '0.3s',
                  backgroundColor: 'rgb(246,219,250)',
                  color: 'primary.dark',
                  transform: 'scale(1, 1.1)',
                  transformOrigin: 'bottom',
                },
              }}
            >
              <Image src={image} alt="Images" />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100px',
                }}
              >
                <Typography variant="h3">{title}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'center',
                  height: '150px',
                }}
              >
                <Typography variant="subtitle1">{subTitle}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
