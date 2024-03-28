import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/Index';
import Login from './pages/Login';
import Join from './pages/Join';
import NoteIndex from './pages/notes/Index';
import WithUnauthenticated from './components/hocs/WithUnauthenticated';
import WithAuthenticatedUser from './components/hocs/WithAuthenticatedUser';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WithUnauthenticated component={IndexPage} />,
  },
  {
    path: '/login',
    element: <WithUnauthenticated component={Login} />,
  },
  {
    path: '/join',
    element: <WithUnauthenticated component={Join} />,
  },
  {
    path: '/notes',
    element: <WithAuthenticatedUser component={NoteIndex} />,
  },
]);
