import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
// import DashboardLayout from "./layouts/HomeLayout/DashboardLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  // {
  //   exact: true,
  //   path: "/dashboard",
  //   layout: DashboardLayout,
  //   component: lazy(() => import("src/views/Dashboard/index")),
  // },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    exact: true,
    path: "/Verifyotp",
    component: lazy(() => import("src/views/pages/Home/Components/Verifyotp")),
  },
  {
    exact: true,
    path: "/Signup",
    component: lazy(() => import("src/views/pages/Home/Components/Signup")),
  },
  {
    exact: true,
    path: "/Forgot",
    component: lazy(() => import("src/views/pages/Home/Components/Forgot")),
  },
  {
    exact: true,
    path: "/login",
    component: lazy(() => import("src/views/pages/Home/Components/Login")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
