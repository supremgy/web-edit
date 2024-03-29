import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { JoinPage } from './pages/Join';
import { NotesIndexPage } from './pages/notes/Index';
import { IndexPage } from './pages/Index';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index Component={IndexPage} />
      <Route path='/login' Component={LoginPage} />
      <Route path='/join' Component={JoinPage} />
      <Route path='/notes' Component={NotesIndexPage} />
    </>
  )
);
