'use client';

import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider 
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


export default function Provider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
