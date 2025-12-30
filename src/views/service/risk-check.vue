<script setup>
import { ref, computed, nextTick } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '獨居能力檢測 | 生命連線基金會 LifeLine Foundation - 規劃未來守護獨立生活',
  meta: [
    { 
      name: 'keywords', 
      content: '獨居能力檢測, 跌倒風險評估, 居家安全測驗, 老年生活規劃, 緊急救援服務諮詢, 生命連線, 健康篩檢, 獨立生活守護' 
    }
  ]
})

useSeoMeta({
  title: '獨居能力檢測 | 生命連線基金會 LifeLine Foundation - 規劃未來守護獨立生活',
  description: '您或家中的長輩適合獨居嗎？生命連線「獨居能力檢測」提供專業的跌倒風險評估與健康狀況篩檢。透過簡單的問測，幫助您提早為居家安全作好規劃，守護長者的生活尊嚴與獨立性。',
  ogTitle: '獨居能力檢測 - 為未來生活作好計畫，健康主動出擊 | 生命連線基金會',
  ogDescription: '規劃未來也許困難，但沒有計畫會讓人付出代價。立即填寫檢測，了解您或長輩的居家風險指數。',
  twitterCard: 'summary_large_image',
  twitterTitle: '獨居能力檢測 | 生命連線基金會 LifeLine Foundation',
  twitterDescription: '守護獨立生活，從專業檢測開始。'
})

const questions = [
  '每天有數小時是獨自行動 (白天或晚上)？',
  '曾在家中跌倒或有恐懼跌倒的感覺？',
  '最近這一年中，曾經住院或曾前往急診室診療？',
  '患有一種以上慢性疾病 (心臟病、中風、高血壓、糖尿病、慢性肺栓塞、骨質疏鬆症、關節炎、氣喘等)？',
  '使用拐杖、助行器、輪椅、階梯攀爬器或其他輔助工具，來協助行走？',
  '每天服用數種藥物？',
  '在日常生活中 (如：洗澡、上廁所、穿衣、用餐等)，需要借助輔助工具？',
  '醫療緊急救援服務是否讓我或我的家人更安心？',
  '繼續維持獨立的生活對您來說很重要？'
]

const answers = ref(new Array(questions.length).fill('no'))
const showResult = ref(false)
const resultRef = ref(null)

const yesCount = computed(() => answers.value.filter(a => a === 'yes').length)
const riskPercentage = computed(() => Math.round((yesCount.value / questions.length) * 100))

const riskMessage = computed(() => {
  const count = yesCount.value
  if (count <= 2) {
    return {
      title: '恭喜您！',
      content: '您目前面臨的健康風險較低，不過請再問問自己以下兩個問題：',
      followUp: [
        '如果今晚一個人的時候跌倒了，您怎麼自行站起來？',
        '如果您沒有辦法自行站起來，您要怎麼對外求救？'
      ],
      color: 'text-green-600'
    }
  } else if (count === 3 || count === 4) {
    return {
      title: '預防重於一切！',
      content: '這個結果表示您已經逐漸面臨跌倒或與醫療相關的健康風險，我們建議您考慮預先使用生命連線醫療緊急救援服務。',
      color: 'text-foundation-orange'
    }
  } else {
    return {
      title: '現在還來得及！',
      content: '這麼高的分數顯示您正面臨跌倒及醫療意外的嚴重風險，我們強烈建議您儘速開始使用生命連線醫療緊急救援服務服務。',
      color: 'text-red-600'
    }
  }
})

const clearForm = () => {
  answers.value = new Array(questions.length).fill('no')
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
      title="獨居能力檢測" 
      subtitle="為未來生活作好計畫・為健康主動出擊"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-30">
      <div class="max-w-5xl mx-auto space-y-12">
        
        <!-- Intro Card -->
        <section class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 overflow-hidden relative">
          <div class="relative z-10">
            <h2 class="text-3xl font-black text-foundation-blue mb-8 italic flex items-center">
              <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
              規劃未來，守護獨立生活
            </h2>
            <div class="space-y-6 text-gray-500 text-lg md:text-xl font-medium leading-relaxed italic">
              <p>在家安享晚年是許多人共同的心願，但當年齡增長，我們心理及生理狀態改變，讓在家中居住日漸困難。這些改變也迫使我們做出必要的決定，例如裝設緊急通報裝置。</p>
              <p>規劃未來也許困難，但沒有計畫會讓人付出昂貴的代價，甚至造成無法彌補的遺憾。下面的測驗能幫助長者及他們的家人為未來生活作出計畫。</p>
            </div>
          </div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-foundation-blue/5 rounded-full blur-3xl"></div>
        </section>

        <!-- Survey Table Section -->
        <section class="bg-white rounded-[40px] shadow-premium border border-gray-100 overflow-hidden">
          <div class="p-8 md:p-12 border-b border-gray-50">
             <h3 class="text-2xl font-black text-foundation-blue italic">請試著回答下列問題，並點選符合您答案的選項：</h3>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="bg-foundation-blue text-xs md:text-sm">
                  <th class="px-4 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest">檢測項目</th>
                  <th class="px-2 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest text-center w-20 md:w-32">是 (Yes)</th>
                  <th class="px-2 md:px-8 py-4 md:py-6 font-black text-white uppercase tracking-widest text-center w-20 md:w-32">否 (No)</th>
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
                清除內容
             </button>
             <button 
               @click="submitForm"
               class="w-full md:w-auto px-20 py-4 md:py-5 bg-foundation-blue text-white rounded-3xl font-black text-base md:text-lg shadow-xl shadow-foundation-blue/20 hover:scale-105 transition-all active:scale-95"
             >
                看檢測結果
             </button>
          </div>
        </section>

        <!-- Result Section -->
        <transition name="fade-slide">
          <section ref="resultRef" v-if="showResult" class="bg-white rounded-[40px] p-10 md:p-20 shadow-premium border border-gray-100 overflow-hidden relative">
             <div class="max-w-3xl mx-auto space-y-16 relative z-10">
                <div class="text-center space-y-4">
                   <h2 class="text-3xl font-black text-foundation-blue italic">您的檢測結果</h2>
                   <p class="text-gray-400 font-medium">我們根據您的回答，評估出最適合您的居家建議。</p>
                </div>

                <!-- Percentage Box -->
                <div class="text-center space-y-2 md:space-y-4">
                   <p class="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest">您的風險指數</p>
                   <div class="flex items-baseline justify-center space-x-2">
                      <span class="text-7xl md:text-9xl font-black italic tracking-tighter" :class="riskMessage.color">{{ riskPercentage }}</span>
                      <span class="text-2xl md:text-3xl font-black text-gray-300">%</span>
                   </div>
                </div>

                <!-- Gradient Scale -->
                <div class="space-y-4">
                   <div class="flex justify-between text-[10px] font-black uppercase text-gray-300 tracking-widest">
                      <span>Low Risk</span>
                      <span>High Risk</span>
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
                         <span>立即了解緊急救援服務</span>
                         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
