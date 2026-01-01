import './styles.css';
import { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { config } from './config';

type Lang = 'ru' | 'en';

// SVG Логотип
const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
    <path d="M12 14L16 26L20 18L24 26L28 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#6366f1"/>
        <stop offset="1" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>
);

// ============================================
// ГЛАВНАЯ СТРАНИЦА
// ============================================
function HomePage({ lang, onOrder }: { lang: Lang; onOrder: () => void }) {
  const t = {
    services: { ru: 'Наши услуги', en: 'Our Services' },
    viewAll: { ru: 'Все услуги', en: 'All Services' },
    order: { ru: 'Заказать', en: 'Order' },
    from: { ru: 'от', en: 'from' },
    guaranteesTitle: { ru: 'Гарантии', en: 'Guarantees' },
    reviewsTitle: { ru: 'Отзывы клиентов', en: 'Client Reviews' },
    ctaTitle: { ru: 'Готовы начать проект?', en: 'Ready to start?' },
    ctaBtn: { ru: 'Связаться с нами', en: 'Contact Us' }
  };

  const popularServices = config.services.filter(s => s.enabled && s.popular).slice(0, 3);

  return (
    <div className="animate-fadeIn">
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeUp">
            {config.hero.title[lang]}{' '}
            <span className="text-gradient">{config.hero.subtitle[lang]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 animate-fadeUp delay-100">
            {config.hero.description[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp delay-200">
            <Link to="/services" className="btn-primary">{config.hero.buttonText[lang]}</Link>
            <Link to="/courses" className="btn-secondary">
              {lang === 'ru' ? 'Курсы обучения' : 'Courses'}
            </Link>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fadeUp delay-300">
            {config.stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОПУЛЯРНЫЕ УСЛУГИ */}
      <section className="bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">{t.services[lang]}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.name[lang]}</h3>
                <p className="text-gray-500 mb-6">{service.description[lang]}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="price">{t.from[lang]} {service.priceFrom.toLocaleString()}</span>
                  <span className="text-gray-400">{service.currency}</span>
                </div>
                <button onClick={onOrder} className="btn-primary w-full">{t.order[lang]}</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">{t.viewAll[lang]} →</Link>
          </div>
        </div>
      </section>

      {/* ГАРАНТИИ */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">{t.guaranteesTitle[lang]}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.guarantees.map((g, i) => (
              <div key={i} className="guarantee-card">
                <div className="guarantee-icon">{g.icon}</div>
                <h3 className="text-xl font-bold mb-2">{g.title[lang]}</h3>
                <p className="text-gray-500">{g.text[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-16">{t.reviewsTitle[lang]}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.testimonials.map((review, i) => (
              <div key={i} className="testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text[lang]}"</p>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.role[lang]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">{t.ctaTitle[lang]}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href={config.contacts.telegram} target="_blank" rel="noreferrer" className="btn-primary">
              {t.ctaBtn[lang]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================
// СТРАНИЦА УСЛУГ
// ============================================
function ServicesPage({ lang, onOrder }: { lang: Lang; onOrder: () => void }) {
  const t = {
    title: { ru: 'Все услуги', en: 'All Services' },
    subtitle: { ru: 'Выберите нужную услугу и мы приступим к работе', en: 'Choose a service and we will start working' },
    from: { ru: 'от', en: 'from' },
    order: { ru: 'Заказать', en: 'Order' },
    deadline: { ru: 'Срок:', en: 'Deadline:' },
    popular: { ru: '🔥 Популярное', en: '🔥 Popular' }
  };

  const services = config.services.filter(s => s.enabled);

  return (
    <div className="animate-fadeIn pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{t.title[lang]}</h1>
          <p className="section-subtitle mx-auto">{t.subtitle[lang]}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card relative">
              {service.popular && (
                <span className="badge badge-popular absolute top-4 right-4">{t.popular[lang]}</span>
              )}
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.name[lang]}</h3>
              <p className="text-gray-500 mb-4">{service.description[lang]}</p>
              <p className="text-sm text-gray-400 mb-4">{t.deadline[lang]} {service.deadline[lang]}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="price">{t.from[lang]} {service.priceFrom.toLocaleString()}</span>
                <span className="text-gray-400">{service.currency}</span>
              </div>
              <button onClick={onOrder} className="btn-primary w-full">{t.order[lang]}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// СТРАНИЦА КУРСОВ
// ============================================
function CoursesPage({ lang, onOrder }: { lang: Lang; onOrder: () => void }) {
  const t = {
    title: { ru: 'Курсы обучения', en: 'Training Courses' },
    subtitle: { ru: 'Научись зарабатывать на фрилансе', en: 'Learn to earn on freelance' },
    buy: { ru: 'Купить курс', en: 'Buy Course' },
    lessons: { ru: 'уроков', en: 'lessons' },
    popular: { ru: '🔥 Хит продаж', en: '🔥 Bestseller' },
    discount: { ru: 'Скидка', en: 'Discount' }
  };

  const courses = config.courses.filter(c => c.enabled);

  return (
    <div className="animate-fadeIn pt-24 px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{t.title[lang]}</h1>
          <p className="section-subtitle mx-auto">{t.subtitle[lang]}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="service-card relative">
              {course.popular && (
                <span className="badge badge-popular absolute top-4 right-4">{t.popular[lang]}</span>
              )}
              {course.discount > 0 && (
                <span className="badge badge-discount absolute top-4 left-4">-{course.discount}%</span>
              )}
              <div className="service-icon">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{course.name[lang]}</h3>
              <p className="text-gray-500 mb-4">{course.description[lang]}</p>
              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>📚 {course.lessons} {t.lessons[lang]}</span>
                <span>⏱ {course.duration[lang]}</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="price">{course.price.toLocaleString()} {course.currency}</span>
                {course.oldPrice > course.price && (
                  <span className="price-old">{course.oldPrice.toLocaleString()} {course.currency}</span>
                )}
              </div>
              <button onClick={onOrder} className="btn-primary w-full">{t.buy[lang]}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// СТРАНИЦА КОНТАКТОВ
// ============================================
function ContactsPage({ lang }: { lang: Lang }) {
  const t = {
    title: { ru: 'Контакты', en: 'Contacts' },
    subtitle: { ru: 'Свяжитесь с нами любым удобным способом', en: 'Contact us in any convenient way' },
    email: { ru: 'Email', en: 'Email' },
    phone: { ru: 'Телефон', en: 'Phone' },
    telegram: { ru: 'Telegram', en: 'Telegram' },
    whatsapp: { ru: 'WhatsApp', en: 'WhatsApp' },
    socials: { ru: 'Мы в соцсетях', en: 'Social Media' }
  };

  return (
    <div className="animate-fadeIn pt-24 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">{t.title[lang]}</h1>
          <p className="section-subtitle mx-auto">{t.subtitle[lang]}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a href={`mailto:${config.contacts.email}`} className="card flex items-center gap-6 hover:border-indigo-300">
            <div className="text-4xl">📧</div>
            <div>
              <div className="text-sm text-gray-400">{t.email[lang]}</div>
              <div className="text-xl font-semibold">{config.contacts.email}</div>
            </div>
          </a>
          <a href={`tel:${config.contacts.phone}`} className="card flex items-center gap-6 hover:border-indigo-300">
            <div className="text-4xl">📞</div>
            <div>
              <div className="text-sm text-gray-400">{t.phone[lang]}</div>
              <div className="text-xl font-semibold">{config.contacts.phone}</div>
            </div>
          </a>
          <a href={config.contacts.telegram} target="_blank" rel="noreferrer" className="card flex items-center gap-6 hover:border-indigo-300">
            <div className="text-4xl">💬</div>
            <div>
              <div className="text-sm text-gray-400">{t.telegram[lang]}</div>
              <div className="text-xl font-semibold">Telegram</div>
            </div>
          </a>
          <a href={config.contacts.whatsapp} target="_blank" rel="noreferrer" className="card flex items-center gap-6 hover:border-indigo-300">
            <div className="text-4xl">📱</div>
            <div>
              <div className="text-sm text-gray-400">{t.whatsapp[lang]}</div>
              <div className="text-xl font-semibold">WhatsApp</div>
            </div>
          </a>
        </div>

        {/* Соцсети */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">{t.socials[lang]}</h3>
          <div className="flex justify-center gap-6">
            {config.socials.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:bg-indigo-100 transition-colors"
              >
                {social.icon === 'tg' && '💬'}
                {social.icon === 'ig' && '📷'}
                {social.icon === 'yt' && '▶️'}
                {social.icon === 'vk' && '🔵'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// МОДАЛЬНОЕ ОКНО ОПЛАТЫ
// ============================================
function PaymentModal({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const t = {
    title: { ru: 'Выберите способ оплаты', en: 'Choose payment method' },
    popular: { ru: 'Популярный', en: 'Popular' },
    fast: { ru: 'Быстро', en: 'Fast' }
  };

  const methods = config.paymentMethods.filter(m => m.enabled);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={onClose}>
      <div className="modal-content p-8" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">{t.title[lang]}</h3>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <div className="space-y-4">
          {methods.map((method) => (
            <a 
              key={method.id} 
              href={method.link} 
              target="_blank" 
              rel="noreferrer"
              className="payment-option"
            >
              <span className="text-3xl mr-4">{method.icon}</span>
              <div className="flex-1">
                <div className="font-semibold">{method.name[lang]}</div>
                <div className="text-sm text-gray-400">{method.description[lang]}</div>
              </div>
              {method.popular && <span className="badge badge-popular">{t.popular[lang]}</span>}
              {method.fast && !method.popular && <span className="badge badge-fast">{t.fast[lang]}</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
// ============================================
function AuthModal({ lang, onClose, onLogin }: { lang: Lang; onClose: () => void; onLogin: (user: {name: string; avatar: string}) => void }) {
  const t = {
    title: { ru: 'Вход в аккаунт', en: 'Sign In' },
    google: { ru: 'Войти через Google', en: 'Continue with Google' }
  };

  const handleGoogle = () => {
    // Имитация входа через Google
    onLogin({
      name: 'Пользователь',
      avatar: 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay" onClick={onClose}>
      <div className="modal-content p-8" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">{t.title[lang]}</h3>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <button 
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white border-2 border-gray-200 rounded-xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {t.google[lang]}
        </button>
      </div>
    </div>
  );
}

// ============================================
// НАВИГАЦИЯ
// ============================================
function Navbar({ lang, setLang, user, onAuth, onLogout }: { 
  lang: Lang; 
  setLang: (l: Lang) => void; 
  user: {name: string; avatar: string} | null;
  onAuth: () => void;
  onLogout: () => void;
}) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: { ru: 'Главная', en: 'Home' } },
    { path: '/services', label: { ru: 'Услуги', en: 'Services' } },
    { path: '/courses', label: { ru: 'Курсы', en: 'Courses' } },
    { path: '/contacts', label: { ru: 'Контакты', en: 'Contacts' } }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Лого */}
        <Link to="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-xl font-bold">{config.brand.name}</span>
        </Link>

        {/* Десктоп меню */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label[lang]}
            </Link>
          ))}
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          {/* Переключатель языка */}
          <button 
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} 
            className="px-3 py-2 rounded-lg bg-gray-100 font-medium text-sm hover:bg-gray-200 transition-colors"
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>

          {/* Авторизация */}
          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt="" className="w-10 h-10 rounded-full"/>
              <button onClick={onLogout} className="text-sm text-gray-500 hover:text-gray-700">
                {lang === 'ru' ? 'Выйти' : 'Logout'}
              </button>
            </div>
          ) : (
            <button onClick={onAuth} className="hidden md:block btn-primary !py-3 !px-6 !text-sm">
              {lang === 'ru' ? 'Войти' : 'Sign In'}
            </button>
          )}

          {/* Мобильное меню */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fadeIn">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-medium ${location.pathname === item.path ? 'text-indigo-600' : 'text-gray-600'}`}
            >
              {item.label[lang]}
            </Link>
          ))}
          {!user && (
            <button onClick={() => { onAuth(); setMobileOpen(false); }} className="btn-primary w-full mt-4 !py-3">
              {lang === 'ru' ? 'Войти' : 'Sign In'}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer({ lang }: { lang: Lang }) {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-xl font-bold text-white">{config.brand.name}</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {config.brand.name}. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}
          </p>
          <div className="flex gap-4">
            {config.socials.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                {social.icon === 'tg' && '💬'}
                {social.icon === 'ig' && '📷'}
                {social.icon === 'yt' && '▶️'}
                {social.icon === 'vk' && '🔵'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ============================================
export function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [user, setUser] = useState<{name: string; avatar: string} | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          user={user} 
          onAuth={() => setShowAuth(true)}
          onLogout={() => setUser(null)}
        />
        
        <Routes>
          <Route path="/" element={<HomePage lang={lang} onOrder={() => setShowPayment(true)} />} />
          <Route path="/services" element={<ServicesPage lang={lang} onOrder={() => setShowPayment(true)} />} />
          <Route path="/courses" element={<CoursesPage lang={lang} onOrder={() => setShowPayment(true)} />} />
          <Route path="/contacts" element={<ContactsPage lang={lang} />} />
        </Routes>

        <Footer lang={lang} />

        {/* Модальные окна */}
        {showPayment && <PaymentModal lang={lang} onClose={() => setShowPayment(false)} />}
        {showAuth && <AuthModal lang={lang} onClose={() => setShowAuth(false)} onLogin={setUser} />}
      </div>
    </HashRouter>
  );
}
