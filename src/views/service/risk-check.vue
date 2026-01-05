<script setup>
import { ref, computed, nextTick } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('service_risk_check.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('service_risk_check.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('service_risk_check.seo.title')),
  description: computed(() => t('service_risk_check.seo.description')),
  ogTitle: computed(() => t('service_risk_check.seo.og_title')),
  ogDescription: computed(() => t('service_risk_check.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('service_risk_check.seo.twitter_title')),
  twitterDescription: computed(() => t('service_risk_check.seo.twitter_description'))
})

const questions = computed(() => [
  t('service_risk_check.questions.q1'),
  t('service_risk_check.questions.q2'),
  t('service_risk_check.questions.q3'),
  t('service_risk_check.questions.q4'),
  t('service_risk_check.questions.q5'),
  t('service_risk_check.questions.q6'),
  t('service_risk_check.questions.q7'),
  t('service_risk_check.questions.q8'),
  t('service_risk_check.questions.q9')
])

const answers = ref(new Array(9).fill('no'))
const showResult = ref(false)
const resultRef = ref(null)

const yesCount = computed(() => answers.value.filter(a => a === 'yes').length)
const riskPercentage = computed(() => Math.round((yesCount.value / 9) * 100))

const riskMessage = computed(() => {
  const count = yesCount.value
  if (count <= 2) {
    return {
      title: t('service_risk_check.result.low_risk_title'),
      content: t('service_risk_check.result.low_risk_content'),
      followUp: [
        t('service_risk_check.result.low_risk_q1'),
        t('service_risk_check.result.low_risk_q2')
      ],
      color: 'text-green-600'
    }
  } else if (count === 3 || count === 4) {
    return {
      title: t('service_risk_check.result.medium_risk_title'),
      content: t('service_risk_check.result.medium_risk_content'),
      color: 'text-foundation-orange'
    }
  } else {
    return {
      title: t('service_risk_check.result.high_risk_title'),
      content: t('service_risk_check.result.high_risk_content'),
      color: 'text-red-600'
    }
  }
})

const clearForm = () => {
  answers.value = new Array(9).fill('no')
  showResult.value = false
}

const submitForm = async () => {
  showResult.value = true
  await nextTick()
  if (resultRef.value) {
    const yOffset = -100 // 為上方導覽列留出空間
    const y = resultRef.value.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      :title="t('service_risk_check.page_header.title')" 
      :subtitle="t('service_risk_check.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-30">
      <div class="max-w-5xl mx-auto space-y-12">
        
        <!-- Intro Card -->
        <section class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 overflow-hidden relative">
          <div class="relative z-10">
            <h2 class="text-3xl font-black text-foundation-blue mb-8 italic flex items-center">
              <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
              {{ t('service_risk_check.intro.title') }}
            </h2>
            <div class="space-y-6 text-gray-500 text-lg md:text-xl font-medium leading-relaxed italic">
              <p>{{ t('service_risk_check.intro.paragraph1') }}</p>
              <p>{{ t('service_risk_check.intro.paragraph2') }}</p>
            </div>
          </div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-foundation-blue/5 rounded-full blur-3xl"></div>
        </section>

        <!-- Survey Table Section -->
        <section class="bg-white rounded-[40px] shadow-premium border border-gray-100 overflow-hidden">
          <div class="p-8 md:p-12 border-b border-gray-50">
             <h3 class="text-2xl font-black text-foundation-blue italic">{{ t('service_risk_check.survey.instruction') }}</h3>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-foundation-blue text-xs md:text-sm">
                  <th class="px-4 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest">{{ t('service_risk_check.survey.header_item') }}</th>
                  <th class="px-2 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest text-center w-20 md:w-32">{{ t('service_risk_check.survey.header_yes') }}</th>
                  <th class="px-2 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest text-center w-20 md:w-32">{{ t('service_risk_check.survey.header_no') }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                <tr v-for="(q, idx) in questions" :key="idx" class="group hover:bg-foundation-blue/10 transition-colors">
                  <td class="px-4 md:px-8 py-6 md:py-10 transition-colors">
                    <div class="flex items-center gap-3 md:gap-6">
                       <span class="text-foundation-lightblue font-black text-base md:text-xl italic group-hover:scale-110 transition-transform shrink-0">{{ String(idx + 1).padStart(2, '0') }}</span>
                       <span class="text-gray-600 font-bold text-sm md:text-lg leading-relaxed group-hover:text-foundation-blue transition-colors">{{ q }}</span>
                    </div>
                  </td>
                  <td class="px-2 md:px-8 py-6 md:py-10 text-center ">
                    <label class="relative inline-flex items-center cursor-pointer group/radio">
                      <input 
                        type="radio" 
                        :name="'q' + idx" 
                        value="yes" 
                        v-model="answers[idx]" 
                        class="peer sr-only"
                      >
                      <div class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-200 bg-white peer-checked:border-foundation-blue 
                        shadow-sm peer-checked:shadow-foundation-blue/30 transition-all duration-300 relative
                        after:content-[''] after:absolute after:inset-1.5 md:after:inset-2 after:bg-foundation-blue after:rounded-full after:scale-0 
                        peer-checked:after:scale-100 after:transition-transform after:duration-300
                        group-hover/radio:border-foundation-lightblue">
                      </div>
                    </label>
                  </td>
                  <td class="px-2 md:px-8 py-6 md:py-10 text-center ">
                    <label class="relative inline-flex items-center cursor-pointer group/radio">
                      <input 
                        type="radio" 
                        :name="'q' + idx" 
                        value="no" 
                        v-model="answers[idx]" 
                        class="peer sr-only"
                      >
                      <div class="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-200 bg-white peer-checked:border-foundation-blue 
                        shadow-sm peer-checked:shadow-foundation-blue/30 transition-all duration-300 relative
                        after:content-[''] after:absolute after:inset-1.5 md:after:inset-2 after:bg-foundation-blue after:rounded-full after:scale-0 
                        peer-checked:after:scale-100 after:transition-transform after:duration-300
                        group-hover/radio:border-foundation-lightblue">
                      </div>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-8 md:p-12 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
             <button 
               @click="clearForm"
               class="w-full md:w-auto px-12 py-4 md:py-5 bg-gray-100 text-gray-500 rounded-3xl font-black text-base md:text-lg hover:bg-gray-200 transition-all active:scale-95"
             >
                {{ t('service_risk_check.survey.clear_button') }}
             </button>
             <button 
               @click="submitForm"
               class="w-full md:w-auto px-20 py-4 md:py-5 bg-foundation-blue text-white rounded-3xl font-black text-base md:text-lg shadow-xl shadow-foundation-blue/20 hover:scale-105 transition-all active:scale-95"
             >
                {{ t('service_risk_check.survey.submit_button') }}
             </button>
          </div>
        </section>

        <!-- Result Section -->
        <transition name="fade-slide">
          <section ref="resultRef" v-if="showResult" class="bg-white rounded-[40px] p-10 md:p-20 shadow-premium border border-gray-100 overflow-hidden relative">
             <div class="max-w-3xl mx-auto space-y-16 relative z-10">
                <div class="text-center space-y-4">
                   <h2 class="text-3xl font-black text-foundation-blue italic">{{ t('service_risk_check.result.title') }}</h2>
                   <p class="text-gray-400 font-medium">{{ t('service_risk_check.result.subtitle') }}</p>
                </div>

                <!-- Percentage Box -->
                <div class="text-center space-y-2 md:space-y-4">
                   <p class="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">{{ t('service_risk_check.result.risk_index') }}</p>
                   <div class="flex items-baseline justify-center space-x-2">
                      <span class="text-7xl md:text-9xl font-black italic tracking-tighter" :class="riskMessage.color">{{ riskPercentage }}</span>
                      <span class="text-2xl md:text-3xl font-black text-gray-300">%</span>
                   </div>
                </div>

                <!-- Gradient Scale -->
                <div class="space-y-4">
                   <div class="flex justify-between text-[10px] font-black uppercase text-gray-300 tracking-widest">
                      <span>{{ t('service_risk_check.result.low_risk_label') }}</span>
                      <span>{{ t('service_risk_check.result.high_risk_label') }}</span>
                   </div>
                   <div class="h-6 w-full bg-gray-100 rounded-full relative overflow-hidden">
                      <!-- Colors Background -->
                      <div class="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-400 via-orange-500 to-red-600"></div>
                      <!-- Overlay Cover -->
                      <div 
                        class="absolute inset-0 bg-gray-100 transition-all duration-1000 ease-out" 
                        :style="{ transform: `translateX(${riskPercentage}%)` }"
                      ></div>
                   </div>
                   <div class="grid grid-cols-4 text-center text-[10px] font-bold text-gray-400 pt-2">
                      <span>0% - 25%</span>
                      <span>25% - 50%</span>
                      <span>50% - 75%</span>
                      <span>75% - 100%</span>
                   </div>
                </div>

                <!-- Advice Content -->
                <div class="pt-10 border-t border-gray-50 text-center space-y-6 md:space-y-8">
                   <h4 class="text-3xl md:text-5xl font-black italic tracking-tighter" :class="riskMessage.color">
                      {{ riskMessage.title }}
                   </h4>
                   <p class="text-gray-500 text-base md:text-xl font-medium leading-relaxed md:leading-[2] italic max-w-2xl mx-auto">
                      {{ riskMessage.content }}
                   </p>
                   
                   <div v-if="riskMessage.followUp" class="space-y-4 bg-gray-50 p-10 rounded-[40px] text-left max-w-2xl mx-auto border border-gray-100">
                      <div v-for="(q, i) in riskMessage.followUp" :key="i" class="flex gap-4">
                         <span class="w-8 h-8 rounded-xl bg-foundation-blue/10 text-foundation-blue flex items-center justify-center font-black shrink-0">{{ i + 1 }}</span>
                         <p class="text-gray-600 font-bold leading-relaxed">{{ q }}</p>
                      </div>
                   </div>

                   <div class="pt-10">
                      <RouterLink to="/service-emergency" class="inline-flex items-center space-x-4 px-12 py-5 bg-foundation-blue text-white rounded-[24px] font-black shadow-2xl hover:scale-105 transition-all">
                         <span>{{ t('service_risk_check.result.cta_button') }}</span>
                         <Icon name="arrowForward" class="w-6 h-6" />
                      </RouterLink>
                   </div>
                </div>
             </div>

             <!-- Background Decoration -->
             <div class="absolute -top-40 -left-40 w-96 h-96 bg-foundation-blue/5 rounded-full blur-[100px]"></div>
             <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[100px]" :class="riskMessage.color.replace('text', 'bg') + '/5'"></div>
          </section>
        </transition>

      </div>
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
