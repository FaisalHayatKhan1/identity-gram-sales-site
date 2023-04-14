import React from 'react';
import { makeStyles } from '@mui/styles';
import { FooterIdentity, UserFooter, UserHeader } from '@organisms';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: 'white',
  },
}));

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <div>
      <div>
        <UserHeader />
      </div>
      <div>{children}</div>
      <div>
        <FooterIdentity />
        <UserFooter />
      </div>
    </div>
  );
};
