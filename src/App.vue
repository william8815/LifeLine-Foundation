<script setup>
import { RouterView } from "vue-router";
import { useSeoMeta, useHead } from "@unhead/vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

// 預設 SEO Meta 資訊
useSeoMeta({
  title: "生命連線基金會 - 官方網站",
  description: "致力於家醫計畫、緊急救援系統與老人協尋等守護生命的服務。",
  keywords: "生命連線, 基金會, 家醫計畫, 緊急救援, 老人協尋, 跌倒偵測",
  // ... (keep other SEO meta as needed, but updating for project context)
});
// ... (rest of search engine optimizations)
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900">
    <Header />
    <main class="flex-grow mt-[80px]">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* html, */
body {
  scroll-behavior: smooth;
}
</style>
