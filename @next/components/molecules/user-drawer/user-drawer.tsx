import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
  Typography,
  useTheme,
  Box,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '@constants';
import Link from 'next/link';
import { IdentityGramLogo } from '@images';
import { CustomLink } from '@atoms';

export const UserDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(Array(pages.length).fill(null));
  const theme = useTheme();

  const PageClickHandler = (index: any) => (event: any) => {
    setAnchorEl(
      anchorEl.map((el, i) => (i === index ? event.currentTarget : el)),
    );
  };

  const CloseHandler = (index: any) => () => {
    setAnchorEl(anchorEl.map((i) => (i === index ? null : null)));
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              sx={{
                color: theme.palette.text.primary,
                marginLeft: 'auto',
                p: 2,
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
              },
            }}
          >
            <Link href="/" passHref onClick={() => setOpenDrawer(false)}>
              <Image src={IdentityGramLogo} alt="Logo" />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box onClick={() => setOpenDrawer(false)}>
                {' '}
                <CustomLink
                  title="Sign in"
                  link="https://app-dev.identitygram.co.uk/auth/login"
                  color="#645CAA"
                  bgColor="transparent"
                  className="customLink"
                />
              </Box>
              <Box onClick={() => setOpenDrawer(false)}>
                <CustomLink
                  className="customLink"
                  title="Watch a Demo"
                  link="/watch-a-demo"
                />
              </Box>
            </div>
          </Box>

          <List>
            {pages.map((page, index) => (
              <React.Fragment key={page.id}>
                <ListItemButton
                  onClick={(event) => PageClickHandler(index)(event)}
                >
                  <ListItemText
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#6E7191',
                    }}
                    primary={page.name}
                  />
                  <Typography sx={{ mt: 1 }}>
                    <KeyboardArrowDownIcon />
                  </Typography>
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl[index]}
                  open={Boolean(anchorEl[index])}
                  onClose={CloseHandler(index)}
                  sx={{ height: '55vh' }}
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
                        onClick={CloseHandler(index)}
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
                          onClick={() => setOpenDrawer(false)}
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
                                  width={46}
                                  height={46}
                                />
                              </Box>
                            )}
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  color: '#2E285C',
                                  '@media screen and (max-width: 600px)': {
                                    fontSize: '0.7rem',
                                    fontWeight: '0',
                                  },
                                }}
                              >
                                {products.title}
                              </Typography>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: '#6E7191',
                                  mt: 1,
                                  '@media screen and (max-width: 600px)': {
                                    fontSize: '0.55rem',
                                    fontWeight: '0',
                                  },
                                }}
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
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: '#645CAA', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {openDrawer ? (
          <CloseIcon sx={{ color: '#645CAA' }} />
        ) : (
          <MenuIcon sx={{ color: '#645CAA' }} />
        )}
      </IconButton>
    </React.Fragment>
  );
};
