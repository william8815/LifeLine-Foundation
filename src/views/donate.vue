<script setup>
import PageHeader from '../components/layout/PageHeader.vue'

const donationMethods = [
  {
    title: '郵政劃撥',
    icon: 'post',
    details: [
      { label: '匯入帳號', value: '19578734', highlight: true },
      { label: '戶名', value: '財團法人生命連線基金會' },
    ],
    steps: [
      '請至全國各地郵局填寫劃撥單。',
      '在寄款人欄位填上您的姓名、地址、電話。',
      '若您是本站會員，請在通訊欄註明您的會員暱稱或 email 帳號，以便資料彙整。',
      '本基金會會開立收據並寄至您提供的地址。'
    ]
  },
  {
    title: 'ATM 轉帳',
    icon: 'atm',
    details: [
      { label: '行庫代碼', value: '700', highlight: true },
      { label: '匯入帳號', value: '0001990-0367989', highlight: true },
      { label: '戶名', value: '生命連線基金會' },
    ],
    steps: [
      '完成匯款後請將交易明細表附上您的大名、地址、電話，傳真至 (02) 7718-2828。',
      '若您是本站會員，請別忘了附上您的會員暱稱或 email 帳號，以便資料彙整。',
      '本基金會會開立收據並寄至您提供的地址。'
    ]
  },
  {
    title: '支票捐款',
    icon: 'check',
    details: [
      { label: '抬頭', value: '財團法人生命連線基金會' },
      { label: '備註', value: '請註明「禁止背書轉讓」' },
    ],
    steps: [
      '將支票以掛號寄至：110 台北市信義區忠孝東路五段 552 號 15 樓 生命連線基金會 收。',
      '若您是本站會員，請別忘了附上您的會員暱稱或 email 帳號，以便資料彙整。',
      '本基金會將在該善款入帳後開立收據。'
    ]
  },
  {
    title: '現金捐款',
    icon: 'cash',
    details: [
      { label: '服務門市', value: '本基金會辦公室' },
      { label: '辦公地址', value: '110 台北市信義區忠孝東路五段 552 號 15 樓' },
    ],
    steps: [
      '請親洽本基金會，本會將有專員為您服務。',
      '若您是本站會員，請別忘告知社工您的會員暱稱或 email 帳號。',
      '完成捐款手續後將立即開立收據。'
    ]
  }
]
</script>

<template>
  <div class="bg-gray-50 min-h-screen pb-24">
    <PageHeader 
      title="愛心捐款" 
      subtitle="您的每一份支持，都是長輩力量的來源"
    />

    <main class="container mx-auto px-4 max-w-7xl -mt-10 relative z-10">
      <!-- Intro Section -->
      <section class="bg-white rounded-[40px] shadow-premium p-10 md:p-16 mb-16 relative overflow-hidden text-center border border-gray-100">
        <div class="absolute top-0 right-0 w-64 h-64 bg-foundation-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <span class="inline-block px-4 py-1.5 bg-foundation-blue/10 text-foundation-blue rounded-full text-xs font-black tracking-widest uppercase">Donation Support</span>
          <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-tight italic">
            守護弱勢長者的健康，<br><span class="text-foundation-lightblue">您也可以盡一份力！</span>
          </h2>
          <p class="text-gray-500 text-lg font-medium leading-relaxed italic">
            您的愛心可透過下列管道，傳達到長者的身上，<br class="hidden md:block">生命連線基金會感謝您的熱心參與。
          </p>
          <div class="pt-8 flex justify-center">
            <div class="bg-foundation-blue/5 rounded-3xl p-6 md:p-8 flex items-center space-x-6 border border-foundation-blue/10 group hover:bg-foundation-blue hover:text-white transition-all duration-500 cursor-pointer shadow-sm">
               <div class="w-14 h-14 rounded-2xl bg-foundation-blue flex items-center justify-center text-white shrink-0 shadow-lg group-hover:bg-white group-hover:text-foundation-blue">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               </div>
               <div class="text-left text-foundation-blue group-hover:text-white">
                 <p class="text-sm font-black uppercase tracking-widest opacity-60">Toll-Free Support</p>
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
          class="bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-50 flex flex-col group overflow-hidden"
        >
          <!-- Card Header -->
          <div class="p-8 md:p-12 flex items-start justify-between border-b border-gray-50 bg-gradient-to-br from-white to-gray-50/50">
             <div>
               <h3 class="text-3xl font-black text-foundation-blue mb-4 tracking-tighter">{{ method.title }}</h3>
               <div class="space-y-3">
                 <div v-for="detail in method.details" :key="detail.label" class="flex flex-col md:flex-row md:items-center">
                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest md:w-24 shrink-0">{{ detail.label }}</span>
                    <span :class="['font-black text-lg md:text-xl', detail.highlight ? 'text-foundation-lightblue underline decoration-foundation-lightblue/30 underline-offset-8' : 'text-foundation-blue/80']">{{ detail.value }}</span>
                 </div>
               </div>
             </div>
             <div class="w-16 h-16 bg-foundation-blue/5 rounded-3xl flex items-center justify-center text-foundation-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg v-if="method.icon === 'post'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <svg v-if="method.icon === 'atm'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg v-if="method.icon === 'check'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg v-if="method.icon === 'cash'" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             </div>
          </div>

          <!-- Card Body -->
          <div class="p-8 md:p-12 space-y-6 flex-grow">
            <h4 class="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center">
              <span class="w-8 h-px bg-gray-200 mr-3"></span>
              流程說明
            </h4>
            <ul class="space-y-4">
              <li v-for="(step, sIdx) in method.steps" :key="sIdx" class="flex items-start group/li transition-all">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-foundation-blue/5 text-foundation-blue text-[10px] font-black mr-4 mt-1 shrink-0 group-hover/li:bg-foundation-blue group-hover/li:text-white transition-colors">{{ sIdx + 1 }}</span>
                <p class="text-gray-500 font-medium leading-relaxed italic">{{ step }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Help Section -->
      <section class="mt-24 text-center space-y-8 pb-10">
         <div class="w-20 h-1 bg-foundation-lightblue mx-auto rounded-full"></div>
         <p class="text-foundation-blue font-black text-xl italic">
           「愛心無界，長者有依」— 您的善款入帳後，基金會皆會依法開立正式收據。
         </p>
         <div class="flex flex-wrap justify-center gap-4">
            <RouterLink to="/service/home-care" class="px-10 py-5 bg-foundation-blue text-white rounded-2xl font-black shadow-xl hover:-translate-y-1 transition-all">
              了解服務內容
            </RouterLink>
            <RouterLink to="/news" class="px-10 py-5 bg-white text-foundation-blue border border-gray-100 rounded-2xl font-black shadow-lg hover:shadow-xl transition-all">
              查看最新動態
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
