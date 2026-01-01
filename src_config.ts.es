// ============================================
// ⚙️ КОНФИГУРАЦИЯ САЙТА ФРИЛАНС-АГЕНТСТВА
// ============================================
// Здесь ты можешь менять ВСЮ информацию на сайте
// Просто измени значения и сохрани файл
// ============================================

export const config = {
  
  // ============================================
  // 🏢 НАЗВАНИЕ И БРЕНД
  // ============================================
  brand: {
    name: "FreelanceHub",
    slogan: {
      ru: "Создаём цифровое будущее",
      en: "Creating digital future"
    }
  },

  // ============================================
  // 🎯 ГЛАВНАЯ СТРАНИЦА (Hero секция)
  // ============================================
  hero: {
    title: {
      ru: "Любой digital-проект",
      en: "Any digital project"
    },
    subtitle: {
      ru: "за 7 дней",
      en: "in 7 days"
    },
    description: {
      ru: "Сайты, дизайн, приложения, боты, маркетинг — всё в одном месте",
      en: "Websites, design, apps, bots, marketing — all in one place"
    },
    buttonText: {
      ru: "Смотреть услуги",
      en: "View services"
    },
    buttonLink: "/services"
  },

  // ============================================
  // 📊 СТАТИСТИКА (на главной)
  // ============================================
  stats: [
    { value: "500+", label: { ru: "Проектов", en: "Projects" } },
    { value: "98%", label: { ru: "Довольных клиентов", en: "Happy clients" } },
    { value: "7", label: { ru: "Дней в среднем", en: "Days average" } }
  ],

  // ============================================
  // 💼 УСЛУГИ ФРИЛАНСА
  // ============================================
  // popular: true — показать бейдж "Популярное"
  // enabled: true — показывать на сайте
  // ============================================
  services: [
    {
      id: "web",
      icon: "🌐",
      name: { ru: "Веб-разработка", en: "Web Development" },
      description: { ru: "Сайты любой сложности — от лендинга до маркетплейса", en: "Websites of any complexity" },
      priceFrom: 15000,
      priceTo: 500000,
      currency: "₽",
      deadline: { ru: "от 3 дней", en: "from 3 days" },
      popular: true,
      enabled: true,
      orderLink: "https://t.me/your_username"
    },
    {
      id: "design",
      icon: "🎨",
      name: { ru: "Дизайн", en: "Design" },
      description: { ru: "UI/UX, логотипы, фирменный стиль, презентации", en: "UI/UX, logos, branding, presentations" },
      priceFrom: 5000,
      priceTo: 150000,
      currency: "₽",
      deadline: { ru: "от 2 дней", en: "from 2 days" },
      popular: true,
      enabled: true,
      orderLink: "https://t.me/your_username"
    },
    {
      id: "mobile",
      icon: "📱",
      name: { ru: "Мобильные приложения", en: "Mobile Apps" },
      description: { ru: "iOS и Android приложения на React Native и Flutter", en: "iOS and Android apps" },
      priceFrom: 50000,
      priceTo: 1000000,
      currency: "₽",
      deadline: { ru: "от 14 дней", en: "from 14 days" },
      popular: true,
      enabled: true,
      orderLink: "https://t.me/your_username"
    },
    {
      id: "bots",
      icon: "🤖",
      name: { ru: "Боты и автоматизация", en: "Bots & Automation" },
      description: { ru: "Telegram, Discord боты, парсеры, скрипты", en: "Telegram, Discord bots, parsers" },
      priceFrom: 10000,
      priceTo: 200000,
      currency: "₽",
      deadline: { ru: "от 2 дней", en: "from 2 days" },
      popular: false,
      enabled: true,
      orderLink: "https://t.me/your_username"
    },
    {
      id: "smm",
      icon: "📢",
      name: { ru: "SMM и маркетинг", en: "SMM & Marketing" },
      description: { ru: "Продвижение в соцсетях, таргет, контент", en: "Social media promotion, targeting" },
      priceFrom: 15000,
      priceTo: 100000,
      currency: "₽",
      deadline: { ru: "от 5 дней", en: "from 5 days" },
      popular: false,
      enabled: true,
      orderLink: "https://t.me/your_username"
    },
    {
      id: "video",
      icon: "🎬",
      name: { ru: "Видеопродакшн", en: "Video Production" },
      description: { ru: "Монтаж, motion-дизайн, рекламные ролики", en: "Editing, motion design, ads" },
      priceFrom: 10000,
      priceTo: 300000,
      currency: "₽",
      deadline: { ru: "от 3 дней", en: "from 3 days" },
      popular: false,
      enabled: true,
      orderLink: "https://t.me/your_username"
    }
  ],

  // ============================================
  // 🎓 КУРСЫ ОБУЧЕНИЯ
  // ============================================
  // discount: скидка в процентах (0 = нет скидки)
  // popular: true — показать бейдж
  // ============================================
  courses: [
    {
      id: "web-course",
      icon: "🌐",
      name: { ru: "Веб-разработка с нуля", en: "Web Development from Zero" },
      description: { ru: "Научись создавать сайты за 2 месяца", en: "Learn to create websites in 2 months" },
      price: 14900,
      oldPrice: 29900,
      currency: "₽",
      discount: 50,
      duration: { ru: "2 месяца", en: "2 months" },
      lessons: 48,
      popular: true,
      enabled: true,
      buyLink: "https://t.me/your_username"
    },
    {
      id: "design-course",
      icon: "🎨",
      name: { ru: "UI/UX Дизайн", en: "UI/UX Design" },
      description: { ru: "От новичка до профи в дизайне интерфейсов", en: "From beginner to pro in interface design" },
      price: 12900,
      oldPrice: 24900,
      currency: "₽",
      discount: 48,
      duration: { ru: "6 недель", en: "6 weeks" },
      lessons: 36,
      popular: true,
      enabled: true,
      buyLink: "https://t.me/your_username"
    },
    {
      id: "smm-course",
      icon: "📢",
      name: { ru: "SMM-специалист", en: "SMM Specialist" },
      description: { ru: "Продвижение в соцсетях от А до Я", en: "Social media promotion from A to Z" },
      price: 9900,
      oldPrice: 19900,
      currency: "₽",
      discount: 50,
      duration: { ru: "1 месяц", en: "1 month" },
      lessons: 24,
      popular: false,
      enabled: true,
      buyLink: "https://t.me/your_username"
    }
  ],

  // ============================================
  // 💳 СПОСОБЫ ОПЛАТЫ
  // ============================================
  // enabled: true/false — включить/выключить
  // popular: true — бейдж "Популярный"
  // fast: true — бейдж "Быстро"
  // ============================================
  paymentMethods: [
    {
      id: "tg-crypto",
      name: { ru: "Telegram Wallet", en: "Telegram Wallet" },
      description: { ru: "TON, USDT, BTC через @wallet", en: "TON, USDT, BTC via @wallet" },
      icon: "💎",
      link: "https://t.me/wallet",
      enabled: true,
      popular: true,
      fast: false
    },
    {
      id: "crypto",
      name: { ru: "Криптовалюта", en: "Cryptocurrency" },
      description: { ru: "BTC, ETH, USDT, LTC, SOL", en: "BTC, ETH, USDT, LTC, SOL" },
      icon: "🪙",
      link: "https://your-crypto-gateway.com",
      enabled: true,
      popular: false,
      fast: false
    },
    {
      id: "tg-stars",
      name: { ru: "Telegram Stars", en: "Telegram Stars" },
      description: { ru: "Оплата звёздами в Telegram", en: "Pay with Telegram Stars" },
      icon: "⭐",
      link: "https://t.me/your_bot",
      enabled: true,
      popular: false,
      fast: true
    },
    {
      id: "card",
      name: { ru: "Банковская карта", en: "Bank Card" },
      description: { ru: "Visa, Mastercard, МИР", en: "Visa, Mastercard, MIR" },
      icon: "💳",
      link: "https://your-payment-gateway.com",
      enabled: true,
      popular: false,
      fast: true
    },
    {
      id: "sbp",
      name: { ru: "СБП", en: "SBP" },
      description: { ru: "Система быстрых платежей", en: "Fast Payment System" },
      icon: "🏦",
      link: "https://your-sbp-link.com",
      enabled: true,
      popular: false,
      fast: true
    }
  ],

  // ============================================
  // ⭐ ОТЗЫВЫ КЛИЕНТОВ
  // ============================================
  testimonials: [
    {
      name: "Александр",
      role: { ru: "Владелец бизнеса", en: "Business Owner" },
      text: { ru: "Сделали сайт за 5 дней. Качество отличное, рекомендую!", en: "Made a website in 5 days. Excellent quality!" },
      rating: 5
    },
    {
      name: "Мария",
      role: { ru: "Маркетолог", en: "Marketer" },
      text: { ru: "Заказывала дизайн для соцсетей. Очень довольна результатом.", en: "Ordered design for social media. Very happy!" },
      rating: 5
    },
    {
      name: "Дмитрий",
      role: { ru: "Стартапер", en: "Startup Founder" },
      text: { ru: "Разработали MVP приложения точно в срок. Профессионалы!", en: "Developed MVP app on time. Professionals!" },
      rating: 5
    }
  ],

  // ============================================
  // ✅ ГАРАНТИИ
  // ============================================
  guarantees: [
    {
      icon: "🛡️",
      title: { ru: "Гарантия качества", en: "Quality Guarantee" },
      text: { ru: "30 дней бесплатных правок", en: "30 days free revisions" }
    },
    {
      icon: "⏰",
      title: { ru: "Точно в срок", en: "On Time" },
      text: { ru: "Или вернём 20% стоимости", en: "Or 20% refund" }
    },
    {
      icon: "💬",
      title: { ru: "Поддержка 24/7", en: "24/7 Support" },
      text: { ru: "Всегда на связи", en: "Always in touch" }
    }
  ],

  // ============================================
  // 📞 КОНТАКТЫ
  // ============================================
  contacts: {
    email: "hello@freelancehub.com",
    telegram: "https://t.me/your_username",
    whatsapp: "https://wa.me/79001234567",
    phone: "+7 (900) 123-45-67"
  },

  // ============================================
  // 🔗 СОЦИАЛЬНЫЕ СЕТИ
  // ============================================
  socials: [
    { name: "Telegram", url: "https://t.me/your_channel", icon: "tg" },
    { name: "Instagram", url: "https://instagram.com/your_account", icon: "ig" },
    { name: "YouTube", url: "https://youtube.com/@your_channel", icon: "yt" },
    { name: "VK", url: "https://vk.com/your_group", icon: "vk" }
  ]
};
