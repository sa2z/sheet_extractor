// component
import { GiCube } from "react-icons/gi";
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: '대시보드',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: '프로젝트',
    path: '/dashboard/project',
    icon: getIcon('eva:clipboard-fill'), // cube
  },
  {
    title: '전처리',
    path: '/dashboard/preprocess',
    icon: getIcon('eva:edit-2-outline'),
  },
  {
    title: '데이터셋',
    path: '/dashboard/products',
    icon: getIcon('eva:inbox-fill'),
  },
  {
    title: '모델개발',
    path: '/dashboard/blog',
    icon: <GiCube size="20" />, // getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
