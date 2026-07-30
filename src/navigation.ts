import type { navbarData } from '~/types/types';

export const headerData: navbarData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Get a Quote',
      href: '/contact',
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About Us', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '103 Springbok Road, Bartlett AH, Boksburg', href: '#' },
    { text: 'chris@trafalgarlogistics.co.za', href: 'mailto:chris@trafalgarlogistics.co.za' },
    { text: 'ryan@trafalgarlogistics.co.za', href: 'mailto:ryan@trafalgarlogistics.co.za' },
    { text: '(+27) 71 677 0088', href: 'tel:+27716770088' },
  ],
  socialLinks: [
    { text: 'LinkedIn', href: '#', icon: 'tabler:brand-linkedin' as const },
  ],
  footNote: `&copy; ${new Date().getFullYear()} Trafalgar Logistics. All rights reserved.`,
};
