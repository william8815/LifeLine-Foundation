<script setup>
import { computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('about_history.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('about_history.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('about_history.seo.title')),
  description: computed(() => t('about_history.seo.description')),
  ogTitle: computed(() => t('about_history.seo.og_title')),
  ogDescription: computed(() => t('about_history.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('about_history.seo.twitter_title')),
  twitterDescription: computed(() => t('about_history.seo.twitter_description'))
})

const timeline = computed(() => [
  { yearKey: 'about_history.timeline.item1_year', titleKey: 'about_history.timeline.item1_title', type: 'award' },
  { yearKey: 'about_history.timeline.item2_year', titleKey: 'about_history.timeline.item2_title', type: 'award' },
  { yearKey: 'about_history.timeline.item3_year', titleKey: 'about_history.timeline.item3_title', type: 'award' },
  { yearKey: 'about_history.timeline.item4_year', titleKey: 'about_history.timeline.item4_title', type: 'award' },
  { yearKey: 'about_history.timeline.item5_year', titleKey: 'about_history.timeline.item5_title', type: 'academic' },
  { yearKey: 'about_history.timeline.item6_year', titleKey: 'about_history.timeline.item6_title', type: 'academic' },
  { yearKey: 'about_history.timeline.item7_year', titleKey: 'about_history.timeline.item7_title', type: 'award' },
  { yearKey: 'about_history.timeline.item8_year', titleKey: 'about_history.timeline.item8_title', type: 'award' },
  { yearKey: 'about_history.timeline.item9_year', titleKey: 'about_history.timeline.item9_title', type: 'award' }
])
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <PageHeader 
      :title="t('about_history.page_header.title')" 
      :subtitle="t('about_history.page_header.subtitle')"
    />

    <main class="relative">
      <div class="container mx-auto px-4 md:px-8 -mt-10 md:-mt-20 relative z-30">
        <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.06)] p-8 md:p-16 border border-gray-50 overflow-hidden relative">
          
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-20">
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-sm font-black uppercase tracking-widest mb-6">{{ t('about_history.intro.badge') }}</span>
              <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-tight">
                {{ t('about_history.intro.title') }}
              </h2>
            </div>

            <!-- Timeline -->
            <div class="relative">
              <!-- Central Line (Dashed) -->
              <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foundation-blue/50 via-gray-200 to-transparent md:-translate-x-1/2"></div>

              <div class="space-y-12 md:space-y-24">
                <div v-for="(item, index) in timeline" :key="index" 
                     class="relative flex flex-col md:flex-row items-center group">
                  
                  <!-- Content Card -->
                  <div :class="[
                    'w-full md:w-[45%] p-8 rounded-[32px] border transition-all duration-500 relative z-10',
                    index % 2 === 0 ? 'md:mr-auto text-left lg:text-right' : 'md:ml-auto text-left',
                    item.type === 'award' ? 'bg-white border-gray-100 hover:border-foundation-orange/30 hover:shadow-2xl hover:shadow-foundation-orange/5' : 'bg-gray-50 border-transparent hover:bg-white hover:border-foundation-blue/30 hover:shadow-2xl hover:shadow-foundation-blue/5'
                  ]">
                    <!-- Year Badge -->
                    <div :class="[
                      'inline-block px-4 py-1 rounded-full text-xs font-black tracking-widest mb-4',
                      item.type === 'award' ? 'bg-foundation-orange/10 text-foundation-orange' : 'bg-foundation-blue/10 text-foundation-blue'
                    ]">
                      {{ t(item.yearKey) }}
                    </div>
                    
                    <h3 class="text-xl md:text-2xl font-black text-foundation-blue leading-snug">
                      {{ t(item.titleKey) }}
                    </h3>

                    <!-- Award Icon (Optional) -->
                    <div v-if="item.type === 'award'" class="mt-4 flex opacity-20 group-hover:opacity-100 transition-opacity justify-start lg:justify-end">
                       <svg class="w-6 h-6 text-foundation-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2Z"/></svg>
                    </div>
                  </div>

                  <!-- Center Dot -->
                  <div class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-20 -translate-x-1/2 transition-all duration-500 group-hover:scale-150"
                       :class="item.type === 'award' ? 'bg-foundation-orange shadow-foundation-orange/50' : 'bg-foundation-blue shadow-foundation-blue/50'">
                  </div>

                  <!-- Date for MD+ screens -->
                  <div :class="[
                    'hidden md:block absolute top-1/2 -translate-y-1/2 w-[45%] text-gray-300 font-black italic text-6xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none',
                    index % 2 === 0 ? 'left-[55%] text-left pl-12' : 'right-[55%] text-right pr-12'
                  ]">
                    {{ t(item.yearKey) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom CTA/Conclusion -->
            <div class="mt-40 text-center">
               <div class="inline-flex flex-col items-center">
                 <div class="w-12 h-12 bg-foundation-blue/5 rounded-full flex items-center justify-center mb-8">
                   <svg class="w-6 h-6 text-foundation-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                 </div>
                 <h4 class="text-2xl font-black text-foundation-blue mb-4">{{ t('about_history.conclusion.title') }}</h4>
                 <p class="text-gray-400 max-w-md mx-auto leading-relaxed">
                   {{ t('about_history.conclusion.description') }}
                 </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Individual Animations for timeline items can be added here */
</style>
