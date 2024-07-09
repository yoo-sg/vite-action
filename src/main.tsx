import React from "react";
import ReactDOM from "react-dom/client";
import { setupWorker } from "msw/browser";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { handlers } from "@src/apis/msw-handler";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "@pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import "./index.css";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AddPostPage from "./pages/AddPostPage";
import GetMarkdownPage from "./pages/GetMarkdownPage";
import GetHtmlPage from "./pages/GetHtmlPage";

if (process.env.NODE_ENV === "development") {
  const worker = setupWorker(...handlers);
  worker.start();
}
const defaultTheme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<MainPage />} />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/add-post",
    element: <ProtectedRoute element={<AddPostPage />} />,
  },
  {
    path: "/get-markdown",
    element: <ProtectedRoute element={<GetMarkdownPage />} />,
  },
  {
    path: "/get-html",
    element: <ProtectedRoute element={<GetHtmlPage />} />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
