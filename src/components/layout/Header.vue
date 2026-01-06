<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()
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
  {
    nameKey: 'nav.about',
    items: [
      { nameKey: 'nav.about_origin', href: '/about-origin' },
      { nameKey: 'nav.about_org', href: '/about-org' },
      { nameKey: 'nav.about_history', href: '/about-history' },
    ]
  },
  {
    nameKey: 'nav.services',
    items: [
      { nameKey: 'nav.service_home_care', href: '/service-home-care' },
      { nameKey: 'nav.service_fall_detection', href: '/service-fall-detection' },
      { nameKey: 'nav.service_tracking', href: '/service-tracking' },
      { nameKey: 'nav.service_emergency', href: '/service-emergency' },
      { nameKey: 'nav.service_risk_check', href: '/service-risk-check' },
    ]
  },
  { nameKey: 'nav.news', href: '/news' },
  { nameKey: 'nav.links', href: '/links' },
  { nameKey: 'nav.contact', href: '/contact' },
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
        <div class="flex flex-col">
          <span class="text-foundation-blue font-extrabold text-xl leading-none tracking-tight uppercase">{{ t('common.foundation_name_en') }}</span>
          <span class="text-foundation-lightblue text-[10px] font-bold tracking-widest uppercase mt-1">{{ t('common.foundation_name') }}</span>
        </div>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center space-x-1">
        <div v-for="item in navigation" :key="item.nameKey">
          <!-- Normal Link -->
          <RouterLink
            v-if="!item.items"
            :to="item.href"
            :class="[
              'px-4 py-2 rounded-full text-sm font-bold transition-all duration-200',
              isActive(item.href) ? 'text-foundation-blue bg-foundation-blue/5' : 'text-gray-600 hover:text-foundation-blue hover:bg-gray-50'
            ]"
          >
            {{ t(item.nameKey) }}
          </RouterLink>

          <!-- Dropdown Link -->
          <div v-else class="relative group px-1">
            <button 
              :class="[
                'flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-200',
                item.items.some(sub => isActive(sub.href)) ? 'text-foundation-blue bg-foundation-blue/5' : 'text-gray-600 group-hover:text-foundation-blue group-hover:bg-gray-50'
              ]"
            >
              {{ t(item.nameKey) }}
              <Icon name="arrowDown" class="h-4 w-4 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute left-0 top-full pt-2 w-52 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-2">
                <RouterLink
                  v-for="subItem in item.items"
                  :key="subItem.nameKey"
                  :to="subItem.href"
                  :class="[
                    'block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors',
                    isActive(subItem.href) ? 'bg-foundation-blue text-white' : 'text-gray-600 hover:bg-foundation-blue/5 hover:text-foundation-blue'
                  ]"
                >
                  {{ t(subItem.nameKey) }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="ml-4 px-4 border-l border-gray-200">
          <RouterLink to="/donate" class="inline-flex items-center px-6 py-2.5 rounded-full bg-foundation-lightblue text-white hover:bg-foundation-blue hover:text-white text-sm font-black shadow-lg shadow-foundation-blue/30 hover:scale-105 active:scale-95 transition-all">
            {{ t('nav.donate') }}
            <Icon name="favoriteOutline" class="h-4 w-4 ml-2" />
          </RouterLink>
        </div>

        <!-- Language Switcher -->
        <div class="ml-2 pl-2 border-l border-gray-200">
          <LanguageSwitcher />
        </div>
      </nav>

      <!-- Mobile Controls -->
      <div class="flex items-center lg:hidden">
        <LanguageSwitcher />
        <button 
          @click="toggleMenu"
          class="p-2 text-gray-500 focus:outline-none"
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
        <div v-if="isMenuOpen" class="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-[120] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
          <!-- header -->
          <div class="p-6 h-[80px] absolute top-0 left-0 w-full bg-white">
            <div class="flex justify-between items-center">
              <span class="text-foundation-blue font-black text-xl tracking-tight uppercase">{{ t('nav.menu') }}</span>
              <button @click="closeMenu" class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Icon name="close" class="h-6 w-6" />
              </button>
            </div>
          </div>
          <!-- body -->
          <div class="p-6 flex flex-col h-[calc(100vh-80px)] overflow-y-auto mt-[80px]">
            <nav class="flex flex-col space-y-4">
              <div v-for="item in navigation" :key="item.nameKey">
                <div v-if="item.items" class="flex flex-col">
                  <span class="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-3 ml-4">{{ t(item.nameKey) }}</span>
                  <div class="space-y-1">
                    <RouterLink 
                      v-for="sub in item.items" 
                      :key="sub.nameKey" 
                      :to="sub.href"
                      @click="closeMenu"
                      :class="[
                        'block py-3 px-4 rounded-xl text-base font-bold transition-all',
                        isActive(sub.href) ? 'bg-foundation-blue text-white shadow-lg shadow-foundation-blue/20' : 'text-gray-700 active:bg-gray-100'
                      ]"
                    >
                      {{ t(sub.nameKey) }}
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
                  {{ t(item.nameKey) }}
                </RouterLink>
              </div>
            </nav>

            <div class="mt-auto pt-8">
              <RouterLink to="/donate" @click="closeMenu" class="w-full flex justify-center py-4 bg-foundation-orange text-white rounded-2xl font-black shadow-xl shadow-foundation-orange/30">
                {{ t('common.support_us') }}
              </RouterLink>
              <div class="mt-6 text-center">
                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-loose">
                  {{ t('common.foundation_name_en') }} Foundation<br>
                  {{ t('common.phone') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
</style>
