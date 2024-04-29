import * as Pages from "@/pages";

const publicRoutes = [
  // Home
  { path: "/", exact: true, component: <Pages.Home /> },

  // About
  { path: "/about", component: <Pages.About /> },

  // Products
  { path: "/products", component: <Pages.Products /> },

  // Product Details
  { path: "/products/:slug", component: <Pages.ProductDetails /> },

  // Free Zone
  { path: "/free-zone", component: <Pages.FreeZone /> },

  // Free Zone Create
  { path: "/free-zone/create", component: <Pages.FreeZoneCreate /> },

  // Free Zone Details
  { path: "/free-zone/:slug", component: <Pages.FreeZoneDetails /> },

  // Free Zone Update
  { path: "/free-zone/:slug/update", component: <Pages.FreeZoneUpdate /> },

  // Account
  { path: "/account", component: <Pages.Account /> },

  // Account Free Zone
  { path: "/account/free-zone", component: <Pages.AccountFreezone /> },

  // Account Cart
  { path: "/account/cart", component: <Pages.AccountCart /> },

  // Account Favorites
  { path: "/account/favorites", component: <Pages.AccountFavorites /> },

  // Orders
  { path: "/account/orders", component: <Pages.Orders /> },

  // Order Details
  { path: "/account/orders/:id", component: <Pages.OrderDetails /> },

  // NotFound
  { path: "*", component: <Pages.NotFound /> },
];

const authRoutes = [
  // Login
  { path: "/auth/login", component: <Pages.Login /> },

  // Forgot Password
  { path: "/auth/forgot-password", component: <Pages.ForgotPassword /> },

  // Verify OTP
  { path: "/auth/verify-otp", component: <Pages.VerifyOTP /> },

  // Logout
  { path: "/auth/logout", component: <Pages.Logout /> },

  // Register
  { path: "/auth/register", component: <Pages.Register /> },
];

export { publicRoutes, authRoutes };
