import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { LoginLayout, MainLayout } from "../components/layouts";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Asia = lazy(() => import("../pages/asia"));
const Europe = lazy(() => import("../pages/europe"));

export const routes: RouteObject[] = [
  {
    element: <LoginLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/asia", element: <Asia /> },
      { path: "/europe", element: <Europe /> },
    ],
  },
];
