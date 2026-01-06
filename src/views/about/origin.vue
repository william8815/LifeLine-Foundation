<script setup>
import { computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

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
                    <Icon name="quate" class="w-12 h-12 text-foundation-beige mb-2" />
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
                    <Icon name="thunder" class="w-7 h-7 text-white" />
                  </div>
                  <h4 class="text-xl font-black text-foundation-blue mb-4">{{ t('about_origin.pillars.emergency.title') }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">{{ t('about_origin.pillars.emergency.description') }}</p>
                </div>

                <div class="group p-8 rounded-[32px] bg-gray-50 border border-transparent hover:border-foundation-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-foundation-blue/10 transition-all duration-500">
                  <div class="w-14 h-14 bg-foundation-blue rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-lg group-hover:-rotate-6 transition-transform">
                    <Icon name="group" class="w-7 h-7 text-white" />
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
