<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Mock logic to "fetch" news based on ID (using the same data structure as index.vue)
const newsItem = ref({
  id: route.params.id,
  category: '基金會消息',
  author: '生命連線基金會',
  date: '2023.12.24',
  title: '生命連線 20 週年：厚澤民生，共創未來',
  content: `【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」協助整合計畫執行，更與您共創健康價值的願景。

廿年來，生命連線已是全台大最大的獨居老人緊急救護通報中心，服務對象已超過百萬名。近年，生命連線基金會承接「社區醫療群」第三方服務專案，遍及北區、中區及澎湖外島，績效卓著。

未來我們將持續引入美國 Lifeline 技術，發展雲端智慧醫療照護暨個性化高端健康管家服務，守護每一位長輩的笑容！`,
  images: [
    'https://picsum.photos/1200/800?random=1',
    'https://picsum.photos/1200/800?random=2',
    'https://picsum.photos/1200/800?random=3'
  ],
  likes: 245,
  comments: 12,
  isHot: true
})

const goBack = () => {
  router.push('/news')
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <!-- Article Header Area -->
    <div class="relative h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
      <img :src="newsItem.images[0]" class="w-full h-full object-cover opacity-70 scale-105 animate-slow-zoom" alt="News Image">
      <div class="absolute inset-0 bg-gradient-to-t from-white to-black/30"></div>
      
      <!-- Sticky Back Button -->
      <button 
        @click="goBack" 
        class="absolute top-10 left-10 z-50 p-4 bg-white/10 hover:bg-white text-white hover:text-foundation-blue rounded-full backdrop-blur-xl border border-white/20 transition-all duration-300 group shadow-2xl"
      >
        <svg class="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
      </button>

      <!-- Overlay Content -->
      <div class="absolute bottom-0 left-0 w-full p-10 md:p-20 container mx-auto max-w-5xl">
        <!-- 文字加上白色陰影 -->
         <span class="inline-block px-4 py-1.5 bg-foundation-blue text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl">
           {{ newsItem.category }}
         </span>
         <h1 class="text-4xl md:text-6xl font-black text-foundation-blue leading-tight mb-8">
           {{ newsItem.title }}
         </h1>
         <div class="flex items-center space-x-6 text-gray-500 font-bold">
            <div class="flex items-center">
               <div class="w-10 h-10 rounded-full bg-foundation-blue flex items-center justify-center text-white mr-3 shadow-lg">L</div>
               <span>{{ newsItem.author }}</span>
            </div>
            <span>|</span>
            <span>{{ newsItem.date }}</span>
         </div>
      </div>
    </div>

    <!-- Article Content Area -->
    <main class="container mx-auto max-w-4xl px-6 md:px-0 pt-20">
      <article class="prose prose-xl max-w-none">
        <div class="space-y-10 text-gray-600 leading-[1.8] font-medium text-lg md:text-xl">
           <p v-for="(p, i) in newsItem.content.split('\n\n')" :key="i">
             {{ p }}
           </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
           <div v-for="(img, idx) in newsItem.images.slice(1)" :key="idx" class="rounded-[40px] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700 aspect-[4/3]">
              <img :src="img" class="w-full h-full object-cover" alt="Article Image">
           </div>
        </div>

        <div class="p-10 md:p-14 bg-gray-50 rounded-[50px] border border-gray-100 my-20 relative overflow-hidden group">
           <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="space-y-2 text-center md:text-left">
                <p class="text-2xl font-black text-foundation-blue italic">覺得這篇內容有幫助嗎？</p>
                <p class="text-gray-400 font-bold">分享給更多需要健康資訊的朋友吧！</p>
              </div>
              <div class="flex items-center space-x-4">
                 <button class="px-10 py-5 bg-white rounded-2xl shadow-lg border border-gray-100 hover:bg-foundation-blue hover:text-white transition-all duration-300 font-black flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10h4.757c1.27 0 1.912 1.537 1.011 2.438l-7.108 7.108a1 1 0 01-1.414 0l-7.108-7.108C3.235 11.537 3.877 10 5.147 10H10V4.243a1 1 0 011.707-.707L14 10z" /></svg>
                    讚
                 </button>
                 <button class="px-10 py-5 bg-foundation-blue text-white rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 font-black flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    分享
                 </button>
              </div>
           </div>
           <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-foundation-blue/5 rounded-full blur-3xl"></div>
        </div>
      </article>

      <!-- Back To List Bottom -->
      <div class="flex justify-center mt-32">
         <button @click="goBack" class="px-14 py-6 bg-white text-foundation-blue rounded-3xl font-black shadow-2xl hover:-translate-y-2 transition-all flex items-center group">
            <svg class="w-5 h-5 mr-4 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            回到消息總覽
         </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes slow-zoom {
  from { transform: scale(1.05); }
  to { transform: scale(1.15); }
}
.animate-slow-zoom {
  animation: slow-zoom 20s linear infinite alternate;
}
</style>
