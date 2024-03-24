import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { IndexPage } from './pages/Index';
import Login from './pages/Login';
import Join from './pages/Join';

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route index Component={IndexPage} />,
    <Route path='/login' Component={Login} />,
    <Route path='/join' Component={Join} />,
  ])
);
