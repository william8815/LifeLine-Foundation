<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { locale, t } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

const languages = [
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' }
]

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = (langCode) => {
  locale.value = langCode
  // 儲存到 localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', langCode)
  }
  isOpen.value = false
}

// 點擊外部關閉下拉選單
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <!-- 語系切換按鈕 -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-foundation-blue hover:bg-gray-50 transition-all duration-200"
      :title="t('language.switch')"
    >
      <Icon name="translate" class="w-5 h-5" />
      <span class="hidden md:inline">{{ currentLanguage.flag }}</span>
      <Icon :class="['transition-transform duration-200', isOpen ? 'rotate-180' : '']" name="arrowDown" class="w-5 h-5" />
    </button>

    <!-- 下拉選單 -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
      >
        <div class="py-2">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="switchLanguage(lang.code)"
            :class="[
              'w-full flex items-center space-x-3 px-4 py-2.5 text-sm font-medium transition-colors',
              locale === lang.code 
                ? 'bg-foundation-blue text-white' 
                : 'text-gray-700 hover:bg-foundation-blue/5 hover:text-foundation-blue'
            ]"
          >
            <span class="text-xl">{{ lang.flag }}</span>
            <span class="flex-1 text-left">{{ lang.name }}</span>
            <Icon v-if="locale === lang.code" name="check" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 自定義 directive 用於點擊外部關閉 */
</style>

