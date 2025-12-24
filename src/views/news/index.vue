<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../../components/layout/PageHeader.vue'

const router = useRouter()
const activeCategory = ref('全部')
const categories = ['全部', '熱門動態', '健康衛教', '基金會消息', '活動花絮']

const newsItems = [
  {
    id: 1,
    category: '基金會消息',
    author: '生命連線基金會',
    date: '3 小時前',
    title: '生命連線 20 週年：厚澤民生，共創未來',
    content: '【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」的初衷。未來我們將持續引入美國 Lifeline 技術，強化雲端智慧醫療，守護每一位長輩的笑容！',
    images: ['https://picsum.photos/800/600?random=1'],
    likes: 245,
    comments: 12,
    isHot: true
  },
  {
    id: 2,
    category: '健康衛教',
    author: '醫療顧問團',
    date: '昨日',
    title: '秋季長輩關節照護指南',
    content: '秋意漸濃，長輩的關節照護更不能馬虎！醫師建議每日進行 10 分鐘的居家拉伸運動，能有效減緩關節晨僵現象。若您家中長輩有相關困擾，可以諮詢加盟診所的家醫計畫醫師，規劃專屬的運動方案。#健康長壽 #家醫計畫 #關節照護',
    images: ['https://picsum.photos/800/600?random=2'],
    likes: 128,
    comments: 5,
    isHot: false
  },
  {
    id: 3,
    category: '活動花絮',
    author: '活動小組',
    date: '2023.12.20',
    title: '銀髮樂齡派對圓滿落幕',
    content: '上週末在信義區舉行的「銀髮樂齡派對」圓滿結束！看到長輩們戴上我們的智慧偵測手環，開心地跳著律動舞，志工們都深感欣慰。我們不只是提供通報，更是提供一份「安心」的陪伴。我們的愛心特派員也在現場捕捉到了許多動人的畫面，歡迎大家點擊查看更多現場精彩照片！',
    images: ['https://picsum.photos/800/600?random=4'],
    likes: 89,
    comments: 3,
    isHot: false
  },
  {
    id: 4,
    category: '健康衛教',
    author: '營養師小美',
    date: '2023.12.18',
    title: '地中海飲食：血管年輕的秘密',
    content: '飲食是抗老的第一步！今天來分享「地中海飲食」對預防心血管疾病的益處。多攝取優質蛋白質與堅果，能讓血管更年輕。如果您是我們的家醫計畫會員，可以透過 APP 查看醫師推薦的食譜喔！這份食譜結合了台灣本土食材，讓長輩吃得健康又美味。',
    images: ['https://picsum.photos/800/600?random=5'],
    likes: 56,
    comments: 8,
    isHot: false
  },
  {
    id: 5,
    category: '基金會消息',
    author: '行政部',
    date: '2023.12.15',
    title: '偏鄉醫療物資捐贈計畫啟動',
    content: '為了縮短城鄉醫療差距，生命連線基金會近日啟動了偏鄉醫療物資捐贈計畫，首站來到花蓮偏遠部落，捐贈了多台智慧緊急求救裝置與基礎醫護包。感謝所有捐款人的愛心，讓我們能將這份關懷送到最需要的地方。',
    images: ['https://picsum.photos/800/600?random=6'],
    likes: 312,
    comments: 20,
    isHot: true
  },
  {
    id: 6,
    category: '活動花絮',
    author: '志工服務組',
    date: '2023.12.10',
    title: '冬日送暖：志工居家訪視紀實',
    content: '寒流來襲，我們的志工團隊深入社區對獨居長輩進行居家訪視，除了送上保暖物資也檢查了緊急救援系統的運作情況。溫暖的話語與實際的行動，讓長輩感受到社群的愛。',
    images: ['https://picsum.photos/800/600?random=7'],
    likes: 154,
    comments: 15,
    isHot: false
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === '全部') return newsItems
  if (activeCategory.value === '熱門動態') return newsItems.filter(item => item.isHot)
  return newsItems.filter(item => item.category === activeCategory.value)
})

const goToDetail = (id) => {
  router.push(`/news/${id}`)
}
</script>

<template>
  <div class="bg-[#f0f2f5] min-h-screen pb-20">
    <PageHeader 
      title="最新消息" 
      subtitle="隨時掌握基金會動態與健康衛教資訊"
    />

    <main class="container mx-auto px-4 md:px-6 -mt-10 relative z-30">
      <!-- Category Filter -->
      <div class="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm p-4 mb-10 flex overflow-x-auto no-scrollbar space-x-2 sticky top-24 z-20 border border-white/50">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black whitespace-nowrap transition-all duration-300',
            activeCategory === cat 
              ? 'bg-foundation-blue text-white shadow-lg scale-105' 
              : 'bg-white/50 text-gray-500 hover:bg-foundation-blue/5 hover:text-foundation-blue'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid Feed -->
      <transition-group 
        name="list" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="bg-white rounded-[32px] shadow-premium overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
        >
          <!-- Card Image -->
          <div class="relative aspect-[16/10] overflow-hidden bg-gray-100 overflow-hidden">
            <img 
              :src="item.images[0]" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              loading="lazy"
            >
            <div class="absolute top-4 left-4 flex space-x-2">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-md text-foundation-blue text-[10px] font-black rounded-full shadow-sm border border-white/20">
                {{ item.category }}
              </span>
              <span v-if="item.isHot" class="px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-full shadow-lg flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 114 0 2 2 0 01-4 0z" /></svg>
                HOT
              </span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-8 flex-grow flex flex-col">
            <div class="flex items-center space-x-2 mb-4 text-[11px] font-bold text-gray-400">
              <span>{{ item.author }}</span>
              <span>·</span>
              <span>{{ item.date }}</span>
            </div>
            
            <h3 class="text-xl font-black text-foundation-blue mb-4 line-clamp-2 leading-snug group-hover:text-foundation-lightblue transition-colors">
              {{ item.title }}
            </h3>
            
            <p class="text-gray-500 leading-relaxed font-medium text-sm line-clamp-3 mb-8">
              {{ item.content }}
            </p>

            <div class="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
               <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-1 text-gray-400">
                    <svg class="w-4 h-4 text-foundation-lightblue" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 9.2a2 2 0 00-.8 1.133z" /></svg>
                    <span class="text-xs font-bold">{{ item.likes }}</span>
                  </div>
               </div>
               <button 
                 @click="goToDetail(item.id)" 
                 class="flex items-center text-foundation-blue font-black text-sm hover:text-foundation-lightblue transition-colors group/btn"
               >
                 閱讀更多
                 <svg class="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </button>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- Load More -->
      <div v-if="filteredItems.length > 0" class="flex justify-center mt-20 pb-10">
        <button class="px-10 py-5 bg-white rounded-2xl text-foundation-blue font-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 flex items-center space-x-2">
          <svg class="w-5 h-5 animate-spin text-foundation-lightblue" fill="none" viewBox="0 0 24 24" v-if="loading"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>載入更多精采動態</span>
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.shadow-premium {
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.03);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.list-move {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
