import React from 'react';
import type { IconType } from 'react-icons';

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: IconType;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, icon: Icon, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      title={platform}
      style={{ '--hover-color': color } as React.CSSProperties}
    >
      <Icon size={28} />
    </a>
  );
};

export default SocialLink;
