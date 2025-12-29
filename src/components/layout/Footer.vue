<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: '關於我們',
    links: [
      { name: '成立起源', href: '/about-origin' },
      { name: '組織介紹', href: '/about-org' },
      { name: '歷史沿革', href: '/about-history' },
    ]
  },
  {
    title: '服務項目',
    links: [
      { name: '家醫計畫', href: '/service-home-care' },
      { name: '緊急救援系統', href: '/service-emergency' },
      { name: '老人協尋', href: '/service-tracking' },
      { name: '跌倒偵測', href: '/service-fall-detection' },
    ]
  },
  {
    title: '快速連結',
    links: [
      { name: '最新消息', href: '/news' },
      { name: '愛心捐款', href: '/donate' },
      { name: '聯絡我們', href: '/contact' },
      { name: '友站連結', href: '/links' },
    ]
  }
]
</script>

<template>
  <footer class="bg-foundation-blue text-white pt-12 pb-6">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand & Info -->
        <div class="space-y-4">
          <RouterLink to="/" class="flex items-center space-x-2">
            <!-- <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
              <span class="text-foundation-blue font-bold text-xl">L</span>
            </div> -->
            <div class="flex flex-col">
              <span class="text-white font-bold text-lg leading-tight uppercase tracking-wider">LifeLine</span>
              <span class="text-foundation-lightblue text-xs font-medium">生命連線基金會</span>
            </div>
          </RouterLink>
          <p class="text-white text-sm leading-relaxed">
            秉持守護生命、關懷長者的初心，提供全方位的居家醫療與防護支援，讓每位長輩都能安享健康的晚年生活。
          </p>
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foundation-blue transition-all duration-300">
              <span class="sr-only">Facebook</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-0.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <!-- LINE -->
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00c300] transition-all duration-300">
              <span class="sr-only">LINE</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.141 2 11.238c0 4.547 3.525 8.356 8.304 9.102.323.069.765.215.877.551.102.306.067.785.033 1.096-.038.354-.18 1.385-.219 1.73-.045.397-.212 1.554.912.848 1.125-.706 6.074-3.578 8.281-6.131C21.037 17.506 22 14.49 22 11.238 22 6.141 17.523 2C12 2zm4.615 12.33h-1.923a.385.385 0 0 1-.385-.385v-5.385c0-.213.172-.385.385-.385h1.923a.385.385 0 0 1 0 .77h-1.538v1.923h1.538a.385.385 0 0 1 0 .77h-1.538v1.539h1.538a.385.385 0 0 1 0 .769zm-2.692 0a.385.385 0 0 1-.385.385h-.192l-2.077-2.909v2.524a.385.385 0 0 1-.77 0v-5.385a.385.385 0 0 1 .385-.385h.192l2.077 2.908V8.471a.385.385 0 0 1 .77 0v5.385a.385.385 0 0 1-.385.384zm-4.231 0h-1.923a.385.385 0 0 1-.769 0v-5.385c0-.213.172-.385.385-.385a.385.385 0 0 1 .384.385v5h1.923a.385.385 0 0 1 0 .77zm-3.461 0a.385.385 0 0 1-.769 0V8.471a.385.385 0 0 1 .769 0v5.385z"/></svg>
            </a>
            <!-- Twitter / X -->
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300">
              <span class="sr-only">Twitter</span>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 1200 1227"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.391L658.88 583.285L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
            </a>
            <!-- YouTube -->
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff0000] transition-all duration-300">
              <span class="sr-only">YouTube</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div v-for="section in footerLinks" :key="section.title">
          <h3 class="text-lg font-bold mb-6 flex items-center">
            <span class="w-1.5 h-6 bg-foundation-lightblue mr-3 rounded-full"></span>
            {{ section.title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name">
              <RouterLink :to="link.href" class="text-foundation-lightblue/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Info Bar -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
        <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-lightblue/20 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-foundation-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="text-sm">
            <p class="text-foundation-lightblue font-bold mb-0.5">服務地址</p>
            <p class="text-white">110 台北市信義區忠孝東路五段 550 號 5 樓</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-lightblue/20 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-foundation-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="text-sm">
            <p class="text-foundation-lightblue font-bold mb-0.5">諮詢專線</p>
            <p class="text-white">(02) 87585858</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-lightblue/20 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-foundation-lightblue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="text-sm">
            <p class="text-foundation-lightblue font-bold mb-0.5">電子郵件</p>
            <p class="text-white">foundation@lifeline.net.tw</p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center pt-8 border-t border-white/10 text-foundation-lightblue text-xs tracking-wide">
        <p>© {{ currentYear }} 生命連線基金會 版權所有. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
