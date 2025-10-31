import React from 'react';

export type PageBackgroundProps = {
  variant?: 'default' | 'subtle';
};

const PageBackground: React.FC<PageBackgroundProps> = ({
  variant = 'default',
}) => {
  if (variant === 'subtle') {
    return <div className="page-background-subtle" aria-hidden="true" />;
  }
  return (
    <div className="page-background page-background--soft">
      <div className="primary-orb" />
      <div className="secondary-orb" />
      <div className="accent-orb" />
      <div className="ambient-vignette" />
      <div className="wave-layer" aria-hidden="true" />
    </div>
  );
};

export default PageBackground;
