import eslint from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // ESLint 基本建議規則
  eslint.configs.recommended,

  // 關閉 ESLint 與 Prettier 衝突的規則
  eslintConfigPrettier,

  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      // 避免全域變數報錯
      globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly",
        ref: "readonly",
        reactive: "readonly",
        computed: "readonly",
        watch: "readonly",
        useRoute: "readonly",
        useRouter: "readonly",
        useState: "readonly",
        defineStore: "readonly",
        defineNuxtConfig: "readonly",
        process: "readonly",
        ViteSSG: "readonly",
      },
    },
    rules: {
      // ✅ Prettier 規則統一設定（與 .prettierrc 相同）
      "prettier/prettier": [
        "error",
        {
          semi: true,
          trailingComma: "es5",
          singleQuote: false,
          printWidth: 100,
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],

      // 你可以自己再加一些 JS 規則（可選）
      // "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // "no-console": "off", // 可視需求關閉
    },
  },

  // 忽略不必要的資料夾
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**", "public/**", ".nuxt/**"],
  },
];
