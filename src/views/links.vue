<script setup>
import PageHeader from '../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '友站連結 | 生命連線基金會 LifeLine Foundation - 共創高齡友善社會',
  meta: [
    { 
      name: 'keywords', 
      content: '友站連結, 老人福利, 基金會夥伴, 弘道老人福利基金會, 華山基金會, 老盟, 生命連線夥伴, 高齡社會資源' 
    }
  ]
})

useSeoMeta({
  title: '友站連結 | 生命連線基金會 LifeLine Foundation - 共創高齡友善社會',
  description: '連結各大老人福利機構與基金會，共創高齡友善社會。生命連線基金會與老盟、弘道、愚人之友等夥伴攜手，為長輩提供全面的照護資源與社會支持。',
  ogTitle: '友站連結 - 攜手公益，共創銀髮福址 | 生命連線基金會',
  ogDescription: '我們與各大高齡照護機構建立連結，為台灣長者打造更完善的社會支持網絡。',
  twitterCard: 'summary_large_image',
  twitterTitle: '友站連結 | 生命連線基金會 LifeLine Foundation',
  twitterDescription: '共創高齡友善社會的公益連結。'
})

const partners = [
  {
    name: "老人福利推動聯盟",
    url: "https://www.oldpeople.org.tw/pop/",
    desc: "推動老人相關福利政策與社會權益，建立友善高齡環境。"
  },
  {
    name: "愚人之友基金會",
    url: "https://www.qif.org.tw/",
    desc: "深耕偏鄉長照服務，提供專業且溫暖的居家服務與日照中心。"
  },
  {
    name: "弘道老人福利基金會",
    url: "https://www.hondao.org.tw/",
    desc: "致力於預防老化、關懷孤老，推廣『不老夢想』精神。"
  },
  {
    name: "老五老基金會",
    url: "https://www.ofo.org.tw/",
    desc: "推展高齡者在地老化、快樂參與，落實越老活越好。"
  },
  {
    name: "華山基金會",
    url: "https://www.elder.org.tw/",
    desc: "服務全台失智、失能、失依老人，提供免費到宅關懷與協助。"
  },
  {
    name: "創世社會福利基金會",
    url: "https://www.genesis.org.tw/",
    desc: "致力於守護植物人與孤苦長者，提供長期且專業的安養照護。"
  }
]
</script>

<template>
  <div class="bg-[#f8fafc] min-h-screen pb-32">
    <PageHeader 
      title="友站連結" 
      subtitle="攜手社會各界夥伴・共創長輩幸福未來"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-10">
      <!-- Info Card -->
      <section class="max-w-4xl mx-auto mb-16">
        <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-premium border border-white text-center">
          <h2 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6 italic">夥伴連結・愛無界限</h2>
          <p class="text-gray-500 font-medium leading-relaxed italic max-w-2xl mx-auto">
            生命連線基金會深感高齡照護需社會多方協作。我們特別整理了國內長期致力於長輩福利的優質機構，希望能為您與家人提供更全面的資源支援。
          </p>
        </div>
      </section>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="partner in partners" 
          :key="partner.name"
          :href="partner.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group block bg-white/70 backdrop-blur-xl p-10 rounded-[40px] shadow-sm border border-white hover:bg-foundation-blue hover:shadow-2xl hover:shadow-foundation-blue/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
        >
          <!-- Decoration -->
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-foundation-blue/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
          
          <div class="relative z-10 space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 bg-foundation-blue/5 rounded-2xl flex items-center justify-center text-foundation-blue group-hover:bg-white/20 group-hover:text-white transition-all">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <svg class="w-5 h-5 text-foundation-lightblue/30 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            <h3 class="text-2xl font-black text-foundation-blue group-hover:text-white transition-colors">
              {{ partner.name }}
            </h3>
            
            <p class="text-gray-400 font-medium text-sm leading-relaxed group-hover:text-white/80 transition-colors line-clamp-3 italic">
              {{ partner.desc }}
            </p>

            <div class="pt-6 flex items-center text-xs font-black uppercase tracking-widest text-foundation-lightblue group-hover:text-white/60 transition-colors">
              <span class="w-8 h-px bg-foundation-lightblue/20 group-hover:bg-white/20 mr-3"></span>
              Visit Partner
            </div>
          </div>
        </a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}
</style>
