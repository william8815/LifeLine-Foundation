<script setup>
import { ref } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
// images
import tracking1_1 from "@/assets/images/services/tracking1_1.png"
import tracking1_2 from "@/assets/images/services/tracking1_2.png"
import tracking1_3 from "@/assets/images/services/tracking1_3.png"
import tracking2_1 from "@/assets/images/services/tracking2_1.png"
const imageLoaded = ref({
  tracking1_1: false,
  tracking1_2: false,
  tracking1_3: false,
  tracking2_1: false,
})

const activeTab = ref('workflow')
const tabs = [
  { id: 'workflow', name: '運作方式', icon: 'zap' },
  { id: 'device', name: '裝置介紹', icon: 'watch' },
  { id: 'pricing', name: '費用說明', icon: 'shopping-cart' }
]

const reportingMethods = [
  { title: 'GPS 自動定位', desc: '透過手機位置資訊，精準掌握走失者座標。' },
  { title: '地圖導引', desc: '串接 Google Maps，即時規劃前往路徑。' },
  { title: '即時通報', desc: '一鍵撥通協尋中心與在地派出所，尋求公權力協助。' }
]
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      title="老人協尋" 
      subtitle="NFC 智慧感應・守護回家的路"
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
            <!-- Tab: Workflow -->
            <div v-if="activeTab === 'workflow'" :key="'workflow'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 overflow-hidden">
                  <h2 class="text-3xl font-black text-foundation-blue mb-8 italic flex items-center">
                    <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
                    運作方式
                  </h2>
                  <p class="text-gray-500 text-lg md:text-xl font-medium leading-[1.8] mb-12 italic">
                    透過具 NFC 感應功能的智慧手機或行動裝置感應手環立即 GPS 衛星定位，就能幫助走失者順利回家。
                  </p>

                  <!-- Hero Image -->
                  <div class="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-gray-50 group">
                    <img :src="tracking1_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.tracking1_1 ? 'opacity-100' : 'opacity-0'" alt="Workflow Intro" loading="lazy" @load="imageLoaded.tracking1_1 = true">
                    <div class="absolute inset-0 bg-gradient-to-t from-foundation-lightblue/40 to-transparent"></div>
                  </div>

                  <!-- App Demo Section -->
                  <div class="">
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-12">
                      <div class="bg-foundation-blue/5 p-8 rounded-[32px] border border-foundation-blue/10">
                        <h3 class="text-2xl font-black text-foundation-blue mb-4">感應手環・快速通報</h3>
                        <p class="text-gray-500 font-medium">感應手環後，便會啟動自訂瀏覽器連接至協尋平台，提供三種通報方式，協助身分確認與位置鎖定。</p>
                      </div>
                      <div class="space-y-4">
                        <div v-for="(method, i) in reportingMethods" :key="i" class="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 group">
                           <div class="w-10 h-10 rounded-xl bg-foundation-blue text-white flex items-center justify-center font-black shrink-0 shadow-lg group-hover:rotate-12 transition-transform">{{ i + 1 }}</div>
                           <div>
                              <h4 class="font-black text-foundation-blue">{{ method.title }}</h4>
                              <p class="text-sm text-gray-400 font-medium">{{ method.desc }}</p>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center gap-6">
                      <!-- Mobile Demos -->
                      <div class="w-1/2 aspect-[447/763] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl border-[6px] border-gray-800 rotate-[-5deg] hover:rotate-0 transition-all duration-700">
                         <img :src="tracking1_2" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_2 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_2 = true">
                      </div>
                      <div class="w-1/2 aspect-[447/763] bg-gray-900 rounded-[1.5rem] p-2 shadow-2xl border-[6px] border-gray-800 translate-y-10 rotate-[5deg] hover:rotate-0 transition-all duration-700">
                         <img :src="tracking1_3" class="w-full h-full object-cover rounded-[1rem] duration-500 transition-all" :class="imageLoaded.tracking1_3 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking1_3 = true">
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Tab: Device -->
            <div v-else-if="activeTab === 'device'" :key="'device'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-10 shadow-premium border border-gray-100">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                    <h2 class="lg:col-span-2 text-4xl font-black text-foundation-blue tracking-tighter italic">NFC 失蹤協尋手環</h2>
                    <p class="lg:col-span-2 text-foundation-lightblue font-black text-lg ">結合防走失手鍊與 GPS 追蹤優勢，重新定義安全感。</p>
                    <div class="lg:col-span-2 relative rounded-[1.5rem] overflow-hidden shadow-xl border border-gray-50 group">
                      <img :src="tracking2_1" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded.tracking2_1 ? 'opacity-100' : 'opacity-0'" loading="lazy" @load="imageLoaded.tracking2_1 = true">
                      <div class="absolute top-6 left-6">
                        <span class="px-6 py-2 bg-foundation-blue text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">NFC 科技配件</span>
                      </div>
                    </div>
                    <p class="lg:col-span-2 text-gray-500 font-medium leading-relaxed italic">
                      和傳統的防走失手鍊相較，多了傳送定位、地圖、派出所資訊等優勢。平台上提供三種通報方式，可透過允許使用手機的位置資訊提供中心護理人員掌握協尋者目前定位，並直接撥通協尋中心專線。
                    </p>
                    <!-- Features List -->
                    <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-foundation-blue transition-colors">
                      <div class="w-10 h-10 rounded-xl bg-foundation-blue/10 flex items-center justify-center text-foundation-blue mb-4 group-hover:bg-foundation-blue group-hover:text-white transition-all">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h4 class="font-black text-foundation-blue mb-2">軟性矽膠材質</h4>
                      <p class="text-xs text-gray-400 font-medium">防過敏、防水設計，適合長者全年 24 小時配戴不造成負擔。</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-foundation-blue transition-colors">
                      <div class="w-10 h-10 rounded-xl bg-foundation-blue/10 flex items-center justify-center text-foundation-blue mb-4 group-hover:bg-foundation-blue group-hover:text-white transition-all">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h4 class="font-black text-foundation-blue mb-2">動態定位優勢</h4>
                      <p class="text-xs text-gray-400 font-medium">比起傳統手鍊，能第一時間回傳 GPS 座標、地圖及最近派出所資訊。</p>
                    </div>
                  </div>
               </div>
            </div>

            <!-- Tab: Pricing -->
            <div v-else-if="activeTab === 'pricing'" :key="'pricing'" class="space-y-12">
               <div class="bg-white rounded-[40px] p-4 lg:p-10 shadow-premium border border-gray-100 relative overflow-hidden">
                  <div class="relative z-10 max-w-2xl mx-auto grid gap-6">
                    <h2 class="text-4xl font-black text-foundation-blue italic">服務費用說明</h2>
                    <p class="text-gray-500 font-medium text-lg leading-relaxed">
                      我們致力於提供可負擔且完善的協尋解決方案，讓科技守護與預防不再遙不可及。
                    </p>

                    <div class="p-4 bg-foundation-blue rounded-[40px] text-white shadow-2xl shadow-foundation-blue/20 flex flex-col items-center gap-4 justify-center mx-auto min-w-[250px]">
                       <span class="text-blue-200 font-black uppercase tracking-widest text-sm ">NFC 失蹤協尋手環</span>
                       <div class="flex items-baseline space-x-2">
                          <span class="text-2xl font-black opacity-60">NT.</span>
                          <span class="text-5xl font-black italic tracking-tighter">200</span>
                       </div>
                       
                       <a href="#" class="w-full md:w-auto px-8 py-3 bg-white text-foundation-blue rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl text-center">
                         立即購買
                       </a>
                    </div>

                    <p class="text-gray-400 font-bold text-sm">
                      * 購買後包含首年協尋平台基本使用權限。<br>
                      * 詳細購買細節與退換貨政策請參閱平台規範。
                    </p>
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
