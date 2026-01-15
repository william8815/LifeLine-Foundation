<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'

// SEO Metadata
useHead({
  title: '最新消息 | 生命連線基金會 LifeLine Foundation - 掌握健康與關懷動態',
  meta: [
    { 
      name: 'keywords', 
      content: '最新消息, 生命連線消息, 健康衛教, 銀髮活動, 基金會公告, 長輩照護資訊, 醫療新聞, 社會公益動態' 
    }
  ]
})

useSeoMeta({
  title: '最新消息 | 生命連線基金會 LifeLine Foundation - 掌握健康與關懷動態',
  description: '隨時掌握生命連線基金會的最即時動態。我們提供專業的健康衛教資訊、基金會重要公告、活動花絮以及長輩照護資源。透過新聞分享，將「厚澤民生」的愛心傳遞到每個角落。',
  ogTitle: '最新消息 - 掌握健康衛教與基金會動態 | 生命連線基金會',
  ogDescription: '廿年專業背景，守護百萬生命。獲取最新的健康衛教資訊與基金會活動公告。',
  twitterCard: 'summary_large_image',
  twitterTitle: '最新消息 | 生命連線基金會 LifeLine Foundation',
  twitterDescription: '掌握最新的健康衛教與基金會動態。'
})

const posts = [
  {
    id: "4059319334310295_3799303623645202",
    message: "【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」的初衷。未來我們將持續引入美國 Lifeline 技術，強化雲端智慧醫療，守護每一位長輩的笑容！",
    full_picture: "https://picsum.photos/800/600?random=1",
    created_time: "2024-10-29T12:26:32+0000"
  },
  {
    id: "4059319334310295_1716316915277227",
    message: "秋意漸濃，長輩的關節照護更不能馬虎！醫師建議每日進行 10 分鐘的居家拉伸運動，能有效減緩關節晨僵現象。若您家中長輩有相關困擾，可以諮詢加盟診所的家醫計畫醫師，規劃專屬的運動方案。#健康長壽 #家醫計畫 #關節照護",
    full_picture: "https://picsum.photos/800/600?random=2",
    created_time: "2016-07-02T14:58:26+0000"
  },
  {
    id: "4059319334310295_1547912345451019",
    message: "上週末在信義區舉行的「銀髮樂齡派對」圓滿結束！看到長輩們戴上我們的智慧偵測手環，開心地跳著律動舞，志工們都深感欣慰。我們不只是提供通報，更是提供一份「安心」的陪伴。我們的愛心特派員也在現場捕捉到了許多動人的畫面，歡迎大家點擊查看更多現場精彩照片！",
    full_picture: "https://picsum.photos/800/600?random=3",
    created_time: "2015-02-04T07:25:00+0000"
  },
  {
    id: "4059319334310295_3799303623645202",
    message: "【賀！生命連線 20 週年】感謝大家陪伴我們走過二十個年頭。從創立初期的幾間診所，到現在全台五百家加盟醫護點的守護網，我們始終堅持「厚澤民生」的初衷。未來我們將持續引入美國 Lifeline 技術，強化雲端智慧醫療，守護每一位長輩的笑容！",
    full_picture: "https://picsum.photos/800/600?random=1",
    created_time: "2024-10-29T12:26:32+0000"
  },
  {
    id: "4059319334310295_1716316915277227",
    message: "秋意漸濃，長輩的關節照護更不能馬虎！醫師建議每日進行 10 分鐘的居家拉伸運動，能有效減緩關節晨僵現象。若您家中長輩有相關困擾，可以諮詢加盟診所的家醫計畫醫師，規劃專屬的運動方案。#健康長壽 #家醫計畫 #關節照護",
    full_picture: "https://picsum.photos/800/600?random=2",
    created_time: "2016-07-02T14:58:26+0000"
  },
  {
    id: "4059319334310295_1547912345451019",
    message: "上週末在信義區舉行的「銀髮樂齡派對」圓滿結束！看到長輩們戴上我們的智慧偵測手環，開心地跳著律動舞，志工們都深感欣慰。我們不只是提供通報，更是提供一份「安心」的陪伴。我們的愛心特派員也在現場捕捉到了許多動人的畫面，歡迎大家點擊查看更多現場精彩照片！",
    full_picture: "https://picsum.photos/800/600?random=3",
    created_time: "2015-02-04T07:25:00+0000"
  }
]

const newsList = ref([])
initPosts()
function initPosts() {
  newsList.value = posts.map((item)=> {
    return {
      id: item.id,
      created_time: item?.created_time ? formatDate(item.created_time) : "",
      message: item?.message || "",
      images: item?.full_picture ? [item.full_picture] : [],
      imageLoaded: false
    }
  })
}

// 處理日期格式
function formatDate(dateString) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

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
      <!-- Grid Feed -->
      <transition-group 
        name="list" 
        tag="div" 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div 
          v-for="item in newsList" 
          :key="item.id"
          class="bg-white rounded-[32px] shadow-premium overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
        >
          <!-- Card Image -->
          <div class="relative aspect-[16/10] overflow-hidden bg-gray-100 overflow-hidden">
            <img 
              :src="item.images[0]" 
              class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" 
              :class="item.imageLoaded ? 'opacity-100' : 'opacity-0'"
              loading="lazy"
              @load="item.imageLoaded = true"
            >
          </div>

          <!-- Card Body -->
          <div class="p-8 flex-grow flex flex-col">
            <p class="text-gray-500 leading-relaxed font-medium text-sm line-clamp-3 mb-8" :style="{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}">
              {{ item.message }}
            </p>

            <div class="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                <div class="flex items-center space-x-2 text-[11px] font-bold text-gray-400">
                  <span>{{ item.created_time }}</span>
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
      <!-- <div v-if="filteredItems.length > 0" class="flex justify-center mt-20 pb-10">
        <button class="px-10 py-5 bg-white rounded-2xl text-foundation-blue font-black shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 flex items-center space-x-2">
          <svg class="w-5 h-5 animate-spin text-foundation-lightblue" fill="none" viewBox="0 0 24 24" v-if="loading"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>載入更多精采動態</span>
        </button>
      </div> -->
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
