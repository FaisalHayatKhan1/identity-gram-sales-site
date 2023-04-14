import React, { useState } from 'react';
import {
  AppBar,
  Box,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from '@mui/material';
import Image from 'next/image';
import { IdentityGramLogo } from '@images';
import { pages } from '@constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UserDrawer } from '@molecules';
import Link from 'next/link';
import { CustomLink } from '@atoms';
import { loader } from 'public/images';

export const UserHeader = () => {
  const [anchorEl, setAnchorEl] = useState(Array(pages.length).fill(null));
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [isLoading, setIsLoading] = useState(false);
  const [isZoomed, setIsZoomed] = useState(true);
  const [loaderTime, setLoaderTime] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLoaderTime(true);
    }, 1000);
    setTimeout(() => {
      setIsLoading(false);
      setLoaderTime(false);
    }, 3000);
  };

  const handlePageClick = (index: any) => (event: any) => {
    setAnchorEl(
      anchorEl.map((el, i) => (i === index ? event.currentTarget : el)),
    );
  };
  const handleLogoClick = () => {
    handleClick();
    if (isZoomed) {
      setIsZoomed(true);
    }
  };

  const handleClose = (index: any) => () => {
    setAnchorEl(anchorEl.map((i) => (i === index ? null : null)));
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#ffffff', fontFamily: 'Poppins' }}>
        <Toolbar>
          <Box>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <div onClick={handleLogoClick}>
                <Image
                  src={IdentityGramLogo}
                  alt="Logo"
                  style={{
                    margin: '5px',
                  }}
                />
              </div>
            </Link>
            {isLoading && (
              <Box
                sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={IdentityGramLogo}
                    className="grow-image"
                    alt="Logo"
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      transform: 'translate(-50%, -50%)',
                      transition: 'transform 1s ease',
                    }}
                  />
                  {loaderTime && (
                    <Image
                      className="loader-image"
                      src={loader}
                      alt="Loader"
                      style={{
                        margin: '5px',
                        // border:'1px solid black',
                      }}
                    />
                  )}
                  <style>{`
    .grow-image {
      animation-name: grow;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      display: block;
      zIndex:1;
      margin: auto;
    }
    .loader-image {
      animation-name: load;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      display: block;
      margin: auto;
    }
    @media (max-width: 600px) {
      .grow-image {
        width: 25%;
        height: auto;
      }
      .loader-image {
        width: 60%;
        height: auto;
      }

      @keyframes grow {
        from {
          padding: -50px;
          transition: transform 0.5s;
          width: 0px;
          height: 0px;
        }
        to {
          -ms-transform: scale(0.5); /* IE 9 */
          -webkit-transform: scale(0.5); /* Safari 3-8 */
          transform: scale(0.5); 
        }
      }
      @keyframes load {
        from {
          // padding: -50px;
          transition: transform .2s;
          width: 0px;
          height: 0px;
        }
        to {
          -ms-transform: scale(0.5); /* IE 9 */
          -webkit-transform: scale(0.5); /* Safari 3-8 */
          transform: scale(0.5); 
        }
      }
      
    }
    @keyframes grow {
      from {
        padding: -50px;
        transition: transform .2s;
        width: 0px;
        height: 0px;
      }
      to {
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.5); 
      }
    }
    @keyframes load {
      from {
        // padding: -50px;
        transition: transform .2s;
        width: 0px;
        height: 0px;
      }
      to {
        -ms-transform: scale(1); /* IE 9 */
        -webkit-transform: scale(1); /* Safari 3-8 */
        transform: scale(1); 
      }
    }
  `}</style>
                </div>
              </Box>
            )}
          </Box>

          {isMatch ? (
            <>
              <UserDrawer />
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                {pages.map((page, index) => (
                  <Box key={page.id}>
                    <MenuItem
                      onClick={handlePageClick(page.id)}
                      sx={{
                        color: '#6E7191',

                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#645CAA',
                        },
                      }}
                    >
                      <Typography variant="h5">{page.name}</Typography>
                      <Typography variant="h5" sx={{ mt: 1 }}>
                        <KeyboardArrowDownIcon />
                      </Typography>
                    </MenuItem>
                    {index !== 1 ? (
                      <Menu
                        anchorEl={anchorEl[index]}
                        open={Boolean(anchorEl[index])}
                        onClose={handleClose(index)}
                        sx={{
                          mt: 2.49,
                          marginLeft: '-100px',
                          '@media screen and (max-width: 1200px)': {
                            marginLeft: '-70px',
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{ p: 2, color: '#2E285C', marginLeft: 0.9 }}
                          >
                            {page.name}
                          </Typography>
                        </Box>
                        {page.items.map((products: any, index) => (
                          <Box
                            key={products.id}
                            sx={{
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '8px 6px',
                            }}
                          >
                            <MenuItem
                              onClick={handleClose(index)}
                              sx={{
                                padding: '18px 18px',
                                '&:hover': {
                                  backgroundColor: '#FAF7FF',
                                  borderRadius: '8px',
                                },
                              }}
                            >
                              <Link
                                href={products.link}
                                passHref
                                style={{ textDecoration: 'none' }}
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  {products.image && (
                                    <Box
                                      sx={{
                                        marginRight: '16px',
                                        marginTop: '5px',
                                      }}
                                    >
                                      <Image
                                        src={products.image}
                                        alt={products.title}
                                        width={48}
                                        height={48}
                                      />
                                    </Box>
                                  )}
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Typography
                                      variant="h5"
                                      sx={{ color: '#2E285C' }}
                                    >
                                      {products.title}
                                    </Typography>
                                    <Typography
                                      variant="h4"
                                      sx={{ color: '#6E7191', mt: 1 }}
                                    >
                                      {products.description}
                                    </Typography>
                                  </Box>
                                </Box>
                              </Link>
                            </MenuItem>
                          </Box>
                        ))}
                      </Menu>
                    ) : (
                      <Menu
                        anchorEl={anchorEl[index]}
                        open={Boolean(anchorEl[index])}
                        onClose={handleClose(index)}
                        sx={{
                          marginLeft: '-280px',
                          mt: 2,
                          '@media screen and (max-width: 1200px)': {
                            marginLeft: '-90px',
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{ p: 2, color: '#2E285C', marginLeft: 1 }}
                          >
                            {page.name}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            width: '844px',
                          }}
                        >
                          {page.items.map((products: any, index) => (
                            <Box
                              key={products.id}
                              sx={{
                                width: '50%',
                                boxSizing: 'border-box',
                                padding: '8px 6px',
                              }}
                            >
                              <MenuItem
                                onClick={handleClose(index)}
                                sx={{
                                  padding: '18px 18px',
                                  '&:hover': {
                                    backgroundColor: '#FAF7FF',
                                    borderRadius: '8px',
                                  },
                                }}
                              >
                                <Link
                                  href={products.link}
                                  passHref
                                  style={{ textDecoration: 'none' }}
                                >
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    {products.image && (
                                      <Box
                                        sx={{
                                          marginRight: '16px',
                                          marginTop: '5px',
                                        }}
                                      >
                                        <Image
                                          src={products.image}
                                          alt={products.title}
                                          width={48}
                                          height={48}
                                        />
                                      </Box>
                                    )}
                                    <Box sx={{ flexGrow: 1 }}>
                                      <Typography
                                        variant="h5"
                                        sx={{ color: '#2E285C' }}
                                      >
                                        {products.title}
                                      </Typography>
                                      <Typography
                                        variant="h4"
                                        sx={{ color: '#6E7191', mt: 1 }}
                                      >
                                        {products.description}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Link>
                              </MenuItem>
                            </Box>
                          ))}
                        </Box>
                      </Menu>
                    )}
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  marginLeft: 'auto',
                  '@media screen and (max-width: 1100px)': {
                    p: 0,
                    marginLeft: '-25px',
                  },
                }}
              >
                <CustomLink
                  title="Sign in"
                  link="https://app-dev.identitygram.co.uk/auth/login"
                  color="#645CAA"
                  bgColor="transparent"
                />
              </Box>
              <Box
                sx={{
                  marginLeft: '15px',
                  '@media screen and (max-width: 1100px)': {
                    marginLeft: '4px',
                  },
                }}
              >
                <CustomLink title="Watch a Demo" link="/watch-a-demo" />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
