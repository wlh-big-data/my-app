import { lazy } from 'react';
import BasicLayout from '../layouts/BasicLayout';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Login = lazy(() => import('../pages/login'));
const data = [{
  path: '/',
  element: <BasicLayout></BasicLayout>,
  children: [{
    path: '/home/:id',
    element: <Home></Home>
  }, {
    path: '/about',
    element: <About></About>
  }]
}, {
  path: '/login',
  element: <Login></Login>
}]

export default data;
