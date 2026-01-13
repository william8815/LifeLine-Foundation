<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('service_fall_detection.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('service_fall_detection.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('service_fall_detection.seo.title')),
  description: computed(() => t('service_fall_detection.seo.description')),
  ogTitle: computed(() => t('service_fall_detection.seo.og_title')),
  ogDescription: computed(() => t('service_fall_detection.seo.og_description')),
  ogImage: falldetection1_1,
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('service_fall_detection.seo.twitter_title')),
  twitterDescription: computed(() => t('service_fall_detection.seo.twitter_description'))
})
// images
import falldetection1_1 from "@/assets/images/services/falldetection1_1.png"
import falldetection2_1 from "@/assets/images/services/falldetection2_1.png"
import falldetection2_2 from "@/assets/images/services/falldetection2_2.png"
import falldetection2_3 from "@/assets/images/services/falldetection2_3.png"
import falldetection2_4 from "@/assets/images/services/falldetection2_4.png"
const imageLoaded = ref({
  falldetection1_1: false,
  falldetection2_1: false,
  falldetection2_2: false,
  falldetection2_3: false,
  falldetection2_4: false,
})

const activeTab = ref('device')
const tabs = computed(() => [
  { id: 'device', name: t('service_fall_detection.tabs.device'), icon: 'monitor' },
  { id: 'features', name: t('service_fall_detection.tabs.features'), icon: 'star' },
  { id: 'pricing', name: t('service_fall_detection.tabs.pricing'), icon: 'calculator' }
])

const features = computed(() => [
  {
    title: t('service_fall_detection.features.feature1_title'),
    desc: t('service_fall_detection.features.feature1_desc'),
    image: falldetection2_1
  },
  {
    title: t('service_fall_detection.features.feature2_title'),
    desc: t('service_fall_detection.features.feature2_desc'),
    image: falldetection2_2
  },
  {
    title: t('service_fall_detection.features.feature3_title'),
    desc: t('service_fall_detection.features.feature3_desc'),
    image: falldetection2_3
  },
  {
    title: t('service_fall_detection.features.feature4_title'),
    desc: t('service_fall_detection.features.feature4_desc'),
    image: falldetection2_4
  }
])

const subsidies = computed(() => [
  { level: t('service_fall_detection.pricing.subsidy1_level'), rate: t('service_fall_detection.pricing.subsidy1_rate'), color: 'bg-foundation-blue' },
  { level: t('service_fall_detection.pricing.subsidy2_level'), rate: t('service_fall_detection.pricing.subsidy2_rate'), color: 'bg-foundation-lightblue' },
  { level: t('service_fall_detection.pricing.subsidy3_level'), rate: t('service_fall_detection.pricing.subsidy3_rate'), color: 'bg-gray-400' }
])
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      :title="t('service_fall_detection.page_header.title')" 
      :subtitle="t('service_fall_detection.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-30">
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Sidebar Navigation -->
        <aside class="lg:w-72 shrink-0">
          <div class="bg-white/90 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl border border-white sticky top-24">
            <nav class="space-y-1.5">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group',
                  activeTab === tab.id 
                    ? 'bg-foundation-blue text-white shadow-[0_10px_30px_rgba(30,64,175,0.2)]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-foundation-blue'
                ]"
              >
                <span :class="[
                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                  activeTab === tab.id ? 'bg-foundation-beige scale-150' : 'bg-gray-300 group-hover:bg-foundation-beige'
                ]"></span>
                <span class="font-black tracking-widest text-sm text-left">{{ tab.name }}</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Main Content Area -->
        <article class="flex-grow min-w-0">
          <transition name="fade-slide" mode="out-in">
            <!-- Tab: Device -->
            <div v-if="activeTab === 'device'" :key="'device'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-premium border border-gray-100">
                  <h2 class="text-2xl md:text-3xl font-black text-foundation-blue mb-12 italic flex items-center">
                    <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                    {{ t('service_fall_detection.device.title') }}
                  </h2>
                  
                  <div class="grid gap-8 mb-12">
                     <div class="rounded-[40px] overflow-hidden shadow-2xl border border-gray-50 aspect-[2/1] group">
                        <img :src="falldetection1_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.falldetection1_1 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.falldetection1_1 = true">
                     </div>
                  </div>

                  <div class="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                    <p class="text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
                      {{ t('service_fall_detection.device.description') }}
                    </p>
                  </div>
               </div>
            </div>

            <!-- Tab: Features -->
            <div v-else-if="activeTab === 'features'" :key="'features'" class="space-y-8">
              <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-premium border border-gray-100">
                <h2 class="text-2xl md:text-3xl font-black text-foundation-blue mb-12 italic flex items-center">
                  <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                  {{ t('service_fall_detection.tabs.features') }}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div 
                      v-for="(feature, idx) in features" 
                      :key="idx"
                      class="bg-white rounded-[40px] overflow-hidden shadow-premium border border-gray-100 group"
                    >
                      <div class="aspect-[16/9] overflow-hidden">
                        <img :src="feature.image" class="w-full h-full object-contain transition-all duration-500" :class="imageLoaded.falldetection1_1 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.falldetection1_1 = true">
                      </div>
                      <div class="p-10">
                        <h3 class="text-2xl font-black text-foundation-blue mb-4 tracking-tighter italic">{{ feature.title }}</h3>
                        <p class="text-gray-500 font-medium leading-relaxed">{{ feature.desc }}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <!-- Tab: Pricing -->
            <div v-else-if="activeTab === 'pricing'" :key="'pricing'" class="space-y-8">
               <div class="bg-white rounded-[40px] p-4 md:p-10 shadow-premium border border-gray-100">
                  <!-- Subsidy Notice -->
                  <div class="mb-8 md:mb-16 p-6 md:p-8 bg-foundation-blue/5 rounded-[32px] border border-foundation-blue/10 flex flex-col md:flex-row items-start gap-6">
                    <div class="w-12 h-12 rounded-2xl bg-foundation-blue text-white flex items-center justify-center shrink-0 shadow-lg">
                      <Icon name="info" class="w-6 h-6" />
                    </div>
                    <p class="text-foundation-blue font-bold text-lg leading-relaxed">
                      <span>{{ t('service_fall_detection.pricing.notice') }}</span>
                      <span class="underline decoration-foundation-lightblue underline-offset-4">{{ t('service_fall_detection.pricing.notice2') }}</span>。
                    </p>
                  </div>

                  <!-- Price Card -->
                  <div class="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
                    <div class="xl:col-span-7 space-y-10">
                        <h2 class="text-2xl md:text-3xl font-black text-foundation-blue mb-12 italic flex items-center">
                          <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                          {{ t('service_fall_detection.pricing.title') }}
                        </h2>
                       <div class="space-y-4">
                          <div v-for="sub in subsidies" :key="sub.level" class="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-foundation-blue transition-all duration-300">
                             <div class="flex items-center space-x-4">
                                <div :class="['w-3 h-3 rounded-full', sub.color]"></div>
                                <span class="text-xl font-black text-foundation-blue">{{ sub.level }}</span>
                             </div>
                             <span class="text-lg font-bold text-foundation-lightblue">{{ sub.rate }}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div class="xl:col-span-5">
                       <div class="bg-foundation-blue rounded-[40px] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                          <div class="relative z-10 text-center space-y-8">
                             <div>
                                <p class="text-blue-200 font-black uppercase tracking-widest text-xs mb-4">{{ t('service_fall_detection.pricing.device_label') }}</p>
                                <div class="flex items-baseline justify-center space-x-2">
                                   <span class="text-xl opacity-60 font-black">NT.</span>
                                   <span class="text-3xl md:text-6xl font-black italic tracking-tighter">10,000</span>
                                </div>
                             </div>
                             <div class="space-y-4 border-t border-white/10 pt-8">
                                <p class="text-sm font-bold italic opacity-80">{{ t('service_fall_detection.pricing.warranty') }}</p>
                                <a href="#" class="block w-full py-5 bg-white text-foundation-blue rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                                  {{ t('service_fall_detection.pricing.buy_now') }}
                                </a>
                             </div>
                          </div>
                          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </transition>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}

/* Tab Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
