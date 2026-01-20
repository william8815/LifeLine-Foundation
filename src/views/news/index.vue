<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import PageHeader from '../../components/layout/PageHeader.vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { formatFBNews } from '@/utils/formatFBNews'

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

const allNews = ref([])
const newsList = ref([])
const isLoadingNews = ref(false)
const newsError = ref(null)
const currentPage = ref(1)
const pageData = ref({
  size: 12,
  total: null,
})
onMounted(async()=> {
  await initPosts()
})
async function initPosts() {
  isLoadingNews.value = true
  newsError.value = null

  try {
    // Facebook Graph API 設定
    const BASE_URL = "https://graph.facebook.com"
    const PAGE_ID = "211410289347262"
    const ACCESS_TOKEN = "EAAMIs5yrlVIBQbZCHqjV0t5KZBGVivehw9tMQi5gZBNZAMDeNH9OPfnGjPwzcDJaMRA0ZBUy92JdmmNYihNOfeqxUlRoI2kLAOiUHZBEAVM4cP7AJKAqR3eolAnMDcCtmg6EhYFo1eCqbAs90vxG89H4si5lKnbfQA8eLbgUjn7ZAr1epqHIOzyF2StqlcddJZC6c4ZCs"
    const FIELDS = "id,message,full_picture,created_time,permalink_url,attachments{media_type,media,url},status_type"
    
    // 建構 API URL
    const apiUrl = `${BASE_URL}/${PAGE_ID}/posts?access_token=${ACCESS_TOKEN}&fields=${FIELDS}`
    
    // 發送 GET 請求
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    // 採用分頁處理 (先做 format 處理，9 筆為一頁)
    if (data?.data?.length) {
      pageData.value.total = Math.ceil(data.data.length / pageData.value.size)
      allNews.value = formatFBNews(data.data)
      newsList.value = allNews.value.slice((currentPage.value - 1) * pageData.value.size, currentPage.value * pageData.value.size)
      console.log(pageData.value)
    } 
  } catch (error) {
    console.error('Failed to fetch Facebook posts:', error)
    newsError.value = error.message
  } finally {
    isLoadingNews.value = false
  }
}

const changePage = (page) => {
  currentPage.value = page
  newsList.value = allNews.value.slice((currentPage.value - 1) * pageData.value.size, currentPage.value * pageData.value.size)
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
      <!-- Skeleton UI Loading State -->
      <div v-if="isLoadingNews" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="n in 12" 
          :key="n" 
          class="bg-white rounded-[16px] shadow-premium overflow-hidden border border-gray-100/50 flex flex-col h-full"
        >
          <!-- Image Skeleton -->
          <div class="aspect-[16/10] bg-gray-200 animate-pulse relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
          
          <!-- Body Skeleton -->
          <div class="p-8 flex-grow flex flex-col space-y-4">
             <div class="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
             <div class="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
             <div class="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
             
             <div class="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
               <div class="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
               <div class="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
             </div>
          </div>
        </div>
      </div>

      <!-- Grid Feed -->
      <transition-group 
        v-else-if="newsList.length > 0"
        name="list" 
        tag="div" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div 
          v-for="item in newsList" 
          :key="item.id"
          class="bg-white rounded-[16px] shadow-premium overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
        >
          <!-- Card Image -->
          <div class="relative aspect-[16/10] overflow-hidden bg-gray-100 overflow-hidden">
            <img 
              :src="item.full_picture" 
              class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" 
              :class="item.imageLoaded ? 'opacity-100' : 'opacity-0'"
              loading="lazy"
              @load="item.imageLoaded = true"
            >
          </div>

          <!-- Card Body -->
          <div class="p-8 flex-grow flex flex-col">
            <p class="text-gray-500 leading-relaxed font-medium text-sm line-clamp-3 mb-8" :style="{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}">
              <span v-html="item.formattedMessage"></span>
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

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center py-20 text-center">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-700 mb-2">目前沒有最新消息</h3>
        <p class="text-gray-500">基金會目前沒有發佈新的動態，請稍後再回來查看。</p>
      </div>

      <!-- pagination -->
      <div class="flex items-center justify-center mt-10 max-w-[600px] mx-auto flex-wrap gap-2">
        <button v-for="page in pageData.total" :key="page" @click="changePage(page)" class="py-2 px-4 rounded-md shadow-md" :class="currentPage === page ? 'bg-foundation-blue text-white' : 'bg-white text-foundation-blue'">{{ page }}</button>
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

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.animate-shimmer {
  animation: shimmer 1.5s infinite;
}
</style>
