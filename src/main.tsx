import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home/HomePage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
