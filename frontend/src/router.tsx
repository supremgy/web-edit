import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import IndexPage from './pages/Index';
import NoteIndex from './pages/notes/Index';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/notes',
    element: <NoteIndex />,
  },
]);
