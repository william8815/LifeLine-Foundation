<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navigation = [
  { name: '首頁', href: '/', routeName: 'Home' },
  {
    name: '認識生命連線',
    items: [
      { name: '成立起源', href: '/about-origin', routeName: 'AboutOrigin' },
      { name: '組織介紹', href: '/about-org', routeName: 'AboutOrg' },
      { name: '歷史沿革', href: '/about-history', routeName: 'AboutHistory' },
    ]
  },
  {
    name: '服務項目',
    items: [
      { name: '家醫計畫', href: '/service-home-care', routeName: 'ServiceHomeCare' },
      { name: '緊急救援系統', href: '/service-emergency', routeName: 'ServiceEmergency' },
      { name: '老人協尋', href: '/service-tracking', routeName: 'ServiceTracking' },
      { name: '跌倒偵測', href: '/service-fall-detection', routeName: 'ServiceFallDetection' },
      { name: '風險檢測', href: '/service-risk-check', routeName: 'ServiceRiskCheck' },
    ]
  },
  { name: '最新消息', href: '/news', routeName: 'News' },
  { name: '愛心捐款', href: '/donate', routeName: 'Donate' },
  { name: '聯絡我們', href: '/contact', routeName: 'Contact' },
  { name: '友站連結', href: '/links', routeName: 'Links' },
]

const handleMobileNavClick = (routeName) => {
  router.push({ name: routeName })
  closeMenu()
}
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo Area -->
      <a href="/home" class="flex items-center space-x-2" @click.prevent="router.push({name: 'Home'})">
        <div class="w-10 h-10 bg-foundation-blue rounded-full flex items-center justify-center">
          <span class="text-white font-bold text-xl">L</span>
        </div>
        <div class="flex flex-col">
          <span class="text-foundation-blue font-bold text-lg leading-tight uppercase">Foundation</span>
          <span class="text-foundation-orange text-xs font-medium">生命連線基金會</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-6">
        <template v-for="item in navigation" :key="item.name">
          <!-- Standalone Link -->
          <a
            v-if="!item.items"
            :href="item.href"
            class="text-gray-700 hover:text-foundation-blue font-medium transition-colors line-height-tight py-2"
            active-class="text-foundation-blue font-bold border-b-2 border-foundation-blue"
            @click.prevent="router.push({name: item.routeName})"
          >
           {{ item.name }}
        </a>

          <!-- Dropdown -->
          <div v-else class="relative group py-2">
            <button class="flex items-center text-gray-700 group-hover:text-foundation-blue font-medium transition-colors">
              {{ item.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="py-1">
                <a
                  v-for="subItem in item.items"
                  :key="subItem.name"
                  :href="subItem.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-foundation-blue hover:text-white"
                  @click.prevent="router.push({name: subItem.routeName})"
                >
                  {{ subItem.name }}
              </a>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden p-2 text-gray-600 hover:text-foundation-blue transition-colors focus:outline-none"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-show="isMenuOpen" class="fixed inset-0 top-[64px] bg-white z-40 lg:hidden overflow-y-auto">
        <div class="flex flex-col p-4 space-y-2">
          <template v-for="item in navigation" :key="item.name">
            <!-- Mobile Standalone Link -->
            <a
              v-if="!item.items"
              :href="item.href"
              class="block py-3 px-4 text-lg font-medium text-gray-700 border-b border-gray-50 active:bg-gray-50"
              active-class="text-foundation-blue bg-blue-50"
              @click.prevent="handleMobileNavClick(item.routeName)"
            >
              {{ item.name }}
            </a>

            <!-- Mobile Group (Accordion Style or just expanded) -->
            <div v-else class="flex flex-col">
              <div class="py-3 px-4 text-lg font-bold text-foundation-blue bg-gray-50">
                {{ item.name }}
              </div>
              <div class="flex flex-col pl-4 border-l-2 border-foundation-blue/20">
                <a
                  v-for="subItem in item.items"
                  :key="subItem.name"
                  :href="subItem.href"
                  class="block py-3 px-4 text-base font-medium text-gray-600 border-b border-gray-50"
                  active-class="text-foundation-orange"
                  @click.prevent="handleMobileNavClick(subItem.routeName)"
                >
                  {{ subItem.name }}
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Optional: custom hover effects if tailwind classes aren't enough */
</style>
