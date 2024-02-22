import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Products
  { path: "/products", component: <Pages.Products /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.Product /> },

  // Free Zone
  { path: "/free-zone", component: <Pages.FreeZone /> },

  // Free Zone Details
  { path: "/free-zone/:slug", component: <Pages.FreeZoneItem /> },

  // Account
  { path: "/account", component: <Pages.Account /> },

  // Orders
  { path: "/account/orders", component: <Pages.Orders /> },

  // Order Details
  { path: "/account/orders/:id", component: <Pages.OrderDetails /> },

  // Cart
  { path: "/cart", component: <Pages.Cart /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // NotFound
  { path: "*", component: <Pages.NotFound /> },
];

const authRoutes = [
  // Login
  { path: "/auth/login", component: <Pages.Login /> },

  // Logout
  { path: "/auth/logout", component: <Pages.Logout /> },

  // Register
  { path: "/auth/register", component: <Pages.Register /> },
];

export { publicRoutes, authRoutes };
