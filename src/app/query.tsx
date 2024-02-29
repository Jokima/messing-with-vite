import { QueryClient, QueryClientConfig, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

export const createQueryClient = (config?: QueryClientConfig) => new QueryClient({...config});

const queryClient = createQueryClient();

export const Query = ({
  children,
  enabledQueryDevTools = false,
}: {
  children?: ReactNode,
  enabledQueryDevTools?: boolean,
}) => (
  <QueryClientProvider client={queryClient}>
    {children},
    {enabledQueryDevTools && <ReactQueryDevtools position="right" />},
  </QueryClientProvider>
)