import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'User',
    title: true,
  },
  {
    name: 'Admins',
    url: '/users/users',
    icon: 'icon-user',
  },
  {
    name: 'Seminars',
    url: '/seminars/seminars',
    icon: 'icon-user',
  },
  {
    name: 'Question Set',
    url: '/questionSet/questionSet',
    icon: 'icon-user',
  },
];
