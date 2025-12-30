<script setup>
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
// images
import emergency1_1 from "@/assets/images/services/emergency1_1.png"
import emergency1_2 from "@/assets/images/services/emergency1_2.png"
import emergency1_3 from "@/assets/images/services/emergency1_3.png"
import emergency1_4 from "@/assets/images/services/emergency1_4.png"
import emergency2_1 from "@/assets/images/services/emergency2_1.png"
import emergency2_2 from "@/assets/images/services/emergency2_2.png"
import emergency2_3 from "@/assets/images/services/emergency2_3.png"
import emergency2_4 from "@/assets/images/services/emergency2_4.png"
import emergency2_5 from "@/assets/images/services/emergency2_5.png"

const imageLoaded = ref({
  emergency1_1: false,
  emergency1_2: false,
  emergency1_3: false,
  emergency1_4: false,
  emergency2_1: false,
  emergency2_2: false,
  emergency2_3: false,
  emergency2_4: false,
  emergency2_5: false
})

const activeTab = ref('intro')
const tabs = [
  { id: 'intro', name: '認識系統', icon: 'sparkles' },
  { id: 'workflow', name: '運作方式', icon: 'arrows-right-left' },
  { id: 'devices', name: '裝置介紹', icon: 'device-mobile' },
  { id: 'fees', name: '服務費用', icon: 'credit-card' }
]

const workflowSteps = [
  {
    id: 1,
    title: '按鈕呼救',
    content: '當有狀況發生，只要按下隨身發射器，即可啟動平安機。',
    icon: 'touch',
    image: emergency1_1
  },
  {
    id: 2,
    title: '專業人員接聽',
    content: '您的平安機會自動連線至 Lifeline 生命連線中心，並建立雙向的語音溝通。',
    icon: 'operator',
    image: emergency1_2
  },
  {
    id: 3,
    title: '個人化的協助',
    content: '中心人員檢視您的個人檔案，並評估整個狀況。',
    icon: 'profile',
    image: emergency1_3
  },
  {
    id: 4,
    title: '環環相扣',
    content: '中心人員將根據您的需求，連絡鄰居、家人或醫護人員，並持續連線，直到確定援助抵達。',
    icon: 'link',
    image: emergency1_4
  }   
]

const devices = {
  machines: [
    {
      type: '一般式',
      desc: 'Lifeline 生命連線平安機能與您現有的室內電話結合，提供 24 小時的緊急援助，以及雙向的語音通話。',
      image: emergency2_1,
      features: [
        '可設定 6 組語音小叮嚀 (服藥、會客、進食或運動提示)',
        '大型背光按鈕與撥號語音朗誦，適合視力不佳者',
        '語音報時功能，清晰為您報時',
        '定期檢測提示，提醒每月至少與中心通話一次',
        '高分貝擴音器與助聽話筒，音量可調整',
        '遠端接聽功能，按下隨身發射器即可接聽來電',
        '內建 24 小時備援電力，預防停電狀況',
        '相容手環式、項鍊式或手錶式隨身發射器'
      ]
    },
    {
      type: '電話式',
      desc: '專門設計用來提供全面的醫療照護功能，同時增進您的生活品質。',
      image: emergency2_2,
      features: [
        '涵蓋一般式所有核心功能',
        '強化醫療照護與生活品質優化設計',
        '同樣支援 6 組語音小叮嚀設定',
        '大型背光按鈕與高分貝通話系統',
        '支援多款隨身發射器搭配使用'
      ]
    }
  ],
  transmitters: [
    {
      type: '項鍊式',
      desc: '可當成飾品穿戴，具有簡潔、低調的設計，能依需求調整成合適的長度。僅重 14 公克，防水設計。',
      image: emergency2_3,
      specs: [
        '可在家中任何地點使用，包括地下室、車庫以及庭院',
        '長達 5 年的電池壽命，不必擔心更換問題',
        '相容於所有 Lifeline 平安機型'
      ]
    },
    {
      type: '手環式',
      desc: '僅重 14 公克，防水設計。能以項鍊或手環的方式穿戴，適合浴室等高風險區域。',
      image: emergency2_4,
      specs: [
        '室內全域覆蓋使用',
        '5 年長效電池',
        '多配戴方式：項鍊或手環'
      ]
    },
    {
      type: '手錶式',
      desc: '與鐘錶大廠 Timex 合作，結合美觀可靠的手錶與隨身發射器功能。',
      image: emergency2_5,
      specs: [
        '二合一設計：Timex 精準計時 + Lifeline 即時服務',
        '中性且具吸引力的美觀設計',
        '金屬或皮革錶帶供選擇，具備防水能力'
      ]
    }
  ]
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      title="緊急救援系統" 
      subtitle="救援一觸可及・守護長者獨居安全"
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
        <article class="flex-grow">
          <transition 
            name="fade-slide" 
            mode="out-in"
          >
            <!-- Tab: Intro -->
            <div v-if="activeTab === 'intro'" :key="'intro'" class="space-y-8">
              <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 relative overflow-hidden">
                <div class="relative z-10">
                   <h2 class="text-3xl md:text-4xl font-black text-foundation-blue mb-8 flex items-center italic">
                     <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
                     認識緊急救援系統
                   </h2>
                   <div class="space-y-6 text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
                     <p>
                       家是您最熟悉的環境，也是最讓您感到自在的地方。但對長者而言，超過半數的跌倒意外都在家中發生。
                     </p>
                     <p>
                       生命連線是簡單易用的緊急醫療救援服務，專門設計用來降低長者獨居的意外風險。當跌倒意外等緊急狀況發生，救援一”觸”可及。
                     </p>
                     <p>
                       生命連線的隨身發射器讓您及時與專業的中心人員連線，再第一時間提供您協助，一天二十四小時，全年無休。
                     </p>
                   </div>
                </div>
              </div>
            </div>

            <!-- Tab: Workflow -->
            <div v-else-if="activeTab === 'workflow'" :key="'workflow'" class="space-y-12">
              <div class="bg-white rounded-[40px] p-8 md:p-16 shadow-premium border border-gray-100 overflow-hidden">
                <h2 class="text-3xl font-black text-foundation-blue mb-16 italic text-center">救援服務運作方式</h2>
                
                <div class="space-y-16 md:space-y-24 relative">
                   <!-- Vertical connector line for desktop -->
                   <div class="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-foundation-blue/10 -z-0"></div>

                   <div 
                     v-for="(step, idx) in workflowSteps" 
                     :key="step.id" 
                     class="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20"
                     :class="idx % 2 === 1 ? 'md:flex-row-reverse' : ''"
                   >
                      <!-- Image Side -->
                      <div class="w-full md:w-1/2 group">
                        <div class="relative aspect-video rounded-[32px] overflow-hidden shadow-xl border border-gray-100 transition-all duration-700 group-hover:shadow-foundation-blue/10 group-hover:-translate-y-2">
                           <img :src="step.image" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" :class="imageLoaded[step.image] ? 'opacity-100' : 'opacity-0'"  :alt="step.title" loading="lazy" @load="imageLoaded[step.image] = true">
                           <!-- Step Number Badge Overlay -->
                           <div class="absolute top-4" :class="idx % 2 === 1 ? 'right-4' : 'left-4'">
                              <div class="w-12 h-12 rounded-2xl bg-foundation-blue text-white flex items-center justify-center font-black shadow-lg">
                                {{ step.id }}
                              </div>
                           </div>
                        </div>
                      </div>

                      <!-- Content Side -->
                      <div class="w-full md:w-1/2 space-y-6 text-center" :class="idx % 2 === 1 ? 'md:text-right' : 'md:text-left'">
                        <div 
                          class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foundation-blue/5 text-foundation-blue mb-2 border border-foundation-blue/10"
                          :class="idx % 2 === 1 ? 'md:ml-auto' : ''"
                        >
                          <svg v-if="step.id === 1" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                          <svg v-if="step.id === 2" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 11-8 0 4 4 0 018 0zM9 7h.01" /></svg>
                          <svg v-if="step.id === 3" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          <svg v-if="step.id === 4" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                        </div>
                        <h3 class="text-3xl font-black text-foundation-blue tracking-tighter">{{ step.title }}</h3>
                        <p class="text-gray-500 font-medium leading-relaxed text-lg max-w-lg" :class="idx % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'">{{ step.content }}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <!-- Tab: Devices -->
            <div v-else-if="activeTab === 'devices'" :key="'devices'" class="space-y-16">
              <!-- Peace Machines -->
              <section>
                <div class="flex items-center space-x-6 mb-20">
                   <h2 class="text-3xl font-black text-foundation-lightblue italic">平安機系列</h2>
                   <div class="h-px flex-grow bg-gray-100"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div v-for="machine in devices.machines" :key="machine.type" class="bg-white rounded-[40px] overflow-hidden shadow-premium border border-gray-100 group">
                      <div class="overflow-hidden relative aspect-[1/1]">
                         <img :src="machine.image" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded[machine.type] ? 'opacity-100' : 'opacity-0'" :alt="machine.type" loading="lazy" @load="imageLoaded[machine.type] = true">
                         <div class="absolute top-6 left-6">
                            <span class="px-6 py-2 bg-foundation-blue text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">{{ machine.type }}</span>
                         </div>
                      </div>
                      <div class="p-10">
                         <p class="text-gray-500 font-medium mb-8 italic-prose leading-relaxed">{{ machine.desc }}</p>
                         <ul class="space-y-4">
                            <li v-for="f in machine.features" :key="f" class="flex items-start text-sm font-medium text-gray-400 group/li">
                               <svg class="w-4 h-4 text-foundation-lightblue mr-3 mt-0.5 shrink-0 group-hover/li:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                               {{ f }}
                            </li>
                         </ul>
                      </div>
                   </div>
                </div>
              </section>

              <!-- Transmitters -->
              <section>
                <div class="flex items-center space-x-6 mb-12">
                   <h2 class="text-3xl font-black text-foundation-blue italic">隨身發射器</h2>
                   <div class="h-px flex-grow bg-gray-100"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div v-for="item in devices.transmitters" :key="item.type" class="bg-white rounded-[40px] p-10 shadow-premium border border-gray-100 group">
                      <div class="aspect-square rounded-[32px] overflow-hidden mb-10 border border-gray-50">
                         <img :src="item.image" class="w-full h-full object-cover transition-transform duration-1000">
                      </div>
                      <h3 class="text-2xl font-black text-foundation-blue mb-4 tracking-tighter">{{ item.type }}</h3>
                      <p class="text-gray-400 font-medium text-sm mb-8 leading-relaxed italic">{{ item.desc }}</p>
                      <ul class="space-y-3 border-t border-gray-50">
                         <li v-for="spec in item.specs" :key="spec" class="flex items-start text-xs font-bold text-gray-400">
                            <span class="w-1.5 h-1.5 rounded-full bg-foundation-lightblue mr-3 mt-1.5 shrink-0"></span>
                            {{ spec }}
                         </li>
                      </ul>
                   </div>
                </div>
              </section>
            </div>

            <!-- Tab: Fees -->
            <div v-else-if="activeTab === 'fees'" :key="'fees'" class="space-y-8">
              <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 relative overflow-hidden">
                <div class="relative z-10 flex flex-col xl:flex-row items-center gap-16">
                   <div class="flex-grow space-y-8">
                      <h2 class="text-3xl md:text-4xl font-black text-foundation-blue italic">服務費用說明</h2>
                      <div class="space-y-6 text-gray-500 text-lg font-medium leading-relaxed italic">
                         <p>在北美洲已有超過 3000 家的醫院和養護中心提供 Lifeline 生命連線的服務，本服務非常經濟且簡單易用。</p>
                         <p>服務費用會因為您所在位置及選擇的服務方案而有所不同。</p>
                         <p class="text-foundation-blue font-black">請撥打下方的服務專線，或以電子郵件聯繫我們的健康管理護理師，他們將會提供您所在地區的收費標準。</p>
                         <p class="text-sm bg-gray-50 p-4 rounded-xl border-l-4 border-foundation-lightblue">註：來電前請先準備好您想申裝地區的郵遞區號。</p>
                      </div>
                   </div>
                   <div class="w-full md:w-80 shrink-0">
                      <div class="bg-gradient-to-br from-foundation-blue to-blue-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden group">
                         <div class="relative z-10 space-y-8">
                            <div>
                               <p class="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">Support Hotline</p>
                               <a href="tel:0800056789" class="text-2xl font-black hover:text-foundation-lightblue transition-colors">0800-056-789</a>
                            </div>
                            <div class="pt-8 border-t border-white/10">
                               <p class="text-sm font-bold opacity-80 mb-6 italic">更多問題與細節</p>
                               <RouterLink to="/contact" class="flex items-center justify-between w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group/btn">
                                  <span class="font-black">聯絡我們</span>
                                  <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                               </RouterLink>
                            </div>
                         </div>
                         <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
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

.italic-prose p {
  font-style: italic;
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
