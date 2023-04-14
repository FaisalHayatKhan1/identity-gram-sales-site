import React from 'react';
import Link from 'next/link';
import { LinkProps } from './custom-link.types';

export const CustomLink = ({
  title,
  link,
  bgColor = '#645CAA',
  color = '#ffffff',
}: LinkProps): JSX.Element => {
  return (
    <React.Fragment>
      <Link
        href={link}
        passHref
        className="customLink"
        style={{
          textDecoration: 'none',
          color: color,
          backgroundColor: bgColor,
          borderRadius: '5px',
          padding: '12px 20px',
          fontSize: '1rem',
          fontWeight: '500',
        }}
      >
        {title}
      </Link>
      <style jsx>{`
        @media (max-width: 600px) {
          .customLink {
            font-size: 0.8rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
