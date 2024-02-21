import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // Brand
  { path: "/brands/:slug", component: <Pages.Brand /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.Product /> },

  // Category
  { path: "/categories/:slug", component: <Pages.Category /> },

  // Search
  { path: "/search", component: <Pages.Search /> },

  // New Arrivals
  { path: "/new-arrivals", component: <Pages.NewArrivals /> },

  // Free Zone
  { path: "/free-zone", component: <Pages.FreeZone /> },

  // Free Zone Item
  { path: "/free-zone/:slug", component: <Pages.FreeZoneItem /> },

  // Product Details
  { path: "/discounted", component: <Pages.Discounted /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // Order
  { path: "/orders", component: <Pages.Orders /> },

  // Order Details
  { path: "/orders/:id", component: <Pages.OrderDetails /> },

  // About
  { path: "/cart", component: <Pages.Cart /> },

  // Profile
  { path: "/account", component: <Pages.Account /> },

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
