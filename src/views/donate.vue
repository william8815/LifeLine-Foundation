<script setup>
import { computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('donate.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('donate.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('donate.seo.title')),
  description: computed(() => t('donate.seo.description')),
  ogTitle: computed(() => t('donate.seo.og_title')),
  ogDescription: computed(() => t('donate.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('donate.seo.twitter_title')),
  twitterDescription: computed(() => t('donate.seo.twitter_description'))
})

const donationMethods = computed(() => [
  {
    title: t('donate.methods.post.title'),
    icon: 'post',
    details: [
      { label: t('donate.methods.post.account_label'), value: '19578734', highlight: true },
      { label: t('donate.methods.post.name_label'), value: t('donate.methods.post.name_value') },
    ],
    steps: [
      t('donate.methods.post.step1'),
      t('donate.methods.post.step2'),
      t('donate.methods.post.step3'),
      t('donate.methods.post.step4')
    ]
  },
  {
    title: t('donate.methods.atm.title'),
    icon: 'atm',
    details: [
      { label: t('donate.methods.atm.bank_code_label'), value: '700', highlight: true },
      { label: t('donate.methods.atm.account_label'), value: '0001990-0367989', highlight: true },
      { label: t('donate.methods.atm.name_label'), value: t('donate.methods.atm.name_value') },
    ],
    steps: [
      t('donate.methods.atm.step1'),
      t('donate.methods.atm.step2'),
      t('donate.methods.atm.step3')
    ]
  },
  {
    title: t('donate.methods.check.title'),
    icon: 'check',
    details: [
      { label: t('donate.methods.check.payee_label'), value: t('donate.methods.check.payee_value') },
      { label: t('donate.methods.check.note_label'), value: t('donate.methods.check.note_value') },
    ],
    steps: [
      t('donate.methods.check.step1'),
      t('donate.methods.check.step2'),
      t('donate.methods.check.step3')
    ]
  },
  {
    title: t('donate.methods.cash.title'),
    icon: 'cash',
    details: [
      { label: t('donate.methods.cash.location_label'), value: t('donate.methods.cash.location_value') },
      { label: t('donate.methods.cash.address_label'), value: t('donate.methods.cash.address_value') },
    ],
    steps: [
      t('donate.methods.cash.step1'),
      t('donate.methods.cash.step2'),
      t('donate.methods.cash.step3')
    ]
  }
])
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <PageHeader 
      :title="t('donate.page_header.title')" 
      :subtitle="t('donate.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 relative z-10">
      <!-- Intro Section -->
      <section class="bg-white rounded-[40px] shadow-premium p-8 md:p-10 mb-16 relative overflow-hidden text-center border border-gray-100">
        <div class="absolute top-0 right-0 w-64 h-64 bg-foundation-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-xs font-black tracking-widest uppercase">{{ t('donate.intro.badge') }}</span>
          <h2 class="text-2xl md:text-5xl font-black text-foundation-blue leading-tight italic">
            <span>{{ t("donate.intro.title") }}</span>
            <br>
            <span class="text-foundation-lightblue">{{ t("donate.intro.subTitle") }}</span>
          </h2>
          <p class="text-gray-500 text-lg font-medium leading-relaxed italic">
            {{ t("donate.intro.description") }}
            <br>
            {{ t("donate.intro.description2") }}
          </p>
          <div class="pt-8 flex justify-center">
            <div class="bg-foundation-blue/5 rounded-3xl p-6 md:p-8 flex items-center space-x-6 border border-foundation-blue/10 group hover:bg-foundation-blue hover:text-white transition-all duration-500 cursor-pointer shadow-sm">
               <div class="w-14 h-14 rounded-2xl bg-foundation-blue flex items-center justify-center text-white shrink-0 shadow-lg group-hover:bg-white group-hover:text-foundation-blue">
                <Icon name="tel" class="w-8 h-8" />
               </div>
               <div class="text-left text-foundation-blue group-hover:text-white">
                 <p class="text-sm font-black uppercase tracking-widest opacity-60">{{ t('donate.intro.phone_label') }}</p>
                 <a href="tel:0800056789" class="text-xl md:text-3xl font-black">0800-056-789</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Donation Methods Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="method in donationMethods" 
          :key="method.title"
          class="p-6 md:p-8 bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-50 flex flex-col gap-6 group overflow-hidden"
        >
          <!-- Card Header -->
          <div class="border-b border-gray-50 bg-gradient-to-br from-white to-gray-50/50">
            <div class="flex gap-2 items-center justify-between mb-4">
              <h3 class="text-3xl font-black text-foundation-blue tracking-tighter">{{ method.title }}</h3>
              <div class="w-16 h-16 bg-foundation-blue/5 rounded-3xl flex items-center justify-center text-foundation-blue group-hover:bg-foundation-blue group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon v-if="method.icon === 'post'" name="mailOutline" class="w-8 h-8" />
                  <Icon v-if="method.icon === 'atm'" name="bank" class="w-8 h-8" />
                  <Icon v-if="method.icon === 'check'" name="checkOutline" class="w-8 h-8" />
                  <Icon v-if="method.icon === 'cash'" name="cash" class="w-8 h-8" />
              </div>
            </div>
            <div class="space-y-3">
              <div v-for="detail in method.details" :key="detail.label" class="flex flex-col md:flex-row md:items-center">
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest md:w-24 shrink-0">{{ detail.label }}</span>
                <span :class="['font-black text-lg md:text-xl', detail.highlight ? 'text-foundation-lightblue underline decoration-foundation-lightblue/30 underline-offset-8' : 'text-foundation-blue/80']">{{ detail.value }}</span>
              </div>
            </div>
          </div>

          <!-- Card Body -->
          <div class="space-y-6 flex-grow">
            <h4 class="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center">
              <span class="w-8 h-px bg-gray-200 mr-3"></span>
              {{ t('donate.process_title') }}
            </h4>
            <ul class="space-y-4">
              <li v-for="(step, sIdx) in method.steps" :key="sIdx" class="flex items-start">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-foundation-lightblue text-white text-[10px] font-black mr-4 mt-1 shrink-0 transition-colors">{{ sIdx + 1 }}</span>
                <p class="text-gray-500 font-medium leading-relaxed italic">{{ step }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Help Section -->
      <section class="mt-24 text-center space-y-8 pb-10">
         <div class="w-20 h-1 bg-foundation-beige mx-auto rounded-full"></div>
         <p class="text-foundation-blue font-black text-xl italic">
           {{ t('donate.footer.message') }}
         </p>
         <div class="flex flex-wrap justify-center gap-4">
            <RouterLink to="/service-home-care" class="px-10 py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 transition-all">
              {{ t('donate.footer.button1') }}
            </RouterLink>
            <RouterLink to="/news" class="px-10 py-5 bg-white text-foundation-blue border border-gray-100 rounded-2xl font-black shadow-lg hover:shadow-xl transition-all">
              {{ t('donate.footer.button2') }}
            </RouterLink>
         </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}
</style>
