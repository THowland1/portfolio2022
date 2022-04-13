import { CSSProperties } from 'react';
import { CodeIcon, MailIcon } from '@heroicons/react/solid';
import {
  GithubOriginalIcon,
  LinkedinPlainIcon,
  TwitterOriginalIcon,
} from 'react-devicons';

const GMAIL_RED = '#BB011C';
const LINKEDIN_BLUE = '#0A66C2';
const GITHUB_BLACK = '#242A2E';

export interface SocialLink {
  icon: typeof MailIcon | typeof LinkedinPlainIcon;
  href: string;
  background: CSSProperties['background'];
}

export const email: SocialLink = {
  icon: MailIcon,
  href: 'mailto:tomhowland9@gmail.com',
  background: GMAIL_RED,
};
export const linkedin: SocialLink = {
  icon: LinkedinPlainIcon,
  href: 'https://www.linkedin.com/in/tomhowland9',
  background: LINKEDIN_BLUE,
};
export const github: SocialLink = {
  icon: GithubOriginalIcon,
  href: 'https://github.com/THowland1',
  background: GITHUB_BLACK,
};

export const socialLinks = [linkedin, email, github];
