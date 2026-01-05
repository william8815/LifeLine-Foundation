<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/base/Icon.vue'

const { t } = useI18n()

// SEO Metadata
useHead({
  title: computed(() => t('service_emergency.seo.title')),
  meta: [
    { 
      name: 'keywords', 
      content: computed(() => t('service_emergency.seo.keywords'))
    }
  ]
})

useSeoMeta({
  title: computed(() => t('service_emergency.seo.title')),
  description: computed(() => t('service_emergency.seo.description')),
  ogTitle: computed(() => t('service_emergency.seo.og_title')),
  ogDescription: computed(() => t('service_emergency.seo.og_description')),
  ogImage: emergency2_1,
  twitterCard: 'summary_large_image',
  twitterTitle: computed(() => t('service_emergency.seo.twitter_title')),
  twitterDescription: computed(() => t('service_emergency.seo.twitter_description'))
})
// images
import emergency1_1 from "@/assets/images/services/emergency1_1.png"
import emergency1_2 from "@/assets/images/services/emergency1_2.png"
import emergency1_3 from "@/assets/images/services/emergency1_3.png"
import emergency1_4 from "@/assets/images/services/emergency1_4.png"
import emergency2_1 from "@/assets/images/services/emergency2_1.png"
import emergency2_2 from "@/assets/images/services/emergency2_2.png"
import emergency2_3 from "@/assets/images/services/emergency2_3.png"
import emergency2_4 from "@/assets/images/services/emergency2_4.png"
import emergency2_5 from "@/assets/images/services/emergency2_5.png"

const imageLoaded = ref({
  emergency1_1: false,
  emergency1_2: false,
  emergency1_3: false,
  emergency1_4: false,
  emergency2_1: false,
  emergency2_2: false,
  emergency2_3: false,
  emergency2_4: false,
  emergency2_5: false
})

const activeTab = ref('intro')
const tabs = computed(() => [
  { id: 'intro', name: t('service_emergency.tabs.intro'), icon: 'sparkles' },
  { id: 'workflow', name: t('service_emergency.tabs.workflow'), icon: 'arrows-right-left' },
  { id: 'devices', name: t('service_emergency.tabs.devices'), icon: 'device-mobile' },
  { id: 'fees', name: t('service_emergency.tabs.fees'), icon: 'credit-card' }
])

const workflowSteps = computed(() => [
  {
    id: 1,
    title: t('service_emergency.workflow.step1_title'),
    content: t('service_emergency.workflow.step1_content'),
    icon: 'touch',
    image: emergency1_1
  },
  {
    id: 2,
    title: t('service_emergency.workflow.step2_title'),
    content: t('service_emergency.workflow.step2_content'),
    icon: 'operator',
    image: emergency1_2
  },
  {
    id: 3,
    title: t('service_emergency.workflow.step3_title'),
    content: t('service_emergency.workflow.step3_content'),
    icon: 'profile',
    image: emergency1_3
  },
  {
    id: 4,
    title: t('service_emergency.workflow.step4_title'),
    content: t('service_emergency.workflow.step4_content'),
    icon: 'link',
    image: emergency1_4
  }   
])

const devices = computed(() => ({
  machines: [
    {
      type: t('service_emergency.devices.machine1_type'),
      desc: t('service_emergency.devices.machine1_desc'),
      image: emergency2_1,
      features: [
        t('service_emergency.devices.machine1_feature1'),
        t('service_emergency.devices.machine1_feature2'),
        t('service_emergency.devices.machine1_feature3'),
        t('service_emergency.devices.machine1_feature4'),
        t('service_emergency.devices.machine1_feature5'),
        t('service_emergency.devices.machine1_feature6'),
        t('service_emergency.devices.machine1_feature7'),
        t('service_emergency.devices.machine1_feature8')
      ]
    },
    {
      type: t('service_emergency.devices.machine2_type'),
      desc: t('service_emergency.devices.machine2_desc'),
      image: emergency2_2,
      features: [
        t('service_emergency.devices.machine2_feature1'),
        t('service_emergency.devices.machine2_feature2'),
        t('service_emergency.devices.machine2_feature3'),
        t('service_emergency.devices.machine2_feature4'),
        t('service_emergency.devices.machine2_feature5')
      ]
    }
  ],
  transmitters: [
    {
      type: t('service_emergency.devices.transmitter1_type'),
      desc: t('service_emergency.devices.transmitter1_desc'),
      image: emergency2_3,
      specs: [
        t('service_emergency.devices.transmitter1_spec1'),
        t('service_emergency.devices.transmitter1_spec2'),
        t('service_emergency.devices.transmitter1_spec3')
      ]
    },
    {
      type: t('service_emergency.devices.transmitter2_type'),
      desc: t('service_emergency.devices.transmitter2_desc'),
      image: emergency2_4,
      specs: [
        t('service_emergency.devices.transmitter2_spec1'),
        t('service_emergency.devices.transmitter2_spec2'),
        t('service_emergency.devices.transmitter2_spec3')
      ]
    },
    {
      type: t('service_emergency.devices.transmitter3_type'),
      desc: t('service_emergency.devices.transmitter3_desc'),
      image: emergency2_5,
      specs: [
        t('service_emergency.devices.transmitter3_spec1'),
        t('service_emergency.devices.transmitter3_spec2'),
        t('service_emergency.devices.transmitter3_spec3')
      ]
    }
  ]
}))
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-32">
    <PageHeader 
      :title="t('service_emergency.page_header.title')" 
      :subtitle="t('service_emergency.page_header.subtitle')"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-30">
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Sidebar Navigation -->
        <aside class="lg:w-72 shrink-0">
          <div class="bg-white/90 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl border border-white sticky top-24">
            <nav class="space-y-1.5">
              <button 
                v-for="tab in tabs" 
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group',
                  activeTab === tab.id 
                    ? 'bg-foundation-blue text-white shadow-[0_10px_30px_rgba(30,64,175,0.2)]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-foundation-blue'
                ]"
              >
                <span :class="[
                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                  activeTab === tab.id ? 'bg-foundation-lightblue scale-150' : 'bg-gray-300 group-hover:bg-foundation-blue'
                ]"></span>
                <span class="font-black tracking-widest text-sm text-left">{{ tab.name }}</span>
              </button>
            </nav>
          </div>
        </aside>

        <!-- Main Content Area -->
        <article class="flex-grow">
          <transition 
            name="fade-slide" 
            mode="out-in"
          >
            <!-- Tab: Intro -->
            <div v-if="activeTab === 'intro'" :key="'intro'" class="space-y-8">
              <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 relative overflow-hidden">
                <div class="relative z-10">
                   <h2 class="text-3xl md:text-4xl font-black text-foundation-blue mb-8 flex items-center italic">
                     <span class="w-12 h-1.5 bg-foundation-lightblue mr-6 rounded-full"></span>
                     {{ t('service_emergency.intro.title') }}
                   </h2>
                   <div class="space-y-6 text-gray-500 text-lg md:text-xl font-medium leading-[2] italic">
                     <p>{{ t('service_emergency.intro.paragraph1') }}</p>
                     <p>{{ t('service_emergency.intro.paragraph2') }}</p>
                     <p>{{ t('service_emergency.intro.paragraph3') }}</p>
                   </div>
                </div>
              </div>
            </div>

            <!-- Tab: Workflow -->
            <div v-else-if="activeTab === 'workflow'" :key="'workflow'" class="space-y-12">
              <div class="bg-white rounded-[40px] p-8 md:p-16 shadow-premium border border-gray-100 overflow-hidden">
                <h2 class="text-3xl font-black text-foundation-blue mb-16 italic text-center">{{ t('service_emergency.workflow.title') }}</h2>
                
                <div class="space-y-16 md:space-y-24 relative">
                   <!-- Vertical connector line for desktop -->
                   <div class="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-foundation-blue/10 -z-0"></div>

                   <div 
                     v-for="(step, idx) in workflowSteps" 
                     :key="step.id" 
                     class="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 group"
                     :class="idx % 2 === 1 ? 'md:flex-row-reverse' : ''"
                   >
                      <!-- Image Side -->
                      <div class="w-full md:w-1/2">
                        <div class="relative aspect-video rounded-[32px] overflow-hidden shadow-xl border border-gray-100 transition-all duration-700 group-hover:shadow-foundation-blue/10 group-hover:-translate-y-2">
                           <img :src="step.image" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" :class="imageLoaded[step.image] ? 'opacity-100' : 'opacity-0'"  :alt="step.title" loading="lazy" @load="imageLoaded[step.image] = true">
                           <!-- Step Number Badge Overlay -->
                           <div class="absolute top-4" :class="idx % 2 === 1 ? 'right-4' : 'left-4'">
                              <div class="w-12 h-12 rounded-2xl bg-foundation-blue text-white flex items-center justify-center font-black shadow-lg">
                                {{ step.id }}
                              </div>
                           </div>
                        </div>
                      </div>

                      <!-- Content Side -->
                      <div class="w-full md:w-1/2 space-y-6 text-center" :class="idx % 2 === 1 ? 'md:text-right' : 'md:text-left'">
                        <div 
                          class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foundation-blue/5 text-foundation-blue mb-2 border border-foundation-blue/10 group-hover:bg-foundation-blue group-hover:text-white transition-all duration-500"
                          :class="idx % 2 === 1 ? 'md:ml-auto' : ''"
                        >
                          <Icon v-if="step.id === 1" name="pointer" class="w-7 h-7" />
                          <Icon v-if="step.id === 2" name="person" class="w-7 h-7" />
                          <Icon v-if="step.id === 3" name="file" class="w-7 h-7" />
                          <Icon v-if="step.id === 4" name="cycle" class="w-7 h-7" />
                        </div>
                        <h3 class="text-3xl font-black text-foundation-blue tracking-tighter">{{ step.title }}</h3>
                        <p class="text-gray-500 font-medium leading-relaxed text-lg max-w-lg" :class="idx % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'">{{ step.content }}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <!-- Tab: Devices -->
            <div v-else-if="activeTab === 'devices'" :key="'devices'" class="space-y-12">
              <div class="bg-white rounded-[40px] p-8 md:p-16 shadow-premium border border-gray-100 overflow-hidden">
                <!-- Peace Machines -->
                <section>
                  <div class="flex items-center space-x-6 mb-10">
                    <h2 class="text-3xl font-black text-foundation-blue">{{ t('service_emergency.devices.machines_title') }}</h2>
                    <div class="h-px flex-grow bg-gray-100"></div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="machine in devices.machines" :key="machine.type" class="bg-white rounded-[40px] overflow-hidden shadow-premium border border-gray-100 group">
                        <div class="overflow-hidden relative aspect-[1/1]">
                          <img :src="machine.image" class="w-full h-full object-cover transition-all duration-500" :class="imageLoaded[machine.type] ? 'opacity-100' : 'opacity-0'" :alt="machine.type" loading="lazy" @load="imageLoaded[machine.type] = true">
                          <div class="absolute top-6 left-6">
                            <span class="px-6 py-2 bg-foundation-blue text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">{{ machine.type }}</span>
                          </div>
                        </div>
                        <div class="p-6 md:p-10">
                          <p class="text-gray-500 font-medium mb-8 italic-prose leading-relaxed">{{ machine.desc }}</p>
                          <ul class="space-y-4">
                              <li v-for="f in machine.features" :key="f" class="flex items-start text-sm font-medium text-gray-400 group/li">
                                <Icon name="checkOutline" class="w-4 h-4 text-foundation-lightblue mr-3 mt-0.5 shrink-0 transition-transform" />
                                {{ f }}
                              </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </section>

                <!-- Transmitters -->
                <section>
                  <div class="flex items-center space-x-6 mt-10 mb-10">
                    <h2 class="text-3xl font-black text-foundation-blue">{{ t('service_emergency.devices.transmitters_title') }}</h2>
                    <div class="h-px flex-grow bg-gray-100"></div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="item in devices.transmitters" :key="item.type" class="bg-white rounded-[40px] p-10 shadow-premium border border-gray-100 group">
                        <div class="aspect-square rounded-[32px] overflow-hidden mb-10 border border-gray-50">
                          <img :src="item.image" class="w-full h-full object-cover transition-transform duration-1000">
                        </div>
                        <h3 class="text-2xl font-black text-foundation-blue mb-4 tracking-tighter">{{ item.type }}</h3>
                        <p class="text-gray-400 font-medium text-sm mb-8 leading-relaxed italic">{{ item.desc }}</p>
                        <ul class="space-y-3 border-t border-gray-50">
                          <li v-for="spec in item.specs" :key="spec" class="flex items-start text-xs font-bold text-gray-400">
                              <span class="w-1.5 h-1.5 rounded-full bg-foundation-lightblue mr-3 mt-1.5 shrink-0"></span>
                              {{ spec }}
                          </li>
                        </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <!-- Tab: Fees -->
            <div v-else-if="activeTab === 'fees'" :key="'fees'" class="space-y-8">
              <div class="bg-white rounded-[40px] p-10 md:p-16 shadow-premium border border-gray-100 relative overflow-hidden">
                <div class="relative z-10 flex flex-col xl:flex-row items-center gap-16">
                   <div class="flex-grow space-y-8">
                      <h2 class="text-3xl md:text-4xl font-black text-foundation-blue italic">{{ t('service_emergency.fees.title') }}</h2>
                      <div class="space-y-6 text-gray-500 text-lg font-medium leading-relaxed italic">
                         <p>{{ t('service_emergency.fees.paragraph1') }}</p>
                         <p>{{ t('service_emergency.fees.paragraph2') }}</p>
                         <p class="text-foundation-blue font-black">{{ t('service_emergency.fees.paragraph3') }}</p>
                         <p class="text-sm bg-gray-50 p-4 rounded-xl border-l-4 border-foundation-lightblue">{{ t('service_emergency.fees.note') }}</p>
                      </div>
                   </div>
                   <div class="w-full md:w-80 shrink-0">
                      <div class="bg-gradient-to-br from-foundation-blue to-blue-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden group">
                         <div class="relative z-10 space-y-8">
                            <div>
                               <p class="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-2">{{ t('service_emergency.fees.hotline_label') }}</p>
                               <a href="tel:0800056789" class="text-2xl font-black hover:text-foundation-lightblue transition-colors">0800-056-789</a>
                            </div>
                            <div class="pt-8 border-t border-white/10">
                               <p class="text-sm font-bold opacity-80 mb-6 italic">{{ t('service_emergency.fees.more_info') }}</p>
                               <RouterLink to="/contact" class="flex items-center justify-between w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all group/btn">
                                  <span class="font-black">{{ t('service_emergency.fees.contact_us') }}</span>
                                  <Icon name="arrowForward" class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                               </RouterLink>
                            </div>
                         </div>
                         <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </transition>
        </article>

      </div>
    </main>
  </div>
</template>

<style scoped>
.shadow-premium {
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.04);
}

.italic-prose p {
  font-style: italic;
}

/* Tab Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
