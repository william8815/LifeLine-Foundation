<script setup>
import { computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('links.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('links.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('links.seo.title')),
  description: computed(() => t('links.seo.description')),
  ogTitle: computed(() => t('links.seo.og_title')),
  ogDescription: computed(() => t('links.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('links.seo.twitter_title')),
  twitterDescription: computed(() => t('links.seo.twitter_description'))
})

const partners = computed(() => [
  {
    name: t('links.partners.p1_name'),
    url: "https://www.oldpeople.org.tw/pop/",
    desc: t('links.partners.p1_desc')
  },
  {
    name: t('links.partners.p2_name'),
    url: "https://www.qif.org.tw/",
    desc: t('links.partners.p2_desc')
  },
  {
    name: t('links.partners.p3_name'),
    url: "https://www.hondao.org.tw/",
    desc: t('links.partners.p3_desc')
  },
  {
    name: t('links.partners.p4_name'),
    url: "https://www.ofo.org.tw/",
    desc: t('links.partners.p4_desc')
  },
  {
    name: t('links.partners.p5_name'),
    url: "https://www.elder.org.tw/",
    desc: t('links.partners.p5_desc')
  },
  {
    name: t('links.partners.p6_name'),
    url: "https://www.genesis.org.tw/",
    desc: t('links.partners.p6_desc')
  }
])
</script>

<template>
  <div class="bg-[#f8fafc] min-h-screen pb-32">
    <PageHeader 
      :title="t('links.page_header.title')" 
      :subtitle="t('links.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-10">
      <!-- Info Card -->
      <section class="max-w-4xl mx-auto mb-16">
        <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-premium border border-white text-center">
          <h2 class="text-2xl md:text-3xl font-black text-foundation-blue mb-6 italic">{{ t('links.info.title') }}</h2>
          <p class="text-gray-500 font-medium leading-relaxed italic max-w-2xl mx-auto">
            {{ t('links.info.description') }}
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
              {{ t('links.visit_partner') }}
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
