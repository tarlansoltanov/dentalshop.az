import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Login
  { path: "/auth/login", component: <Pages.Login /> },

  // Register
  { path: "/auth/register", component: <Pages.Register /> },
];

export { publicRoutes };
