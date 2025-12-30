<script setup>
import { ref, reactive, nextTick } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '家醫計畫 | 生命連線基金會 LifeLine Foundation - 雲端智慧醫療領航者',
  meta: [
    { 
      name: 'keywords', 
      content: '家醫計畫, 社區醫療群, 雲端醫療, 居家照護, 健康管家, 緊急救護通報, 醫療諮詢, 生命連線, 診所加盟, 厚澤民生' 
    }
  ]
})

useSeoMeta({
  title: '家醫計畫 | 生命連線基金會 LifeLine Foundation - 雲端智慧醫療領航者',
  description: '生命連線基金會「家醫計畫」提供 24 小時緊急醫療通報、專業護理訪視與雲端健康管理，協助診所與社區醫療群實現【Do more with less】，提升照護品質並維護長輩健康尊嚴。',
  ogTitle: '家醫計畫 - 雲端智慧醫療與個性化健康管家 | 生命連線基金會',
  ogDescription: '廿年專業經驗，守護百萬生命。為診所減壓，為長輩安享晚年。',
  ogImage: homeCare1,
  twitterCard: 'summary_large_image',
  twitterTitle: '家醫計畫 | 生命連線基金會 LifeLine Foundation',
  twitterDescription: '雲端智慧醫療與個性化健康管家服務的領航者。'
})

// images
import homeCare1 from '@/assets/images/services/home-care1.png'
import homeCare3_1 from '@/assets/images/services/home-care3_1.jpg'
import homeCare3_2 from '@/assets/images/services/home-care3_2.jpg'
import homeCare3_3 from '@/assets/images/services/home-care3_3.jpg'
import homeCare3_4 from '@/assets/images/services/home-care3_4.jpg'
import homeCare3_5 from '@/assets/images/services/home-care3_5.jpg'
import homeCare3_6 from '@/assets/images/services/home-care3_6.jpg'
import homeCare3_7 from '@/assets/images/services/home-care3_7.jpg'
const homeCare1Loaded = ref(false)
const homeCare3_1Loaded = ref(false)
const homeCare3_2Loaded = ref(false)
const homeCare3_3Loaded = ref(false)
const homeCare3_4Loaded = ref(false)
const homeCare3_5Loaded = ref(false)
const homeCare3_6Loaded = ref(false)
const homeCare3_7Loaded = ref(false)

// Tab Management
const activeTab = ref('intro')
const tabs = [
  { id: 'intro', name: '計畫緣起', icon: 'sparkles' },
  { id: 'performance', name: '服務實績', icon: 'trending-up' },
  { id: 'advantage', name: '服務優勢', icon: 'shield-check' },
  { id: 'survey', name: '深入了解', icon: 'clipboard-list' }
]

// Survey State
const surveyStep = ref(1) // 1: Filter, 2: Yes-Path, 3: No-Path, 4: Final Information
const surveyRef = ref(null)

const scrollToTop = async () => {
  await nextTick()
  if (surveyRef.value) {
    const yOffset = -120 
    const y = surveyRef.value.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
const surveyData = reactive({
  joinedBefore: null, // 'yes' or 'no'
  // Step 2 & 3 & 4 data
  groupName: '',
  foundedBy: '',
  foundedByOther: '',
  motivation: [],
  adminLocation: '',
  adminLocationOther: '',
  stillOperating: null,
  notJoiningReasons: [],
  interestInFuture: null,
  desiredServices: [],
  contact: {
    phone: '',
    mobile: '',
    name: '',
    jobTitle: '',
    jobTitleOther: '',
    email: '',
    clinicName: '',
    clinicType: [],
    clinicTypeOther: '',
    address: { city: '', district: '', detail: '' },
    preferredTime: []
  }
})

const goToNext = async () => {
  if (surveyStep.value === 1) {
    if (surveyData.joinedBefore === 'yes') surveyStep.value = 2
    else if (surveyData.joinedBefore === 'no') surveyStep.value = 3
  } else if (surveyStep.value === 2 || surveyStep.value === 3) {
    surveyStep.value = 4
  }
  await scrollToTop()
}

const goToPrev = async () => {
  if (surveyStep.value === 2 || surveyStep.value === 3) {
    surveyStep.value = 1
  } else if (surveyStep.value === 4) {
    surveyStep.value = surveyData.joinedBefore === 'yes' ? 2 : 3
  }
  await scrollToTop()
}

const selectInitialPath = async (path) => {
  surveyData.joinedBefore = path
  surveyStep.value = path === 'yes' ? 2 : 3
  await scrollToTop()
}

const submitSurvey = () => {
  console.log('Survey Submitted:', surveyData)
  alert('感謝您的填寫，我們將盡速與您聯繫！')
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      title="家醫計畫" 
      subtitle="雲端智慧醫療・個性化健康管家"
    />

    <main class="container mx-auto px-4 md:px-8 -mt-10 md:-mt-20 relative z-30">
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

        <!-- Content Area -->
        <div class="flex-grow">
          <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.06)] p-8 md:p-16 border border-gray-50 min-h-[700px] relative overflow-hidden">
            
            <transition name="fade-slide" mode="out-in">
              <!-- Tab 1: Intro -->
              <div v-if="activeTab === 'intro'" key="intro" class="space-y-16 animate-fade-in">
                <div class="max-w-4xl">
                  <span class="inline-block px-4 py-1.5 bg-foundation-blue/10 text-foundation-blue rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-foundation-blue/10">Project Origin</span>
                  <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-[1.15] mb-10">
                    <span class="text-foundation-lightblue relative inline-block">
                      雲端智慧醫療
                      <!-- <svg class="absolute -bottom-4 left-0 w-full h-3 text-foundation-lightblue/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5 L 100 10 L 0 10 Z" fill="currentColor"/></svg> -->
                    </span>的領航者
                  </h2>
                  <div class="prose prose-xl max-w-none text-gray-500 leading-relaxed font-medium space-y-8">
                    <p class="first-letter:text-5xl first-letter:font-black first-letter:text-foundation-blue first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
                      生命連線基金會秉持「厚澤民生」之宗旨，以美國 Lifeline 技術為基礎，發展雲端智慧醫療照護暨個性化高端健康管家服務，獨步全台。
                    </p>
                    <div class="p-10 md:p-14 bg-gradient-to-br from-foundation-blue to-blue-800 rounded-[50px] shadow-2xl shadow-foundation-blue/30 relative overflow-hidden group">
                      <div class="relative z-10">
                        <svg class="w-12 h-12 text-foundation-lightblue mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V14H12.017C14.2262 14 16.017 15.7909 16.017 18V21H14.017ZM17.017 21V18C17.017 15.2386 14.7785 13 12.017 13H9.01703V11H12.017C15.883 11 19.017 14.134 19.017 18V21H17.017Z" opacity="0.3"/><path d="M11 11H8V14H6V11H3V9H6V6H8V9H11V11Z"/></svg>
                        <p class="text-white italic text-xl md:text-3xl leading-snug font-black">
                          廿年來，生命連線已是全台大最大的獨居老人緊急救護通報中心，服務對象已超過百萬名。
                        </p>
                        <p class="text-white/60 mt-6 text-sm font-bold tracking-widest uppercase">Over 1,000,000 Lives Protected</p>
                      </div>
                      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000"></div>
                    </div>
                    <p class="pt-6">
                      近年，生命連線基金會承接「社區醫療群」第三方服務專案，遍及北區、中區及澎湖外島，績效卓著。我們以輔助診所 <strong class="text-foundation-blue font-black underline decoration-foundation-lightblue decoration-4">【Do more with less】</strong> 自期，協助整合計畫執行，更與您共創健康價值的願景。
                    </p>
                  </div>
                </div>
                <!-- Image Placeholder -->
                <div class="rounded-[32px] overflow-hidden shadow-2xl border-8 border-white group relative">
                   <img :src="homeCare1" class="w-full h-full object-contain transition-opacity duration-300" :class="homeCare1Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare1Loaded = true" />
                </div>
              </div>

              <!-- Tab 2: Performance -->
              <div v-else-if="activeTab === 'performance'" key="performance" class="space-y-24 animate-fade-in">
                <!-- Section 1 -->
                <div class="grid grid-cols-1 gap-20 items-center">
                   <div class="space-y-8">
                     <span class="px-4 py-1.5 bg-gray-100 text-gray-400 rounded-full text-[10px] font-black tracking-widest uppercase">Territory & Network</span>
                     <h3 class="text-4xl md:text-5xl font-black text-foundation-blue leading-tight">Lifeline 照護網<br><span class="text-foundation-lightblue">社區醫療群</span></h3>
                     <p class="text-gray-500 font-medium text-lg italic leading-relaxed">我們深耕各縣市，建立緊密的緊急通報與醫療諮詢服務網。</p>
                     
                     <div class="grid grid-cols-2 gap-4">
                        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                           <p class="text- foundation-blue font-black text-3xl mb-1">20+</p>
                           <p class="text-gray-400 text-xs font-bold">合作醫院</p>
                        </div>
                        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                           <p class="text- foundation-blue text-3xl font-black mb-1">500+</p>
                           <p class="text-gray-400 text-xs font-bold">加盟診所</p>
                        </div>
                     </div>
                   </div>
                   <div class="bg-white rounded-[50px] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                     <div class="bg-foundation-blue rounded-[48px] p-12 md:p-16 text-white relative overflow-hidden h-full">
                       <div class="relative z-10">
                         <div class="w-16 h-1 bg-foundation-lightblue mb-8 rounded-full"></div>
                         <p class="text-foundation-lightblue font-black text-8xl mb-6 italic tracking-tighter drop-shadow-2xl">15+</p>
                         <h4 class="text-2xl font-bold mb-6 tracking-wide leading-snug">多年專業服務經驗，<br>深耕社區醫療體系。</h4>
                         <p class="text-white/60 leading-relaxed font-bold max-w-xs italic">累積超過 15 年專案輔導，深受全台各區執業醫師信賴。</p>
                       </div>
                       <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full"></div>
                       <div class="absolute top-10 right-10 opacity-10">
                          <svg class="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 9z"/></svg>
                       </div>
                     </div>
                   </div>
                </div>

                <!-- Section 2: Video -->
                <div class="pt-24 border-t border-gray-100">
                   <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                    <div>
                      <h3 class="text-3xl md:text-4xl font-black text-foundation-blue mb-4 tracking-tighter underline decoration-foundation-lightblue decoration-8 underline-offset-8">專業醫師一致認可</h3>
                      <p class="text-gray-400 font-medium italic text-lg mt-6">Hear the testimonials from clinical leaders across the nation.</p>
                    </div>
                  </div>
                  <div class="aspect-video bg-gray-900 rounded-md shadow-[0_50px_120px_rgba(0,0,0,0.2)] overflow-hidden flex items-center justify-center relative group cursor-pointer border-[6px] border-foundation-lightblue">
                    <video controls="" controlslist="nodownload" width="100%">
                      <!-- <source src="../images/6/R5.mp4" type="video/mp4"> -->
                      您的瀏覽器不支援此影片格式
                    </video>
                  </div>
                </div>
              </div>

              <!-- Tab 3: Advantage -->
              <div v-else-if="activeTab === 'advantage'" key="advantage" class="space-y-24 animate-fade-in">
                <div class="text-center group max-w-5xl mx-auto">
                  <span class="inline-block px-4 py-1.5 bg-foundation-lightblue/10 text-foundation-lightblue rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-foundation-lightblue/10">Value Proposition</span>
                  <h2 class="text-4xl md:text-6xl font-black text-foundation-blue mb-10 tracking-tighter leading-none">
                    Do less & <span class="text-transparent bg-clip-text bg-gradient-to-r from-foundation-lightblue to-foundation-blue italic drop-shadow-sm">Earn more.</span>
                  </h2>
                  <p class="text-gray-400 text-xl font-medium max-w-2xl mx-auto italic mb-16">協助診所行政減壓，提升醫療給付效益與患者滿意度。</p>
                  
                  <div class="relative rounded-[60px] overflow-hidden shadow-2xl h-[450px] border-8 border-white bg-gray-50">
                    <img :src="homeCare3_1" class="w-full h-full object-contain transition-all duration-500"
                    :class="homeCare3_1Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_1Loaded = true" loading="lazy" alt="Advantage Comparison">
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-12">
                  <!-- Feature Card 1 -->
                  <div class="group p-2 rounded-[56px] bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-700">
                    <div class="bg-white rounded-[50px] p-12 h-full border border-gray-100 group-hover:border-foundation-blue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-blue/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-foundation-blue group-hover:rotate-12 transition-all duration-500">
                        <svg class="w-10 h-10 text-foundation-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">中央政策落實</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">定期與合作醫院、健保局溝通，為診所精確對接醫政窗口。</p>
                      <div class="flex flex-wrap gap-4 justify-around transition-opacity">
                        <div class="h-24">
                          <img :src="homeCare3_2" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_2Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_2Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                        <div class="h-24">
                          <img :src="homeCare3_3" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_3Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_3Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Feature Card 2 -->
                  <div class="group p-2 rounded-[56px] bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-700">
                    <div class="bg-white rounded-[50px] p-12 h-full border border-gray-100 group-hover:border-foundation-lightblue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-lightblue/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-foundation-lightblue group-hover:-rotate-12 transition-all duration-500">
                        <svg class="w-10 h-10 text-foundation-lightblue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">照護品質提升</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">專業個案討論會，促進基層同儕交流，強化醫療網共生價值。</p>
                      <div class="flex flex-wrap gap-4 justify-around transition-opacity">
                        <div class="h-24">
                          <img :src="homeCare3_2" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_2Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_2Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                        <div class="h-24">
                          <img :src="homeCare3_3" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_3Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_3Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Feature Card 3 -->
                  <div class="group p-2 rounded-[56px] bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-700">
                    <div class="bg-white rounded-[50px] p-12 h-full border border-gray-100 group-hover:border-foundation-lightblue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-lightblue/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-foundation-lightblue group-hover:-rotate-12 transition-all duration-500">
                        <svg class="w-10 h-10 text-foundation-lightblue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">彰顯基層醫療</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">走入居家，細心照護</p>
                      <div class="flex flex-wrap gap-4 justify-around transition-opacity">
                        <div class="h-24">
                          <img :src="homeCare3_5" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_5Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_5Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                        <div class="h-24">
                          <img :src="homeCare3_6" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_6Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_6Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                        <div class="h-24">
                          <img :src="homeCare3_7" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_7Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_7Loaded = true" loading="lazy" alt="Advantage Comparison">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-foundation-blue rounded-[64px] p-12 relative overflow-hidden flex flex-col gap-[3rem] items-center">
                   <div class="relative z-10 grid grid-cols-[1fr_auto] items-center gap-[2rem]">
                    <div>
                     <span class="text-foundation-lightblue font-black text-sm tracking-[0.3em] uppercase">Excellence in Care</span>
                     <h3 class="text-3xl font-black text-white leading-tight">生命連線資源利用</h3>
                    </div>
                    <div class=" w-16 h-16 bg-foundation-lightblue rounded-3xl shadow-2xl animate-bounce-slow flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <p class="col-span-2 text-white/50 text-xl leading-relaxed font-medium italic">專業服務團隊 24 小時無間斷，協助診所與患者間的即時溝通，醫師照護更從容。</p>
                   </div>
                   <div class="relative z-10 w-full group">
                    <div class="w-full h-full rounded-lg overflow-hidden">
                      <img :src="homeCare3_4" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_4Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_4Loaded = true" loading="lazy" alt="Advantage Comparison">
                    </div>
                   </div>
                </div>
              </div>

              <!-- Tab 4: Survey -->
              <div v-else-if="activeTab === 'survey'" key="survey" class="space-y-12 animate-fade-in">
                <div class="max-w-3xl">
                  <h2 class="text-3xl md:text-5xl font-black text-foundation-blue mb-4">深入了解計畫內容</h2>
                  <p class="text-gray-500 font-bold leading-relaxed">為了能更快速地整理您所需的資訊，敬請填寫以下評估資料。</p>
                </div>

                <!-- Form Card -->
                <div ref="surveyRef" class="bg-gray-50 rounded-lg p-8 md:p-16 border border-gray-100 relative">
                  <!-- Progress Bar -->
                  <div class="absolute top-0 left-0 w-full h-3 bg-gray-100/50 overflow-hidden rounded-t-lg">
                    <div 
                      class="h-full bg-gradient-to-r from-foundation-lightblue to-foundation-blue transition-all duration-700 ease-out relative shadow-[0_0_20px_rgba(30,64,175,0.3)]" 
                      :style="{ width: surveyStep === 1 ? '33.33%' : (surveyStep < 4 ? '66.66%' : '100%') }"
                    >
                      <!-- Shining Effect -->
                      <div class="absolute top-0 right-0 w-20 h-full bg-white/20 blur-md -skew-x-12 translate-x-10 animate-pulse"></div>
                    </div>
                    
                    <!-- Step Markers -->
                    <div class="absolute top-0 left-0 w-full h-full flex justify-between px-[33.33%] pointer-events-none">
                      <div class="w-1 h-full bg-white/30"></div>
                      <div class="w-1 h-full bg-white/30"></div>
                    </div>
                  </div>

                  <!-- Step 1 -->
                  <div v-if="surveyStep === 1" class="transition-all">
                    <h3 class="text-2xl font-black text-foundation-blue mb-10">1. 請問貴診所是否曾加入【社區醫療群】？</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <button @click="selectInitialPath('yes')" class="p-8 rounded-3xl bg-white border-4 border-transparent hover:border-foundation-blue/20 hover:bg-foundation-blue text-left group transition-all">
                          <p class="text-2xl font-black text-foundation-blue group-hover:text-white mb-2">是</p>
                          <p class="text-gray-400 font-bold group-hover:text-white/60">曾加入過醫療群計畫</p>
                       </button>
                       <button @click="selectInitialPath('no')" class="p-8 rounded-3xl bg-white border-4 border-transparent hover:border-foundation-blue/20 hover:bg-foundation-blue text-left group transition-all">
                          <p class="text-2xl font-black text-foundation-blue group-hover:text-white mb-2">否</p>
                          <p class="text-gray-400 font-bold group-hover:text-white/60">尚未加入任何醫療群</p>
                       </button>
                    </div>
                  </div>

                  <!-- Step 2: Joined Path -->
                  <div v-else-if="surveyStep === 2" class="space-y-12 animate-fade-in">
                    <div class="space-y-10 max-w-2xl mx-auto">
                      <p class="text-xl font-black text-foundation-blue flex items-center mb-10">
                        <span class="w-10 h-10 rounded-full bg-foundation-blue text-white flex items-center justify-center text-sm mr-4 shadow-lg shadow-foundation-blue/20">2</span>
                        請提供貴醫療群的現況
                      </p>
                      
                      <div class="space-y-6">
                        <div class="space-y-3">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">貴醫療群名稱？</label>
                           <input v-model="surveyData.groupName" type="text" class="w-full bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:ring-4 focus:ring-foundation-blue/5 transition-all shadow-sm" placeholder="請輸入正式名稱">
                        </div>
                        
                        <div class="space-y-3">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">是否仍在運作(有參加)？</label>
                           <div class="flex space-x-4">
                              <button v-for="opt in [{l:'是', v:true}, {l:'否', v:false}]" :key="opt.l" @click="surveyData.stillOperating = opt.v" :class="['flex-1 py-5 rounded-2xl font-black transition-all border-2', surveyData.stillOperating === opt.v ? 'bg-foundation-blue text-white border-foundation-blue shadow-lg shadow-foundation-blue/20' : 'bg-white text-gray-500 border-gray-100 hover:border-foundation-blue/30']">{{ opt.l }}</button>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">當初是如何成立的？</label>
                           <div class="space-y-3">
                             <label v-for="opt in ['由合作醫院輔導成立', '由醫師公會輔導成立', '由第三方管理顧問公司輔導成立', '其他']" :key="opt" class="flex items-center p-5 rounded-2xl bg-white border border-gray-100 cursor-pointer hover:border-foundation-blue/30 transition-all group">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-4 group-hover:border-foundation-blue">
                                   <div v-if="surveyData.foundedBy === opt" class="w-2.5 h-2.5 bg-foundation-blue rounded-full"></div>
                                </div>
                                <input type="radio" v-model="surveyData.foundedBy" :value="opt" class="hidden">
                                <span class="text-sm font-bold text-gray-700">{{ opt }}</span>
                                <input v-if="opt === '其他' && surveyData.foundedBy === '其他'" v-model="surveyData.foundedByOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" placeholder="請註明">
                             </label>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">負責行政業務之單位在何處？</label>
                           <div class="space-y-3">
                             <label v-for="opt in ['醫療群之診所', '合作醫院', '第三方管理顧問機構', '其他']" :key="opt" class="flex items-center p-5 rounded-2xl bg-white border border-gray-100 cursor-pointer hover:border-foundation-blue/30 transition-all group">
                                <div class="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-4 group-hover:border-foundation-blue">
                                   <div v-if="surveyData.adminLocation === opt" class="w-2.5 h-2.5 bg-foundation-blue rounded-full"></div>
                                </div>
                                <input type="radio" v-model="surveyData.adminLocation" :value="opt" class="hidden">
                                <span class="text-sm font-bold text-gray-700">{{ opt }}</span>
                                <input v-if="opt === '其他' && surveyData.adminLocation === '其他'" v-model="surveyData.adminLocationOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" placeholder="請註明">
                             </label>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">參與主要動機？(可複選，至多3項)</label>
                           <div class="flex flex-wrap gap-2">
                             <label v-for="opt in ['因認同理念', '改善醫病關係', '促進民眾健康', '響應政府政策', '同儕認同', '吸引更多患者', '增加額外收入']" :key="opt" class="flex items-center px-6 py-3 rounded-full border-2 cursor-pointer transition-all font-black text-xs" :class="surveyData.motivation.includes(opt) ? 'bg-foundation-blue text-white border-foundation-blue' : 'bg-white text-gray-400 border-gray-100 hover:border-foundation-blue/30'">
                                <input type="checkbox" v-model="surveyData.motivation" :value="opt" :disabled="surveyData.motivation.length >= 3 && !surveyData.motivation.includes(opt)" class="hidden">
                                <span>{{ opt }}</span>
                             </label>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-between items-center pt-10 border-t border-gray-200 mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-black hover:text-gray-600 transition-colors flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        上一步
                      </button>
                      <button @click="goToNext" class="px-14 py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all">下一步</button>
                    </div>
                  </div>

                  <!-- Step 3: Not Joined Path -->
                  <div v-else-if="surveyStep === 3" class="space-y-12 animate-fade-in">
                    <div class="space-y-10 max-w-2xl mx-auto">
                      <p class="text-xl font-black text-foundation-blue flex items-center mb-10">
                        <span class="w-10 h-10 rounded-full bg-foundation-blue text-white flex items-center justify-center text-sm mr-4 shadow-lg shadow-foundation-blue/20">2</span>
                        為什麼尚未參加社區醫療群？
                      </p>
                      <div class="space-y-4">
                         <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">(可複選，至多3項)</label>
                         <div class="space-y-3">
                           <label v-for="opt in ['與家醫計畫理念不同', '行政文書繁瑣', '補助有限', '診所人力不足', '太花時間', '沒有人邀約', '其他']" :key="opt" class="flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all group" :class="surveyData.notJoiningReasons.includes(opt) ? 'bg-foundation-lightblue/30 border-foundation-blue' : 'bg-white border-gray-100 hover:border-foundation-blue/30'">
                              <div class="w-5 h-5 rounded-md border-2 mr-4 flex items-center justify-center transition-colors" :class="surveyData.notJoiningReasons.includes(opt) ? 'bg-foundation-blue border-foundation-blue' : 'border-gray-200 group-hover:border-foundation-blue'">
                                 <svg v-if="surveyData.notJoiningReasons.includes(opt)" class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              <input type="checkbox" v-model="surveyData.notJoiningReasons" :value="opt" :disabled="surveyData.notJoiningReasons.length >= 3 && !surveyData.notJoiningReasons.includes(opt)" class="hidden">
                              <span class="font-bold text-gray-700 text-sm">{{ opt }}</span>
                              <input v-if="opt === '其他' && surveyData.notJoiningReasons.includes('其他')" v-model="surveyData.notJoiningOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" placeholder="請詢註明原因">
                           </label>
                         </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center pt-10 border-t border-gray-200 mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-black hover:text-gray-600 flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        上一步
                      </button>
                      <button @click="goToNext" class="px-14 py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all">下一步</button>
                    </div>
                  </div>

                  <!-- Step 4: Final Information -->
                  <div v-else-if="surveyStep === 4" class="space-y-16 animate-fade-in max-w-3xl mx-auto">
                    <div class="bg-gradient-to-br from-foundation-blue to-blue-900 p-8 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                      <div class="relative z-10">
                        <p class="text-xl font-black mb-8 italic leading-snug">如果以上問題可以獲得全程協助，而您只需由給付額中抽出極小比例，您是否有意願加入家醫計畫？</p>
                        <div class="flex flex-wrap gap-4">
                          <button @click="surveyData.interestInFuture = 'yes'" :class="['px-4 py-2 rounded-xl font-black transition-all text-lg shadow-lg', surveyData.interestInFuture === 'yes' ? 'bg-white text-foundation-blue scale-105' : 'bg-white/10 hover:bg-white/20']">是，有意願</button>
                          <button @click="surveyData.interestInFuture = 'no'" :class="['px-4 py-2 rounded-xl font-black transition-all text-lg shadow-lg', surveyData.interestInFuture === 'no' ? 'bg-gray-800 text-white scale-105' : 'bg-white/10 hover:bg-white/20']">否，暫無意願</button>
                        </div>
                      </div>
                      <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                    </div>

                    <div class="space-y-10">
                       <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs flex items-center bg-foundation-blue/5 self-start px-4 py-2 rounded-full">
                         期待從第三方獲得哪些協助
                       </h4>
                       <div class="space-y-3">
                          <label v-for="svc in ['24小時緊急醫療諮詢專線', '寄發會員通知單', 'Callout服務(提醒)', '全程專案輔導與協助', '診所會員管理系統', '診所會員健康管理APP', '提供服務報價']" :key="svc" class="flex items-center p-5 rounded-3xl bg-white border-2 border-gray-50 cursor-pointer hover:shadow-xl hover:border-foundation-blue/30 transition-all group">
                             <div class="w-6 h-6 rounded-lg border-2 mr-4 flex items-center justify-center transition-colors shadow-sm" :class="surveyData.desiredServices.includes(svc) ? 'bg-foundation-blue border-foundation-blue' : 'border-gray-200 group-hover:border-foundation-blue'">
                                <svg v-if="surveyData.desiredServices.includes(svc)" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                             </div>
                             <input type="checkbox" v-model="surveyData.desiredServices" :value="svc" class="hidden">
                             <span class="text-sm font-black text-gray-700">{{ svc }}</span>
                          </label>
                       </div>
                    </div>

                    <div class="space-y-12 pt-16 border-t border-gray-100">
                       <div class="space-y-2">
                         <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs ml-1">最後，請留下您的聯繫方式</h4>
                         <p class="text-gray-400 text-xs">我們的工作人員將根據您的專業需求提供最合適的服務方案。</p>
                       </div>
                       
                       <div class="space-y-6">
                          <!-- Single Column Start -->
                          <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">診所名稱</label>
                            <input v-model="surveyData.contact.clinicName" type="text" class="w-full bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl focus:ring-4 focus:ring-foundation-blue/5 transition-all shadow-sm">
                          </div>

                          <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">聯絡人與職稱</label>
                            <div class="flex flex-col sm:flex-row gap-4">
                              <input v-model="surveyData.contact.name" placeholder="姓名" class="flex-[2] bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                              <select v-model="surveyData.contact.jobTitle" class="flex-1 bg-white rounded-2xl px-6 py-5 border border-gray-100 outline-none focus:border-foundation-blue text-gray-500 font-black text-sm shadow-sm">
                                <option value="" disabled>請選擇職稱</option>
                                <option v-for="title in ['醫師', '藥師', '護士', '其他']" :key="title" :value="title">{{ title }}</option>
                              </select>
                            </div>
                          </div>

                          <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">聯絡方式</label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <input v-model="surveyData.contact.phone" placeholder="連絡電話" class="bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                              <input v-model="surveyData.contact.mobile" placeholder="行動電話" class="bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                            </div>
                            <input v-model="surveyData.contact.email" placeholder="電子郵件 (Email)" class="w-full mt-4 bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                          </div>

                          <div class="space-y-4">
                             <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">診所科別</label>
                             <div class="flex flex-wrap gap-2">
                               <label v-for="type in ['家醫科', '內科', '外科', '兒科', '婦產科', '其他']" :key="type" class="flex items-center px-4 py-2 rounded-full border-2 cursor-pointer transition-all text-[10px] font-black" :class="surveyData.contact.clinicType.includes(type) ? 'bg-foundation-blue text-white border-foundation-blue' : 'bg-white text-gray-400 border-gray-100 hover:border-foundation-blue/30'">
                                 <input type="checkbox" v-model="surveyData.contact.clinicType" :value="type" class="hidden">
                                 <span>{{ type }}</span>
                               </label>
                             </div>
                          </div>

                          <div class="space-y-3">
                             <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">診療地址</label>
                             <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                               <select v-model="surveyData.contact.address.city" class="bg-white rounded-2xl px-6 py-5 border border-gray-100 outline-none focus:border-foundation-blue text-xs font-black shadow-sm">
                                 <option value="">選擇縣市</option>
                               </select>
                               <select v-model="surveyData.contact.address.district" class="bg-white rounded-2xl px-6 py-5 border border-gray-100 outline-none focus:border-foundation-blue text-xs font-black shadow-sm">
                                 <option value="">選擇行政區</option>
                               </select>
                               <input v-model="surveyData.contact.address.detail" placeholder="詳細地址" class="bg-white rounded-2xl px-8 py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                             </div>
                          </div>

                          <div class="space-y-3">
                            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">方便連絡時間</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                               <label v-for="time in ['上午', '午休', '下午', '晚上']" :key="time" class="flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all" :class="surveyData.contact.preferredTime.includes(time) ? 'bg-foundation-blue/5 border-foundation-blue text-foundation-blue' : 'bg-white border-gray-100 text-gray-400 hover:border-foundation-blue/20'">
                                 <input type="checkbox" v-model="surveyData.contact.preferredTime" :value="time" class="mb-2 accent-foundation-blue">
                                 <span class="text-xs font-bold">{{ time }}</span>
                               </label>
                            </div>
                          </div>
                          <!-- Single Column End -->
                       </div>
                       
                       <div class="pt-16">
                          <button @click="submitSurvey" class="w-full py-8 rounded-[36px] bg-foundation-blue text-white font-black text-2xl shadow-[0_30px_70px_rgba(30,64,175,0.3)] hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center space-x-6">
                            <span>正式提交加盟評估</span>
                            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <svg class="w-6 h-6 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                          </button>
                          <p class="text-center text-gray-400 text-xs mt-8 font-medium italic">提交後由基金會專人於 3 個工作天內主動與您聯繫。</p>
                       </div>
                    </div>

                    <div class="flex justify-center mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-bold hover:text-gray-600 flex items-center text-sm transition-colors border-b border-transparent hover:border-gray-200 pb-1">
                        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        返回上一步修改資料
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </transition>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes bounce-horizontal {
  0%, 100% { transform: translateX(-10%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: translateX(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-horizontal {
  animation: bounce-horizontal 1s infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}

.animate-bounce-slow {
  animation: float 3s ease-in-out infinite;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}

.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Custom transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Base resets & improvements */
input::placeholder {
  color: #CBD5E1;
  font-weight: 500;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.5rem center;
  background-size: 1.25rem;
}

.section-anchor {
  scroll-margin-top: 120px;
}
</style>
