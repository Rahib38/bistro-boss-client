import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </React.StrictMode>
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
);
