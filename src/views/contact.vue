<script setup>
import { computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('contact.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('contact.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('contact.seo.title')),
  description: computed(() => t('contact.seo.description')),
  ogTitle: computed(() => t('contact.seo.og_title')),
  ogDescription: computed(() => t('contact.seo.og_description')),
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('contact.seo.twitter_title')),
  twitterDescription: computed(() => t('contact.seo.twitter_description'))
})

const contactInfo = computed(() => [
  {
    label: t('contact.info.phone_label'),
    value: '0809-088-999',
    icon: 'phone',
    type: 'tel'
  },
  {
    label: t('contact.info.email_label'),
    value: 'services@lifeline.net.tw',
    icon: 'email',
    type: 'mailto'
  },
  {
    label: t('contact.info.address_label'),
    value: t('contact.info.address_value'),
    note: t('contact.info.address_note'),
    icon: 'location'
  }
])

const transportation = computed(() => [
  {
    title: t('contact.transportation.metro_title'),
    category: 'Metro',
    lines: [t('contact.transportation.metro_line')],
    items: [
      {
        station: t('contact.transportation.metro_station1'),
        content: t('contact.transportation.metro_content1')
      },
      {
        station: t('contact.transportation.metro_station2'),
        content: t('contact.transportation.metro_content2')
      }
    ]
  },
  {
    title: t('contact.transportation.bus_title'),
    category: 'Bus',
    lines: ['212(直行)', '270', '270(區)', '46', '51', '忠孝新幹線', '信義幹線(副)'],
    items: [
      {
        station: t('contact.transportation.bus_station1'),
        content: t('contact.transportation.bus_content1')
      },
      {
        station: t('contact.transportation.bus_station2'),
        content: t('contact.transportation.bus_content2')
      }
    ]
  }
])
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <PageHeader 
      :title="t('contact.page_header.title')" 
      :subtitle="t('contact.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 relative z-10">
      <!-- Contact Info Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <!-- Info Cards -->
        <div class="lg:col-span-4 space-y-6">
          <div 
            v-for="info in contactInfo" 
            :key="info.label"
            class="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
          >
            <div class="flex items-center space-x-6">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-foundation-blue/5 flex items-center justify-center text-foundation-blue group-hover:bg-foundation-blue group-hover:text-white transition-all duration-500">
                <Icon v-if="info.icon === 'phone'" name="tel" class="w-7 h-7" />
                <Icon v-if="info.icon === 'email'" name="mailOutline" class="w-7 h-7" />
                <Icon v-if="info.icon === 'location'" name="pin" class="w-7 h-7" />
              </div>
              <div>
                <p class="text-[1rem] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{{ info.label }}</p>
              </div>
            </div>
            <div class="mt-4">
              <a 
                v-if="info.type" 
                :href="`${info.type}:${info.value}`" 
                class="block text-[1rem] md:text-lg font-black text-foundation-blue leading-tight hover:text-foundation-lightblue transition-colors"
              >
                {{ info.value }}
              </a>
              <p v-else class="text-[1rem] md:text-lg font-black text-foundation-blue leading-tight">
                {{ info.value }}
              </p>
              <p v-if="info.note" class="text-xs text-foundation-lightblue font-bold mt-1">{{ info.note }}</p>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="lg:col-span-8 rounded-[40px] overflow-hidden shadow-premium border border-white bg-white p-3">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7828236113115!2d121.57682247605051!3d25.041457177810332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba682b6b063%3A0xe5a3c9b7e7b8a7!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5b-g5a2d5p2x6Lev5LqU5q61NTUy6JmfMTXokp8!5e0!3m2!1szh-TW!2stw!4v1703411000000!5m2!1szh-TW!2stw" 
            class="w-full h-full min-h-[450px] rounded-[32px] border-0" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Transportation Section -->
      <section class="space-y-8">
        <div class="flex items-center space-x-4 mb-12">
          <div class="w-20 h-1.5 bg-foundation-blue rounded-full"></div>
          <h2 class="text-3xl font-black text-foundation-blue italic">{{ t('contact.transportation.section_title') }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="trans in transportation" 
            :key="trans.title"
            class="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden flex flex-col group"
          >
            <!-- Card Header -->
            <div class="p-10 border-b border-gray-50 bg-gradient-to-br from-white to-gray-50/50">
               <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-foundation-blue/5 rounded-2xl flex items-center justify-center text-foundation-blue">
                      <Icon v-if="trans.category === 'Metro'" name="metro" class="w-7 h-7" />
                      <Icon v-if="trans.category === 'Bus'" name="bus" class="w-7 h-7" />
                    </div>
                    <span class="text-2xl font-black text-foundation-blue">{{ trans.title }}</span>
                  </div>
               </div>
               
               <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="line in trans.lines" 
                    :key="line"
                    class="px-3 py-1 bg-foundation-lightblue text-white text-[10px] font-black rounded-lg shadow-sm"
                  >
                    {{ line }}
                  </span>
               </div>
            </div>

            <!-- Card Body -->
            <div class="p-10 space-y-10 flex-grow">
               <div 
                 v-for="(item, idx) in trans.items" 
                 :key="idx"
                 class="relative pl-8 border-l-2 border-foundation-blue/10 group/item hover:border-foundation-blue transition-colors pb-8 last:pb-0"
               >
                 <div class="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-foundation-blue/20 rounded-full group-hover/item:border-foundation-blue transition-colors"></div>
                 <h4 class="text-xl font-black text-foundation-blue mb-2 italic">{{ item.station }}</h4>
                 <p class="text-gray-500 font-medium leading-relaxed">{{ item.content }}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Help Section -->
      <!-- <div class="mt-24 p-12 bg-foundation-blue rounded-[50px] text-white overflow-hidden relative group">
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div class="space-y-2 text-center md:text-left">
              <h3 class="text-3xl font-black italic italic">還在尋找其它資訊嗎？</h3>
              <p class="text-white/70 font-bold">歡迎點擊下方按鈕了解更多基金會的服務與活動動態。</p>
           </div>
           <div class="flex items-center space-x-4">
              <RouterLink to="/service/home-care" class="px-10 py-5 bg-white text-foundation-blue rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                服務內容
              </RouterLink>
              <RouterLink to="/news" class="px-10 py-5 bg-white/10 border border-white/20 rounded-2xl font-black shadow-xl hover:bg-white/20 transition-all backdrop-blur-md">
                最新消息
              </RouterLink>
           </div>
        </div>
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div> -->
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);
}
</style>
