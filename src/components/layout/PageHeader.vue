<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="relative h-[280px] md:h-[360px] overflow-hidden flex items-center bg-foundation-blue">
    <!-- Sophisticated CSS Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Main Gradient -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#2563eb_0%,#1e40af_100%)]"></div>
      
      <!-- Geometric Patterns (Pure CSS) -->
      <div class="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" class="w-full h-full fill-white">
          <circle cx="80" cy="20" r="30" />
          <circle cx="100" cy="60" r="20" />
          <path d="M0,100 L100,0 L100,100 Z" />
        </svg>
      </div>
      
      <!-- Decorative Accent -->
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-foundation-orange/10 rounded-full blur-3xl"></div>
      <div class="absolute top-10 right-20 w-32 h-32 border border-white/10 rounded-full"></div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="max-w-4xl">
        <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 group cursor-default">
          <span class="w-2 h-2 bg-foundation-beige rounded-full animate-pulse"></span>
          <span class="text-white/80 text-xs font-black uppercase tracking-[0.2em]">Lifeline Foundation</span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          {{ title }}
        </h1>
        
        <div v-if="subtitle" class="flex items-center">
          <div class="h-px w-12 bg-foundation-beige mr-6"></div>
          <p class="text-foundation-beige font-bold text-lg md:text-2xl tracking-wide uppercase opacity-90">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
