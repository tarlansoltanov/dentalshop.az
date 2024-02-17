import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Brand
  { path: "/brands/:slug", component: <Pages.Brand /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.Product /> },

  // Category
  { path: "/categories/:slug", exact: true, component: <Pages.Category /> },

  // Search
  { path: "/search", component: <Pages.Search /> },
];

const authRoutes = [
  // Login
  { path: "/auth/login", exact: true, component: <Pages.Login /> },

  // Register
  { path: "/auth/register", exact: true, component: <Pages.Register /> },
];

export { publicRoutes, authRoutes };
