import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/main',
    icon: icon('ic_analytics'),
  },
  {
    title: 'users',
    path: '/main/user',
    icon: icon('ic_user'),
  },
  {
    title: 'products',
    path: '/main/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'posts',
    path: '/main/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
