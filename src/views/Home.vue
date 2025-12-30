<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '生命連線基金會 LifeLine Foundation | 守護生命，厚澤民生',
  meta: [
    { 
      name: 'keywords', 
      content: '生命連線, 基金會, 緊急救援, 居家照護, 跌倒偵測, 智慧協尋, 老人守護, 厚澤民生, 雲端醫療, 24小時救護' 
    }
  ]
})

useSeoMeta({
  title: '生命連線基金會 LifeLine Foundation | 守護生命，厚澤民生',
  description: '生命連線基金會深耕台灣 20 年，提供全台最大的緊急救護通報服務。結合智慧醫療與在地關懷，包含家醫計畫、緊急救援、跌倒偵測及智慧協尋，守護每一位長輩的尊嚴與健康。',
  ogTitle: '生命連線基金會 LifeLine Foundation | 守護生命，厚澤民生',
  ogDescription: '20 年專業守護，全台領先的緊急救護與居家醫療服務，讓獨居長者安享晚年。',
  ogImage: imgHero,
  twitterCard: 'summary_large_image',
  twitterTitle: '生命連線基金會 LifeLine Foundation',
  twitterDescription: '結合智慧科技與專業醫護，為長輩編織最堅固的安全網。',
  twitterImage: imgHero
})

// images
import imgHero from '@/assets/images/hero-banner.jpeg'
import imgHero_2 from '@/assets/images/hero-banner2.jpg'
const heroImageLoaded = ref(false)
const heroImage2Loaded = ref(false)

const services = [
  {
    title: '家醫計畫',
    subtitle: '專業護理・居家健康守護',
    desc: '派遣護理師定期訪視與身體健康評量，並提供 24 小時健康諮詢。',
    href: '/service-home-care',
    icon: 'heart',
    features: ['護理師定期訪視', '疾病預防衛教', '專業醫護評估紀錄']
  },
  {
    title: '緊急救援系統',
    subtitle: '救護支援・救援即時抵達',
    desc: '包含意外通報、救護車緊急救護及聯絡人通知，確保黃金時間獲得協助。',
    href: '/service-emergency',
    icon: 'fire',
    features: ['24小時即時通報', '醫護/警政連動', '緊急聯絡人第一時間通知']
  },
  {
    title: '跌倒偵測系統',
    subtitle: '智慧監測・降低居家風險',
    desc: '採用 4G 定位器與不活動監控，預防長者在各角落發生意外。',
    href: '/service-fall-detection',
    icon: 'activity',
    features: ['高精準跌倒偵測', '不活動警訊監控', '自主監測安全安心']
  },
  {
    title: '智慧協尋手環',
    subtitle: 'NFC 感應・守護回家的路',
    desc: 'NFC 手環結合 GPS 定位，三種通報方式幫助走失者順利回家。',
    href: '/service-tracking',
    icon: 'map-pin',
    features: ['NFC 感應通報', 'GPS 精準定位', '派出所資訊即時整合']
  },
]

const formatNumber = (num) => {
  if (!num || isNaN(num)) return num
  if (num >= 1000000) {
    const m = num / 1000000
    return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`
  }
  if (num >= 1000) {
    const k = num / 1000
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`
  }
  return num
}

const stats = [
  { label: '累積服務人次', value: 1200000, suffix: '人', showPlus: true },
  { label: '守護據點', value: 500, suffix: '處', showPlus: true },
  { label: '深耕台灣', value: 20, suffix: '年', showPlus: false },
  { label: '專業團隊', value: 1000, suffix: '名', showPlus: true }
]

const latestNews = [
  {
    id: 1,
    title: '生命連線 20 週年：厚澤民生，共創未來',
    date: '2023.12.24',
    image: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: '寒冬送暖：基金會走訪偏鄉提供智慧醫療包',
    date: '2023.12.15',
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: '愛心無界：企業回饋資助清寒老人專案',
    date: '2023.12.01',
    image: 'https://picsum.photos/800/600?random=3'
  }
]

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="overflow-x-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img :src="imgHero" class="w-full h-full object-cover transition-opacity duration-500" alt="Hero Background" loading="lazy" :class="heroImageLoaded ? 'opacity-100' : 'opacity-0'"
        @load="heroImageLoaded = true" />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-4xl space-y-10">
          <div 
            class="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 transition-all duration-1000"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            <span class="w-2.5 h-2.5 bg-foundation-orange rounded-full animate-pulse"></span>
            <span class="text-white text-sm font-black uppercase tracking-[0.3em]">20 Years of Excellence</span>
          </div>

          <h1 
            class="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter transition-all duration-500 delay-300"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
             守護生命，<br>
             <span class="text-foundation-lightblue italic">厚澤民生。</span>
          </h1>

          <p 
            class="text-xl md:text-2xl text-white/70 font-bold max-w-2xl leading-relaxed italic transition-all duration-1000 delay-500"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            全台最大的緊急救護通報中心，結合雲端智慧醫療與在地關懷，我們守護每一位長輩的尊嚴與笑容。
          </p>

          <div 
            class="flex flex-wrap gap-4 pt-6 transition-all duration-1000 delay-700"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            <RouterLink to="/service-home-care" class="px-12 py-6 bg-white text-foundation-blue rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-all">
              了解服務內容
            </RouterLink>
            <RouterLink to="/donate" class="px-12 py-6 bg-foundation-orange text-white rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-all active:scale-95">
              立即支持我們
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 bg-foundation-blue relative overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <p class="text-[1rem] font-black uppercase tracking-[0.3em] text-foundation-lightblue mb-4">{{ stat.label }}</p>
            <div class="flex items-baseline justify-center space-x-1 group-hover:scale-110 transition-transform duration-500">
               <span class="text-4xl md:text-5xl font-black text-white italic tracking-tighter">{{ formatNumber(stat.value) }}{{ stat.showPlus ? '+' : '' }}</span>
               <span class="text-xl md:text-2xl font-bold text-white/50">{{ stat.suffix }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(240,110,0,0.05)_0%,transparent_70%)]"></div>
    </section>

    <!-- Mission Section -->
    <section class="py-8 md:py-32 bg-white relative overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-20">
          <div class="lg:w-1/2 space-y-12">
            <div class="space-y-6">
              <span class="inline-block px-4 py-1.5 bg-foundation-blue/10 text-foundation-blue rounded-full text-xs font-black tracking-widest uppercase">Our Mission</span>
              <h2 class="text-4xl md:text-6xl font-black text-foundation-blue tracking-tighter italic">
                服務宗旨：<br>
                <span class="text-foundation-lightblue pl-[2rem]">厚澤民生</span>
              </h2>
            </div>
            <div class="space-y-8 text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
              <p>
                生命連線中心秉持著「厚澤民生」之宗旨，結合社會福利、衛生緊急醫療網及消防等單位，辦理獨居或中低收入戶長者、身心障礙者及猝發性疾病患者在宅緊急救護通報服務方案。
              </p>
              <p>
                我們致力於提升服務品質，建立通報系統及個人相關資料連貫之網路，使緊急救護服務具備全天候、自動化立即反應之功能。同時提供居家安全和到院前的緊急醫療照護，協助弱勢族群減輕生活壓力，擁抱獨立自主的生活。
              </p>
            </div>
            <div class="flex items-center justify-around flex-wrap pt-4 gap-4">
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">全天候</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Response</span>
               </div>
               <div class="w-px h-10 bg-gray-100"></div>
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">自動化</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Technology</span>
               </div>
               <div class="w-px h-10 bg-gray-100"></div>
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">在地化</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">Care</span>
               </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="relative rounded-[60px] overflow-hidden shadow-2xl group">
               <img :src="imgHero_2" class="w-full h-full object-cover transition-opacity duration-500" alt="Mission Image" :class="heroImage2Loaded ? 'opacity-100' : 'opacity-0'" @load="heroImage2Loaded = true" loading="lazy">
               <div class="absolute inset-0 bg-gradient-to-t from-foundation-blue/40 to-transparent"></div>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -right-10 -top-10 w-40 h-40 bg-foundation-orange/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute -left-10 -bottom-10 w-60 h-60 bg-foundation-blue/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Hub Section -->
    <section class="py-8 md:py-32 bg-gray-50 relative">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center mb-24 max-w-3xl mx-auto space-y-6">
          <span class="inline-block px-4 py-1.5 bg-foundation-blue/10 text-foundation-blue rounded-full text-xs font-black tracking-widest uppercase">Service Overview</span>
          <h2 class="text-4xl md:text-6xl font-black text-foundation-blue italic">全方位的守護計畫</h2>
          <p class="text-gray-500 font-medium text-lg leading-relaxed italic">
            從緊急救援到居家生活輔助，我們將專業內容轉化為直覺的導引服務，確保每項需求都能找到最合適的對策。
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="group bg-white rounded-[50px] p-10 md:p-14 shadow-premium border border-transparent hover:border-foundation-blue/20 transition-all duration-700 flex flex-col hover:-translate-y-2"
          >
            <div class="mb-10 flex items-start justify-between">
               <div class="w-16 h-16 rounded-3xl bg-foundation-blue/5 flex items-center justify-center text-foundation-blue group-hover:bg-foundation-blue group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-foundation-blue/20">
                  <!-- Custom Icon Map (Icons from Lucide-like SVG) -->
                  <svg v-if="service.icon === 'fire'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14l2.879 2.121z" /></svg>
                  <svg v-if="service.icon === 'heart'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  <svg v-if="service.icon === 'activity'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <svg v-if="service.icon === 'map-pin'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <svg v-if="service.icon === 'chat'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
               </div>
            </div>

            <div class="flex-grow space-y-4">
               <p class="text-foundation-lightblue font-black text-sm uppercase tracking-widest">{{ service.subtitle }}</p>
               <h3 class="text-3xl font-black text-foundation-blue tracking-tighter">{{ service.title }}</h3>
               <p class="text-gray-400 font-medium italic leading-relaxed">{{ service.desc }}</p>
               
               <ul class="pt-8 space-y-3">
                  <li v-for="f in service.features" :key="f" class="flex items-center text-sm font-bold text-gray-500 group/li">
                     <span class="w-1.5 h-1.5 rounded-full bg-foundation-blue mr-3 group-hover/li:scale-150 transition-transform"></span>
                     {{ f }}
                  </li>
               </ul>
            </div>

            <div class="mt-12">
               <RouterLink 
                 :to="service.href"
                 class="inline-flex items-center space-x-3 text-foundation-blue font-black group-hover:text-foundation-orange transition-colors"
                >
                 <span>查看詳細內容</span>
                 <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Showcase Section -->
    <section class="py-8 md:py-32 bg-white relative">
       <div class="container mx-auto px-4 md:px-6">
         <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div class="space-y-4">
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black tracking-widest uppercase">Latest Updates</span>
              <h2 class="text-4xl md:text-6xl font-black text-foundation-blue italic italic">最新動態</h2>
            </div>
            <RouterLink to="/news" class="font-black text-foundation-blue hover:text-foundation-orange transition-colors flex items-center group">
              探索所有動態
              <svg class="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </RouterLink>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RouterLink 
              v-for="news in latestNews" 
              :key="news.id"
              :to="`/news/${news.id}`"
              class="group flex flex-col items-start"
            >
              <div class="w-full aspect-video rounded-[40px] overflow-hidden mb-8 border border-gray-50 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img :src="news.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              </div>
              <span class="text-xs font-bold text-gray-400 mb-3 tracking-widest">{{ news.date }}</span>
              <h3 class="text-xl md:text-2xl font-black text-foundation-blue leading-tight group-hover:text-foundation-lightblue transition-colors line-clamp-2 italic tracking-tighter">
                {{ news.title }}
              </h3>
            </RouterLink>
         </div>
       </div>
    </section>

    <!-- Donation Final CTA Section -->
    <section class="py-24 container mx-auto px-4 md:px-6 mb-24">
       <div class="bg-foundation-blue rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden group">
          <div class="relative z-10 max-w-3xl mx-auto space-y-12">
             <h2 class="text-2xl md:text-5xl font-black leading-tight italic transition-all duration-700 group-hover:scale-105">
               您的愛心，<br>是長輩生命中最溫暖的連線。
             </h2>
             <p class="text-lg text-white/70 font-bold italic leading-relaxed">
               每一分捐助都將轉化為第一線的守護服務，協助獨居長者安享晚年，不再孤單。
             </p>
             <div class="flex flex-wrap justify-center gap-6 pt-6">
                <RouterLink to="/donate" class="px-8 py-4 bg-white text-foundation-blue rounded-3xl font-black text-lg shadow-xl hover:-translate-y-2 transition-all">
                  我願貢獻一份力
                </RouterLink>
                <RouterLink to="/contact" class="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl font-black text-lg shadow-xl hover:bg-white/20 transition-all">
                  了解更多聯絡方式
                </RouterLink>
             </div>
          </div>
          <!-- Decorative Blur Background -->
          <div class="absolute -right-40 -bottom-40 w-96 h-96 bg-foundation-orange/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
          <div class="absolute -left-40 -top-40 w-80 h-80 bg-foundation-lightblue/20 rounded-full blur-[100px]"></div>
       </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes slow-zoom {
  from { transform: scale(1.1); }
  to { transform: scale(1.2); }
}
.animate-slow-zoom {
  animation: slow-zoom 30s linear infinite alternate;
}

.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}
</style>