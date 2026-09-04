import {
  QueryClientProvider,
} from "@tanstack/react-query";

import type {
  ReactNode,
} from "react";

import {
  queryClient,
} from "./queryClient";


interface TanstackQueryProviderProps {
  children: ReactNode;
}


function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      {children}
    </QueryClientProvider>
  );
}


export default TanstackQueryProvider;