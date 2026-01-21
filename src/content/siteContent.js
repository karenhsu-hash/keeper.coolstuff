const siteContent = {
  brand: {
    name: 'keeper.coolstuff',
    tagline: 'Personal Data Safe, Always on Duty.',
    slogan: '檔案發出的那一刻，守護就已經開始。',
  },
  assets: {
    logo: '/images/logo.png',
    heroMain: '/images/hero-banner.jpg',
    heroSupport: 'https://source.unsplash.com/featured/800x600/?clean,aesthetic,photography',
  },
  nav: ['服務介紹', '方案與價格', '實際案例', '常見問題', '首次申請'],
  hero: {
    headline: '告別過期與混亂，打造您的 LINE 智慧雲端庫',
    description:
      '自動依「聊天室」建立資料夾並同步至 Google Drive，結合 AI 智慧命名技術，讓所有檔案不僅存得下，更找得到。',
    cta: '立即加入酷存助手，守護檔案',
    secondaryCta: '了解運作原理',
  },
  lineOfficialAccount: {
    url: 'https://page.line.me/406pakut?oat_content=url&openQrModal=true',
  },
  painPoint: {
    caption: 'WHY WE NEED THIS?',
    heading: '你的檔案，正在 LINE 的倒數計時中慢性死亡。',
    content: [
      '很多人以為檔案「發出去就安全了」，但事實是：每天有數萬份重要合約、珍貴照片在 LINE 群組中變成**「無法讀取的黑塊」**。',
      '在台灣，LINE 的市佔率高達 **90.7%**，每月活躍使用者達 **2,200 萬人**。這個數字背後，隱藏著一個殘酷的真相：每一份檔案都在倒數計時，每一張照片都可能成為下一個「儲存期限已過」的受害者。',
      '**別讓「酷存助手」成為你後悔時才想起的名字。**',
      '在檔案發出的瞬間，「酷存助手」會自動攔截倒數計時，將它們直接轉運至您的個人 Google Drive。記憶不該有期限，工作更不該有風險。',
    ],
    image: '/images/pain-point.png',
    imageCaption: '這是你最不想看到的畫面。',
    imageSubtext: '當「儲存期限已過」出現時，一切已無法挽回。「酷存助手」專為 2,200 萬 LINE 用戶設計。不經手您的私隱，只為您的資料在 Google Drive 找一個永久的家。',
    cta: '搶在過期前，立即啟動自動備份',
  },
  promotion: {
    message: '【限時優惠】歡慶 Google Drive 全新版本上線，現在申請即享 $5,000 系統設置費全額減免！',
    visible: true,
  },
  stats: [
    { value: '32', label: '企業用戶' },
    { value: '638', label: '群組活躍中' },
    { value: '899', label: '累積用戶' },
  ],
  intro: [
    {
      title: '即時啟動，全自動無人值守',
      body: '當檔案在 LINE 傳出的瞬間，酷存助手即刻啟動轉運任務。無論檔案大小，我們確保備份程序在第一時間被執行，搶在過期風險發生前，為您的資料完成入庫。',
      icon: 'message',
    },
    {
      title: '默默守護，雲端自動分類',
      body: '系統根據「聊天室名稱」自動建立資料夾，讓檔案乖乖歸位，井然有序。',
      icon: 'folder',
    },
    {
      title: 'AI 智慧命名',
      body: '告別 `IMG_0123`！AI 自動分析圖片內容並命名（如：2026產品發表會.jpg）。',
      icon: 'sparkles',
    },
    {
      title: '全檔案格式支援',
      body: '支援圖片、影片、Office、PDF、甚至設計稿（.ai, .psd），只要 LINE 能傳，我們就能存。',
      icon: 'cloud',
    },
  ],
  workflow: {
    title: '啟動流程',
    steps: [
      {
        number: '01',
        title: '聯繫技術窗口',
        description: '加入「酷存助手」官方 LINE，由專人為您啟動服務。',
      },
      {
        number: '02',
        title: '帳號配置與授權',
        description: '提供您的官方帳號與 Google Drive 連結。我們將協助您完成技術設定，讓您自有的 Bot 成為備份媒介。',
      },
      {
        number: '03',
        title: '邀請入群',
        description: '完成設定後，將 Bot 邀請入群，所有檔案即刻開始自動同步至雲端。',
      },
    ],
    cta: '立即聯繫技術窗口，設定我的酷存助手',
    ctaSubtext: '現在加入，免收 $5,000 系統設置費。',
  },
  pricing: {
    cta: '立即諮詢申請',
    ctaSubtext: '現在加入省下 $5,000 設置費',
    plans: [
      {
        name: '基本版 Basic',
        price: '$2,499 /年',
        originalPrice: '$3,200',
        setupFee: '$0',
        originalSetupFee: '$5,000',
        highlight: false,
        bullets: [
          '同時備份 30 群組',
          '全檔案格式支援',
          'Google Drive 直接同步',
        ],
      },
      {
        name: '專業版 Pro',
        price: '$3,500 /年',
        originalPrice: '$4,800',
        setupFee: '$0',
        originalSetupFee: '$5,000',
        highlight: true,
        recommended: true,
        bullets: [
          '同時備份 50 群組',
          'AI 智慧命名技術',
          '優先同步通道',
          '全檔案格式支援',
          'Google Drive 直接同步',
        ],
      },
      {
        name: '商業版 Business',
        price: '$5,500 /年',
        originalPrice: '$7,500',
        setupFee: '$0',
        originalSetupFee: '$5,000',
        highlight: false,
        bullets: [
          '同時備份 100 群組',
          '完整 AI 功能支援',
          '企業級穩定性',
          '全檔案格式支援',
          'Google Drive 直接同步',
        ],
      },
    ],
    notes: [
      '✽ 系統設置費 $0（限時減免，原價 $5,000）',
      '✽ 所有檔案直接同步至您的個人 Google Drive，儲存限制取決於您的 Google 帳號方案',
      '✽ 我們不收取額外儲存費用，檔案管理直接在您的 Google Drive 中進行',
    ],
    businessTiers: [
      { name: '250 群組', price: '$10,500 /年', groups: '同時備份 250 群組' },
      { name: '500 群組', price: '$20,500 /年', groups: '同時備份 500 群組' },
      { name: '無限制', price: '$60,500 /年', groups: '無限制備份群組' },
    ],
  },
  whoNeeds: {
    title: '誰最需要酷存助手？',
    items: [
      {
        icon: 'briefcase',
        title: '電商與業務',
        description: '自動備份對帳單與客戶合約，不再漏接訂單。',
        link: '查看他們如何使用',
      },
      {
        icon: 'palette',
        title: '設計與工程',
        description: 'AI 自動命名圖稿與施工照，搜尋檔案只要一秒鐘。',
        link: '查看他們如何使用',
      },
      {
        icon: 'home',
        title: '教育與家長',
        description: '永久保存孩子成長照片與班級重要檔案。',
        link: '查看他們如何使用',
      },
    ],
  },
  cases: [
    {
      number: '01',
      title: '育兒與家庭：留住無法重來的成長瞬間',
      userQuote: '「長輩每天傳幾十張小孩照片，等我有空想存時，全變成了『儲存期限已過』... 那些消失的成長瞬間，是救不回來的心痛。」',
      solution: {
        title: '酷存助手救援',
        points: [
          '**自動化數位成長集**：無需任何操作，檔案發出即「攔截入庫」，守護每一刻純真。',
          '**跨世代回憶共享**：即使長輩不擅長操作備份，回憶也會自動在您的 Google Drive 集合。',
        ],
      },
      keywords: ['成長不留白', '長輩友善', '自動同步'],
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&q=85',
      cta: '了解此方案如何守護您的資料',
    },
    {
      number: '02',
      title: '商務專案管理：終結人員異動的資料斷層',
      userQuote: '「前員工退群後，才發現最關鍵的合約與報價單全消失了，專案被迫停擺... 這種資料風險，公司真的扛不起。」',
      solution: {
        title: '酷存助手救援',
        points: [
          '**企業級數位資產庫**：檔案依「聊天室名稱」自動分類建檔，實現真正的人員流動、資料不動。',
          '**秒級全域搜尋**：透過 Google Drive 強大搜尋，隨時調閱歷史文件，不再大海撈針。',
        ],
      },
      keywords: ['知識資產化', '無縫交接', '資訊安全'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=85',
      cta: '了解此方案如何守護您的資料',
    },
    {
      number: '03',
      title: '專業設計與顧問：告別「請客戶重傳」的專業危機',
      userQuote: '「最尷尬的不是檔案大，而是回頭對客戶說：『不好意思文件過期了，能重傳嗎？』這不只是管理混亂，更是在消磨客戶的信任。」',
      solution: {
        title: '酷存助手救援',
        points: [
          '**專業形象防禦**：簽回文件與設計大檔進入 LINE 的瞬間即刻永久化，徹底杜絕「過期」這種低級錯誤。',
          '**優雅的大檔交付**：避開 LINE 下載限制，直接分享雲端連結，展現嚴謹且現代化的作業流程。',
        ],
      },
      keywords: ['品牌溢價', '零溝通成本', '永久資產'],
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=85',
      cta: '了解此方案如何守護您的資料',
    },
  ],
  faqs: [
    {
      q: '任何人都可以使用這項服務嗎？',
      a: '是的。只要您在 LINE 上進行溝通，並希望為對話中的照片、影片與文件買一份「保險」，不論是個人紀錄或商務需求，我們都能提供全自動的雲端防護。',
    },
    {
      q: '如果成員在 LINE 回收訊息，雲端的備份會消失嗎？',
      a: '不會消失。當檔案在 LINE 傳出的瞬間，酷存助手即刻啟動轉運任務，自動化攔截並完成備份。即使回收訊息，Google Drive 中的備份依然安在。',
    },
    {
      q: '更換手機或重新安裝 LINE，資料會消失嗎？',
      a: '絕對不會。一旦檔案同步至 Google Drive，它就脫離了 LINE 的存取期限限制。無論您換手機、重新安裝 App，只要登入雲端，您的資料永遠都在。',
    },
    {
      q: '需要手動操作「更新」來同步資料嗎？',
      a: '完全不需要。酷存助手採用全自動無人值守機制，當檔案在 LINE 傳出的瞬間，系統即刻啟動轉運任務。這是 24 小時不間斷的自動作業，確保您在繁忙的工作或生活中，不必分心處理手動存檔。',
    },
    {
      q: 'LINE Bot 在群組裡會不會干擾大家聊天？',
      a: '完全不會。Bot 就像一位沈默的秘書，平時默默守護資料。備份過程完全自動化，不會影響群組的正常對話。',
    },
    {
      q: '所有檔案都會混在一起嗎？我可以只看特定檔案嗎？',
      a: '我們提供結構化分類管理。在 Google Drive 中，檔案會依「聊天室名稱」自動建立資料夾歸類；您也可以透過 Google Drive 的搜尋功能，依檔案類型（圖片、影片、文件）進行篩選，快速定位所需資料。',
    },
    {
      q: '備份的檔案名稱太亂怎麼辦？（AI 智慧功能）',
      a: '這正是我們的核心亮點！您可以啟用 AI 智慧命名服務，系統會自動分析圖片內容並重新命名（例如：將 IMG_0123.jpg 改為 2026產品發表會截圖.jpg），讓搜尋檔案變得直覺又省心。',
    },
    {
      q: '可以多裝置同步存取嗎？',
      a: '可以。手機、平板、電腦都能即時同步存取與下載。',
    },
    {
      q: '備份後的資料可以刪除嗎？',
      a: '您可以完全自主管理。所有檔案都存放在您的 Google Drive 中，您可以隨時透過 Google Drive 刪除任何檔案。請注意，一旦您從 Google Drive 刪除檔案，我們將無法為您找回，操作前請務必確認。',
    },
  ],
  privacy: {
    title: '隱私與安全 Privacy & Security',
    sections: [
      {
        title: '檔案零留存：您的資料，我們不碰',
        body: [
          '採「即時轉運機制」，當檔案在 LINE 傳出的瞬間，酷存助手即刻啟動轉運任務。我們的伺服器不儲存、不緩存、不備份任何檔案內容，檔案從 LINE 接收後，立即直接串流轉運至您的個人 Google Drive。資料的終點站只有一個，就是您的個人雲端空間。',
        ],
      },
      {
        title: '資料主權',
        body: [
          '透過 Google OAuth 2.0 授權，您可以隨時撤銷存取權，安全無虞。',
        ],
      },
    ],
  },
  apply: {
    title: '首次申請',
    description: '聯繫客服，由專人線上為您服務。',
  },
  contact: {
    company: '酷東西股份有限公司',
    taxId: '94082911',
  },
}

export default siteContent
