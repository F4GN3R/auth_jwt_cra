import Login from "../pages/Login";
import Home from "../pages/Home";

export const routesConfig = [
  {
    path: "/",
    auth: false,
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    auth: true,
    component: Home,
  },
];
