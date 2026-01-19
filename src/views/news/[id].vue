<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from '@/components/base/Icon.vue'
import { formatFBNews } from '@/utils/formatFBNews'

const route = useRoute()
const router = useRouter()

// Mock logic to "fetch" news based on ID (using the same data structure as index.vue)
import news from "@/constants/FB_News.json"
const newsItem = ref({})
initNewsItem()
function initNewsItem() {
  const newsList = formatFBNews(news.data)
  newsItem.value = newsList.find((item) => item.id === route.params.id)
  console.log(newsItem.value)
  // newsItem.value = {
  //   id: item.id,
  //   created_time: item?.created_time ? formatDate(item.created_time) : "",
  //   message: item?.message || "",
  //   images: item?.full_picture ? [{
  //     src: item.full_picture,
  //     alt: item.message,
  //     imageLoaded: false
  //   }] : [],
  //   permalink_url: item?.permalink_url || ""
  // }
}
// 處理日期格式
function formatDate(dateString) {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const goBack = () => {
  router.push('/news')
}

// 分享功能
const handleShare = async () => {
  const shareData = {
    title: '生命連線基金會 - 最新消息',
    text: newsItem.value.message.substring(0, 100) + '...',
    url: newsItem.value.permalink_url
  }

  try {
    // 檢查瀏覽器是否支援 Web Share API
    if (navigator.share) {
      await navigator.share(shareData)
      console.log('分享成功')
    } else {
      // 降級方案：複製連結到剪貼簿
      await navigator.clipboard.writeText(window.location.href)
      console.log('連結已複製到剪貼簿！')
    }
  } catch (error) {
    // 使用者取消分享或發生錯誤
    if (error.name !== 'AbortError') {
      console.error('分享失敗:', error)
      // 最終降級方案：嘗試複製連結
      try {
        await navigator.clipboard.writeText(window.location.href)
        console.log('連結已複製到剪貼簿！')
      } catch (clipboardError) {
        console.error('複製失敗:', clipboardError)
      }
    }
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <!-- Article Header Area -->
    <div class="relative h-[30vh] min-h-[300px] overflow-hidden bg-gray-900">
      <img :src="newsItem.full_picture" class="w-full h-full object-cover opacity-70 animate-slow-zoom" :alt="newsItem.message" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-white to-black/30"></div>
      
      <!-- Sticky Back Button -->
      <button 
        @click="goBack" 
        class="absolute top-10 left-10 z-50 p-4 bg-white/10 hover:bg-white text-white hover:text-foundation-blue rounded-full backdrop-blur-xl border border-white/20 transition-all duration-300 group shadow-2xl"
      >
        <Icon name="arrowForward" class="w-6 h-6 rotate-180"></Icon>
      </button>
    </div>

    <!-- Article Content Area -->
    <main class="container mx-auto px-4 md:px-6 pt-12">
      <div class="flex items-center justify-between space-x-6 text-gray-500 font-bold mb-8">
        <span class="italic text-gray-400">{{ newsItem.created_time }}</span>
        <button @click="handleShare" class="px-6 py-3 bg-foundation-lightblue hover:bg-foundation-blue text-white rounded-xl shadow-xl transition-all duration-300 font-black flex items-center">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          分享
        </button>
      </div>
      <article class="prose prose-xl max-w-none">
        <div class="space-y-10 text-gray-600 leading-[1.8] font-medium text-lg md:text-xl">
           <span v-html="newsItem.formattedMessage"></span>
        </div>
      </article>
      <!-- 標籤 -->
      <div v-if="newsItem?.tags?.length" class="my-4 py-4">
        <div class="flex items-center gap-4 flex-wrap font-bold">
          <span v-for="tag in newsItem.tags" :key="tag" class="bg-foundation-lightblue py-2 px-4 rounded-full text-white"># {{ tag }}</span>
        </div>
      </div>
      <!-- 媒體列表 -->
      <div v-if="newsItem.media && newsItem.media.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        <h3 class="text-2xl font-black mb-2 md:col-span-2 text-foundation-blue">媒體列表</h3>
        <!-- 照片 -->
        <div 
          v-for="(media, idx) in newsItem.media.filter(m => m.type === 'photo')" 
          :key="`photo-${idx}`" 
          class="rounded-xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700 aspect-square relative bg-gray-100 max-h-[300px]"
        >
          <a 
            :href="media.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block w-full h-full relative group"
            >
            <!-- Skeleton UI -->
            <div 
              v-if="!media.loaded" 
              class="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>
            
            <img 
              :src="media.src" 
              class="w-full h-full object-cover transition-opacity duration-500" 
              :class="media.loaded ? 'opacity-100' : 'opacity-0'" 
              :alt="newsItem.message" 
              @load="media.loaded = true" 
              loading="lazy"
            >
          </a>
        </div>

        <!-- 影片 -->
        <div 
          v-for="(media, idx) in newsItem.media.filter(m => m.type === 'video')" 
          :key="`video-${idx}`" 
          class="rounded-xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700 aspect-video relative bg-gray-900 max-h-[300px] "
        >
          <a 
            :href="media.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block w-full h-full relative group"
          >
            <!-- 影片縮圖 -->
            <img 
              :src="media.thumbnail" 
              class="w-full h-full object-cover" 
              :alt="newsItem.url"
              loading="lazy"
            >
            
            <!-- 播放按鈕 -->
            <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
              <div class="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-10 h-10 text-foundation-blue ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes slow-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.15); }
}
.animate-slow-zoom {
  animation: slow-zoom 10s linear infinite alternate;
}
</style>
