<script setup>
import PageHeader from '../../components/layout/PageHeader.vue'

// Statistics Data
const stats = [
  { label: '北美健康照護機構', value: '2500+', icon: 'hospital' },
  { label: '全球服務用戶數', value: '4M+', icon: 'users' },
  { label: '全天候服務中心', value: '24/7', icon: 'clock' },
  { label: '創始年份', value: '1974', icon: 'calendar' }
]

const partners = [
  '台大醫院', '中心診所', '台中榮總', '光田醫院', '多數縣市政府委託'
]
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <PageHeader 
      title="組織介紹" 
      subtitle="獨立自主・安全・尊嚴"
    />

    <main class="relative">
      <div class="container mx-auto px-4 md:px-8 -mt-10 md:-mt-20 relative z-30">
        <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.06)] p-8 md:p-16 border border-gray-50 overflow-hidden relative">
          <!-- Background Decoration -->
          <div class="absolute top-0 right-0 w-96 h-96 bg-foundation-blue/5 rounded-full blur-3xl -mr-48 -mt-48"></div>

          <div class="max-w-5xl mx-auto">
            
            <!-- Section 1: 24/7 Service -->
            <div class="relative mb-16">
              <div class="grid grid-cols-1 gap-16 items-center">
                <div class="">
                  <div class="inline-flex items-center space-x-2 bg-foundation-blue/5 text-foundation-blue px-4 py-2 rounded-full mb-8">
                    <div class="w-1.5 h-1.5 bg-foundation-blue rounded-full animate-ping"></div>
                    <span class="text-xs font-black uppercase tracking-widest">Real-time Response</span>
                  </div>
                  <h2 class="text-4xl md:text-6xl font-black text-foundation-blue leading-tight mb-8">
                    全年無休的<span class="text-foundation-orange">生命守護</span>
                  </h2>
                  <p class="text-gray-600 leading-relaxed text-xl mb-10 font-medium">
                    生命連線服務連結使用者與親人、鄰居、朋友、社區及救護單位、醫療機構等緊急救援網絡。
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-foundation-blue/10 hover:bg-white hover:shadow-xl transition-all">
                       <svg class="w-8 h-8 text-foundation-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                       <p class="text-gray-500 text-sm">室內收訊範圍內，不論在家中或是庭院皆可全面防護。</p>
                    </div>
                    <div class="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-foundation-blue/10 hover:bg-white hover:shadow-xl transition-all">
                       <svg class="w-8 h-8 text-foundation-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                       <p class="text-gray-500 text-sm">隨身救護發射器，一鍵聯繫，24小時全年無休。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Bar Section -->
            <div class="mb-32 relative">
              <div class="absolute -left-12 top-1/2 -translate-y-1/2 w-1 h-24 bg-foundation-orange/30"></div>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-12">
                <div v-for="(stat, index) in stats" :key="stat.label" class="relative">
                  <div class="flex flex-col items-center">
                    <span class="text-gray-100 text-6xl font-black italic absolute -top-8 -left-2 z-0 opacity-40">0{{ index + 1 }}</span>
                    <p class="text-4xl md:text-5xl font-black text-foundation-blue mb-2 relative z-10 tracking-tighter">{{ stat.value }}</p>
                    <p class="text-gray-400 font-bold uppercase tracking-widest text-[1rem] relative z-10">{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: History Card -->
            <div class="relative mb-32 group">
              <div class="bg-gray-50 rounded-[50px] overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                <div class="flex flex-col lg:flex-row">
                  <div class="lg:w-1/3 bg-foundation-blue p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <!-- Background Ornament -->
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>
                    <div class="relative z-10">
                      <p class="text-white/60 text-sm font-black tracking-widest uppercase mb-4">Founded</p>
                      <p class="text-7xl font-black text-white tracking-tighter italic">1974</p>
                      <div class="w-12 h-1 bg-foundation-orange mx-auto mt-6 rounded-full"></div>
                    </div>
                  </div>
                  <div class="lg:w-2/3 p-10 md:p-14 space-y-8">
                    <div>
                      <h3 class="text-3xl font-black text-foundation-blue mb-6">獨立自主、安全與尊嚴</h3>
                      <p class="text-gray-600 leading-relaxed text-lg">
                        生命連線是在 1974 年時由 <span class="text-foundation-blue font-bold">Dr.Andrew Dibner</span> 和他的妻子 Susan 所發明的，迅速成為個人救護服務的領導設計，確保高危險群於緊急危難時，能夠得到立即救援。
                      </p>
                    </div>
                    <div class="bg-foundation-blue/5 rounded-3xl p-8 border-l-4 border-foundation-orange">
                      <p class="text-gray-700 font-bold leading-relaxed mb-0 italic">
                        「讓使用者能夠獨立自主、安全、尊嚴地居住在自己熟悉的生活環境中療養恢復。」
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Trust & Partners -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span class="text-foundation-orange font-black uppercase tracking-widest text-xs mb-4 block">Proven Trust</span>
                <h3 class="text-3xl font-black text-foundation-blue mb-8 leading-tight">廣受信賴的<br>全方位專業體系</h3>
                <p class="text-gray-600 leading-relaxed text-lg mb-8">
                  目前北美地區已有超過 <span class="text-foundation-blue font-bold">2500</span> 家健康照護機構使用生命連線服務，使用者超過 <span class="text-foundation-blue font-bold">400 萬</span> 位民眾。
                </p>
                <div class="flex items-center space-x-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div class="flex flex-col">
                    <span class="text-4xl font-black text-foundation-blue italic tracking-tighter">NORTH</span>
                    <span class="text-[10px] font-bold tracking-widest text-foundation-blue uppercase">America Standard</span>
                  </div>
                </div>
              </div>
              
              <div class="relative">
                <div class="absolute -inset-4 bg-foundation-blue/5 rounded-[40px] -rotate-2"></div>
                <div class="relative bg-white border border-gray-100 rounded-[40px] p-10 shadow-lg">
                  <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs mb-8 flex items-center">
                    <span class="w-2 h-2 bg-foundation-orange rounded-full mr-3"></span>
                    Domestic Partners
                  </h4>
                  <div class="flex flex-wrap gap-3">
                    <span v-for="tag in partners" :key="tag" class="px-5 py-3 bg-gray-50 border border-transparent rounded-2xl text-foundation-blue font-bold text-sm hover:border-foundation-blue/30 hover:bg-white hover:text-foundation-blue transition-all cursor-default shadow-sm hover:shadow-md">
                      {{ tag }}
                    </span>
                  </div>
                  <div class="mt-10 pt-8 border-t border-gray-50">
                    <p class="text-gray-400 text-xs italic leading-relaxed">
                      深獲各級政府與頂尖醫院合作肯定，為國內長者居家安全的領導品牌。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.animate-spin-slow {
  animation: spin 8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
