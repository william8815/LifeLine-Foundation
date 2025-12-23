import "animate.css";
import "./assets/main.css";

import { ViteSSG } from "vite-ssg";
import { routes } from "./router/routes"; // 這邊 router 只要給好的路由即可 (下方有例子)
import App from "./App.vue";

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
      // 如果有保存的位置（例如瀏覽器後退按鈕），則返回該位置
      if (savedPosition) {
        return savedPosition;
      }
      // 否則滾動到頂部
      return { top: 0 };
    },
  },
  // function to have custom setups
  () => {
    // params : { app, router, routes, isClient, initialState }
    // install plugins etc.
  }
);
