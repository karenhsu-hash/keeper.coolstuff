<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Cloud,
  Folder,
  Gift,
  Home,
  Lock,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Tag,
  UserPlus,
  Zap,
} from 'lucide-vue-next'
import siteContent from './content/siteContent'

const introIcons = {
  message: MessageCircle,
  folder: Folder,
  sparkles: Sparkles,
  cloud: Cloud,
}

const caseIcons = {
  home: Home,
  briefcase: Briefcase,
  palette: Palette,
}

const showHeader = ref(true) // Show header by default when at top
const scrollY = ref(0) // Track scroll position for transparency
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      scrollY.value = currentScrollY
      
      // Always show header, adjust visibility based on scroll direction
      if (currentScrollY > 100) {
        showHeader.value = true
      } else {
        showHeader.value = true // Keep visible at top
      }
      
      lastScrollY = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

// Smooth scroll handler for anchor links
const handleAnchorClick = (e, targetId) => {
  e.preventDefault()
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    const headerOffset = 100
    const elementPosition = targetElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Dynamic counter for statistics
const statValues = ref({})
const hasAnimated = ref({})

const animateCounter = (key, targetValue, duration = 2000) => {
  if (hasAnimated.value[key]) return
  
  hasAnimated.value[key] = true
  const startValue = 0
  const startTime = performance.now()
  
  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)
    
    statValues.value[key] = currentValue
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      statValues.value[key] = targetValue
    }
  }
  
  requestAnimationFrame(updateCounter)
}

// Setup counter observer
const setupCounterObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statKey = entry.target.dataset.statKey
          const targetValue = parseInt(entry.target.dataset.targetValue, 10)
          if (statKey && !isNaN(targetValue) && !hasAnimated.value[statKey]) {
            animateCounter(statKey, targetValue)
          }
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '0px',
    }
  )

  setTimeout(() => {
    document.querySelectorAll('[data-stat-key]').forEach((el) => {
      observer.observe(el)
    })
  }, 200)

  return observer
}

// Scroll reveal animation
const setupScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '100px 0px -50px 0px', // Increased top margin to detect elements at top
    }
  )

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    // Check if element is already in viewport before observing
    const rect = el.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0
    
    if (isVisible) {
      // Immediately reveal elements that are already visible
      el.classList.add('revealed')
    }
    
    observer.observe(el)
  })

  return observer
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(() => {
    setupScrollReveal()
    setupCounterObserver()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


// Format pain point text with markdown bold support
const formatPainPointText = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#6F4E37]">$1</strong>')
}

// Format case solution point with markdown bold support
const formatCasePoint = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#5D4037]">$1</strong>')
}
</script>

<template>
  <div id="top" class="relative min-h-screen overflow-hidden text-[rgb(var(--text-main))]">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <svg
        class="absolute -left-24 top-20 h-72 w-72 opacity-70"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EFEBE9"
          d="M47.5,-59.3C61.5,-48.6,72.8,-33.6,76.5,-16.8C80.2,0.1,76.3,18.8,66.5,33.1C56.6,47.4,40.7,57.2,24.6,62.9C8.5,68.5,-7.9,70,-26.3,66.9C-44.7,63.8,-65.1,56.1,-74.2,41.4C-83.2,26.7,-80.8,5,-74.7,-13.6C-68.7,-32.2,-59,-47.7,-45.8,-58.5C-32.6,-69.3,-16.3,-75.4,0.5,-76C17.3,-76.6,34.6,-71.4,47.5,-59.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        class="absolute -right-32 top-[28rem] h-80 w-80 opacity-70"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EFEBE9"
          d="M49.7,-55.5C65.3,-46.7,79.2,-31.2,80.2,-14C81.1,3.2,69.1,22.2,56.5,36.7C43.9,51.2,30.7,61.1,15.8,66.1C0.8,71.1,-15.9,71.1,-33.1,66.4C-50.3,61.8,-68,52.6,-75.8,37.4C-83.6,22.2,-81.4,1.1,-74.7,-17.2C-67.9,-35.5,-56.5,-51.1,-42.2,-60.6C-27.8,-70.2,-10.5,-73.7,4.9,-79.5C20.4,-85.3,40.8,-93.3,49.7,-55.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    <header
      class="fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300"
      :class="[
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        scrollY > 100 ? 'bg-white/80 backdrop-blur-md border-[#E7DED4]/30' : 'bg-white/95 backdrop-blur-sm border-[#E7DED4]/50'
      ]"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div class="flex items-center gap-2 md:gap-3">
          <img :src="siteContent.assets.logo" alt="酷存助手 Logo" class="h-8 w-auto md:h-10" />
          <div class="text-sm font-medium tracking-wide text-[#4E342E] md:text-base">
            {{ siteContent.brand.name }}
          </div>
        </div>
        <nav class="hidden gap-8 text-lg text-[#6B5E55] md:flex md:text-base">
          <a
            v-for="item in siteContent.nav"
            :key="item"
            class="transition-colors hover:text-[#4E342E]"
            :href="`#${item}`"
            @click.prevent="handleAnchorClick($event, item)"
          >
            {{ item }}
          </a>
        </nav>
        <a
          :href="siteContent.lineOfficialAccount.url"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden items-center gap-2 rounded-2xl bg-[#6F4E37] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:bg-[#8B4513] md:flex md:px-5 md:py-2.5 md:text-base"
        >
          {{ siteContent.hero.cta }}
          <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" :stroke-width="2" />
        </a>
      </div>
    </header>

    <main class="relative">
      <!-- Hero Section -->
      <section class="bg-[#FAF9F6]">
        <div class="mx-auto max-w-6xl px-4 pt-20 pb-12 md:px-6 md:pt-[120px] md:pb-[120px]">
          <div class="grid gap-8 md:gap-16 lg:grid-cols-[6fr_4fr] lg:items-center">
            <!-- Left Column: Text Content -->
            <div class="scroll-reveal space-y-6 text-center md:space-y-12 lg:text-left">
              <h1 class="text-3xl font-bold leading-[1.2] tracking-[-0.02em] text-[#3C3C3C] md:text-5xl lg:text-6xl">
                告別過期與混亂，打造您的 LINE 備份資料夾
              </h1>
              <p class="text-base leading-[1.6] text-[#4B5563] md:text-lg lg:text-xl">
                不再受限於 7 天下載期限。自動同步 Google Drive，結合 AI 檔案命名，讓團隊資料永不過期。
              </p>
              <div class="flex flex-wrap justify-center gap-4 pt-2 md:pt-0 lg:justify-start">
                <a
                  :href="siteContent.lineOfficialAccount.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group inline-flex items-center gap-2 rounded-lg bg-[#6F4E37] px-6 py-3 text-base font-semibold text-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all hover:bg-[#8B4513] hover:-translate-y-0.5 md:px-8 md:py-4"
                >
                  立即開啟自動備份
                  <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" :stroke-width="2" />
                </a>
              </div>
            </div>
            
            <!-- Right Column: Hero Banner Image -->
            <div class="scroll-reveal flex items-center justify-center">
              <div class="relative w-full max-w-md overflow-hidden rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <img
                  src="/images/hero-banner.jpg"
                  alt="LINE 備份與雲端同步解決方案"
                  class="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="stats-section" class="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:pb-16">
          <div
            v-for="(stat, index) in siteContent.stats"
            :key="stat.label"
            :data-stat-key="`stat-${index}`"
            :data-target-value="stat.value"
            class="scroll-reveal stats-card-active lits-card rounded-lg px-4 py-6 text-center sm:px-6 sm:py-8"
          >
            <div class="stats-number-active text-3xl font-semibold text-[#6F4E37] sm:text-4xl md:text-6xl">
              {{ statValues[`stat-${index}`] !== undefined ? statValues[`stat-${index}`] : 0 }}
              <span class="stats-indicator"></span>
            </div>
            <div class="mt-2 text-sm text-[#6B5E55] sm:text-base md:text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </section>

      <!-- Pain Point Section -->
      <section class="bg-[#FAF9F6]">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-[120px]">
          <div class="mb-8 text-center md:mb-12">
            <p class="text-sm text-[#6B5E55] md:text-base lg:text-lg">{{ siteContent.painPoint.caption }}</p>
            <h2 class="mt-2 text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">
              {{ siteContent.painPoint.heading }}
            </h2>
          </div>
          <div class="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            <!-- Text Content -->
            <div class="scroll-reveal space-y-4 md:space-y-6">
              <div class="space-y-3 text-base leading-relaxed text-[#5D4037] md:space-y-4 md:text-lg lg:text-xl">
                <p v-for="(paragraph, index) in siteContent.painPoint.content" :key="index">
                  <span v-html="formatPainPointText(paragraph)"></span>
                </p>
              </div>
              <a
                :href="siteContent.lineOfficialAccount.url"
                target="_blank"
                rel="noopener noreferrer"
                class="lits-button group mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-[#6F4E37] bg-white px-5 py-2.5 text-sm font-semibold text-[#6F4E37] transition hover:bg-[#6F4E37] hover:text-white md:mt-6 md:px-6 md:py-3 md:text-base lg:text-lg"
              >
                {{ siteContent.painPoint.cta }}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" :stroke-width="2" />
              </a>
            </div>
            <!-- Image -->
            <div class="scroll-reveal flex items-center justify-center">
              <img
                :src="siteContent.painPoint.image"
                alt="解決照片遺失問題 - 酷存助手"
                class="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Service Section -->
      <section id="服務介紹" class="bg-white">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-[120px]">
          <div class="mb-8 text-center md:mb-12">
            <p class="text-sm text-[#6B5E55] md:text-base lg:text-lg">Service</p>
            <h2 class="mt-2 text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">
              Personal Data Safe, Always on Duty.
            </h2>
            <p class="mt-2 text-sm text-[#6B5E55] md:text-base lg:text-lg">{{ siteContent.brand.slogan }}</p>
          </div>
          <div class="grid gap-4 md:gap-6 lg:grid-cols-2">
            <div
              v-for="item in siteContent.intro"
              :key="item.title"
              class="scroll-reveal lits-card rounded-lg p-4 md:p-6"
            >
              <div class="flex items-center gap-3">
                <div class="rounded-full bg-[#EFE6E0] p-2 text-[#4E342E]">
                  <component :is="introIcons[item.icon]" class="h-4 w-4 md:h-5 md:w-5" :stroke-width="1.25" />
                </div>
                <h3 class="text-base font-semibold text-[#3C3C3C] md:text-lg lg:text-xl">{{ item.title }}</h3>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-[#6B5E55] md:text-base lg:text-sm">{{ item.body }}</p>
            </div>
          </div>
          <!-- Why Choose Section -->
          <div class="scroll-reveal lits-card mt-8 rounded-lg p-6 md:mt-12 md:p-10">
            <div class="mb-6 text-center md:mb-10">
              <h3 class="text-2xl font-semibold text-[#3C3C3C] md:text-3xl lg:text-4xl">為什麼選擇酷存助手？</h3>
            </div>
            <div class="grid gap-8 lg:grid-cols-3">
              <div class="flex flex-col items-center text-center">
                <div class="mb-4 rounded-full bg-[#EFE6E0] p-4">
                  <Lock class="h-6 w-6 text-[#6F4E37]" :stroke-width="1.5" />
                </div>
                <h4 class="mb-3 text-xl font-semibold text-[#3C3C3C] md:text-lg">資料 0 留存</h4>
                <p class="text-base leading-relaxed text-[#6B5E55] md:text-sm">
                  我們不經手、不儲存您的隱私。檔案直接由 LINE 串流至您的個人 Google Drive，主權完整歸於您。
                </p>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="mb-4 rounded-full bg-[#EFE6E0] p-4">
                  <Zap class="h-8 w-8 md:h-6 md:w-6 text-[#6F4E37]" :stroke-width="1.5" />
                </div>
                <h4 class="mb-3 text-xl font-semibold text-[#3C3C3C] md:text-lg">全自動無感</h4>
                <p class="text-base leading-relaxed text-[#6B5E55] md:text-sm">
                  無需手動操作。檔案發出的那一刻，備份任務即刻啟動，讓您專注於生活與工作。
                </p>
              </div>
              <div class="flex flex-col items-center text-center">
                <div class="mb-4 rounded-full bg-[#EFE6E0] p-4">
                  <ShieldCheck class="h-8 w-8 md:h-6 md:w-6 text-[#6F4E37]" :stroke-width="1.5" />
                </div>
                <h4 class="mb-3 text-xl font-semibold text-[#3C3C3C] md:text-lg">永久防過期</h4>
                <p class="text-base leading-relaxed text-[#6B5E55] md:text-sm">
                  擺脫 LINE 儲存期限的枷鎖。只要您的雲端空間還在，回憶與文件就永遠都在。
                </p>
              </div>
            </div>
          </div>

          <!-- Workflow Section -->
          <div class="scroll-reveal mt-12 md:mt-20">
            <div class="mb-8 text-center md:mb-12">
              <h3 class="text-3xl font-bold text-[#3C3C3C] md:text-5xl lg:text-6xl">
                {{ siteContent.workflow.title }}
              </h3>
            </div>
            <!-- 3-Step Workflow Grid -->
            <div class="grid border border-[#E0D7D0] bg-white lg:grid-cols-3">
              <div
                v-for="(step, index) in siteContent.workflow.steps"
                :key="step.number"
                class="p-6 md:p-10 lg:border-r lg:border-[#E0D7D0]"
                :class="index < siteContent.workflow.steps.length - 1 ? 'border-b border-[#E0D7D0] lg:border-b-0' : ''"
              >
                <div class="mb-6 md:mb-8">
                  <span class="text-5xl font-light tracking-tight text-[#6F4E37] md:text-6xl lg:text-7xl">{{ step.number }}</span>
                </div>
                <h4 class="mb-3 text-xl font-bold text-[#3C3C3C] md:mb-4 md:text-2xl lg:text-xl">{{ step.title }}</h4>
                <p class="text-base leading-relaxed text-[#6B5E55] md:text-lg lg:text-base">{{ step.description }}</p>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8 flex flex-col items-center gap-3 md:mt-12">
              <a
                :href="siteContent.lineOfficialAccount.url"
                target="_blank"
                rel="noopener noreferrer"
                class="lits-button group flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white md:px-10 md:py-4 md:text-lg lg:text-base"
              >
                <MessageCircle class="h-4 w-4 md:h-5 md:w-5" :stroke-width="2" />
                {{ siteContent.workflow.cta }}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" :stroke-width="2" />
              </a>
              <p class="text-xs text-[#6F4E37] font-medium md:text-sm">
                {{ siteContent.workflow.ctaSubtext }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section id="方案與價格" class="bg-[#FAF9F6]">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-[120px]">
          <div class="mb-8 text-center md:mb-12">
            <p class="text-sm text-[#6B5E55] md:text-base lg:text-lg">Pricing</p>
            <h2 class="mt-2 text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">價格與方案</h2>
            <p class="mt-2 text-sm text-[#6B5E55] md:text-base lg:text-lg">選擇適合您的方案</p>
          </div>
          <!-- Setup Fee Waiver Banner -->
          <div class="scroll-reveal mb-6 rounded-lg border border-[#6F4E37] bg-white p-4 md:mb-8 md:p-6">
            <div class="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
              <div class="flex items-center gap-3 md:gap-4">
                <Gift class="h-5 w-5 text-[#6F4E37] md:h-6 md:w-6" :stroke-width="2" />
                <div>
                  <h3 class="text-lg font-semibold text-[#3C3C3C] md:text-xl lg:text-lg">限時優惠</h3>
                  <p class="mt-1 text-sm text-[#6B5E55] md:text-base lg:text-sm">
                    系統設置費 <span class="font-semibold text-[#6F4E37]">$5,000</span> 全額減免
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-sm text-[#6B5E55] md:text-base lg:text-sm">
                <span class="line-through">原價 $5,000</span>
                <span class="font-semibold text-[#6F4E37]">→ 現在 $0</span>
              </div>
            </div>
          </div>

          <div class="grid gap-4 md:gap-6 lg:grid-cols-3">
            <div
              v-for="plan in siteContent.pricing.plans"
              :key="plan.name"
              class="scroll-reveal lits-card relative rounded-lg p-5 md:p-8"
              :class="plan.recommended ? '!border-2 !border-[#6F4E37]' : ''"
            >
              <div v-if="plan.recommended" class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span class="rounded-full bg-[#6F4E37] px-3 py-1 text-xs font-semibold text-white">
                  推薦
                </span>
              </div>
              <div class="space-y-4 md:space-y-5">
                <div>
                  <p class="text-xl font-semibold text-[#3C3C3C] md:text-2xl lg:text-xl">{{ plan.name }}</p>
                  <div class="mt-3 flex items-baseline gap-2 md:mt-4 md:gap-3">
                    <p class="text-3xl font-bold text-[#6F4E37] md:text-4xl lg:text-5xl">{{ plan.price }}</p>
                    <p v-if="plan.originalPrice" class="text-base text-[#6B5E55] line-through md:text-lg lg:text-base">
                      {{ plan.originalPrice }}
                    </p>
                  </div>
                  <div class="mt-2 flex items-center gap-2 text-sm text-[#6B5E55] md:mt-3 md:text-base lg:text-lg">
                    <span>設置費：</span>
                    <span class="font-semibold text-[#6F4E37]">{{ plan.setupFee }}</span>
                    <span v-if="plan.originalSetupFee" class="line-through text-xs md:text-sm lg:text-base">
                      {{ plan.originalSetupFee }}
                    </span>
                  </div>
                </div>
                <div class="border-t border-[#E0D7D0] pt-5">
                  <ul class="space-y-3 text-lg text-[#6B5E55] md:text-base">
                    <li v-for="bullet in plan.bullets" :key="bullet" class="flex items-start gap-3">
                      <CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6F4E37]" :stroke-width="2" />
                      <span>{{ bullet }}</span>
                    </li>
                  </ul>
                </div>
                <a
                  :href="siteContent.lineOfficialAccount.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="lits-button group mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#6F4E37] bg-white px-5 py-3.5 text-lg font-semibold text-[#6F4E37] transition hover:bg-[#6F4E37] hover:text-white md:text-base"
                >
                  {{ siteContent.pricing.cta }}
                  <ArrowRight class="h-6 w-6 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" :stroke-width="2" />
                </a>
                <p class="text-center text-base text-[#6F4E37] font-medium md:text-sm">
                  {{ siteContent.pricing.ctaSubtext }}
                </p>
              </div>
            </div>
          </div>
          <div class="scroll-reveal lits-card mt-12 rounded-lg p-5 md:mt-16 md:p-8">
            <h3 class="text-xl font-semibold text-[#3C3C3C] md:text-2xl lg:text-xl">更多商業方案</h3>
            <div class="mt-4 grid gap-4 md:mt-6 md:gap-6 lg:grid-cols-3">
              <div
                v-for="tier in siteContent.pricing.businessTiers"
                :key="tier.name"
                class="rounded-lg border border-[#E0D7D0] bg-white p-4 md:p-5"
              >
                <p class="text-base font-semibold text-[#3C3C3C] md:text-lg lg:text-base">{{ tier.name }}</p>
                <p class="mt-2 text-xl font-semibold text-[#3C3C3C] md:mt-3 md:text-2xl lg:text-xl">{{ tier.price }}</p>
                <p class="mt-1 text-sm text-[#6B5E55] md:mt-2 md:text-base lg:text-sm">{{ tier.groups }}</p>
              </div>
            </div>
            <div class="mt-6 space-y-3">
              <div
                v-for="(note, index) in siteContent.pricing.notes"
                :key="index"
                class="flex items-start gap-3 text-lg text-[#6B5E55] md:text-base"
                :class="index === 0 ? 'rounded-lg border-2 border-[#6F4E37]/30 bg-gradient-to-r from-[#FFF8F0] to-[#FFFDF5] p-4 font-semibold text-[#4E342E]' : ''"
              >
                <span v-if="index === 0" class="flex-shrink-0">
                  <Gift class="h-5 w-5 text-[#6F4E37]" :stroke-width="2" />
                </span>
                <span>{{ note }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Who Needs Section -->
      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-[120px]">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">
              {{ siteContent.whoNeeds.title }}
            </h2>
          </div>
          <div class="grid gap-6 md:gap-8 lg:grid-cols-3">
            <div
              v-for="item in siteContent.whoNeeds.items"
              :key="item.title"
              class="scroll-reveal flex flex-col items-center text-center"
            >
              <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFE6E0] md:mb-6 md:h-20 md:w-20">
                <component
                  :is="item.icon === 'briefcase' ? Briefcase : item.icon === 'palette' ? Palette : Home"
                  class="h-8 w-8 text-[#6F4E37] md:h-10 md:w-10"
                  :stroke-width="1.5"
                />
              </div>
              <h3 class="mb-3 text-xl font-semibold text-[#3C3C3C] md:mb-4 md:text-2xl lg:text-xl">{{ item.title }}</h3>
              <p class="text-base leading-relaxed text-[#6B5E55] md:text-lg lg:text-base">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Value Section (Cross-Value Style) -->
      <section class="bg-white">
        <div class="mx-auto max-w-6xl px-4 pt-12 pb-8 md:px-6 md:pt-[120px] md:pb-[60px]">
          <!-- Introduction -->
          <div class="mb-12 text-center md:mb-16">
            <h2 class="mb-4 text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">酷存助手的核心價值</h2>
            <p class="mx-auto max-w-3xl text-base leading-relaxed text-[#6B5E55] md:text-lg lg:text-xl">
              檔案發出的那一刻，守護就已經開始。我們不只是備份工具，更是您數位資產的永久守護者。
            </p>
          </div>

          <!-- Common Pain Points -->
          <div class="mb-12 md:mb-20">
            <h3 class="mb-6 text-center text-2xl font-semibold text-[#3C3C3C] md:mb-8 md:text-3xl lg:text-2xl">常見困擾</h3>
            <div class="grid gap-4 md:grid-cols-3 md:gap-6">
              <div
                v-for="(caseItem, index) in siteContent.cases"
                :key="`pain-${index}`"
                class="scroll-reveal rounded-lg border border-[#E0D7D0] bg-[#FAF9F6] p-4 transition-all hover:border-[#6F4E37] hover:shadow-lg md:p-6"
              >
                <div class="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#6F4E37] text-base font-bold text-white md:h-10 md:w-10 md:text-lg">
                    {{ index + 1 }}
                  </div>
                  <h4 class="text-base font-semibold text-[#3C3C3C] md:text-lg lg:text-base">{{ caseItem.title }}</h4>
                </div>
                <p class="text-sm italic leading-relaxed text-[#757575] md:text-base lg:text-sm">
                  {{ caseItem.userQuote }}
                </p>
              </div>
            </div>
          </div>

          <!-- Core Strengths / Solutions -->
          <div class="mb-12 md:mb-20">
            <h3 class="mb-8 text-center text-2xl font-semibold text-[#3C3C3C] md:mb-12 md:text-3xl lg:text-2xl">酷存助手的核心優勢</h3>
            <div class="flex flex-col gap-6 md:gap-8">
              <div
                v-for="(caseItem, index) in siteContent.cases"
                :key="`strength-${index}`"
                class="scroll-reveal group flex flex-col overflow-hidden rounded-lg border border-[#E0D7D0] bg-white transition-all hover:border-[#6F4E37] hover:shadow-xl md:flex-row"
              >
                <!-- Image Background -->
                <div class="relative h-48 w-full overflow-hidden sm:h-64 md:h-auto md:w-1/2">
                  <img
                    :src="caseItem.image"
                    :alt="caseItem.title"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style="filter: sepia(0.15) brightness(1.02);"
                  />
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/80 md:bg-gradient-to-b"></div>
                  <div class="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                    <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#6F4E37] shadow-md md:px-4 md:py-1.5 md:text-sm">
                      CASE {{ caseItem.number }}
                    </span>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="flex flex-1 flex-col justify-center p-4 md:p-8">
                  <h4 class="mb-3 text-xl font-bold text-[#3C3C3C] md:mb-4 md:text-2xl lg:text-xl">{{ caseItem.title }}</h4>
                  <div class="mb-4 md:mb-6">
                    <h5 class="mb-2 text-base font-semibold text-[#5D4037] md:mb-3 md:text-lg lg:text-base">
                      {{ caseItem.solution.title }}
                    </h5>
                    <ul class="space-y-2 md:space-y-3">
                      <li
                        v-for="(point, pointIndex) in caseItem.solution.points"
                        :key="pointIndex"
                        class="flex items-start gap-2 text-sm leading-relaxed text-[#5D4037] md:gap-3 md:text-base lg:text-sm"
                      >
                        <CheckCircle class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6F4E37] md:h-5 md:w-5" :stroke-width="2" />
                        <span v-html="formatCasePoint(point)"></span>
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Keywords -->
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="keyword in caseItem.keywords"
                      :key="keyword"
                      class="rounded-full bg-[#F5F1EE] px-3 py-1 text-xs font-medium text-[#6F4E37]"
                    >
                      #{{ keyword }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="常見問題" class="bg-white">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-[120px]">
          <div class="mb-8 text-center md:mb-12">
            <p class="text-base text-[#6B5E55] md:text-lg lg:text-xl">FAQ</p>
            <h2 class="mt-2 text-3xl font-semibold text-[#3C3C3C] md:text-5xl lg:text-6xl">常見問題</h2>
          </div>
          <div class="grid gap-3 md:gap-4 lg:grid-cols-2">
            <details
              v-for="item in siteContent.faqs"
              :key="item.q"
              class="scroll-reveal lits-card group rounded-lg p-4 md:p-6"
            >
              <summary class="flex cursor-pointer list-none items-center justify-between gap-3 md:gap-4">
                <span class="text-base font-semibold text-[#3C3C3C] md:text-lg lg:text-base">{{ item.q }}</span>
                <ChevronDown
                  class="h-5 w-5 flex-shrink-0 text-[#4E342E] transition group-open:rotate-180 md:h-6 md:w-6"
                  :stroke-width="1.25"
                />
              </summary>
              <p class="mt-3 text-sm leading-relaxed text-[#6B5E55] md:mt-4 md:text-base lg:text-lg">{{ item.a }}</p>
            </details>
          </div>
        </div>
      </section>

    </main>

    <!-- Floating Action Button (Mobile) -->
    <a
      :href="siteContent.lineOfficialAccount.url"
      target="_blank"
      rel="noopener noreferrer"
      class="fab-button group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6F4E37] to-[#8B4513] px-5 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl md:text-sm"
    >
      <MessageCircle class="h-5 w-5" :stroke-width="2" />
      <span>加入好友 立即備份</span>
      <Cloud class="h-4 w-4" :stroke-width="2" />
    </a>

    <footer class="border-t border-[#E0D7D0] bg-[#FAF9F6] text-[#6B5E55]">
      <div class="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-2">
        <div class="space-y-2 text-base md:text-sm">
          <div class="text-lg font-semibold text-[#3C3C3C] md:text-base">{{ siteContent.contact.company }}</div>
          <p>company. {{ siteContent.contact.company }}</p>
          <p>tax ID. {{ siteContent.contact.taxId }}</p>
        </div>
        <div class="flex flex-col items-start gap-3 text-base md:text-sm">
          <a href="#常見問題" class="text-[#6F4E37] hover:text-[#8B4513]">FAQ</a>
          <button
            class="mt-2 rounded-2xl bg-[#6F4E37] px-5 py-2 text-base font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:bg-[#8B4513] md:text-sm"
          >
            {{ siteContent.hero.cta }}
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>
