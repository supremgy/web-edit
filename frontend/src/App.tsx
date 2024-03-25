import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
