<script setup>
import { computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('about_origin.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('about_origin.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('about_origin.seo.title')),
  description: computed(() => t('about_origin.seo.description')),
  ogTitle: computed(() => t('about_origin.seo.og_title')),
  ogDescription: computed(() => t('about_origin.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('about_origin.seo.twitter_title')),
  twitterDescription: computed(() => t('about_origin.seo.twitter_description'))
})
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <PageHeader 
      :title="t('about_origin.page_header.title')" 
      :subtitle="t('about_origin.page_header.subtitle')"
    />

    <main class="relative">
      <!-- Overlapping Card Section -->
      <div class="container mx-auto px-4 md:px-8 -mt-10 md:-mt-20 relative z-30">
        <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.08)] p-8 md:p-16 border border-gray-50">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-sm font-black uppercase tracking-widest mb-6">{{ t('about_origin.vision.badge') }}</span>
              <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-tight">
                {{ t('about_origin.vision.title') }}
              </h2>
            </div>
            
            <div class="prose prose-lg max-w-none">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <div class="space-y-6">
                  <p class="text-gray-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-black first-letter:text-foundation-blue first-letter:mr-3 first-letter:float-left">
                    {{ t('about_origin.content.paragraph1') }}
                  </p>
                  <p class="text-gray-600 leading-relaxed">
                    {{ t('about_origin.content.paragraph2') }}
                  </p>
                </div>
                <div class="bg-foundation-blue rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                  <div class="relative z-10 flex flex-col h-full justify-center">
                    <svg class="w-12 h-12 text-foundation-orange opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM0.0170044 21L0.0170044 18C0.0170044 16.8954 0.912439 16 2.017 16H5.017C5.56928 16 6.017 15.5523 6.017 15V9C6.017 8.44772 5.56928 8 5.017 8H2.017C0.912439 8 0.0170044 7.10457 0.0170044 6V5C0.0170044 3.89543 0.912439 3 2.017 3H7.017C8.12157 3 9.017 3.89543 9.017 5V15C9.017 18.3137 6.33071 21 3.017 21H0.0170044Z" /></svg>
                    <p class="text-xl font-bold leading-relaxed italic mb-0">
                      {{ t('about_origin.content.quote') }}
                    </p>
                  </div>
                  <!-- Design Accent -->
                  <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
                </div>
              </div>

              <div class="space-y-8 text-gray-600 text-lg leading-relaxed mb-20">
                <p>
                  {{ t('about_origin.content.paragraph3') }}
                </p>
                <p>
                  {{ t('about_origin.content.paragraph4') }}
                </p>
                <p>
                  {{ t('about_origin.content.paragraph5') }}
                </p>
              </div>

              <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-20"></div>

              <!-- Key Pillars Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                <div class="group p-8 rounded-[32px] bg-gray-50 border border-transparent hover:border-foundation-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-foundation-blue/10 transition-all duration-500">
                  <div class="w-14 h-14 bg-foundation-blue rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-lg group-hover:-rotate-6 transition-transform">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 class="text-xl font-black text-foundation-blue mb-4">{{ t('about_origin.pillars.emergency.title') }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">{{ t('about_origin.pillars.emergency.description') }}</p>
                </div>

                <div class="group p-8 rounded-[32px] bg-gray-50 border border-transparent hover:border-foundation-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-foundation-blue/10 transition-all duration-500">
                  <div class="w-14 h-14 bg-foundation-blue rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h4 class="text-xl font-black text-foundation-blue mb-4">{{ t('about_origin.pillars.community.title') }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">{{ t('about_origin.pillars.community.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
