<script setup>
import PageHeader from '../../components/layout/PageHeader.vue'

// SEO Keywords for this page
const pageTitle = '成立緣起 - 生命連線基金會'
const pageDescription = '財團法人生命連線基金會致力於推動成立有效的緊急救護救援服務，改善獨居長者之生活品質，建立居家長者及家庭支持網絡。'
</script>

<template>
  <div class="bg-white min-h-screen pb-32">
    <PageHeader 
      title="成立緣起" 
      subtitle="先進有效的緊急救護救援服務"
    />

    <main class="relative">
      <!-- Overlapping Card Section -->
      <div class="container mx-auto px-4 md:px-8 -mt-10 md:-mt-20 relative z-30">
        <div class="bg-white rounded-[40px] shadow-[0_20px_100px_rgba(0,0,0,0.08)] p-8 md:p-16 border border-gray-50">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <span class="inline-block px-4 py-1.5 bg-foundation-orange/10 text-foundation-orange rounded-full text-sm font-black uppercase tracking-widest mb-6">Our Vision</span>
              <h2 class="text-3xl md:text-5xl font-black text-foundation-blue leading-tight">
                建立守護生命的初衷
              </h2>
            </div>
            
            <div class="prose prose-lg max-w-none">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                <div class="space-y-6">
                  <p class="text-gray-600 leading-relaxed text-lg first-letter:text-5xl first-letter:font-black first-letter:text-foundation-blue first-letter:mr-3 first-letter:float-left">
                    財團法人生命連線基金會，源於基金會多位發起人為維護國民健康，並參照先進國家，推動成立有效的緊急救護救援服務，改善獨居長者之生活品質。
                  </p>
                  <p class="text-gray-600 leading-relaxed">
                    並改善到醫院前的緊急醫療照顧與通報後送，以期架構成為具功能性與結構性的醫療服務網路。
                  </p>
                </div>
                <div class="bg-foundation-blue rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                  <div class="relative z-10 flex flex-col h-full justify-center">
                    <svg class="w-12 h-12 text-foundation-orange opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM0.0170044 21L0.0170044 18C0.0170044 16.8954 0.912439 16 2.017 16H5.017C5.56928 16 6.017 15.5523 6.017 15V9C6.017 8.44772 5.56928 8 5.017 8H2.017C0.912439 8 0.0170044 7.10457 0.0170044 6V5C0.0170044 3.89543 0.912439 3 2.017 3H7.017C8.12157 3 9.017 3.89543 9.017 5V15C9.017 18.3137 6.33071 21 3.017 21H0.0170044Z" /></svg>
                    <p class="text-xl font-bold leading-relaxed italic mb-0">
                      落實老人福利及照護社區化的政策，結合社福機構及志願服務社區資源，建立居家長者及家庭支持網絡。
                    </p>
                  </div>
                  <!-- Design Accent -->
                  <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>
                </div>
              </div>

              <div class="space-y-8 text-gray-600 text-lg leading-relaxed mb-20">
                <p>
                  提供獨居長者、身心障礙、及弱勢群族辦理各項諮詢服務，心理諮商、團康活動、居家等服務項目，期使民眾在心理、生理、社會及育樂等各方面得以均衡發展，以協助獨居長者、身心障礙者之家庭、及弱勢群族，減輕生活壓力，使其能自立自主的生活。
                </p>
                <p>
                  減少家人及社會之照顧負擔及促進醫藥保健、生命保護和社會福祉之統合，進行相關之研究發展和教育宣導工作，加強與國際有關機構交流，增進國民健康福祉及舉辦或捐助社區照護服務事業為宗旨。
                </p>
                <p>
                  發展社區照護及加強環境保護，而發起募捐並擬於民國八十九年九月成立。其主要的目的在於結合各方力量組成智庫，並致力於從事政策性、學術性、教育性與技術性之開發研究，期能加速各項建設，早日實現安和樂利的生活環境。
                </p>
              </div>

              <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-20"></div>

              <!-- Key Pillars Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                <div class="group p-8 rounded-[32px] bg-gray-50 border border-transparent hover:border-foundation-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-foundation-blue/10 transition-all duration-500">
                  <div class="w-14 h-14 bg-foundation-blue rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-lg group-hover:-rotate-6 transition-transform">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 class="text-xl font-black text-foundation-blue mb-4">緊急救護救援</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">參照先進國家標準，建立功能完善的通報後送網絡，守護每一份緊急需求。</p>
                </div>

                <div class="group p-8 rounded-[32px] bg-gray-50 border border-transparent hover:border-foundation-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-foundation-blue/10 transition-all duration-500">
                  <div class="w-14 h-14 bg-foundation-blue rounded-2xl flex items-center justify-center mb-8 shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h4 class="text-xl font-black text-foundation-blue mb-4">社區照護連結</h4>
                  <p class="text-gray-500 text-sm leading-relaxed">整合社福機構與志工資源，將關懷實踐於鄰里，實現照護社區化。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
