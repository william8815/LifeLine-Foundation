<script setup>
import { computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('about_org.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('about_org.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('about_org.seo.title')),
  description: computed(() => t('about_org.seo.description')),
  ogTitle: computed(() => t('about_org.seo.og_title')),
  ogDescription: computed(() => t('about_org.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('about_org.seo.twitter_title')),
  twitterDescription: computed(() => t('about_org.seo.twitter_description'))
})

// Statistics Data
const stats = computed(() => [
  { labelKey: 'about_org.stats.stat1_label', valueKey: 'about_org.stats.stat1_value', icon: 'hospital' },
  { labelKey: 'about_org.stats.stat2_label', valueKey: 'about_org.stats.stat2_value', icon: 'users' },
  { labelKey: 'about_org.stats.stat3_label', valueKey: 'about_org.stats.stat3_value', icon: 'clock' },
  { labelKey: 'about_org.stats.stat4_label', valueKey: 'about_org.stats.stat4_value', icon: 'calendar' }
])

const partners = computed(() => [
  t('about_org.partners.partner1'),
  t('about_org.partners.partner2'),
  t('about_org.partners.partner3'),
  t('about_org.partners.partner4'),
  t('about_org.partners.partner5')
])
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <PageHeader 
      :title="t('about_org.page_header.title')" 
      :subtitle="t('about_org.page_header.subtitle')"
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
                  <div class="inline-flex items-center space-x-2 bg-foundation-orange/5 text-foundation-orange px-4 py-2 rounded-full mb-8">
                    <div class="w-1.5 h-1.5 bg-foundation-orange rounded-full animate-ping"></div>
                    <span class="text-xs font-black uppercase tracking-widest">{{ t('about_org.service.badge') }}</span>
                  </div>
                  <h2 class="text-4xl md:text-6xl font-black text-foundation-blue leading-tight mb-8">
                    {{ t('about_org.service.title_line1') }}<span class="text-foundation-lightblue">{{ t('about_org.service.title_line2') }}</span>
                  </h2>
                  <p class="text-gray-600 leading-relaxed text-xl mb-10 font-medium">
                    {{ t('about_org.service.description') }}
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-foundation-blue/10 hover:bg-white hover:shadow-xl transition-all">
                       <Icon name="home" class="w-8 h-8 text-foundation-blue shrink-0" />
                       <p class="text-gray-500 text-sm">{{ t('about_org.service.feature1') }}</p>
                    </div>
                    <div class="flex items-center space-x-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-foundation-blue/10 hover:bg-white hover:shadow-xl transition-all">
                       <Icon name="key" class="w-8 h-8 text-foundation-blue shrink-0" />
                       <p class="text-gray-500 text-sm">{{ t('about_org.service.feature2') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Bar Section -->
            <div class="mb-32 relative">
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-12">
                <div v-for="(stat, index) in stats" :key="stat.labelKey" class="relative">
                  <div class="flex flex-col items-center">
                    <span class="text-gray-100 text-6xl font-black italic absolute -top-8 -left-2 z-0 opacity-40">0{{ index + 1 }}</span>
                    <p class="text-4xl md:text-5xl font-black text-foundation-blue mb-2 relative z-10 tracking-tighter">{{ t(stat.valueKey) }}</p>
                    <p class="text-gray-400 font-bold uppercase tracking-widest text-[1rem] relative z-10">{{ t(stat.labelKey) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 2: History Card -->
            <div class="relative mb-32 group">
              <div class="bg-gray-50 rounded-[50px] overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                <div class="flex flex-col lg:flex-row">
                  <div class="lg:w-1/3 bg-foundation-blue p-6 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <!-- Background Ornament -->
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>
                    <div class="relative z-10">
                      <p class="text-white/60 text-sm font-black tracking-widest uppercase mb-4">{{ t('about_org.history.founded') }}</p>
                      <p class="text-7xl font-black text-white tracking-tighter italic">{{ t('about_org.stats.stat4_value') }}</p>
                      <div class="w-12 h-1 bg-foundation-beige mx-auto mt-6 rounded-full"></div>
                    </div>
                  </div>
                  <div class="lg:w-2/3 p-6 md:p-10 space-y-8">
                    <div>
                      <h3 class="text-3xl font-black text-foundation-blue mb-6">{{ t('about_org.history.title') }}</h3>
                      <p class="text-gray-600 leading-relaxed text-lg" v-html="t('about_org.history.description')"></p>
                    </div>
                    <div class="bg-foundation-blue/5 rounded-3xl p-8 border-l-4 border-foundation-beige">
                      <p class="text-gray-700 font-bold leading-relaxed mb-0 italic">
                        {{ t('about_org.history.quote') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Trust & Partners -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span class="text-foundation-orange font-black uppercase tracking-widest text-xs mb-4 block">{{ t('about_org.trust.badge') }}</span>
                <h3 class="text-3xl font-black text-foundation-blue mb-8 leading-tight">{{ t('about_org.trust.title_line1') }}<br>{{ t('about_org.trust.title_line2') }}</h3>
                <p class="text-gray-600 leading-relaxed text-lg mb-8" v-html="t('about_org.trust.description')"></p>
                <div class="flex items-center space-x-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div class="flex flex-col">
                    <span class="text-4xl font-black text-foundation-blue italic tracking-tighter">{{ t('about_org.trust.north_america') }}</span>
                    <span class="text-[10px] font-bold tracking-widest text-foundation-blue uppercase">{{ t('about_org.trust.standard') }}</span>
                  </div>
                </div>
              </div>
              
              <div class="relative">
                <div class="absolute -inset-4 bg-foundation-blue/5 rounded-[40px] -rotate-2"></div>
                <div class="relative bg-white border border-gray-100 rounded-[40px] p-10 shadow-lg">
                  <h4 class="text-foundation-blue font-black uppercase tracking-widest text-xs mb-8 flex items-center">
                    <span class="w-2 h-2 bg-foundation-orange rounded-full mr-3"></span>
                    {{ t('about_org.partners.title') }}
                  </h4>
                  <div class="flex flex-wrap gap-3">
                    <span v-for="tag in partners" :key="tag" class="px-5 py-3 bg-gray-50 border border-transparent rounded-2xl text-foundation-blue font-bold text-sm hover:border-foundation-blue/30 hover:bg-white hover:text-foundation-blue transition-all cursor-default shadow-sm hover:shadow-md">
                      {{ tag }}
                    </span>
                  </div>
                  <div class="mt-10 pt-8 border-t border-gray-50">
                    <p class="text-gray-400 text-xs italic leading-relaxed">
                      {{ t('about_org.partners.footer') }}
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
