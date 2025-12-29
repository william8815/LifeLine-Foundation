<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { name: '首頁', href: '/' },
  {
    name: '認識我們',
    items: [
      { name: '成立起源', href: '/about-origin' },
      { name: '組織介紹', href: '/about-org' },
      { name: '歷史沿革', href: '/about-history' },
    ]
  },
  {
    name: '服務項目',
    items: [
      { name: '家醫計畫', href: '/service-home-care' },
      { name: '緊急救援系統', href: '/service-emergency' },
      { name: '老人協尋', href: '/service-tracking' },
      { name: '跌倒偵測', href: '/service-fall-detection' },
      { name: '風險檢測', href: '/service-risk-check' },
    ]
  },
  { name: '最新消息', href: '/news' },
  { name: '聯絡我們', href: '/contact' },
]

const isActive = (path) => route.path === path
</script>

<template>
  <header 
    :class="[
      'fixed top-0 w-full z-[100] transition-all duration-300 h-20 flex items-center',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
    ]"
  >
    <div class="container mx-auto px-4 md:px-6 flex justify-between items-center w-full">
      <!-- Logo Section -->
      <RouterLink to="/" class="flex items-center group" @click="closeMenu">
        <!-- <div class="relative w-11 h-11 bg-foundation-blue rounded-xl flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-300">
          <span class="text-white font-black text-2xl tracking-tighter">L</span>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-foundation-orange rounded-full border-2 border-white"></div>
        </div> -->
        <div class="flex flex-col">
          <span class="text-foundation-blue font-extrabold text-xl leading-none tracking-tight uppercase">Lifeline</span>
          <span class="text-foundation-orange text-[10px] font-bold tracking-widest uppercase mt-1">生命連線基金會</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-1">
        <template v-for="item in navigation" :key="item.name">
          <!-- Normal Link -->
          <RouterLink
            v-if="!item.items"
            :to="item.href"
            :class="[
              'px-4 py-2 rounded-full text-sm font-bold transition-all duration-200',
              isActive(item.href) ? 'text-foundation-blue bg-foundation-blue/5' : 'text-gray-600 hover:text-foundation-blue hover:bg-gray-50'
            ]"
          >
            {{ item.name }}
          </RouterLink>

          <!-- Dropdown Link -->
          <div v-else class="relative group px-1">
            <button 
              :class="[
                'flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-200',
                item.items.some(sub => isActive(sub.href)) ? 'text-foundation-blue bg-foundation-blue/5' : 'text-gray-600 group-hover:text-foundation-blue group-hover:bg-gray-50'
              ]"
            >
              {{ item.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute left-0 top-full pt-2 w-52 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                <RouterLink
                  v-for="subItem in item.items"
                  :key="subItem.name"
                  :to="subItem.href"
                  :class="[
                    'block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors',
                    isActive(subItem.href) ? 'bg-foundation-blue text-white' : 'text-gray-600 hover:bg-foundation-blue/5 hover:text-foundation-blue'
                  ]"
                >
                  {{ subItem.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </template>

        <!-- CTA Button -->
        <div class="ml-4 pl-4 border-l border-gray-200">
          <RouterLink to="/donate" class="inline-flex items-center px-6 py-2.5 rounded-full bg-foundation-orange text-white text-sm font-black shadow-lg shadow-foundation-orange/30 hover:scale-105 active:scale-95 transition-all">
            愛心捐款
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </RouterLink>
        </div>
      </nav>

      <!-- Mobile Controls -->
      <div class="flex items-center lg:hidden">
        <RouterLink to="/donate" class="mr-4 px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black uppercase tracking-tight">
          捐款
        </RouterLink>
        <button 
          @click="toggleMenu"
          class="p-2 text-foundation-blue focus:outline-none"
        >
          <div class="w-6 h-5 flex flex-col justify-between relative">
            <span :class="['w-6 h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['w-6 h-0.5 bg-current transition-opacity duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
            <span :class="['w-6 h-0.5 bg-current transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Layer -->
    <Teleport to="body">
      <!-- Backdrop -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isMenuOpen" @click="closeMenu" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"></div>
      </Transition>

      <!-- Sidebar Tray -->
      <Transition
        enter-active-class="transition duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-400 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div v-if="isMenuOpen" class="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-[120] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] overflow-y-auto">
          <div class="p-6 flex flex-col h-full">
            <div class="flex justify-between items-center mb-8">
              <span class="text-foundation-blue font-black text-xl tracking-tight uppercase">Menu</span>
              <button @click="closeMenu" class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav class="flex flex-col space-y-4">
              <template v-for="item in navigation" :key="item.name">
                <div v-if="item.items" class="flex flex-col">
                  <span class="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-3 ml-4">{{ item.name }}</span>
                  <div class="space-y-1">
                    <RouterLink 
                      v-for="sub in item.items" 
                      :key="sub.name" 
                      :to="sub.href"
                      @click="closeMenu"
                      :class="[
                        'block py-3 px-4 rounded-xl text-base font-bold transition-all',
                        isActive(sub.href) ? 'bg-foundation-blue text-white shadow-lg shadow-foundation-blue/20' : 'text-gray-700 active:bg-gray-100'
                      ]"
                    >
                      {{ sub.name }}
                    </RouterLink>
                  </div>
                </div>
                <RouterLink 
                  v-else 
                  :to="item.href"
                  @click="closeMenu"
                  :class="[
                    'block py-3 px-4 rounded-xl text-base font-bold transition-all',
                    isActive(item.href) ? 'bg-foundation-blue text-white shadow-lg shadow-foundation-blue/20' : 'text-gray-700 active:bg-gray-100'
                  ]"
                >
                  {{ item.name }}
                </RouterLink>
              </template>
            </nav>

            <div class="mt-auto pt-8">
              <RouterLink to="/donate" @click="closeMenu" class="w-full flex justify-center py-4 bg-foundation-orange text-white rounded-2xl font-black shadow-xl shadow-foundation-orange/30">
                支持我們・愛心捐款
              </RouterLink>
              <div class="mt-6 text-center">
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-loose">
                  Lifeline Foundation<br>
                  (02) 87585858
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
  <!-- Spacer to prevent content jump since header is fixed (Fixed 80px) -->
  <div class="h-20"></div>
</template>

<style scoped>
</style>
