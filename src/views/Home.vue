<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('home.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('home.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('home.seo.title')),
  description: computed(() => t('home.seo.description')),
  ogTitle: computed(() => t('home.seo.og_title')),
  ogDescription: computed(() => t('home.seo.og_description')),
  ogImage: imgHero,
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('home.seo.twitter_title')),
  twitterDescription: computed(() => t('home.seo.twitter_description')),
  twitterImage: imgHero
})

// images
import imgHero from '@/assets/images/hero-banner.jpeg'
import imgHero_2 from '@/assets/images/hero-banner2.jpg'
const heroImageLoaded = ref(false)
const heroImage2Loaded = ref(false)

const services = computed(() => [
  {
    titleKey: 'home.services.home_care.title',
    subtitleKey: 'home.services.home_care.subtitle',
    descKey: 'home.services.home_care.description',
    href: '/service-home-care',
    icon: 'favoriteOutline',
    featuresKeys: ['home.services.home_care.feature1', 'home.services.home_care.feature2', 'home.services.home_care.feature3']
  },
  {
    titleKey: 'home.services.emergency.title',
    subtitleKey: 'home.services.emergency.subtitle',
    descKey: 'home.services.emergency.description',
    href: '/service-emergency',
    icon: 'fire',
    featuresKeys: ['home.services.emergency.feature1', 'home.services.emergency.feature2', 'home.services.emergency.feature3']
  },
  {
    titleKey: 'home.services.fall_detection.title',
    subtitleKey: 'home.services.fall_detection.subtitle',
    descKey: 'home.services.fall_detection.description',
    href: '/service-fall-detection',
    icon: 'sensors',
    featuresKeys: ['home.services.fall_detection.feature1', 'home.services.fall_detection.feature2', 'home.services.fall_detection.feature3']
  },
  {
    titleKey: 'home.services.tracking.title',
    subtitleKey: 'home.services.tracking.subtitle',
    descKey: 'home.services.tracking.description',
    href: '/service-tracking',
    icon: 'pin',
    featuresKeys: ['home.services.tracking.feature1', 'home.services.tracking.feature2', 'home.services.tracking.feature3']
  },
])

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

const stats = computed(() => [
  { labelKey: 'home.stats.service_count', value: 1200000, suffixKey: 'home.stats.suffix_people', showPlus: true },
  { labelKey: 'home.stats.locations', value: 500, suffixKey: 'home.stats.suffix_locations', showPlus: true },
  { labelKey: 'home.stats.years', value: 20, suffixKey: 'home.stats.suffix_years', showPlus: false },
  { labelKey: 'home.stats.team', value: 1000, suffixKey: 'home.stats.suffix_members', showPlus: true }
])

const posts = [
  {
    id: "4059319334310295_3799303623645202",
    message: "【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」的初衷。未來我們將持續引入美國 Lifeline 技術，強化雲端智慧醫療，守護每一位長輩的笑容！",
    full_picture: "https://picsum.photos/800/600?random=1",
    created_time: "2024-10-29T12:26:32+0000"
  },
  {
    id: "4059319334310295_1716316915277227",
    message: "秋意漸濃，長輩的關節照護更不能馬虎！醫師建議每日進行 10 分鐘的居家拉伸運動，能有效減緩關節晨僵現象。若您家中長輩有相關困擾，可以諮詢加盟診所的家醫計畫醫師，規劃專屬的運動方案。#健康長壽 #家醫計畫 #關節照護",
    full_picture: "https://picsum.photos/800/600?random=2",
    created_time: "2016-07-02T14:58:26+0000"
  },
  {
    id: "4059319334310295_1547912345451019",
    message: "上週末在信義區舉行的「銀髮樂齡派對」圓滿結束！看到長輩們戴上我們的智慧偵測手環，開心地跳著律動舞，志工們都深感欣慰。我們不只是提供通報，更是提供一份「安心」的陪伴。我們的愛心特派員也在現場捕捉到了許多動人的畫面，歡迎大家點擊查看更多現場精彩照片！",
    full_picture: "https://picsum.photos/800/600?random=3",
    created_time: "2015-02-04T07:25:00+0000"
  },
  {
    id: "4059319334310295_3799303623645202",
    message: "【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」的初衷。未來我們將持續引入美國 Lifeline 技術，強化雲端智慧醫療，守護每一位長輩的笑容！",
    full_picture: "https://picsum.photos/800/600?random=1",
    created_time: "2024-10-29T12:26:32+0000"
  },
  {
    id: "4059319334310295_1716316915277227",
    message: "秋意漸濃，長輩的關節照護更不能馬虎！醫師建議每日進行 10 分鐘的居家拉伸運動，能有效減緩關節晨僵現象。若您家中長輩有相關困擾，可以諮詢加盟診所的家醫計畫醫師，規劃專屬的運動方案。#健康長壽 #家醫計畫 #關節照護",
    full_picture: "https://picsum.photos/800/600?random=2",
    created_time: "2016-07-02T14:58:26+0000"
  },
  {
    id: "4059319334310295_1547912345451019",
    message: "上週末在信義區舉行的「銀髮樂齡派對」圓滿結束！看到長輩們戴上我們的智慧偵測手環，開心地跳著律動舞，志工們都深感欣慰。我們不只是提供通報，更是提供一份「安心」的陪伴。我們的愛心特派員也在現場捕捉到了許多動人的畫面，歡迎大家點擊查看更多現場精彩照片！",
    full_picture: "https://picsum.photos/800/600?random=3",
    created_time: "2015-02-04T07:25:00+0000"
  }
]
const newsList = ref([])
initPosts()
function initPosts() {
  newsList.value = posts.map((item)=> {
    return {
      id: item.id,
      created_time: item?.created_time ? formatDate(item.created_time) : "",
      message: item?.message || "",
      images: item?.full_picture ? [item.full_picture] : [],
      imageLoaded: false
    }
  })
}

// 處理日期格式
function formatDate(dateString) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const isVisible = ref(false)
onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="overflow-x-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative h-[calc(100vh-80px)] flex items-center overflow-hidden">
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
            <span class="w-2.5 h-2.5 bg-foundation-lightblue rounded-full animate-pulse"></span>
            <span class="text-white text-sm font-black uppercase tracking-[0.3em]">{{ t('home.hero.badge') }}</span>
          </div>

          <h1 
            class="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter transition-all duration-500 delay-300"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
             {{ t('home.hero.title_line1') }}<br>
             <span class="text-foundation-lightblue italic ml-8">{{ t('home.hero.title_line2') }}</span>
          </h1>

          <p 
            class="text-xl md:text-2xl text-white/70 font-bold max-w-2xl leading-relaxed italic transition-all duration-1000 delay-500"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            {{ t('home.hero.description') }}
          </p>

          <div 
            class="flex flex-wrap gap-4 pt-6 transition-all duration-1000 delay-700"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            <RouterLink to="/service-home-care" class="px-6 py-4 lg:px-12 lg:py-6 bg-white text-foundation-blue rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-all">
              {{ t('home.hero.btn_services') }}
            </RouterLink>
            <RouterLink to="/donate" class="px-6 py-4 lg:px-12 lg:py-6 bg-foundation-lightblue hover:bg-foundation-blue text-white rounded-3xl font-black text-lg shadow-2xl hover:scale-105 transition-all active:scale-95">
              {{ t('home.hero.btn_donate') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24 bg-foundation-blue relative overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div v-for="stat in stats" :key="stat.labelKey" class="text-center group">
            <p class="text-[1rem] font-black uppercase tracking-[0.3em] text-foundation-beige mb-4">{{ t(stat.labelKey) }}</p>
            <div class="flex items-baseline justify-center space-x-1 group-hover:scale-110 transition-transform duration-500">
               <span class="text-4xl md:text-5xl font-black text-white italic tracking-tighter">{{ formatNumber(stat.value) }}{{ stat.showPlus ? '+' : '' }}</span>
               <span class="text-xl md:text-2xl font-bold text-white/50">{{ t(stat.suffixKey) }}</span>
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
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black tracking-widest uppercase">{{ t('home.mission.badge') }}</span>
              <h2 class="text-4xl md:text-6xl font-black text-foundation-blue tracking-tighter italic">
                {{ t('home.mission.title_line1') }}<br>
                <span class="text-foundation-lightblue pl-[2rem]">{{ t('home.mission.title_line2') }}</span>
              </h2>
            </div>
            <div class="space-y-8 text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
              <p>
                {{ t('home.mission.paragraph1') }}
              </p>
              <p>
                {{ t('home.mission.paragraph2') }}
              </p>
            </div>
            <div class="flex items-center justify-around flex-wrap pt-4 gap-4">
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">{{ t('home.mission.feature1') }}</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">{{ t('home.mission.feature1_en') }}</span>
               </div>
               <div class="w-px h-10 bg-gray-100"></div>
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">{{ t('home.mission.feature2') }}</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">{{ t('home.mission.feature2_en') }}</span>
               </div>
               <div class="w-px h-10 bg-gray-100"></div>
               <div class="flex flex-col">
                  <span class="text-3xl font-black text-foundation-blue italic">{{ t('home.mission.feature3') }}</span>
                  <span class="text-xs font-bold text-gray-400 tracking-widest uppercase">{{ t('home.mission.feature3_en') }}</span>
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
          <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black tracking-widest uppercase">{{ t('home.services.badge') }}</span>
          <h2 class="text-4xl md:text-6xl font-black text-foundation-blue italic">{{ t('home.services.title') }}</h2>
          <p class="text-gray-500 font-medium text-lg leading-relaxed italic">
            {{ t('home.services.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in services" 
            :key="service.titleKey"
            class="group bg-white rounded-[50px] p-10 md:p-14 shadow-premium border border-transparent hover:border-foundation-blue/20 transition-all duration-700 flex flex-col hover:-translate-y-2"
          >
            <div class="mb-10 flex items-start justify-between">
               <div class="w-16 h-16 rounded-3xl bg-foundation-blue/5 flex items-center justify-center text-foundation-blue group-hover:bg-foundation-blue group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-foundation-blue/20">
                  <!-- Custom Icon Map (Icons from Lucide-like SVG) -->
                  <Icon :name="service.icon" class="w-8 h-8" />
               </div>
            </div>

            <div class="flex-grow space-y-4">
               <p class="text-foundation-lightblue font-black text-sm uppercase tracking-widest">{{ t(service.subtitleKey) }}</p>
               <h3 class="text-3xl font-black text-foundation-blue tracking-tighter">{{ t(service.titleKey) }}</h3>
               <p class="text-gray-400 font-medium italic leading-relaxed">{{ t(service.descKey) }}</p>
               
               <ul class="pt-8 space-y-3">
                  <li v-for="fKey in service.featuresKeys" :key="fKey" class="flex items-center text-sm font-bold text-gray-500">
                     <span class="w-1.5 h-1.5 rounded-full bg-foundation-lightblue mr-3"></span>
                     {{ t(fKey) }}
                  </li>
               </ul>
            </div>

            <div class="mt-12 group/link">
               <RouterLink 
                 :to="service.href"
                 class="inline-flex items-center space-x-3 text-foundation-blue font-black group-hover/link:text-foundation-lightblue transition-colors"
                >
                 <span>{{ t('home.services.view_details') }}</span>
                 <Icon name="arrowForward" class="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
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
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black tracking-widest uppercase">{{ t('home.news.badge') }}</span>
              <h2 class="text-4xl md:text-6xl font-black text-foundation-blue italic italic">{{ t('home.news.title') }}</h2>
            </div>
            <RouterLink to="/news" class="font-black text-foundation-blue hover:text-foundation-lightblue transition-colors flex items-center group">
              {{ t('home.news.view_all') }}
              <Icon name="arrowForward" class="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </RouterLink>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RouterLink 
              v-for="news in newsList" 
              :key="news.id"
              :to="`/news/${news.id}`"
              class="group flex flex-col items-start"
            >
              <div class="w-full aspect-video rounded-[40px] overflow-hidden mb-8 border border-gray-50 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img :src="news.images[0]" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              </div>
              <span class="text-xs font-bold text-gray-400 mb-3 tracking-widest">{{ t(news.created_time) }}</span>
              <p class="text-lg font-black text-gray-800 leading-tight group-hover:text-foundation-lightblue transition-colors line-clamp-2 italic tracking-tighter">
                {{ news.message }}
              </p>
            </RouterLink>
         </div>
       </div>
    </section>

    <!-- Donation Final CTA Section -->
    <section class="py-24 container mx-auto px-4 md:px-6 mb-24">
       <div class="bg-foundation-blue rounded-[60px] p-12 md:p-24 text-white text-center relative overflow-hidden group">
          <div class="relative z-10 max-w-3xl mx-auto space-y-12">
             <h2 class="text-2xl md:text-5xl font-black leading-tight italic transition-all duration-700 group-hover:scale-105">
               {{ t('home.cta.title_line1') }}<br>{{ t('home.cta.title_line2') }}
             </h2>
             <p class="text-lg text-white/70 font-bold italic leading-relaxed">
               {{ t('home.cta.description') }}
             </p>
             <div class="flex flex-wrap justify-center gap-6 pt-6">
                <RouterLink to="/donate" class="px-8 py-4 bg-white text-foundation-blue rounded-3xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                  {{ t('home.cta.btn_donate') }}
                </RouterLink>
                <RouterLink to="/contact" class="px-8 py-4 bg-foundation-lightblue text-white rounded-3xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                  {{ t('home.cta.btn_contact') }}
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