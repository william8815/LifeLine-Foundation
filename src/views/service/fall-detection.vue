<script setup>
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '跌倒偵測 | 生命連線基金會 LifeLine Foundation - 4G智慧協尋與自動偵測',
  meta: [
    { 
      name: 'keywords', 
      content: '跌倒偵測, 自動報警, 衛星定位器, 4G智慧協尋, 電子圍籬, 長者安全, 生命連線, 輔具補助, 低收入補助, 黃金救援' 
    }
  ]
})

useSeoMeta({
  title: '跌倒偵測 | 生命連線基金會 LifeLine Foundation - 4G智慧協尋與自動偵測',
  description: '生命連線「跌倒偵測」服務採用 Carenet 4G 智慧協尋衛星定位器，具備高靈敏度自動跌倒偵測、GPS 定位與電子圍籬功能。提供政府輔具補助諮詢，24 小時守護長者安全，爭取黃金救援時間。',
  ogTitle: '跌倒偵測 - Carenet 4G 智慧協尋，守護每一步的安全 | 生命連線基金會',
  ogDescription: '先進高靈敏度偵測技術，偵測跌倒自動發出警報。整合 24 小時服務中心與政府補助，為長者打造最完善的安全網。',
  ogImage: falldetection1_1,
  twitterCard: 'summary_large_image',
  twitterTitle: '跌倒偵測 | 生命連線基金會 LifeLine Foundation',
  twitterDescription: 'Carenet 4G 智慧協尋，爭取黃金救援時間。'
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
const tabs = [
  { id: 'device', name: '裝置介紹', icon: 'monitor' },
  { id: 'features', name: '功能特色', icon: 'star' },
  { id: 'pricing', name: '費用與補助', icon: 'calculator' }
]

const features = [
  {
    title: '跌倒偵測',
    desc: '內建高靈敏度加速感應器，當偵測到疑似跌倒衝擊時，將自動發出警報並通知中心。',
    image: falldetection2_1
  },
  {
    title: '電子圍籬',
    desc: '可設定安全活動範圍，一旦長者超出預設區域，系統將立即推播提醒家屬。',
    image: falldetection2_2
  },
  {
    title: 'GPS 定位',
    desc: '採用多重導航衛星系統，提供精準的即時位置資訊，有效縮短搜救時間。',
    image: falldetection2_3
  },
  {
    title: '專業服務',
    desc: '連動 24 小時生命連線中心，由專業護理人員與社工提供最即時的關懷與轉介。',
    image: falldetection2_4
  }
]

const subsidies = [
  { level: '低收入戶', rate: '最高全額補助', color: 'bg-foundation-blue' },
  { level: '中低收入戶', rate: '最高補助 75%', color: 'bg-foundation-lightblue' },
  { level: '一般戶', rate: '最高補助 50%', color: 'bg-gray-400' }
]
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      title="跌倒偵測" 
      subtitle="Carenet 4G 智慧協尋・守護每一步的安全"
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
                  activeTab === tab.id ? 'bg-foundation-lightblue scale-150' : 'bg-gray-300 group-hover:bg-foundation-blue'
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
                    <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
                    Carenet 4G 智慧協尋衛星定位器
                  </h2>
                  
                  <div class="grid gap-8 mb-12">
                     <div class="rounded-[40px] overflow-hidden shadow-2xl border border-gray-50 aspect-[2/1] group">
                        <img :src="falldetection1_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.falldetection1_1 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.falldetection1_1 = true">
                     </div>
                  </div>

                  <div class="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                    <p class="text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
                      結合先進的 4G 通訊與高精準度感測技術，Carenet 4G 智慧協尋衛星定位器不僅是長者的守護者，更是家屬最安心的依靠。透過即時追蹤與跌倒偵測，讓意外發生時的黃金救援時間得到最有效的利用。
                    </p>
                  </div>
               </div>
            </div>

            <!-- Tab: Features -->
            <div v-else-if="activeTab === 'features'" :key="'features'" class="space-y-8">
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

            <!-- Tab: Pricing -->
            <div v-else-if="activeTab === 'pricing'" :key="'pricing'" class="space-y-8">
               <div class="bg-white rounded-[40px] p-4 md:p-10 shadow-premium border border-gray-100">
                  <!-- Subsidy Notice -->
                  <div class="mb-8 md:mb-16 p-6 md:p-8 bg-foundation-blue/5 rounded-[32px] border border-foundation-blue/10 flex flex-col md:flex-row items-start gap-6">
                    <div class="w-12 h-12 rounded-2xl bg-foundation-blue text-white flex items-center justify-center shrink-0 shadow-lg">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p class="text-foundation-blue font-bold text-lg leading-relaxed">
                      購買前須經政府設置或委託辦理之輔具服務單位輔具評估人員（含該單位特約之輔具評估人員）申請開立<span class="underline decoration-foundation-lightblue underline-offset-4">輔具評估報告書</span>。
                    </p>
                  </div>

                  <!-- Price Card -->
                  <div class="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7 space-y-10">
                       <h2 class="text-2xl md:text-4xl font-black text-foundation-blue italic">費用與政府補助</h2>
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
                    
                    <div class="lg:col-span-5">
                       <div class="bg-foundation-blue rounded-[40px] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                          <div class="relative z-10 text-center space-y-8">
                             <div>
                                <p class="text-blue-200 font-black uppercase tracking-widest text-xs mb-4">Carenet 4G Positioning Device</p>
                                <div class="flex items-baseline justify-center space-x-2">
                                   <span class="text-xl opacity-60 font-black">NT.</span>
                                   <span class="text-3xl md:text-6xl font-black italic tracking-tighter">10,000</span>
                                </div>
                             </div>
                             <div class="space-y-4 border-t border-white/10 pt-8">
                                <p class="text-sm font-bold italic opacity-80">保固期限：兩年 (2 Years Warranty)</p>
                                <a href="#" class="block w-full py-5 bg-white text-foundation-blue rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl">
                                  立即購買
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
