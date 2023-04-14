import React, { Fragment } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const ServiceHomeCard = ({ data, heading, subHeading, link }: any) => {
  const [isHovered, setIsHovered] = React.useState('');
  const handleHover = (data: any) => {
    setIsHovered(data);
  };
  const handleLeave = () => {
    setIsHovered('');
  };
  return (
    <Box sx={{ backgroundColor: '#FFF', position: 'relative' }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={11} sm={10} md={8} lg={6}>
          <Typography
            variant="h2"
            sx={{
              color: 'primary.dark',
              textAlign: 'center',
              lineHeight: '48px',
              pb: 5,
            }}
          >
            {heading}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'primary.light',
              textAlign: 'center',
              pb: 5,
              lineHeight: '28px',
            }}
          >
            {subHeading}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ pt: 8, mb: 5, minHeight: '300px' }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xl={8} lg={10} md={10}>
            <Grid container sx={{ justifyContent: 'center' }}>
              {data?.map((item: any, index: number) => (
                <Fragment key={item?.id}>
                  <Grid item lg={4} sm={6} xs={12}>
                    <Link
                      href={item.link}
                      passHref
                      style={{ textDecoration: 'none' }}
                    >
                      <Card
                        sx={{
                          textAlign: 'center',
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                          transition: 'all 0.4s ease-in',
                          borderRadius: 0,
                          borderRight:
                            item.title !== 'Proof of Address'
                              ? '1px solid #E4E4E7'
                              : '',
                          padding: '40px 20px',
                          '&:nth-of-type(0n+3)': {
                            borderRight: 'none',
                          },
                          '&:hover': {
                            borderLeft: '1px solid #E4E4E7',
                            backgroundColor: '#F6FBFF',
                            transform: { md: 'scale(1.1)', sm: 'none' },
                          },
                        }}
                        onMouseLeave={handleLeave}
                        onMouseEnter={() => handleHover(`${index}p1`)}
                      >
                        <Image src={item.image} alt="Image" />
                        <Typography
                          variant="h3"
                          gutterBottom
                          sx={{
                            lineHeight: '28px',
                            color: 'primary.dark',
                            py: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="h4"
                          color="primary.light"
                          sx={{
                            lineHeight: '26px',
                          }}
                        >
                          {item.subTitle}
                        </Typography>
                      </Card>
                      <Box
                        className="slide"
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          height: '100%',
                          overflow: 'hidden',
                          transition: '1.5s ease',
                          width: isHovered === `${index}p1` ? '20%' : 0,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        <Image
                          src={item.slideImage}
                          alt="Slide"
                          style={{
                            width: '300px',
                            height: '300px',
                            right: '100px',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                    </Link>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
