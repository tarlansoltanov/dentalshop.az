import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Brand
  { path: "/brands/:slug", exact: true, component: <Pages.Brand /> },
];

const authRoutes = [
  // Login
  { path: "/auth/login", exact: true, component: <Pages.Login /> },

  // Register
  { path: "/auth/register", exact: true, component: <Pages.Register /> },
];

export { publicRoutes, authRoutes };
