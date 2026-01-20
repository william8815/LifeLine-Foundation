export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // About
  {
    path: "/about-origin",
    name: "AboutOrigin",
    component: () => import("../views/about/origin.vue"),
  },
  {
    path: "/about-org",
    name: "AboutOrg",
    component: () => import("../views/about/org.vue"),
  },
  {
    path: "/about-history",
    name: "AboutHistory",
    component: () => import("../views/about/history.vue"),
  },
  // Services
  {
    path: "/service-home-care",
    name: "ServiceHomeCare",
    component: () => import("../views/service/home-care.vue"),
  },
  {
    path: "/service-emergency",
    name: "ServiceEmergency",
    component: () => import("../views/service/emergency.vue"),
  },
  {
    path: "/service-tracking",
    name: "ServiceTracking",
    component: () => import("../views/service/tracking.vue"),
  },
  {
    path: "/service-fall-detection",
    name: "ServiceFallDetection",
    component: () => import("../views/service/fall-detection.vue"),
  },
  {
    path: "/service-risk-check",
    name: "ServiceRiskCheck",
    component: () => import("../views/service/risk-check.vue"),
  },
  // News
  {
    path: "/news",
    name: "News",
    component: () => import("../views/news/index.vue"),
  },
  {
    path: "/news-detail",
    name: "NewsDetail",
    component: () => import("../views/news/detail.vue"),
  },
  // Others
  {
    path: "/donate",
    name: "Donate",
    component: () => import("../views/donate.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/contact.vue"),
  },
  {
    path: "/links",
    name: "Links",
    component: () => import("../views/links.vue"),
  },
  // Admin
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: () => import("../views/admin/login.vue"),
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: () => import("../views/admin/dashboard.vue"),
  },
];
