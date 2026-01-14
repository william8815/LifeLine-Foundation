<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t, locale } = useI18n()
const isZh_TW = computed(()=> locale.value === 'zh-TW')

// SEO Metadata
useHead({
  title: computed(() => t('service_tracking.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('service_tracking.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('service_tracking.seo.title')),
  description: computed(() => t('service_tracking.seo.description')),
  ogTitle: computed(() => t('service_tracking.seo.og_title')),
  ogDescription: computed(() => t('service_tracking.seo.og_description')),
  ogImage: tracking2_1,
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('service_tracking.seo.twitter_title')),
  twitterDescription: computed(() => t('service_tracking.seo.twitter_description'))
})
// images
import tracking1_1 from "@/assets/images/services/tracking1_1.png"
import tracking1_1_cn from "@/assets/images/services/tracking1_1_cn.png"
import tracking1_2 from "@/assets/images/services/tracking1_2.png"
import tracking1_2_cn from "@/assets/images/services/tracking1_2_cn.png"
import tracking1_3 from "@/assets/images/services/tracking1_3.png"
import tracking1_3_cn from "@/assets/images/services/tracking1_3_cn.png"
import tracking2_1 from "@/assets/images/services/tracking2_1.png"
const imageLoaded = ref({
  tracking1_1: false,
  tracking1_1_cn : false,
  tracking1_2: false,
  tracking1_2_cn : false,
  tracking1_3: false,
  tracking1_3_cn : false,
  tracking2_1: false,
})

const activeTab = ref('workflow')
const tabs = computed(() => [
  { id: 'workflow', name: t('service_tracking.tabs.workflow'), icon: 'zap' },
  { id: 'device', name: t('service_tracking.tabs.device'), icon: 'watch' },
  { id: 'pricing', name: t('service_tracking.tabs.pricing'), icon: 'shopping-cart' }
])

const reportingMethods = computed(() => [
  { title: t('service_tracking.workflow.method1_title'), desc: t('service_tracking.workflow.method1_desc') },
  { title: t('service_tracking.workflow.method2_title'), desc: t('service_tracking.workflow.method2_desc') },
  { title: t('service_tracking.workflow.method3_title'), desc: t('service_tracking.workflow.method3_desc') }
])
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      :title="t('service_tracking.page_header.title')" 
      :subtitle="t('service_tracking.page_header.subtitle')"
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
            <!-- Tab: Workflow -->
            <div v-if="activeTab === 'workflow'" :key="'workflow'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 overflow-hidden">
                  <h2 class="text-3xl font-black text-foundation-blue mb-8 italic flex items-center">
                    <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                    {{ t('service_tracking.workflow.title') }}
                  </h2>
                  <p class="text-gray-500 text-lg md:text-xl font-medium leading-[1.8] mb-12 italic">
                    {{ t('service_tracking.workflow.description') }}
                  </p>

                  <!-- Hero Image -->
                  <div class="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-gray-50 group">
                    <img  v-if="isZh_TW" :src="tracking1_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.tracking1_1 ? 'opacity-100' : 'opacity-0'" alt="Workflow Intro" loading="lazy" @load="imageLoaded.tracking1_1 = true">
                    <img  v-else :src="tracking1_1_cn" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.tracking1_1_cn ? 'opacity-100' : 'opacity-0'" alt="Workflow Intro" loading="lazy" @load="imageLoaded.tracking1_1_cn = true">
                    <div class="absolute inset-0 bg-gradient-to-t from-foundation-lightblue/40 to-transparent"></div>
                  </div>

                  <!-- App Demo Section -->
                  <div class="">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-12">
                      <div class="bg-foundation-blue/5 p-8 rounded-[32px] border border-foundation-blue/10">
                        <h3 class="text-2xl font-black text-foundation-blue mb-4">{{ t('service_tracking.workflow.app_title') }}</h3>
                        <p class="text-gray-500 font-medium">{{ t('service_tracking.workflow.app_desc') }}</p>
                      </div>
                      <div class="space-y-4">
                        <div v-for="(method, i) in reportingMethods" :key="i" class="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 group">
                           <div class="w-10 h-10 rounded-xl bg-foundation-blue text-white flex items-center justify-center font-black shrink-0 shadow-lg transition-transform">{{ i + 1 }}</div>
                           <div>
                              <h4 class="font-black text-foundation-blue">{{ method.title }}</h4>
                              <p class="text-sm text-gray-400 font-medium">{{ method.desc }}</p>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center gap-6">
                      <!-- Mobile Demos -->
                      <div class="w-1/2 aspect-[447/763] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl border-[6px] border-gray-800 rotate-[-5deg]">
                         <img v-if="isZh_TW" :src="tracking1_2" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_2 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_2 = true">
                         <img v-else :src="tracking1_2_cn" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_2_cn ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_2_cn = true">
                      </div>
                      <div class="w-1/2 aspect-[447/763] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl border-[6px] border-gray-800 translate-y-10 rotate-[5deg] ">
                         <img v-if="isZh_TW" :src="tracking1_3" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_3 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_3 = true">
                         <img v-else :src="tracking1_3_cn" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_3_cn ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_3_cn = true">
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Tab: Device -->
            <div v-else-if="activeTab === 'device'" :key="'device'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-10 shadow-premium border border-gray-100">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <h2 class="text-3xl font-black text-foundation-blue italic flex items-center">
                      <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                      {{ t('service_tracking.device.title') }}
                    </h2>
                    <p class="lg:col-span-2 text-gray-500 text-lg ">{{ t('service_tracking.device.subtitle') }}</p>
                    <div class="md:col-span-1 relative rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-50 group">
                      <img :src="tracking2_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.tracking2_1 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking2_1 = true">
                      <div class="absolute top-6 left-6">
                        <span class="px-6 py-2 bg-foundation-blue text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">{{ t('service_tracking.device.badge') }}</span>
                      </div>
                    </div>
                    <p class="md:col-span-1 text-gray-500 font-medium leading-relaxed italic">
                      {{ t('service_tracking.device.description') }}
                    </p>
                    <!-- Features List -->
                    <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-foundation-blue transition-colors">
                      <div class="w-10 h-10 rounded-xl bg-foundation-blue/10 flex items-center justify-center text-foundation-blue mb-4 group-hover:bg-foundation-blue group-hover:text-white transition-all">
                          <Icon name="thunder" class="w-6 h-6" />
                      </div>
                      <h4 class="font-black text-foundation-blue mb-2">{{ t('service_tracking.device.feature1_title') }}</h4>
                      <p class="text-xs text-gray-400 font-medium">{{ t('service_tracking.device.feature1_desc') }}</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-foundation-blue transition-colors">
                      <div class="w-10 h-10 rounded-xl bg-foundation-blue/10 flex items-center justify-center text-foundation-blue mb-4 group-hover:bg-foundation-blue group-hover:text-white transition-all">
                          <Icon name="pin" class="w-6 h-6" />
                      </div>
                      <h4 class="font-black text-foundation-blue mb-2">{{ t('service_tracking.device.feature2_title') }}</h4>
                      <p class="text-xs text-gray-400 font-medium">{{ t('service_tracking.device.feature2_desc') }}</p>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Tab: Pricing -->
            <div v-else-if="activeTab === 'pricing'" :key="'pricing'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-4 lg:p-10 shadow-premium border border-gray-100 relative overflow-hidden">
                  <div class="relative z-10 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6">
                    <h2 class="text-3xl font-black text-foundation-blue italic flex items-center md:col-span-2">
                      <span class="w-12 h-1.5 bg-foundation-beige mr-6 rounded-full"></span>
                      {{ t('service_tracking.pricing.title') }}
                    </h2>
                    <div>
                      <p class="text-gray-500 font-medium text-lg leading-relaxed mb-3">
                        {{ t('service_tracking.pricing.description') }}
                      </p>
                      <p class="text-gray-400 font-bold text-sm">
                        <span>{{ t("service_tracking.pricing.notes") }}</span>
                        <br>
                        <span>{{ t("service_tracking.pricing.notes2") }}</span>
                      </p>
                    </div>

                    <div class="p-4 bg-foundation-blue rounded-[40px] text-white shadow-2xl shadow-foundation-blue/20 flex flex-col items-center gap-4 justify-center mx-auto min-w-[250px]">
                      <span class="text-blue-200 font-black uppercase tracking-widest text-sm ">{{ t('service_tracking.pricing.device_label') }}</span>
                      <div class="flex items-baseline space-x-2">
                        <span class="text-2xl font-black opacity-60">NT.</span>
                        <span class="text-5xl font-black italic tracking-tighter">200</span>
                      </div>
                       
                       <a href="#" class="w-full md:w-auto px-8 py-3 bg-white text-foundation-blue rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl text-center">
                         {{ t('service_tracking.pricing.buy_now') }}
                       </a>
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
