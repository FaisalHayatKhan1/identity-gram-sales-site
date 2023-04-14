import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { logofooterImage } from '@images';
import Image from 'next/image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { salesSiteFooterData } from '@constants';

export const FooterIdentity = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/images/footerBackground.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '250px',
        paddingBottom: '50px',
      }}
    >
      <Container maxWidth={false}>
        <Grid container justifyContent="center" columnSpacing={10}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box
              sx={{
                pb: { xs: 2, sm: 3, md: 3, xl: 4 },
                textAlign: { xs: 'start', sm: 'center', md: 'start' },
              }}
            >
              <Image src={logofooterImage} alt="Logo" />
            </Box>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#FFFFFF',
                pb: { xs: 2, sm: 3, md: 3, xl: 4 },
                fontWeight: 400,
                lineHeight: '32px',
                textAlign: { xs: 'start', sm: 'center', md: 'start' },
              }}
            >
              AI-powered identity verification solution for identity fraud
              prevention, Know Your Customer compliance, and fast conversions of
              valuable customers with Identity Gram. Entrust identity
              verification to us and our identity experts, and focus on what you
              do best.
            </Typography>
            <Box
              sx={{
                my: { xs: 3, sm: 4, md: 5, xl: 10 },
                textAlign: { xs: 'start', sm: 'center', md: 'start' },
              }}
            >
              <LinkedInIcon
                sx={{
                  width: '40px',
                  height: '40px',
                  color: '#fff',
                  mr: '30px',
                }}
              />
              <InstagramIcon
                sx={{
                  width: '40px',
                  height: '40px',
                  color: '#fff',
                  mr: '30px',
                }}
              />
              <FacebookRoundedIcon
                sx={{
                  width: '40px',
                  height: '40px',
                  color: '#fff',
                  mr: '30px',
                }}
              />
              <TwitterIcon
                sx={{ width: '40px', height: '40px', color: '#fff' }}
              />
            </Box>
          </Grid>

          {salesSiteFooterData.map((item: any, index: number) => (
            <Grid item xs={12} sm={4} md={4} lg={2.5} xl={2.5} key={item.id}>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#FFFFFF',
                  pb: { xs: 2, sm: 4, md: 5, xl: 5 },
                  pt: { xs: 4, sm: 0 },
                  fontWeight: 700,
                  lineHeight: '27px',
                  textAlign: { xs: 'start', sm: 'center', md: 'start' },
                }}
              >
                {item.title}
              </Typography>

              {item.content.map((items: any, index: number) => (
                <Link
                  href={items.link}
                  key={items.id}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: '#FFFFFF',
                      pb: { xs: 1, sm: 2, md: 3, xl: 4 },
                      fontWeight: 400,
                      lineHeight: '24px',
                      textAlign: { xs: 'start', sm: 'center', md: 'start' },
                    }}
                  >
                    {items.subTitle}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
