<script setup>
import { ref, reactive, nextTick, computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('service_home_care.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('service_home_care.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('service_home_care.seo.title')),
  description: computed(() => t('service_home_care.seo.description')),
  ogTitle: computed(() => t('service_home_care.seo.og_title')),
  ogDescription: computed(() => t('service_home_care.seo.og_description')),
  ogImage: homeCare1,
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('service_home_care.seo.twitter_title')),
  twitterDescription: computed(() => t('service_home_care.seo.twitter_description'))
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
const tabs = computed(() => [
  { id: 'intro', name: t('service_home_care.tabs.intro'), icon: 'sparkles' },
  { id: 'performance', name: t('service_home_care.tabs.performance'), icon: 'trending-up' },
  { id: 'advantage', name: t('service_home_care.tabs.advantage'), icon: 'shield-check' },
  { id: 'survey', name: t('service_home_care.tabs.survey'), icon: 'clipboard-list' }
])

// Survey Options
const foundedByOptions = computed(() => [
  t('service_home_care.survey.founded_by_hospital'),
  t('service_home_care.survey.founded_by_association'),
  t('service_home_care.survey.founded_by_consultant'),
  t('service_home_care.survey.other')
])

const adminLocationOptions = computed(() => [
  t('service_home_care.survey.admin_clinic'),
  t('service_home_care.survey.admin_hospital'),
  t('service_home_care.survey.admin_consultant'),
  t('service_home_care.survey.other')
])

const motivationOptions = computed(() => [
  t('service_home_care.survey.motivation_belief'),
  t('service_home_care.survey.motivation_relationship'),
  t('service_home_care.survey.motivation_health'),
  t('service_home_care.survey.motivation_policy'),
  t('service_home_care.survey.motivation_peer'),
  t('service_home_care.survey.motivation_patients'),
  t('service_home_care.survey.motivation_income')
])

const notJoiningReasonsOptions = computed(() => [
  t('service_home_care.survey.reason_ideology'),
  t('service_home_care.survey.reason_paperwork'),
  t('service_home_care.survey.reason_subsidy'),
  t('service_home_care.survey.reason_manpower'),
  t('service_home_care.survey.reason_time'),
  t('service_home_care.survey.reason_invitation'),
  t('service_home_care.survey.other')
])

const desiredServicesOptions = computed(() => [
  t('service_home_care.survey.service_hotline'),
  t('service_home_care.survey.service_notification'),
  t('service_home_care.survey.service_callout'),
  t('service_home_care.survey.service_guidance'),
  t('service_home_care.survey.service_management'),
  t('service_home_care.survey.service_app'),
  t('service_home_care.survey.service_quote')
])

const jobTitleOptions = computed(() => [
  t('service_home_care.survey.job_doctor'),
  t('service_home_care.survey.job_pharmacist'),
  t('service_home_care.survey.job_nurse'),
  t('service_home_care.survey.other')
])

const clinicTypeOptions = computed(() => [
  t('service_home_care.survey.clinic_family'),
  t('service_home_care.survey.clinic_internal'),
  t('service_home_care.survey.clinic_surgery'),
  t('service_home_care.survey.clinic_pediatrics'),
  t('service_home_care.survey.clinic_obstetrics'),
  t('service_home_care.survey.other')
])

const preferredTimeOptions = computed(() => [
  t('service_home_care.survey.time_morning'),
  t('service_home_care.survey.time_noon'),
  t('service_home_care.survey.time_afternoon'),
  t('service_home_care.survey.time_evening')
])

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
      :title="t('service_home_care.page_header.title')" 
      :subtitle="t('service_home_care.page_header.subtitle')"
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
          <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.06)] p-6 lg:p-16 border border-gray-50 min-h-[700px] relative overflow-hidden">
            
            <transition name="fade-slide" mode="out-in">
              <!-- Tab 1: Intro -->
              <div v-if="activeTab === 'intro'" key="intro" class="space-y-16 animate-fade-in">
                <div class="max-w-4xl">
                  <span class="inline-block px-4 py-1.5 bg-foundation-blue/10 text-foundation-blue rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-foundation-blue/10">{{ t('service_home_care.intro.badge') }}</span>
                  <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-[1.15] mb-10">
                    <span class="text-foundation-lightblue relative inline-block">
                      {{ t('service_home_care.intro.title_line1') }}
                    </span>{{ t('service_home_care.intro.title_line2') }}
                  </h2>
                  <div class="prose prose-xl max-w-none text-gray-500 leading-relaxed font-medium space-y-8">
                    <p class="first-letter:text-5xl first-letter:font-black first-letter:text-foundation-blue first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
                      {{ t('service_home_care.intro.paragraph1') }}
                    </p>
                    <div class="p-10 md:p-14 bg-gradient-to-br from-foundation-blue to-blue-800 rounded-[50px] shadow-2xl shadow-foundation-blue/30 relative overflow-hidden group">
                      <div class="relative z-10">
                        <Icon name="rainbow" class="w-12 h-12 text-foundation-lightblue mb-2" />
                        <p class="text-white italic text-xl md:text-3xl leading-snug font-black">
                          {{ t('service_home_care.intro.highlight') }}
                        </p>
                        <p class="text-white/60 mt-6 text-sm font-bold tracking-widest uppercase">{{ t('service_home_care.intro.highlight_badge') }}</p>
                      </div>
                      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000"></div>
                    </div>
                    <p class="pt-6" v-html="t('service_home_care.intro.paragraph2')"></p>
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
                     <span class="px-4 py-1.5 bg-gray-100 text-gray-400 rounded-full text-[10px] font-black tracking-widest uppercase">{{ t('service_home_care.performance.badge') }}</span>
                     <h3 class="text-4xl md:text-5xl font-black text-foundation-blue leading-tight">{{ t('service_home_care.performance.title_line1') }}<br><span class="text-foundation-lightblue">{{ t('service_home_care.performance.title_line2') }}</span></h3>
                     <p class="text-gray-500 font-medium text-lg italic leading-relaxed">{{ t('service_home_care.performance.description') }}</p>
                     
                     <div class="grid grid-cols-2 gap-4">
                        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                           <p class="text- foundation-blue font-black text-3xl mb-1">{{ t('service_home_care.performance.stat1_value') }}</p>
                           <p class="text-gray-400 text-xs font-bold">{{ t('service_home_care.performance.stat1_label') }}</p>
                        </div>
                        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                           <p class="text- foundation-blue text-3xl font-black mb-1">{{ t('service_home_care.performance.stat2_value') }}</p>
                           <p class="text-gray-400 text-xs font-bold">{{ t('service_home_care.performance.stat2_label') }}</p>
                        </div>
                     </div>
                   </div>
                   <div class="bg-white rounded-[50px] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                     <div class="bg-foundation-blue rounded-[48px] p-12 md:p-16 text-white relative overflow-hidden h-full">
                       <div class="relative z-10">
                         <div class="w-16 h-1 bg-foundation-lightblue mb-8 rounded-full"></div>
                         <p class="text-foundation-lightblue font-black text-8xl mb-6 italic tracking-tighter drop-shadow-2xl">{{ t('service_home_care.performance.experience_value') }}</p>
                         <h4 class="text-2xl font-bold mb-6 tracking-wide leading-snug" v-html="t('service_home_care.performance.experience_title')"></h4>
                         <p class="text-white/60 leading-relaxed font-bold max-w-xs italic">{{ t('service_home_care.performance.experience_desc') }}</p>
                       </div>
                       <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full"></div>
                       <div class="absolute top-10 right-10 opacity-10">
                          <Icon name="checkOutline" class="w-40 h-40" />
                       </div>
                     </div>
                   </div>
                </div>

                <!-- Section 2: Video -->
                <div class="pt-24 border-t border-gray-100">
                   <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                    <div>
                      <h3 class="text-3xl md:text-4xl font-black text-foundation-blue mb-4 tracking-tighter underline decoration-foundation-lightblue decoration-8 underline-offset-8">{{ t('service_home_care.performance.video_title') }}</h3>
                      <p class="text-gray-400 font-medium italic text-lg mt-6">{{ t('service_home_care.performance.video_subtitle') }}</p>
                    </div>
                  </div>
                  <div class="aspect-video bg-gray-900 rounded-md shadow-[0_50px_120px_rgba(0,0,0,0.2)] overflow-hidden flex items-center justify-center relative group cursor-pointer border-[6px] border-foundation-lightblue">
                    <video controls="" controlslist="nodownload" width="100%">
                      <!-- <source src="../images/6/R5.mp4" type="video/mp4"> -->
                      {{ t('service_home_care.performance.video_placeholder') }}
                    </video>
                  </div>
                </div>
              </div>

              <!-- Tab 3: Advantage -->
              <div v-else-if="activeTab === 'advantage'" key="advantage" class="space-y-12 lg:space-y-24 animate-fade-in">
                <div class="text-center group max-w-5xl mx-auto">
                  <span class="inline-block px-4 py-1.5 bg-foundation-lightblue/10 text-foundation-lightblue rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-foundation-lightblue/10">{{ t('service_home_care.advantage.badge') }}</span>
                  <h2 class="text-4xl md:text-6xl font-black text-foundation-blue mb-10 tracking-tighter leading-none">
                    {{ t('service_home_care.advantage.title_part1') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-foundation-lightblue to-foundation-blue drop-shadow-sm">{{ t('service_home_care.advantage.title_part2') }}</span>
                  </h2>
                  <p class="text-gray-400 text-xl font-medium max-w-2xl mx-auto italic mb-16">{{ t('service_home_care.advantage.subtitle') }}</p>
                  
                  <div class="relative rounded-[60px] overflow-hidden shadow-2xl aspect-[1177/987] border-8 border-white bg-gray-50">
                    <img :src="homeCare3_1" class="w-full h-full object-contain transition-all duration-500"
                    :class="homeCare3_1Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_1Loaded = true" loading="lazy" alt="Advantage Comparison">
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-12">
                  <!-- Feature Card 1 -->
                  <div class="group p-2 rounded-[56px] bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-700">
                    <div class="bg-white rounded-[50px] p-6 lg:p-12 h-full border border-gray-100 group-hover:border-foundation-blue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-blue/5 rounded-3xl flex items-center justify-center mb-4 md:mb-10 group-hover:bg-foundation-blue transition-all duration-500">
                        <Icon name="building" class="w-10 h-10 text-foundation-blue group-hover:text-white" />
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">{{ t('service_home_care.advantage.feature1_title') }}</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">{{ t('service_home_care.advantage.feature1_desc') }}</p>
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
                    <div class="bg-white rounded-[50px] p-6 lg:p-12 h-full border border-gray-100 group-hover:border-foundation-lightblue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-lightblue/5 rounded-3xl flex items-center justify-center mb-4 md:mb-10 group-hover:bg-foundation-lightblue transition-all duration-500">
                        <Icon name="verifiedUser" class="w-10 h-10 text-foundation-lightblue group-hover:text-white" />
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">{{ t('service_home_care.advantage.feature2_title') }}</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">{{ t('service_home_care.advantage.feature2_desc') }}</p>
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
                    <div class="bg-white rounded-[50px] p-6 lg:p-12 h-full border border-gray-100 group-hover:border-foundation-lightblue/10 transition-colors">
                      <div class="w-20 h-20 bg-foundation-lightblue/5 rounded-3xl flex items-center justify-center mb-4 md:mb-10 group-hover:bg-foundation-lightblue transition-all duration-500">
                        <Icon name="verifiedUser" class="w-10 h-10 text-foundation-lightblue group-hover:text-white" />
                      </div>
                      <h4 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6">{{ t('service_home_care.advantage.feature3_title') }}</h4>
                      <p class="text-gray-500 leading-relaxed font-bold mb-10 text-lg italic tracking-tight">{{ t('service_home_care.advantage.feature3_desc') }}</p>
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

                <div class="bg-foundation-blue rounded-[64px] p-8 lg:p-12 relative overflow-hidden flex flex-col gap-[2rem] items-center">
                   <div class="relative z-10 grid grid-cols-[1fr_auto] items-center gap-[2rem]">
                    <div>
                     <span class="text-foundation-lightblue font-black text-sm tracking-[0.3em] uppercase">{{ t('service_home_care.advantage.excellence_badge') }}</span>
                     <h3 class="text-3xl font-black text-white leading-tight">{{ t('service_home_care.advantage.excellence_title') }}</h3>
                    </div>
                    <div class=" w-16 h-16 bg-foundation-lightblue rounded-3xl shadow-2xl animate-bounce-slow flex items-center justify-center">
                      <Icon name="tel" class="w-8 h-8 text-white" />
                    </div>
                    <p class="col-span-2 text-white/50 text-xl leading-relaxed font-medium italic">{{ t('service_home_care.advantage.excellence_desc') }}</p>
                   </div>
                   <div class="relative z-10 w-full group">
                    <div class="w-full h-full rounded-lg overflow-hidden mb-4">
                      <img :src="homeCare3_4" class="w-full h-full object-contain transition-all duration-500"
                          :class="homeCare3_4Loaded ? 'opacity-100' : 'opacity-0'" @load="homeCare3_4Loaded = true" loading="lazy" alt="Advantage Comparison">
                    </div>
                   </div>
                </div>
              </div>

              <!-- Tab 4: Survey -->
              <div v-else-if="activeTab === 'survey'" key="survey" class="space-y-12 animate-fade-in">
                <div class="max-w-3xl">
                  <h2 class="text-3xl md:text-5xl font-black text-foundation-blue mb-4">{{ t('service_home_care.survey.title') }}</h2>
                  <p class="text-gray-500 font-bold leading-relaxed">{{ t('service_home_care.survey.subtitle') }}</p>
                </div>

                <!-- Form Card -->
                <div ref="surveyRef" class="bg-gray-50 rounded-lg py-8 px-6 md:p-16 border border-gray-100 relative">
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
                    <h3 class="text-xl font-black text-foundation-blue mb-10">{{ t('service_home_care.survey.step1_question') }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <button @click="selectInitialPath('yes')" class="p-4 lg:p-8 rounded-3xl bg-white border-4 border-transparent hover:border-foundation-blue/20 hover:bg-foundation-blue text-left group transition-all">
                          <p class="text-xl font-black text-foundation-blue group-hover:text-white mb-2">{{ t('service_home_care.survey.step1_yes') }}</p>
                          <p class="text-gray-400 font-bold group-hover:text-white/60">{{ t('service_home_care.survey.step1_yes_desc') }}</p>
                       </button>
                       <button @click="selectInitialPath('no')" class="p-4 lg:p-8 rounded-3xl bg-white border-4 border-transparent hover:border-foundation-blue/20 hover:bg-foundation-blue text-left group transition-all">
                          <p class="text-xl font-black text-foundation-blue group-hover:text-white mb-2">{{ t('service_home_care.survey.step1_no') }}</p>
                          <p class="text-gray-400 font-bold group-hover:text-white/60">{{ t('service_home_care.survey.step1_no_desc') }}</p>
                       </button>
                    </div>
                  </div>

                  <!-- Step 2: Joined Path -->
                  <div v-else-if="surveyStep === 2" class="space-y-12 animate-fade-in">
                    <div class="space-y-5 max-w-2xl mx-auto">
                      <p class="text-xl font-black text-foundation-blue flex items-center mb-10">
                        <span class="shrink-0 w-10 h-10 rounded-full bg-foundation-blue text-white flex items-center justify-center text-sm mr-4 shadow-lg shadow-foundation-blue/20">2</span>
                        {{ t('service_home_care.survey.step2_title') }}
                      </p>
                      
                      <div class="space-y-6">
                        <div class="space-y-3">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.group_name') }}</label>
                           <input v-model="surveyData.groupName" type="text" class="w-full bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:ring-4 focus:ring-foundation-blue/5 transition-all shadow-sm" :placeholder="t('service_home_care.survey.group_name_placeholder')">
                        </div>
                        
                        <div class="space-y-3">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.still_operating') }}</label>
                           <div class="flex space-x-4">
                              <button v-for="opt in [{l: t('service_home_care.survey.yes'), v:true}, {l: t('service_home_care.survey.no'), v:false}]" :key="opt.l" @click="surveyData.stillOperating = opt.v" :class="['flex-1 py-3 lg:py-5 rounded-2xl font-black transition-all border-2', surveyData.stillOperating === opt.v ? 'bg-foundation-blue text-white border-foundation-blue shadow-lg shadow-foundation-blue/20' : 'bg-white text-gray-500 border-gray-100 hover:border-foundation-blue/30']">{{ opt.l }}</button>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.founded_how') }}</label>
                           <div class="space-y-3">
                             <label v-for="opt in foundedByOptions" :key="opt" class="flex flex-wrap items-center p-3 lg:p-5 rounded-2xl bg-white border border-gray-100 cursor-pointer hover:border-foundation-blue/30 transition-all group">
                                <div class="shrink-0 w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-4 group-hover:border-foundation-blue">
                                   <div v-if="surveyData.foundedBy === opt" class="w-2.5 h-2.5 bg-foundation-blue rounded-full"></div>
                                </div>
                                <input type="radio" v-model="surveyData.foundedBy" :value="opt" class="hidden">
                                <span class="shrink-0 text-sm font-bold text-gray-700">{{ opt }}</span>
                                <input v-if="opt === t('service_home_care.survey.other') && surveyData.foundedBy === t('service_home_care.survey.other')" v-model="surveyData.foundedByOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" :placeholder="t('service_home_care.survey.please_specify')">
                             </label>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.admin_location_label') }}</label>
                           <div class="space-y-3">
                             <label v-for="opt in adminLocationOptions" :key="opt" class="flex flex-wrap items-center p-3 lg:p-5 rounded-2xl bg-white border border-gray-100 cursor-pointer hover:border-foundation-blue/30 transition-all group">
                                <div class="shrink-0 w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center mr-4 group-hover:border-foundation-blue">
                                   <div v-if="surveyData.adminLocation === opt" class="w-2.5 h-2.5 bg-foundation-blue rounded-full"></div>
                                </div>
                                <input type="radio" v-model="surveyData.adminLocation" :value="opt" class="hidden">
                                <span class="shrink-0 text-sm font-bold text-gray-700">{{ opt }}</span>
                                <input v-if="opt === t('service_home_care.survey.other') && surveyData.adminLocation === t('service_home_care.survey.other')" v-model="surveyData.adminLocationOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" :placeholder="t('service_home_care.survey.please_specify')">
                             </label>
                           </div>
                        </div>

                        <div class="space-y-4">
                           <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.motivation_label') }}</label>
                           <div class="flex flex-wrap gap-2">
                             <label v-for="opt in motivationOptions" :key="opt" class="flex items-center px-6 py-3 rounded-full border-2 cursor-pointer transition-all font-black text-xs" :class="surveyData.motivation.includes(opt) ? 'bg-foundation-blue text-white border-foundation-blue' : 'bg-white text-gray-400 border-gray-100 hover:border-foundation-blue/30'">
                                <input type="checkbox" v-model="surveyData.motivation" :value="opt" :disabled="surveyData.motivation.length >= 3 && !surveyData.motivation.includes(opt)" class="hidden">
                                <span>{{ opt }}</span>
                             </label>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex justify-between items-center pt-10 border-t border-gray-200 mt-6 lg:mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-black hover:text-gray-600 transition-colors flex items-center">
                        <Icon name="arrowForward" class="w-4 h-4 mr-2 rotate-180" />
                        {{ t('service_home_care.survey.prev_step') }}
                      </button>
                      <button @click="goToNext" class="px-6 lg:px-14 py-3 lg:py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all">{{ t('service_home_care.survey.next_step') }}</button>
                    </div>
                  </div>

                  <!-- Step 3: Not Joined Path -->
                  <div v-else-if="surveyStep === 3" class="space-y-12 animate-fade-in">
                    <div class="space-y-10 max-w-2xl mx-auto">
                      <p class="text-xl font-black text-foundation-blue flex items-center mb-10">
                        <span class="shrink-0 w-10 h-10 rounded-full bg-foundation-blue text-white flex items-center justify-center text-sm mr-4 shadow-lg shadow-foundation-blue/20">2</span>
                        {{ t('service_home_care.survey.step3_title') }}
                      </p>
                      <div class="space-y-4">
                         <label class="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.step3_subtitle') }}</label>
                         <div class="space-y-3">
                           <label v-for="opt in notJoiningReasonsOptions" :key="opt" class="flex items-center flex-wrap p-3 lg:p-5 rounded-2xl border-2 cursor-pointer transition-all group" :class="surveyData.notJoiningReasons.includes(opt) ? 'bg-foundation-lightblue/30 border-foundation-blue' : 'bg-white border-gray-100 hover:border-foundation-blue/30'">
                              <div class="w-5 h-5 rounded-md border-2 mr-4 flex items-center justify-center transition-colors" :class="surveyData.notJoiningReasons.includes(opt) ? 'bg-foundation-blue border-foundation-blue' : 'border-gray-200 group-hover:border-foundation-blue'">
                                 <Icon v-if="surveyData.notJoiningReasons.includes(opt)" name="check" class="w-3.5 h-3.5 text-white" />
                              </div>
                              <input type="checkbox" v-model="surveyData.notJoiningReasons" :value="opt" :disabled="surveyData.notJoiningReasons.length >= 3 && !surveyData.notJoiningReasons.includes(opt)" class="hidden">
                              <span class="font-bold text-gray-700 text-sm">{{ opt }}</span>
                              <input v-if="opt === t('service_home_care.survey.other') && surveyData.notJoiningReasons.includes(t('service_home_care.survey.other'))" v-model="surveyData.notJoiningOther" type="text" class="ml-4 border-b-2 border-foundation-blue outline-none text-sm w-full max-w-[200px] bg-transparent" :placeholder="t('service_home_care.survey.please_specify_reason')">
                           </label>
                         </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center pt-10 border-t border-gray-200 mt-6 lg:mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-black hover:text-gray-600 flex items-center">
                        <Icon name="arrowForward" class="w-4 h-4 mr-2 rotate-180" />
                        {{ t('service_home_care.survey.prev_step') }}
                      </button>
                      <button @click="goToNext" class="px-6 lg:px-14 py-3 lg:py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all">{{ t('service_home_care.survey.next_step') }}</button>
                    </div>
                  </div>

                  <!-- Step 4: Final Information -->
                  <div v-else-if="surveyStep === 4" class="space-y-12 animate-fade-in max-w-3xl mx-auto">
                    <div class="bg-gradient-to-br from-foundation-blue to-blue-900 p-6 lg:p-8 rounded-xl text-white relative overflow-hidden shadow-2xl">
                      <div class="relative z-10">
                        <p class="text-xl font-black mb-8 italic leading-snug">{{ t('service_home_care.survey.step4_question') }}</p>
                        <div class="flex flex-wrap gap-4">
                          <button @click="surveyData.interestInFuture = 'yes'" :class="['px-3 lg:px-4 py-2 lg:py-3 rounded-xl font-black transition-all text-lg shadow-lg', surveyData.interestInFuture === 'yes' ? 'bg-white text-foundation-blue scale-105' : 'bg-white/10 hover:bg-white/20']">{{ t('service_home_care.survey.step4_yes') }}</button>
                          <button @click="surveyData.interestInFuture = 'no'" :class="['px-3 lg:px-4 py-2 lg:py-3 rounded-xl font-black transition-all text-lg shadow-lg', surveyData.interestInFuture === 'no' ? 'bg-gray-800 text-white scale-105' : 'bg-white/10 hover:bg-white/20']">{{ t('service_home_care.survey.step4_no') }}</button>
                        </div>
                      </div>
                      <div class="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                    </div>

                    <div class="space-y-5">
                       <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs flex items-center bg-foundation-blue/5 self-start px-4 py-2 rounded-full">
                         {{ t('service_home_care.survey.desired_services_label') }}
                       </h4>
                       <div class="space-y-3">
                          <label v-for="svc in desiredServicesOptions" :key="svc" class="flex items-center flex-wrap p-3 lg:p-5 rounded-3xl bg-white border-2 border-gray-50 cursor-pointer hover:shadow-xl hover:border-foundation-blue/30 transition-all group">
                             <div class="shrink-0 w-6 h-6 rounded-lg border-2 mr-4 flex items-center justify-center transition-colors shadow-sm" :class="surveyData.desiredServices.includes(svc) ? 'bg-foundation-blue border-foundation-blue' : 'border-gray-200 group-hover:border-foundation-blue'">
                                <Icon v-if="surveyData.desiredServices.includes(svc)" name="check" class="w-4 h-4 text-white" />
                             </div>
                             <input type="checkbox" v-model="surveyData.desiredServices" :value="svc" class="hidden">
                             <span class="text-sm font-black text-gray-700">{{ svc }}</span>
                          </label>
                       </div>
                    </div>

                    <div class="space-y-5 pt-8 border-t border-gray-100">
                       <div class="space-y-2">
                         <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs ml-1">{{ t('service_home_care.survey.contact_title') }}</h4>
                         <p class="text-gray-400 text-xs">{{ t('service_home_care.survey.contact_subtitle') }}</p>
                       </div>
                       
                       <div class="space-y-6">
                          <!-- Single Column Start -->
                          <div class="space-y-3">
                            <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.clinic_name') }}</label>
                            <input v-model="surveyData.contact.clinicName" type="text" class="w-full bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl focus:ring-4 focus:ring-foundation-blue/5 transition-all shadow-sm">
                          </div>

                          <div class="space-y-3">
                            <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.contact_person') }}</label>
                            <div class="flex flex-col sm:flex-row gap-4">
                              <input v-model="surveyData.contact.name" :placeholder="t('service_home_care.survey.name_placeholder')" class="flex-[2] bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                              <select v-model="surveyData.contact.jobTitle" class="flex-1 bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue text-gray-500 font-black text-sm shadow-sm">
                                <option value="" disabled>{{ t('service_home_care.survey.select_job_title') }}</option>
                                <option v-for="title in jobTitleOptions" :key="title" :value="title">{{ title }}</option>
                              </select>
                            </div>
                          </div>

                          <div class="space-y-3">
                            <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.contact_method') }}</label>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <input v-model="surveyData.contact.phone" :placeholder="t('service_home_care.survey.phone_placeholder')" class="bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                              <input v-model="surveyData.contact.mobile" :placeholder="t('service_home_care.survey.mobile_placeholder')" class="bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                            </div>
                            <input v-model="surveyData.contact.email" :placeholder="t('service_home_care.survey.email_placeholder')" class="w-full mt-4 bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                          </div>

                          <div class="space-y-4">
                             <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.clinic_type_label') }}</label>
                             <div class="flex flex-wrap gap-2">
                               <label v-for="type in clinicTypeOptions" :key="type" class="flex items-center px-4 py-2 rounded-full border-2 cursor-pointer transition-all text-[12px] font-black" :class="surveyData.contact.clinicType.includes(type) ? 'bg-foundation-blue text-white border-foundation-blue' : 'bg-white text-gray-400 border-gray-100 hover:border-foundation-blue/30'">
                                 <input type="checkbox" v-model="surveyData.contact.clinicType" :value="type" class="hidden">
                                 <span>{{ type }}</span>
                               </label>
                             </div>
                          </div>

                          <div class="space-y-3">
                             <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.clinic_address') }}</label>
                             <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                               <select v-model="surveyData.contact.address.city" class="bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue text-xs font-black shadow-sm">
                                 <option value="">{{ t('service_home_care.survey.select_city') }}</option>
                               </select>
                               <select v-model="surveyData.contact.address.district" class="bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue text-xs font-black shadow-sm">
                                 <option value="">{{ t('service_home_care.survey.select_district') }}</option>
                               </select>
                               <input v-model="surveyData.contact.address.detail" :placeholder="t('service_home_care.survey.address_detail')" class="bg-white rounded-2xl text-sm lg:text-base px-4 lg:px-8 py-3 lg:py-5 border border-gray-100 outline-none focus:border-foundation-blue focus:shadow-xl transition-all shadow-sm">
                             </div>
                          </div>

                          <div class="space-y-3">
                            <label class="text-[12px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ t('service_home_care.survey.preferred_time') }}</label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                               <label v-for="time in preferredTimeOptions" :key="time" class="flex flex-col items-center justify-center p-3 lg:p-4 rounded-2xl border-2 cursor-pointer transition-all" :class="surveyData.contact.preferredTime.includes(time) ? 'bg-foundation-blue/5 border-foundation-blue text-foundation-blue' : 'bg-white border-gray-100 text-gray-400 hover:border-foundation-blue/20'">
                                 <input type="checkbox" v-model="surveyData.contact.preferredTime" :value="time" class="mb-2 accent-foundation-blue">
                                 <span class="text-xs font-bold">{{ time }}</span>
                               </label>
                            </div>
                          </div>
                          <!-- Single Column End -->
                       </div>
                       
                       <div class="pt-16">
                          <button @click="submitSurvey" class="w-full py-4 lg:py-8 rounded-[36px] bg-foundation-blue text-white font-black lg:text-2xl shadow-2xl hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center space-x-6">
                            <span >{{ t('service_home_care.survey.submit_button') }}</span>
                            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <Icon name="arrowForward" class="w-6 h-6 animate-bounce-horizontal" />
                            </div>
                          </button>
                          <p class="text-center text-gray-400 text-xs mt-8 font-medium italic">{{ t('service_home_care.survey.submit_note') }}</p>
                       </div>
                    </div>

                    <div class="flex justify-center mt-12">
                      <button @click="goToPrev" class="text-gray-400 font-bold hover:text-gray-600 flex items-center text-sm transition-colors border-b border-transparent hover:border-gray-200 pb-1">
                        <Icon name="arrowForward" class="w-5 h-5 mr-3 rotate-180" />
                        {{ t('service_home_care.survey.back_to_modify') }}
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
