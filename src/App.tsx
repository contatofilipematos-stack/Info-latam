import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, Sparkles, Smile, Check, ShieldCheck, Lock, Gift, 
  HelpCircle, ChevronRight, ChevronDown, Star, FileText, ArrowDown, BookOpen, 
  Award, MessageCircle, Mail, Cloud, UserCheck, Flame, Printer,
  Moon, Sun, Utensils, Clock, Palette
} from 'lucide-react';
import VSLPlayer from './components/VSLPlayer';
import AssemblyVideoPlayer from './components/AssemblyVideoPlayer';
import Testimonials from './components/Testimonials';
import CheckoutModal from './components/CheckoutModal';
import BookletCarousel from './components/BookletCarousel';
import UpsellPopup from './components/UpsellPopup';
import { Product } from './types';

// Image constants with exact active paths
const BOOKLET_COVER_PATH = "/src/assets/images/booklet_cover_1781714029571.jpg";
const CUTE_PRAYING_KIDS_BLUE = "/src/assets/images/cute_praying_kids_blue_1781714503997.jpg";
const KIDS_PRAYING_PATH = "/src/assets/images/kids_praying_watercolor_1781714046303.jpg";

// New high-converting bonus booklets
const BONUS_MISSA_PATH = "https://iili.io/CDZRlXp.md.webp";
const BONUS_DEC_PATH = "https://iili.io/CDZRYmv.md.webp";
const BONUS_NS_PATH = "https://iili.io/CDZRcIR.md.webp";
const BONUS_APARECIDA_PATH = "https://iili.io/CDZR7kJ.md.webp";

const productsList: Product[] = [
  {
    id: 'basico',
    name: 'PLANO BÁSICO',
    badge: 'ESSENCIAL',
    imageUrl: 'https://iili.io/CUEAZSn.md.jpg',
    price: 10.00,
    originalPrice: 27.00,
    description: 'Acesso vitalício aos arquivos essenciais.',
    features: [
      '+500 Arquivos STL Católicos',
      'Acesso Vitalício',
      'Envio Imediato',
      'Não inclui bônus'
    ],
    ctaText: 'Quero o plano básico',
    checkoutUrl: 'https://pay.wiapy.com/ExTcnROdnW9'
  },
  {
    id: 'completo',
    name: 'PLANO COMPLETO + 6 BÔNUS',
    badge: 'Mais Escolhido',
    imageUrl: 'https://iili.io/CbAjv8x.md.webp',
    price: 27.00,
    originalPrice: 67.00,
    description: 'Pacote completo definitivo com arquivos STL e todos os 6 bônus exclusivos inclusos.',
    features: [
      '+500 Arquivos STL Católicos',
      'Uso comercial liberado e sem limite',
      'Bônus 1: Guia de Produtos Católicos que Mais Vendem',
      'Bônus 2: Tabela de Preços para Produtos 3D Católicos',
      'Bônus 3: Guia de Configuração para Impressão',
      'Bônus 4: Mockups para Divulgação',
      'Bônus 5: Guia de Acabamento e Pintura',
      'Bônus 6: Pack de Luminárias 3D',
      'Acesso Vitalício',
      'Envio Imediato'
    ],
    ctaText: 'Quero o material completo',
    checkoutUrl: 'https://pay.hotmart.com/T106617000C?checkoutMode=10'
  }
];

function HeroCTALimitedOffer({ onCTAClick }: { onCTAClick: () => void }) {
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 38); // Start exactly at 12:38

  useEffect(() => {
    const savedTime = localStorage.getItem('seed_vsl_timer_v2');
    let initialTime = 12 * 60 + 38;
    if (savedTime) {
      const parsed = parseInt(savedTime, 10);
      if (!isNaN(parsed) && parsed > 0) {
        initialTime = parsed;
      }
    }
    setTimeLeft(initialTime);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 12 * 60 + 38; // Evergreen loop back to 12:38
        }
        const nextVal = prev - 1;
        localStorage.setItem('seed_vsl_timer_v2', nextVal.toString());
        return nextVal;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-1 sm:px-0 mt-2">
      {/* Pill timer badge styled exact to design block */}
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#fff1f2] border border-[#fecdd3] rounded-full text-[#d11270] font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase mb-4 shadow-3xs">
        <Clock className="w-4 h-4 text-[#e11d48] animate-pulse" />
        <span>Oferta por tempo limitado: <strong className="font-extrabold">{formatTime(timeLeft)}</strong></span>
      </div>

      {/* Hero big pink cta button exact to styling */}
      <button
        onClick={() => onCTAClick()}
        className="w-full bg-[#e5007d] hover:bg-[#c40068] active:scale-97 text-white font-heading rounded-[2rem] sm:rounded-[2.5rem] py-4 px-2 xs:px-4 shadow-[0_12px_28px_rgba(229,0,125,0.28)] hover:shadow-[0_14px_32px_rgba(229,0,125,0.35)] transition-all duration-200 cursor-pointer text-center relative overflow-hidden group mb-4.5 animate-pulse-cta"
      >
        <div className="flex flex-col items-center justify-center leading-tight">
          <span className="text-[13px] xs:text-base sm:text-lg font-black uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-1.5 font-heading whitespace-nowrap">
            Quero este material agora <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] flex-shrink-0" />
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase text-pink-100 mt-1 opacity-90 whitespace-nowrap">
            Acesso vitalício e imediato
          </span>
        </div>
      </button>

      {/* Printer & Secure checkout details with divider */}
      <div className="flex items-center justify-center gap-5 select-none font-sans opacity-95">
        <div className="flex items-center gap-1.5">
          <Printer className="w-4 h-4 text-pink-500 stroke-[2.2]" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">
            Imprima e encante
          </span>
        </div>
        <div className="w-[1px] h-3 bg-stone-200"></div>
        <div className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-pink-500 stroke-[2.2]" />
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-500">
            Compra 100% segura
          </span>
        </div>
      </div>
    </div>
  );
}

interface SectionCTAProps {
  onCTAClick: () => void;
}

function SectionCTA({
  onCTAClick,
}: SectionCTAProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 mt-6 mb-2">
      <button
        onClick={() => onCTAClick()}
        className="w-full bg-[#e5007d] hover:bg-[#c40068] active:scale-97 text-white font-heading rounded-[2rem] sm:rounded-[2.5rem] py-4 px-2 xs:px-4 shadow-[0_12px_28px_rgba(229,0,125,0.28)] hover:shadow-[0_14px_32px_rgba(229,0,125,0.35)] transition-all duration-200 cursor-pointer text-center relative overflow-hidden group animate-pulse-cta"
      >
        <div className="flex flex-col items-center justify-center leading-tight">
          <span className="text-[13px] xs:text-base sm:text-lg font-black uppercase tracking-tight flex items-center justify-center gap-1 sm:gap-1.5 font-heading whitespace-nowrap">
            Quero este material agora <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3] flex-shrink-0" />
          </span>
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase text-pink-100 mt-1 opacity-90 whitespace-nowrap">
            Acesso vitalício e imediato
          </span>
        </div>
      </button>
    </div>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showUpsellPopup, setShowUpsellPopup] = useState(false);
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [openGuaranteeFaq, setOpenGuaranteeFaq] = useState<number | null>(null);

  const hasFiredViewContent = useRef(false);

  // Trigger Meta Pixel ViewContent event for main offer (completo - R$ 27)
  useEffect(() => {
    if (!hasFiredViewContent.current) {
      hasFiredViewContent.current = true;
      if (typeof (window as any).fbq === 'function') {
        try {
          (window as any).fbq('track', 'ViewContent', {
            content_ids: ['completo'],
            content_type: 'product',
            value: 27,
            currency: 'BRL'
          });
          console.log("Meta Pixel ViewContent disparado com sucesso!");
        } catch (e) {
          console.error("Erro ao disparar Meta Pixel ViewContent:", e);
        }
      }
    }
  }, []);

  // Scroll logic for Sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Protection against downloading images, right click, drag & drop, and inspect shortcuts
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    const preventKeyShortcuts = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Cmd+S, Ctrl+U, Cmd+U, F12, Ctrl+Shift+I, Cmd+Option+I, Ctrl+Shift+C
      if (
        (e.ctrlKey || e.metaKey) && 
        ['s', 'S', 'u', 'U', 'i', 'I', 'c', 'C', 'p', 'P'].includes(e.key)
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('keydown', preventKeyShortcuts);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('keydown', preventKeyShortcuts);
    };
  }, []);

  const trackInitiateCheckoutEvent = (prod: Product) => {
    // 1. Meta / Facebook Pixel
    if (typeof (window as any).fbq === 'function') {
      try {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: prod.name,
          value: prod.price,
          currency: 'BRL',
          content_type: 'product',
          content_ids: [prod.id],
        });
        console.log("Meta Pixel InitiateCheckout disparado com sucesso!");
      } catch (e) {
        console.error("Erro ao disparar FB InitiateCheckout:", e);
      }
    }

    // 2. Google Tag Manager / gtag
    if (typeof (window as any).gtag === 'function') {
      try {
        (window as any).gtag('event', 'begin_checkout', {
          currency: 'BRL',
          value: prod.price,
          items: [{
            item_id: prod.id,
            item_name: prod.name,
            price: prod.price,
            quantity: 1
          }]
        });
        console.log("gtag begin_checkout disparado com sucesso!");
      } catch (e) {
        console.error("Erro ao disparar gtag begin_checkout:", e);
      }
    }

    // 3. TikTok Pixel
    if (typeof (window as any).ttq === 'object' && typeof (window as any).ttq.track === 'function') {
      try {
        (window as any).ttq.track('InitiateCheckout', {
          contents: [{
            content_id: prod.id,
            content_name: prod.name,
            price: prod.price,
            quantity: 1
          }],
          value: prod.price,
          currency: 'BRL'
        });
        console.log("TikTok InitiateCheckout disparado!");
      } catch (e) {}
    }

    // 4. Kwai Pixel
    if (typeof (window as any).kwaiq === 'object' && typeof (window as any).kwaiq.track === 'function') {
      try {
        (window as any).kwaiq.track('contentView', {
          content_id: prod.id,
          content_name: prod.name,
          value: prod.price,
          currency: 'BRL'
        });
        console.log("Kwai contentView disparado!");
      } catch (e) {}
    }
  };

  // Helper robusto para unificar dados do UTMfy e passar para o Checkout (Wiapy)
  const buildUrlWithTracking = (baseUrl: string) => {
    try {
      const urlObj = new URL(baseUrl);
      
      // Dicionário consolidado para acumular todos os dados higienizados e de rastreio
      const trackerParams: Record<string, string> = {};

      // Função auxiliar para remover prefixos especiais do UTMfy e padronizar as chaves para o Checkout
      const sanitizeKey = (key: string): string => {
        return key
          .replace(/^__utmify_/, '')
          .replace(/^_utmify_/, '')
          .replace(/^utmify_/, '')
          .trim();
      };

      // Chaves conhecidas de alto valor para campanhas de anúncios (Meta, Google, TikTok, Kwai)
      const trackingKeywords = [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
        'src', 'sck', 'xcod', 'fbclid', 'gclid', 'ttclid', 'subid', 'subid2', 
        'subid3', 'subid4', 'subid5', 'click_id', 'ad_id', 'adset_id', 'campaign_id',
        'kwai_id', 'ttclid'
      ];

      // 1. Coleta e mapeia todas as UTMs atualmente presentes na URL de entrada da página
      try {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.forEach((value, key) => {
          if (value && value !== 'undefined' && value !== 'null' && value.trim() !== '') {
            const clean = sanitizeKey(key);
            trackerParams[clean] = value;
          }
        });
      } catch (e) {
        console.error("Erro ao ler URL params:", e);
      }

      // 2. Varredura dinâmica de TODAS as chaves do LocalStorage
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const rawKey = localStorage.key(i);
          if (rawKey) {
            const clean = sanitizeKey(rawKey);
            const isTrackingKey = trackingKeywords.includes(clean) || 
                                 rawKey.includes('utm') || 
                                 rawKey.includes('_utmify_') ||
                                 rawKey.includes('subid') ||
                                 rawKey.includes('xcod') ||
                                 rawKey.includes('fbclid') ||
                                 rawKey.includes('gclid');

            if (isTrackingKey) {
              const val = localStorage.getItem(rawKey);
              if (val && val !== 'undefined' && val !== 'null' && val.trim() !== '') {
                if (!trackerParams[clean]) {
                  trackerParams[clean] = val;
                }
              }
            }
          }
        }
      } catch (e) {
        console.error("Erro ao ler LocalStorage dinamicamente:", e);
      }

      // 3. Varredura dinâmica de TODAS as chaves do SessionStorage (Garante redundância em abas mantidas)
      try {
        for (let i = 0; i < sessionStorage.length; i++) {
          const rawKey = sessionStorage.key(i);
          if (rawKey) {
            const clean = sanitizeKey(rawKey);
            const isTrackingKey = trackingKeywords.includes(clean) || 
                                 rawKey.includes('utm') || 
                                 rawKey.includes('_utmify_') ||
                                 rawKey.includes('subid') ||
                                 rawKey.includes('xcod');

            if (isTrackingKey) {
              const val = sessionStorage.getItem(rawKey);
              if (val && val !== 'undefined' && val !== 'null' && val.trim() !== '') {
                if (!trackerParams[clean]) {
                  trackerParams[clean] = val;
                }
              }
            }
          }
        }
      } catch (e) {
        console.error("Erro ao ler SessionStorage dinamicamente:", e);
      }

      // 4. Varredura exaustiva de Cookies armazenados pelo pixel e UTMfy
      try {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
          const parts = cookie.split('=');
          const rawKey = parts[0].trim();
          const val = parts.slice(1).join('=').trim();
          
          if (rawKey && val && val !== 'undefined' && val !== 'null' && val.trim() !== '') {
            const clean = sanitizeKey(rawKey);
            const isTrackingKey = trackingKeywords.includes(clean) || 
                                 rawKey.includes('utm') || 
                                 rawKey.includes('_utmify_') ||
                                 rawKey.includes('subid') ||
                                 rawKey.includes('xcod');

            if (isTrackingKey) {
              const decodedVal = decodeURIComponent(val);
              if (decodedVal && !trackerParams[clean] && decodedVal.trim() !== '') {
                trackerParams[clean] = decodedVal;
              }
            }
          }
        });
      } catch (e) {
        console.error("Erro ao ler Cookies dinamicamente:", e);
      }

      // 5. Consolida todas as chaves limpas de rastreamento na URL de Checkout final
      Object.keys(trackerParams).forEach(key => {
        urlObj.searchParams.set(key, trackerParams[key]);
      });

      // 6. Garante a preservação de parâmetros nativos que já acompanhavam a URL original do Checkout (Wiapy)
      const originalCheckoutUrl = new URL(baseUrl);
      originalCheckoutUrl.searchParams.forEach((value, key) => {
        if (!urlObj.searchParams.has(key)) {
          urlObj.searchParams.set(key, value);
        }
      });

      console.log("Rastreamento UTMfy/Meta consolidado para o Checkout (Wiapy):", urlObj.toString());
      return urlObj.toString();
    } catch (e) {
      console.error("Erro geral ao processar rastreamento de URLs:", e);
      const query = window.location.search;
      if (query) {
        const separator = baseUrl.includes('?') ? '&' : '?';
        return `${baseUrl}${separator}${query.substring(1)}`;
      }
      return baseUrl;
    }
  };

  const executeCheckoutRedirect = (checkoutUrl: string, prod?: Product) => {
    if (prod) {
      trackInitiateCheckoutEvent(prod);
    }
    const url = buildUrlWithTracking(checkoutUrl);
    setTimeout(() => {
      try {
        const isIframe = window.self !== window.top;
        if (isIframe) {
          const opened = window.open(url, '_blank');
          if (!opened) {
            window.top!.location.href = url;
          }
        } else {
          window.location.href = url;
        }
      } catch (err) {
        try {
          window.location.href = url;
        } catch (e) {
          window.open(url, '_blank');
        }
      }
    }, 350);
  };

  const triggerCheckout = (prod: Product) => {
    if (prod.id === 'basico') {
      setShowUpsellPopup(true);
      return;
    }
    trackInitiateCheckoutEvent(prod);
    if (prod.checkoutUrl) {
      executeCheckoutRedirect(prod.checkoutUrl);
    } else {
      setSelectedProduct(prod);
      setIsCheckoutOpen(true);
    }
  };

  const scrollToPricing = () => {
    const section = document.getElementById('sessao-pagamento');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContent = () => {
    const section = document.getElementById('conteudo-livro');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAssembly = () => {
    const section = document.getElementById('como-montar');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTestimonials = () => {
    const section = document.getElementById('depoimentos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    scrollToPricing();
  };

  const handleHeadlineCTAClick = () => {
    scrollToContent();
  };

  return (
    <div className="min-h-screen bg-sky-pastel-50/40 flex flex-col items-center justify-start text-stone-850 antialiased font-sans pb-16">
      
      {/* Main Simulated Phone Canvas Container */}
      <div className="w-full md:max-w-[430px] bg-white min-h-screen flex flex-col justify-between relative shadow-2xl md:border-x md:border-sky-pastel-100/60 overflow-hidden">
        
        <div>
          
          {/* Header Theme - Heaven Child Theme with Delicate Blue, Soft Clouds & Stars */}
          <header className="bg-gradient-to-b from-sky-pastel-100 via-sky-pastel-50 to-white pt-8 pb-10 px-5 text-center relative overflow-hidden text-stone-800">
            
            {/* Cute Clouds Background Effect */}
            <div className="absolute -top-4 -left-10 w-32 h-16 bg-white/80 rounded-full blur-md opacity-70"></div>
            <div className="absolute top-10 -right-16 w-40 h-20 bg-white/60 rounded-full blur-md opacity-80"></div>

            {/* Core Display Headline */}
            <h1 className="text-[26px] sm:text-[30px] font-black font-heading text-sky-pastel-950 leading-[1.25] tracking-tight max-w-md mx-auto my-5 text-center px-1">
              +500 Arquivos STL de Arte Sacra <br />
              <span className="text-pink-500 inline-block">Prontos para Imprimir</span>
            </h1>

            {/* Soft, convincing subheadline */}
            <p className="text-xs sm:text-[13px] text-stone-600 font-sans mt-2.5 leading-snug max-w-sm mx-auto select-none font-medium">
              Arquivos de alta qualidade testados e prontos para fatiar. Coloque sua impressora 3D para criar peças sacras e faturar no mercado católico.
            </p>

          </header>

          {/* VSL SECTION */}
          <section className="px-5 mb-6 relative z-10">
            <VSLPlayer />
          </section>

          {/* DYNAMIC COMPACT HERO CALL TO ACTION (CTA) */}
          <section className="px-5 pb-9 text-center">
            <HeroCTALimitedOffer onCTAClick={handleHeadlineCTAClick} />
          </section>



          {/* SESSÃO O QUE VEM NO LIVRO - AS ORAÇÕES */}
          <section id="conteudo-livro" className="px-5 py-12 bg-sky-50/20 border-t border-b border-stone-100">
            <div className="text-center max-w-sm mx-auto mb-9">
              <span className="text-[11px] font-bold text-pink-600 bg-pink-50 border border-pink-100 px-4 py-1.5 rounded-full uppercase tracking-wider font-heading shadow-3xs inline-block mb-4">
                GALERIA DE MODELOS 🏛️
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-heading leading-tight tracking-tight">
                Quais Arquivos de Arte Sacra Vêm no Material?
              </h3>
              <p className="text-xs sm:text-[13px] text-stone-500 mt-2 font-sans max-w-xs mx-auto">
                Veja o que você pode fazer com o material:
              </p>
            </div>

            {/* Infinite Auto-playing Booklet Pages Carousel */}
            <BookletCarousel />

            <p className="text-xs sm:text-sm text-stone-600 font-sans text-center max-w-xs sm:max-w-sm mx-auto mt-6 leading-relaxed font-medium">
              Arquivos em altíssima resolução prontos para impressão 3D, pintura e acabamento refinado de imagens sacras.
            </p>

            {/* SECTION MATCHED CTA */}
            <div className="mt-10 px-4">
              <SectionCTA onCTAClick={scrollToPricing} />
            </div>
          </section>

          {/* SESSÃO BONÛS (Sweet Bonuses Package for purchasers) */}
          <section className="px-5 py-16 bg-sky-pastel-50/50 border-t border-b border-sky-pastel-100/50">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-[fadeIn_0.5s_ease-out]">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-pink-50 text-pink-600 text-[11px] font-bold rounded-full border border-pink-100 uppercase tracking-widest font-heading shadow-3xs mb-4">
                <Gift className="w-4 h-4 text-pink-500 animate-pulse" /> BÔNUS EXCLUSIVOS
              </div>
              <h3 className="text-2xl sm:text-3.5xl font-black text-sky-pastel-950 font-heading leading-tight max-w-xl mx-auto px-2">
                Baixe Hoje e Receba Totalmente Grátis estes <span className="text-pink-500">4 Bônus:</span>
              </h3>
            </div>

            <div className="flex flex-col gap-10 max-w-md mx-auto font-sans">
              
              {/* Bonus 1 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                {/* Book Cover Container */}
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_MISSA_PATH} 
                    alt="Guia de Produtos Católicos que Mais Vendem" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Yellow Title Badge */}
                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-sm sm:text-base tracking-tight uppercase font-heading leading-tight block">
                    Guia de Produtos Católicos que Mais Vendem
                  </span>
                </div>

                {/* Dotted Divider */}
                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                {/* Centered Description */}
                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Descubra quais peças costumam vender mais rápido para focar sua produção e ter resultados imediatos.
                </p>

                {/* Bottom Value Capsule */}
                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 37,00</span> GRÁTIS
                  </span>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                {/* Book Cover Container */}
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_DEC_PATH} 
                    alt="Tabela de Preços para Produtos 3D Católicos" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Yellow Title Badge */}
                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-sm sm:text-base tracking-tight uppercase font-heading leading-tight block">
                    Tabela de Preços para Produtos 3D Católicos
                  </span>
                </div>

                {/* Dotted Divider */}
                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                {/* Centered Description */}
                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Uma referência pronta para você não ficar perdido na hora de precificar seus produtos com margem de lucro.
                </p>

                {/* Bottom Value Capsule */}
                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 29,00</span> GRÁTIS
                  </span>
                </div>
              </div>

              {/* Bonus 3 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                {/* Book Cover Container */}
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_NS_PATH} 
                    alt="Guia Rápido de Configuração para Impressão Perfeita" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Yellow Title Badge */}
                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-xs sm:text-[14px] tracking-tight uppercase font-heading leading-tight block">
                    Guia Rápido de Configuração para Impressão Perfeita
                  </span>
                </div>

                {/* Dotted Divider */}
                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                {/* Centered Description */}
                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Orientações práticas para facilitar seus primeiros testes, calibrações e ajustes com acabamento impecável.
                </p>

                {/* Bottom Value Capsule */}
                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 34,00</span> GRÁTIS
                  </span>
                </div>
              </div>

              {/* Bonus 4 */}
              <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-transform duration-300 group border border-sky-pastel-100/30">
                {/* Book Cover Container */}
                <div className="w-full h-64 sm:h-72 select-none flex items-center justify-center mb-6">
                  <img 
                    src={BONUS_APARECIDA_PATH} 
                    alt="Mockups Prontos para Divulgação" 
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Yellow Title Badge */}
                <div className="w-full bg-[#fdee21] px-4 py-3 rounded-2xl text-center shadow-3xs mb-4 select-none">
                  <span className="text-stone-950 font-black text-sm sm:text-base tracking-tight uppercase font-heading leading-tight block">
                    Mockups Prontos para Divulgação
                  </span>
                </div>

                {/* Dotted Divider */}
                <div className="text-stone-400 tracking-[0.4em] text-[13px] font-bold mb-4 select-none text-center">
                  •••••••••••••
                </div>

                {/* Centered Description */}
                <p className="text-stone-700 text-center text-xs sm:text-[13.5px] leading-relaxed max-w-[310px] mb-6 font-medium">
                  Materiais visuais profissionais e prontos para você divulgar nas redes sociais e vender suas peças.
                </p>

                {/* Bottom Value Capsule */}
                <div className="border border-emerald-500/75 bg-emerald-50/20 rounded-full py-2.5 px-6 flex items-center justify-center text-xs sm:text-sm select-none w-full max-w-[280px] sm:max-w-[310px] mx-auto mt-auto">
                  <span className="text-emerald-700 font-extrabold text-center tracking-wide">
                    Valor: <span className="line-through text-stone-450 font-normal mx-1">R$ 47,00</span> GRÁTIS
                  </span>
                </div>
              </div>

            </div>

            {/* SECTION MATCHED CTA */}
            <div className="mt-10 px-4">
              <SectionCTA onCTAClick={scrollToTestimonials} />
            </div>
          </section>

          {/* REAL CONFIDENCE TESTIMONIALS AND PARENT LOVE (Social Proof) */}
          <section id="depoimentos" className="px-5 py-6 bg-white">
            <Testimonials />
          </section>

          {/* SESSÃO DE PAGAMENTO / VALORES DE R$ 10,00 E R$ 14,00 */}
          <section id="sessao-pagamento" className="px-5 py-12 bg-gradient-to-b from-sky-pastel-50 via-sky-pastel-100/50 to-white">
            <div className="text-center max-w-sm sm:max-w-md mx-auto mb-8 font-heading">
              <span className="text-[10px] sm:text-[11px] font-black bg-[#ffbc0d] text-[#0f172a] px-6 py-2.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5 shadow-[0_4px_12px_rgba(255,188,13,0.15)] leading-none">
                OPORTUNIDADE DE HOJE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#0f172a] mt-4.5 tracking-tight leading-tight">
                Leve o material completo
              </h3>
            </div>

            <div className="space-y-7 max-w-sm sm:max-w-[420px] mx-auto">
              {productsList.map((product) => {
                const isPremium = product.id === 'completo';
                return (
                  <div 
                    key={product.id}
                    className={`bg-white rounded-[2rem] pt-10 pb-8 px-5 sm:px-7 border-[3.5px] ${isPremium ? 'border-[#e5007d] scale-95 sm:scale-105 shadow-[0_20px_45px_rgba(229,0,125,0.15)] animate-pulse-premium-card' : 'border-stone-200 scale-95 sm:scale-105'} relative overflow-visible flex flex-col justify-between transition-all duration-305 transform hover:scale-[1.01]`}
                  >
                    <div>
                      {isPremium && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="bg-[#e5007d] text-white font-heading font-black text-xs sm:text-sm tracking-widest px-8 py-2 rounded-full uppercase whitespace-nowrap shadow-sm">
                            {product.badge}
                          </div>
                        </div>
                      )}

                      {/* Card Header / Mockup */}
                      {isPremium ? (
                        <div className="relative select-none flex items-center justify-center mb-6 mt-2">
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full max-w-[290px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        <div className="text-center mb-6 pt-1">
                          <span className="text-[11px] font-black tracking-widest text-stone-500 uppercase font-heading block mb-1.5">
                            {product.badge}
                          </span>
                          <h4 className="text-2xl font-black text-slate-900 uppercase font-heading tracking-tight">
                            {product.name}
                          </h4>
                        </div>
                      )}

                      {/* Checklist */}
                      <div className="space-y-3 mb-6 font-heading">
                        {product.features.map((feature, idx) => {
                          const isNegative = feature.startsWith('Não');
                          return (
                            <div key={idx} className="flex items-center gap-3 text-left border-b border-stone-200/55 pb-2.5 last:border-b-0 last:pb-0">
                              {isNegative ? (
                                <div className="w-5.5 h-5.5 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 flex-shrink-0">
                                  <span className="text-xs font-black">✕</span>
                                </div>
                              ) : (
                                <div className="w-5.5 h-5.5 rounded-full bg-[#22c55e] flex items-center justify-center text-white flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-white stroke-[4.5]" />
                                </div>
                              )}
                              <span className={`text-[12.5px] sm:text-[13.5px] font-bold ${isNegative ? 'text-stone-400' : 'text-slate-800'} tracking-tight leading-tight`}>
                                {feature}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {!isPremium && (
                        <div className="bg-amber-50 text-amber-900 text-xs text-center p-3 rounded-lg mb-6 font-bold uppercase tracking-wide border border-amber-200">
                          Você está perdendo os bônus
                        </div>
                      )}

                      {/* Pricing */}
                      <div className="text-center font-heading mt-7 mb-6 select-none">
                        {isPremium && (
                           <div className="text-stone-500 font-bold text-lg mb-1">
                              De <span className="line-through">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span> por apenas
                           </div>
                        )}
                        <div className="mt-4 mb-2 flex items-baseline justify-center gap-0.5 text-[#00a85a]">
                          <span className="text-3xl font-black">R$</span>
                          <span className="text-6xl font-black">{Math.floor(product.price)}</span>
                          <span className="text-3xl font-black">,{product.price % 1 === 0 ? '00' : (product.price.toFixed(2).split('.')[1])}</span>
                        </div>
                        <div className="text-xs font-semibold text-stone-500 mt-1">
                          Pagamento único
                        </div>
                      </div>
                    </div>

                    {/* Checkout launch trigger */}
                    <div>
                      <button
                        onClick={() => triggerCheckout(product)}
                        className={`w-full font-heading font-black text-sm sm:text-base md:text-lg py-4 rounded-full transition-all duration-150 active:scale-97 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest whitespace-nowrap ${isPremium ? 'shadow-[0_12px_28px_rgba(0,168,90,0.22)] bg-gradient-to-r from-[#00a85a] to-[#12a364] animate-pulse-premium-button' : 'shadow-[0_12px_28px_rgba(0,168,90,0.22)] bg-gradient-to-r from-[#00a85a] to-[#12a364]'} text-white`}
                      >
                        {product.ctaText}
                      </button>

                      <div className="flex items-center justify-center mt-3 text-stone-600 font-medium text-xs sm:text-sm text-center">
                        <span>Receba o material no seu <strong>WhatsApp</strong> e <strong>E-mail</strong></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECURE GUARANTEE PLATFORM EMBED */}
          <section className="px-5 py-14 bg-white border-t border-stone-100">
            <div className="max-w-md sm:max-w-[500px] mx-auto bg-[#f3f9fe] border border-sky-100/70 rounded-[2.5rem] p-7 sm:p-10 text-center font-sans shadow-[0_24px_50px_rgba(224,242,254,0.12)]">
              
              {/* Official 7-Day Guarantee Seal Image Mockup */}
              <div className="flex justify-center mb-5">
                <img 
                  src="https://iili.io/CSevOoG.md.png" 
                  alt="Garantia Incondicional de 7 Dias" 
                  className="w-32 sm:w-40 h-auto object-contain select-none drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Heading and subtext */}
              <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] font-heading tracking-tight mb-2">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-xs sm:text-[14px] text-stone-500/90 leading-relaxed font-sans max-w-sm mx-auto mb-8 font-medium">
                Você tem 7 dias completos para conhecer e testar todo o material!
              </p>

              {/* Custom Guarantee Accordions (FAQ Oficial) */}
              <div className="space-y-3 max-w-md mx-auto">
                {[
                  {
                    id: 1,
                    question: "O que eu recebo após a compra?",
                    answer: "Você recebe o acesso ao pack com mais de 500 arquivos STL católicos, além dos bônus e do pack de luminárias 3D incluídos na oferta."
                  },
                  {
                    id: 2,
                    question: "São arquivos físicos ou digitais?",
                    answer: "São arquivos digitais. Nada é enviado pelos Correios: você recebe o acesso para baixar os modelos."
                  },
                  {
                    id: 3,
                    question: "Quantos arquivos STL estão inclusos?",
                    answer: "Mais de 500 arquivos STL católicos, além dos modelos do pack de luminárias que entra como bônus."
                  },
                  {
                    id: 4,
                    question: "Preciso ter uma impressora 3D?",
                    answer: "Sim. Os arquivos STL são feitos para serem impressos em uma impressora 3D — sua ou de um serviço de impressão."
                  },
                  {
                    id: 5,
                    question: "Posso acessar os arquivos depois?",
                    answer: "Sim. O acesso é vitalício, então você pode voltar e baixar os modelos quando quiser."
                  },
                  {
                    id: 6,
                    question: "Como recebo meu acesso?",
                    answer: "Após a confirmação do pagamento, você recebe as informações de acesso por e-mail e WhatsApp."
                  },
                  {
                    id: 7,
                    question: "O pack de luminárias está incluso?",
                    answer: "Sim. O pack de luminárias 3D entra como bônus, junto com a coleção de arquivos católicos."
                  },
                  {
                    id: 8,
                    question: "Existe garantia?",
                    answer: "Sim. Você tem 7 dias para conhecer o material, conforme as condições de garantia apresentadas na compra."
                  }
                ].map((faq) => {
                  const isOpen = openGuaranteeFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className="bg-white rounded-2xl border border-sky-100/50 shadow-[0_4px_15px_rgba(15,23,42,0.015)] transition-all duration-300 overflow-hidden text-left"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenGuaranteeFaq(isOpen ? null : faq.id)}
                        className="w-full px-5 py-4 flex justify-between items-center gap-4 cursor-pointer text-left focus:outline-none"
                      >
                        <span className="text-[#0f172a] font-black text-[13px] sm:text-[14px] leading-snug tracking-tight">
                          {faq.question}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 text-[#e5007d] transition-all duration-300">
                          <ChevronDown className={`w-3.5 h-3.5 text-[#e5007d] stroke-[3] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      
                      <div 
                        className="transition-all duration-300 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: isOpen ? '260px' : '0px',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="px-5 pb-4.5 pt-1.5 border-t border-stone-100/40">
                          <p className="text-[11.5px] sm:text-[12.5px] text-stone-500 font-sans leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

        </div>

      </div>

      {/* Embedded Simulated Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        product={selectedProduct}
      />

      {showUpsellPopup && (
        <UpsellPopup 
          onClose={() => setShowUpsellPopup(false)}
          onAccept={() => {
            setShowUpsellPopup(false);
            const upsellProduct: Product = {
              id: 'upsell-17',
              name: 'Kit Completo + 6 Bônus Exclusivos',
              badge: 'Oferta Especial',
              imageUrl: 'https://iili.io/CbAjv8x.md.webp',
              price: 17.00,
              originalPrice: 47.00,
              description: 'Aproveite esta oportunidade única para levar o material completo com desconto especial.',
              features: [],
              ctaText: 'Quero o Material Completo',
              checkoutUrl: 'https://pay.hotmart.com/T106617000C?checkoutMode=10'
            };
            executeCheckoutRedirect('https://pay.hotmart.com/T106617000C?checkoutMode=10', upsellProduct);
          }}
          onDecline={() => {
            setShowUpsellPopup(false);
            const basicoProduct = productsList.find(p => p.id === 'basico') || {
              id: 'basico',
              name: 'PLANO BÁSICO',
              badge: 'ESSENCIAL',
              imageUrl: 'https://iili.io/CUEAZSn.md.jpg',
              price: 10.00,
              originalPrice: 27.00,
              description: 'Acesso vitalício aos arquivos essenciais.',
              features: [],
              ctaText: 'Quero o plano básico',
              checkoutUrl: 'https://pay.wiapy.com/ExTcnROdnW9'
            };
            executeCheckoutRedirect('https://pay.wiapy.com/ExTcnROdnW9', basicoProduct);
          }}
        />
      )}

    </div>
  );
}
