import { createI18n } from "vue-i18n";
import zhTW from "./locales/zh-TW.json";
import zhCN from "./locales/zh-CN.json";

// 從 localStorage 讀取使用者偏好的語言，如果沒有則預設為簡體中文
const savedLocale = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
const defaultLocale = savedLocale || "zh-CN";

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: defaultLocale, // 預設語言
  fallbackLocale: "zh-CN", // 備用語言
  messages: {
    "zh-TW": zhTW,
    "zh-CN": zhCN,
  },
  globalInjection: true, // 全域注入 $t
});

export default i18n;
