import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { IndexPage } from './pages/Index';
import Login from './pages/Login';
import Join from './pages/Join';
import NoteIndex from './pages/notes/Index';
import WithUnauthenticated from './components/hocs/WithUnauthenticated';

// export const router = createBrowserRouter(
//   createRoutesFromElements([
//     <Route index Component={IndexPage} />,
//     <Route path='/login' Component={Login} />,
//     <Route path='/join' Component={Join} />,
//     <Route path='/notes' Component={NoteIndex} />,
//   ])
// );
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithUnauthenticated>
        <IndexPage />
      </WithUnauthenticated>
    ),
  },
  {
    path: '/login',
    element: (
      <WithUnauthenticated>
        <Login />
      </WithUnauthenticated>
    ),
  },
  {
    path: '/join',
    element: (
      <WithUnauthenticated>
        <Join />
      </WithUnauthenticated>
    ),
  },
  {
    path: '/notes',
    element: <NoteIndex />,
  },
]);
