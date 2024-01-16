import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Login
  { path: "/auth/login", component: <Pages.Login /> },
];

export { publicRoutes };
