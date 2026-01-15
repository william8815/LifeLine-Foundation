<script setup>
import { RouterLink } from 'vue-router'
import Icon from '@/components/base/Icon.vue'
// image
import logo from '@/assets/images/logo_lifeline.gif'

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
            <div class="flex flex-col">
              <img :src="logo" alt="Logo" class="w-32 h-8">
              <!-- <span class="text-white font-bold text-lg leading-tight uppercase tracking-wider">LifeLine</span>
              <span class="text-foundation-beige text-xs font-bold">生命連線基金會</span> -->
            </div>
          </RouterLink>
          <p class="text-white text-sm leading-relaxed">
            秉持守護生命、關懷長者的初心，提供全方位的居家醫療與防護支援，讓每位長輩都能安享健康的晚年生活。
          </p>
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a href="https://www.facebook.com/profile.php?id=100070009235861&locale=zh_TW" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-foundation-blue transition-all duration-300" target="_blank">
              <span class="sr-only">Facebook</span>
              <Icon name="facebook" class="w-5 h-5" />
            </a>
            <!-- LINE -->
            <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00c300] transition-all duration-300">
              <span class="sr-only">LINE</span>
              <Icon name="line" :size="20" />
            </a>
            <!-- Twitter / X -->
            <!-- <a href="#" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300">
              <span class="sr-only">Twitter</span>
              <Icon name="twitter" class="w-4 h-4" />
            </a> -->
            <!-- YouTube -->
            <a href="https://www.youtube.com/@%E7%94%9F%E5%91%BD%E9%80%A3%E7%B7%9A%E5%9F%BA%E9%87%91%E6%9C%83-y3z" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff0000] transition-all duration-300" target="_blank">
              <span class="sr-only">YouTube</span>
              <Icon name="youtube" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div v-for="section in footerLinks" :key="section.title">
          <h3 class="text-lg font-bold mb-6 flex items-center">
            <span class="w-1.5 h-6 bg-foundation-beige mr-3 rounded-full"></span>
            {{ section.title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.name">
              <RouterLink :to="link.href" class="text-foundation-white hover:font-bold hover:text-foundation-beige hover:translate-x-1 inline-block transition-all duration-200 text-sm">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Info Bar -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
        <!-- address -->
        <a href="https://maps.app.goo.gl/ib8hernPpVm4bCgo7" target="_blank" class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-beige/20 flex items-center justify-center shrink-0">
            <Icon name="pin" class="w-6 h-6 text-foundation-beige" />
          </div>
          <div class="text-sm">
            <p class="text-foundation-beige font-bold mb-0.5">服務地址</p>
            <p class="text-white">110 台北市信義區忠孝東路五段 550 號 5 樓</p>
          </div>
        </a>
        <!-- tel -->
        <a href="tel:0287585858" class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-beige/20 flex items-center justify-center shrink-0">
            <Icon name="tel" class="w-6 h-6 text-foundation-beige" />
          </div>
          <div class="text-sm">
            <p class="text-foundation-beige font-bold mb-0.5">諮詢專線</p>
            <p class="text-white">(02) 87585858</p>
          </div>
        </a>
        <!-- email -->
        <a href="mailto:foundation@lifeline.net.tw" class="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
          <div class="w-10 h-10 rounded-full bg-foundation-beige/20 flex items-center justify-center shrink-0">
            <Icon name="mailOutline" class="w-6 h-6 text-foundation-beige" />
          </div>
          <div class="text-sm">
            <p class="text-foundation-beige font-bold mb-0.5">電子郵件</p>
            <p class="text-white" style="overflow-wrap: break-word;
  word-break: break-word;">foundation@lifeline.net.tw</p>
          </div>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-center pt-8 border-t border-white/10 text-white text-xs tracking-wide">
        <p>© {{ currentYear }} 生命連線基金會 版權所有. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
