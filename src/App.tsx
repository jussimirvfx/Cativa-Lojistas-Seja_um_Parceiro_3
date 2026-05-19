/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp, 
  Sparkles, 
  Truck, 
  Smartphone, 
  Target, 
  MapPin, 
  Instagram,
  X
} from 'lucide-react';
import { useMetaPixel } from './lib/metaPixel';
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/logo-cativasem-simbolo-1778258363010.webp" 
            alt="CATIVA" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#cta-form" className="bg-brand-gold text-stone-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-gold/90 transition-all tracking-wide">
            Seja parceiro
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-black/40 z-10 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 md:hidden" />
        
        {/* Desktop Image */}
        <img 
          src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/hero-grupo-cativa-1778258246733.webp" 
          alt="Moda feminina Cativa" 
          className="w-full h-full object-cover hidden md:block"
        />
        {/* Mobile Image */}
        <img 
          src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/oi-1778525455230.webp" 
          alt="Moda feminina Cativa Mobile" 
          className="w-full h-full object-cover md:hidden"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[32px] sm:text-5xl md:text-7xl font-serif font-semibold leading-[1.2] md:leading-[1.1] mb-6 text-[#F8F7F7] max-w-[300px] sm:max-w-none">
              Seja um lojista parceiro Cativa
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-[#BBBCD0] mb-10 leading-relaxed font-light max-w-[320px] sm:max-w-none">
              Moda feminina feita para a mulher real. Alto giro, qualidade que fideliza e uma marca consolidada no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#cta-form"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-stone-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-[13px] sm:text-lg font-bold hover:bg-brand-gold/90 transition-all group uppercase tracking-wider whitespace-nowrap"
              >
                Quero ser um Lojista Parceiro
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Collection = () => {
  const images = [
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-1778874329143.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/1-1778260216226.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/8-1778260216199.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/4-1778260216125.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-1778874443699.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-5-1778874482289.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-7-1778874504121.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-2-1778874526590.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-6-1778874112761.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-4-1778874151740.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-1-copiar-3-1778874177663.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/13-1778263412546.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Responsive items to show
  const [itemsToShow, setItemsToShow] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / itemsToShow);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000); // Slightly slower intervals for better appreciation
    return () => clearInterval(timer);
  }, [currentIndex, itemsToShow]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = totalPages - 1;
      if (nextIndex >= totalPages) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section id="colecao" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-poppins font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">Lançamento Exclusivo</h2>
          <h3 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#7F8080]">
            <span className="font-poppins font-semibold tracking-tight">Coleção:</span> <span className="font-normal">A vida acontece</span>
          </h3>
        </div>

        <div className="relative group/carousel px-12">
          {/* Navigation Arrows */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#7F8080] p-4 rounded-full shadow-lg text-white hover:bg-white hover:text-[#7F8080] transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#7F8080] p-4 rounded-full shadow-lg text-white hover:bg-white hover:text-[#7F8080] transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem)` }}
              transition={{ type: "spring", stiffness: 45, damping: 15, mass: 1 }}
            >
              {images.map((img, i) => (
                <div 
                  key={i}
                  className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <img 
                    src={img} 
                    alt={`Peça ${i + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12 mb-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-brand-gold' : 'w-2 bg-stone-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#cta-form"
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-gold text-brand-gold px-6 sm:px-10 py-4 rounded-full text-[13px] sm:text-lg font-bold hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1 tracking-wide whitespace-nowrap"
          >
            QUERO CATIVA NA MINHA LOJA
          </a>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const advantages = [
    {
      icon: <TrendingUp size={32} />,
      title: "Alto Giro no PDV",
      desc: <>Pe<span className="font-poppins font-normal">ç</span>as essenciais, comerciais <br className="md:hidden" /> e com excelente aceit<span className="font-poppins font-normal">açã</span>o <br className="md:hidden" /> no mercado.</>
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: "Durabilidade Extrema",
      desc: <>Roupas resistentes <span className="font-poppins font-normal">à</span> <br className="md:hidden" /> m<span className="font-poppins font-normal">á</span>quina de lavar, <br className="md:hidden" /> garantindo que sua cliente <br className="md:hidden" /> volte sempre.</>
    },
    {
      icon: <Target size={32} />,
      title: <>Grade Completa <br /> <span className="font-poppins font-normal">(</span>14 ao EGG<span className="font-poppins font-normal">)</span></>,
      desc: <>5 linhas exclusivas <br className="md:hidden" /> para vestir todas as <br className="md:hidden" /> mulheres e <br className="md:hidden" /> n<span className="font-poppins font-normal">ã</span>o perder venda.</>
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advantages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [advantages.length]);

  return (
    <section id="vantagens" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10 transition-all duration-500">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-300 ${hoveredIndex !== null ? 'blur-[1px] opacity-70' : ''}`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-[#7F8080] whitespace-nowrap sm:whitespace-normal">
            Por que revender Cativa<span className="font-poppins font-semibold">?</span>
          </h2>
          <p className="text-[#7F8080]/70 font-medium text-lg">Diferenciais que impulsionam o seu negócio.</p>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                scale: hoveredIndex === i ? 1.04 : (hoveredIndex !== null ? 0.98 : 1),
                filter: hoveredIndex !== null && hoveredIndex !== i ? 'blur(1.5px)' : 'blur(0px)',
                opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.4 : 1,
              }}
              className={`bg-white p-10 rounded-3xl border border-[#7F8080]/20 flex flex-col gap-6 text-center items-center cursor-default relative
                ${hoveredIndex === i ? 'shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-20' : 'shadow-sm z-10'}
              `}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1
              }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[#EFDE9D]/20 flex items-center justify-center text-[#EFDE9D] transition-all">
                {adv.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#7F8080]">{adv.title}</h3>
              <p className="text-[#7F8080]/70 leading-relaxed font-medium">{adv.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative px-4">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-4"
              animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 1}rem)` }}
              transition={{ type: "spring", stiffness: 45, damping: 15, mass: 1 }}
            >
              {advantages.map((adv, i) => (
                <div 
                  key={i} 
                  className="min-w-full bg-white p-10 rounded-3xl border border-[#7F8080]/20 flex flex-col gap-6 text-center items-center shadow-sm"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#EFDE9D]/20 flex items-center justify-center text-[#EFDE9D]">
                    {adv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#7F8080]">{adv.title}</h3>
                  <p className="text-[#7F8080]/70 leading-relaxed font-medium text-sm">{adv.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {advantages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-[#EFDE9D]' : 'w-2 bg-stone-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const wrapSpecialChars = (text: string, weight: string = "font-normal", extraClasses: string = "", fontClass: string = "font-poppins") => {
  const chars = /[çáãàâéèêíïóôõúûüÇÁÃÀÂÉÈÊÍÏÓÔÕÚÛÜ()]/i;
  return text.split('').map((char, index) => {
    if (chars.test(char)) {
      return <span key={index} className={`${fontClass} ${weight} ${extraClasses}`}>{char}</span>;
    }
    return char;
  });
};

const StatItem = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 500;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="bg-[#F8F7F7]/70 p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2.5rem] shadow-sm border border-white/50 flex flex-col items-center justify-center gap-2 sm:gap-4 text-center aspect-auto sm:aspect-square md:aspect-auto min-h-[120px] sm:min-h-[220px] w-full max-w-[280px] sm:max-w-[320px] mx-auto overflow-hidden"
    >
      <div className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-[#7F8080] tabular-nums tracking-tighter leading-none whitespace-nowrap">
        {count.toLocaleString('pt-BR')}{suffix ? ` ${suffix}` : ""}
      </div>
      <div className="text-[10px] md:text-xs text-[#7F8080]/60 font-bold uppercase tracking-[0.2em] leading-tight">
        {wrapSpecialChars(label)}
      </div>
    </motion.div>
  );
};

const Brand = () => {
  return (
    <section id="marca" className="py-12 sm:py-24 bg-[#EFDE9D] overflow-hidden relative">
      {/* Decorative details in #F8F7F7 */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F8F7F7]/20 rounded-full -translate-x-32 -translate-y-32 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#F8F7F7]/30 rounded-full translate-x-16 -translate-y-16 blur-2xl" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#F8F7F7]/10 rounded-full translate-y-24 blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <p className="text-xl md:text-2xl text-[#7F8080] leading-relaxed font-serif font-medium">
            {wrapSpecialChars("O Grupo Cativa é um dos maiores nomes da indústria têxtil nacional, focado em apoiar o crescimento de lojas tradicionais em todo o país.")}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 md:gap-10 max-w-5xl mx-auto items-center">
          <StatItem value={6000} suffix="+" label="Pontos de Venda Ativos" />
          <StatItem value={4} label="Parques Fabris Próprios" />
          <StatItem value={35} suffix="+" label="Anos de Mercado" />
        </div>
      </div>
    </section>
  );
};

const Conditions = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const desktopImages = [
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/2-1778504534381.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/3-1778504534392.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/5-1778504534292.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/1-1778504534285.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/4-1778504534301.webp"
  ];

  const mobileImages = [
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/03-1778525407767.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/02-1778525407673.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/05-1778525407727.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/prancheta-2-1778525407687.webp",
    "https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/04-1778525407617.webp"
  ];

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const conditions = [
    {
      title: "Frete Grátis",
      desc: "Condições especiais de entrega para abastecer a sua loja",
      icon: <Truck size={36} />
    },
    {
      title: "Prazos Facilitados",
      desc: "Pagamento em boleto bancário direto de fábrica.",
      icon: <CheckCircle2 size={36} />
    },
    {
      title: "Crédito Ágil",
      desc: "Análise de crédito rápida para você receber suas peças o quanto antes.",
      icon: <Sparkles size={36} />
    }
  ];

  return (
    <section className="py-12 sm:py-32 bg-[#F8F7F7] relative overflow-hidden min-h-[400px] sm:min-h-[800px] flex items-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={bgIndex}
            src={images[bgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-20 flex justify-center">
          <div className="relative p-12 md:p-16">
            {/* Stronger gradient background for readability */}
            <div className="absolute inset-0 bg-black/70 blur-3xl rounded-full scale-125 opacity-90 -z-10" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#F8F7F7] uppercase drop-shadow-lg tracking-wider"
            >
              {wrapSpecialChars("CONDIÇÕES COMERCIAIS", "font-semibold")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-[#F8F7F7] font-medium italic drop-shadow-md"
            >
              {wrapSpecialChars("Facilidade e transparência para nossa parceria crescer.", "font-normal", "not-italic")}
            </motion.p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {conditions.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] }
              }}
              className="bg-[#F8F7F7] p-6 md:p-8 rounded-[2rem] shadow-sm border border-white/50 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 transition-all duration-300 cursor-default"
            >
              <div className="text-[#EFDE9D] flex-shrink-0 p-4 bg-[#EFDE9D]/20 rounded-2xl">
                {item.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-[#7F8080]">
                  {wrapSpecialChars(item.title, "font-semibold")}
                </h3>
                <p className="text-[#7F8080]/70 font-medium text-base md:text-lg">
                  {wrapSpecialChars(item.desc, "font-normal")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type LeadFormData = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  nomeLoja: string;
  cnpj: string;
  instagram: string;
  marcasAtuais: string;
  storeType: string;
  hasPhysicalStore: string;
  segments: string[];
  tempoCnpj: string;
};

type FormFieldName =
  | 'nome'
  | 'email'
  | 'telefone'
  | 'cidade'
  | 'estado'
  | 'nomeLoja'
  | 'cnpj'
  | 'instagram'
  | 'marcasAtuais'
  | 'storeType'
  | 'hasPhysicalStore'
  | 'segments'
  | 'tempoCnpj';

type FormErrors = Partial<Record<FormFieldName, string>>;

type LeadScoreItem = {
  question: string;
  answer: string;
  points: number;
  disqualifies: boolean;
};

type LeadScoreDetails = {
  score: number;
  raw_score: number;
  calculation: string;
  qualified: boolean;
  disqualified: boolean;
  disqualification_reasons: string[];
  breakdown: LeadScoreItem[];
};

type LeadPayload = Record<string, unknown> & {
  qualified: boolean;
  disqualified: boolean;
  qualification_status: 'Qualificado' | 'Desqualificado';
};

type WebhookPayload = Record<string, string | string[]>;

const FORM_ID = 'cta-form';
const BRAND_NAME = 'Grupo Cativa';

const DDDS_VALIDOS = [
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28,
  31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46,
  47, 48, 49,
  51, 53, 54, 55,
  61, 62, 63, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 79,
  81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99
];

const leadScoreConfig = {
  lastUpdated: "2026-05-18T16:49:58.836Z",
  stateConfig: {
    question: "Em qual estado está localizado?",
    priorityStates: [
      "SP", "RJ", "MG", "RS", "PR", "SC", "GO", "DF", "BA", "PE", "CE", "ES", "MT", "MS", "PB", "RN", "AL", "SE", "PI", "MA", "TO", "PA", "AM", "RO", "AC", "RR", "AP"
    ],
    disqualifyNonPriority: false,
    pointsForPriorityState: 1
  },
  questions: [
    {
      id: "storeType",
      question: "Qual o tipo da loja?",
      type: "single-choice",
      enabled: true,
      isDefault: true,
      disqualifyOnNo: false,
      options: [
        { value: "boutique", label: "Boutique", points: 40, disqualifies: false },
        { value: "shopping", label: "Loja de shopping", points: 20, disqualifies: false },
        { value: "tradicional", label: "Loja de bairro / tradicional", points: 40, disqualifies: false },
        { value: "online", label: "Loja online", points: 10, disqualifies: false },
        { value: "autonomo", label: "Revendedor(a) autônomo(a)", points: 0, disqualifies: true },
        { value: "", label: "Multimarcas", points: 35, disqualifies: false }
      ]
    },
    {
      id: "hasPhysicalStore",
      question: "Possui loja física?",
      type: "yes-no",
      enabled: true,
      isDefault: true,
      disqualifyOnNo: true,
      options: [
        { value: "yes", label: "Sim", points: 19, disqualifies: false },
        { value: "no", label: "Não", points: 0, disqualifies: true }
      ]
    },
    {
      id: "segments",
      question: "Quais segmentos de produtos trabalha?",
      type: "multiple-choice",
      enabled: true,
      isDefault: true,
      disqualifyOnNo: false,
      options: [
        { value: "feminino", label: "Adulto Feminino", points: 10, disqualifies: false },
        { value: "masculino", label: "Adulto Masculino", points: 0, disqualifies: false },
        { value: "infantil", label: "Infantil", points: 0, disqualifies: false }
      ]
    },
    {
      id: 1779114772592,
      question: "Há quanto tempo você possui CNPJ?",
      type: "single-choice",
      enabled: true,
      isDefault: false,
      disqualifyOnNo: false,
      options: [
        { value: "", label: "Menos de 1 ano", points: 0, disqualifies: true },
        { value: "", label: "De 1 a 2 anos", points: 10, disqualifies: false },
        { value: "", label: "De 3 a 4 anos", points: 20, disqualifies: false },
        { value: "", label: "Mais de 5 anos", points: 30, disqualifies: false }
      ]
    }
  ]
};

const getTelefoneNumerosLocais = (telefone: string) => {
  const numeros = telefone.replace(/\D/g, '');
  return numeros.length > 11 && numeros.startsWith('55') ? numeros.slice(2, 13) : numeros.slice(0, 11);
};

const telefoneMask = (value: string) => {
  const numbers = getTelefoneNumerosLocais(value);

  if (numbers.length <= 2) return numbers ? `(${numbers}` : '';
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
};

const cnpjMask = (value: string) => {
  const numbers = value.replace(/\D/g, '').slice(0, 14);
  if (numbers.length <= 2) return numbers;
  if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`;
  if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`;
  if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`;
  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12)}`;
};

const validarTelefone = (telefone: string): boolean => {
  const numeros = getTelefoneNumerosLocais(telefone);
  return numeros.length >= 10 && numeros.length <= 11;
};

const validarTelefoneCompleto = (telefone: string): { valido: boolean; erro?: string } => {
  const numeros = getTelefoneNumerosLocais(telefone);

  if (!validarTelefone(telefone)) {
    return { valido: false, erro: 'Telefone deve ter 10 ou 11 dígitos' };
  }

  const ddd = parseInt(numeros.slice(0, 2), 10);
  if (!DDDS_VALIDOS.includes(ddd)) {
    return { valido: false, erro: 'DDD inválido' };
  }

  if (numeros.length === 11 && numeros[2] !== '9') {
    return { valido: false, erro: 'Celular deve ter o 9 após o DDD' };
  }

  return { valido: true };
};

const validarEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validarCnpj = (cnpj: string): boolean => {
  return cnpj.replace(/\D/g, '').length === 14;
};

const converterParaE164 = (telefone: string): string => {
  const numeros = getTelefoneNumerosLocais(telefone);
  return `+55${numeros}`;
};

const getQuestionOption = (questionId: string | number, selectedValue: string) => {
  const question = leadScoreConfig.questions.find((item) => item.id === questionId);
  return question?.options.find((option) => (option.value || option.label) === selectedValue);
};

const getQuestion = (questionId: string | number) => {
  return leadScoreConfig.questions.find((item) => item.id === questionId);
};

const getSelectedOptionLabel = (questionId: string | number, selectedValue: string) => {
  return getQuestionOption(questionId, selectedValue)?.label || selectedValue;
};

const calculateLeadScore = (formData: LeadFormData): LeadScoreDetails => {
  const breakdown: LeadScoreItem[] = [];
  const disqualification_reasons: string[] = [];
  const estado = formData.estado.toUpperCase();

  const addScoreItem = (item: LeadScoreItem) => {
    breakdown.push(item);
    if (item.disqualifies) {
      disqualification_reasons.push(`${item.question}: ${item.answer}`);
    }
  };

  const stateIsPriority = leadScoreConfig.stateConfig.priorityStates.includes(estado);
  addScoreItem({
    question: leadScoreConfig.stateConfig.question,
    answer: estado,
    points: stateIsPriority ? leadScoreConfig.stateConfig.pointsForPriorityState : 0,
    disqualifies: leadScoreConfig.stateConfig.disqualifyNonPriority && !stateIsPriority
  });

  const storeTypeQuestion = getQuestion('storeType');
  const storeType = getQuestionOption('storeType', formData.storeType);
  if (storeType && storeTypeQuestion) {
    addScoreItem({
      question: storeTypeQuestion.question,
      answer: storeType.label,
      points: storeType.points,
      disqualifies: storeType.disqualifies
    });
  }

  const hasPhysicalStoreQuestion = getQuestion('hasPhysicalStore');
  const hasPhysicalStore = getQuestionOption('hasPhysicalStore', formData.hasPhysicalStore);
  if (hasPhysicalStore && hasPhysicalStoreQuestion) {
    addScoreItem({
      question: hasPhysicalStoreQuestion.question,
      answer: hasPhysicalStore.label,
      points: hasPhysicalStore.points,
      disqualifies: hasPhysicalStore.disqualifies
    });
  }

  const segmentsQuestion = getQuestion('segments');
  formData.segments.forEach((segment) => {
    const segmentOption = getQuestionOption('segments', segment);
    if (segmentOption && segmentsQuestion) {
      addScoreItem({
        question: segmentsQuestion.question,
        answer: segmentOption.label,
        points: segmentOption.points,
        disqualifies: segmentOption.disqualifies
      });
    }
  });

  const tempoCnpjQuestion = getQuestion(1779114772592);
  const tempoCnpj = getQuestionOption(1779114772592, formData.tempoCnpj);
  if (tempoCnpj && tempoCnpjQuestion) {
    addScoreItem({
      question: tempoCnpjQuestion.question,
      answer: tempoCnpj.label,
      points: tempoCnpj.points,
      disqualifies: tempoCnpj.disqualifies
    });
  }

  const raw_score = breakdown.reduce((total, item) => total + item.points, 0);
  const score = Math.min(raw_score, 100);
  const disqualified = disqualification_reasons.length > 0;
  const calculation = `${breakdown.map((item) => item.points).join(' + ')} = ${raw_score}${score !== raw_score ? `, limitado a ${score}` : ''}`;
  const qualified = !disqualified && score >= 50;

  return {
    score,
    raw_score,
    calculation,
    qualified,
    disqualified,
    disqualification_reasons,
    breakdown
  };
};

const buildLeadPayload = (formData: LeadFormData, leadScoreDetails: LeadScoreDetails): LeadPayload => {
  const telefoneE164 = converterParaE164(formData.telefone);
  const cnpjNumerico = formData.cnpj.replace(/\D/g, '');

  return {
    name: formData.nome.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: telefoneE164,
    city: formData.cidade.trim(),
    state: formData.estado.trim().toUpperCase(),
    country: formData.pais,
    value: leadScoreDetails.score,
    currency: 'BRL',
    content_name: 'Formulario de Contato',
    content_category: 'Lead Generation',
    lead_score: leadScoreDetails.score,
    lead_score_details: leadScoreDetails,
    qualified: leadScoreDetails.qualified,
    disqualified: leadScoreDetails.disqualified,
    qualification_status: leadScoreDetails.qualified ? 'Qualificado' : 'Desqualificado',
    disqualification_reasons: leadScoreDetails.disqualification_reasons,
    store_name: formData.nomeLoja.trim(),
    cnpj: cnpjNumerico,
    instagram: formData.instagram.trim(),
    current_brands: formData.marcasAtuais.trim(),
    store_type: formData.storeType,
    has_physical_store: formData.hasPhysicalStore,
    segments: formData.segments,
    cnpj_age: formData.tempoCnpj
  };
};

const buildWebhookPayload = (formData: LeadFormData): WebhookPayload => {
  const cnpjNumerico = formData.cnpj.replace(/\D/g, '');

  return {
    nome_completo: formData.nome.trim(),
    nome_da_loja: formData.nomeLoja.trim(),
    whatsapp_com_ddd: formData.telefone,
    whatsapp_e164: converterParaE164(formData.telefone),
    email: formData.email.trim().toLowerCase(),
    cnpj: formData.cnpj,
    cnpj_numerico: cnpjNumerico,
    cidade: formData.cidade.trim(),
    estado: formData.estado.trim().toUpperCase(),
    pais: formData.pais,
    instagram_da_loja: formData.instagram.trim(),
    marcas_que_vende_hoje: formData.marcasAtuais.trim(),
    tipo_da_loja: getSelectedOptionLabel('storeType', formData.storeType),
    tempo_de_cnpj: getSelectedOptionLabel(1779114772592, formData.tempoCnpj),
    possui_loja_fisica: getSelectedOptionLabel('hasPhysicalStore', formData.hasPhysicalStore),
    segmentos_de_produtos: formData.segments.map((segment) => getSelectedOptionLabel('segments', segment))
  };
};

const enviarParaWebhook = async (webhookData: WebhookPayload) => {
  const webhookUrl = import.meta.env.VITE_FORM_WEBHOOK_URL;
  const webhookToken = import.meta.env.VITE_WEBHOOK_TOKEN;

  if (!webhookUrl) {
    throw new Error('Variavel VITE_FORM_WEBHOOK_URL nao configurada.');
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (webhookToken) {
    headers.Authorization = `Bearer ${webhookToken}`;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      ...webhookData,
      timestamp: new Date().toISOString(),
      source: 'landing-page',
      user_agent: navigator.userAgent,
      page_url: window.location.href,
      referrer: document.referrer || 'direct'
    })
  });

  if (!response.ok) {
    throw new Error(`Webhook error: ${response.status}`);
  }

  console.log('Dados enviados para webhook com sucesso');

  const responseText = await response.text();
  if (!responseText) return null;

  try {
    return JSON.parse(responseText);
  } catch {
    return responseText;
  }
};

const PartnershipForm = () => {
  const { trackLead, trackLeadQualificado } = useMetaPixel();
  const [formData, setFormData] = useState<LeadFormData>({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    pais: 'Brasil',
    nomeLoja: '',
    cnpj: '',
    instagram: '',
    marcasAtuais: '',
    storeType: '',
    hasPhysicalStore: '',
    segments: [],
    tempoCnpj: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'qualified' | 'disqualified' | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const updateFormData = <K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
    if (key !== 'pais') {
      clearFieldError(key as FormFieldName);
    }
  };

  const clearFieldError = (field: FormFieldName) => {
    setFormErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    clearFieldError('segments');
    setFormData((current) => ({
      ...current,
      segments: checked
        ? [...current.segments, value]
        : current.segments.filter((segment) => segment !== value)
    }));
  };

  const fieldBaseClass = 'w-full px-4 py-3 rounded-xl border focus:ring-4 outline-none transition-all';

  const getFieldClassName = (field: FormFieldName, extraClasses = '') => {
    const errorClasses = formErrors[field]
      ? 'border-red-500 bg-red-50/50 focus:border-red-500 focus:ring-red-500/15'
      : 'border-stone-200 focus:border-brand-primary focus:ring-brand-primary/10';

    return `${fieldBaseClass} ${errorClasses} ${extraClasses}`.trim();
  };

  const getChoiceClassName = (field: FormFieldName) => {
    return formErrors[field]
      ? 'border-red-500 bg-red-50/50'
      : 'border-stone-200 hover:border-brand-primary';
  };

  const renderFieldError = (field: FormFieldName) => {
    if (!formErrors[field]) return null;
    return (
      <p className="mt-2 text-sm font-semibold text-red-600" id={`${field}-error`}>
        {formErrors[field]}
      </p>
    );
  };

  const focusField = (field: FormFieldName) => {
    requestAnimationFrame(() => {
      const fieldElement = document.querySelector<HTMLElement>(`[data-field="${field}"]`);
      if (!fieldElement) return;

      fieldElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      const input = fieldElement.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea');
      setTimeout(() => input?.focus(), 450);
    });
  };

  const validateForm = () => {
    const errors: FormErrors = {};
    const order: FormFieldName[] = [
      'nome',
      'nomeLoja',
      'telefone',
      'email',
      'cnpj',
      'cidade',
      'estado',
      'instagram',
      'marcasAtuais',
      'storeType',
      'tempoCnpj',
      'hasPhysicalStore',
      'segments'
    ];

    if (!formData.nome.trim()) errors.nome = 'Informe seu nome completo.';
    if (!formData.nomeLoja.trim()) errors.nomeLoja = 'Informe o nome da loja.';

    if (!formData.telefone.trim()) {
      errors.telefone = 'Informe o WhatsApp com DDD.';
    } else {
      const validacaoTelefone = validarTelefoneCompleto(formData.telefone);
      if (!validacaoTelefone.valido) {
        errors.telefone = `Telefone inválido: ${validacaoTelefone.erro}.`;
      }
    }

    if (!formData.email.trim()) {
      errors.email = 'Informe seu e-mail.';
    } else if (!validarEmail(formData.email)) {
      errors.email = 'Informe um e-mail válido.';
    }

    if (!formData.cnpj.trim()) {
      errors.cnpj = 'Informe o CNPJ.';
    } else if (!validarCnpj(formData.cnpj)) {
      errors.cnpj = 'CNPJ inválido: informe os 14 dígitos do CNPJ.';
    }

    if (!formData.cidade.trim()) errors.cidade = 'Informe a cidade.';
    if (!formData.estado.trim()) errors.estado = 'Selecione o estado.';
    if (!formData.instagram.trim()) errors.instagram = 'Informe o Instagram da loja.';
    if (!formData.marcasAtuais.trim()) errors.marcasAtuais = 'Informe as marcas que vende hoje.';
    if (!formData.storeType) errors.storeType = 'Selecione o tipo da loja.';
    if (!formData.tempoCnpj) errors.tempoCnpj = 'Selecione o tempo de CNPJ.';
    if (!formData.hasPhysicalStore) errors.hasPhysicalStore = 'Selecione se possui loja física.';
    if (formData.segments.length === 0) errors.segments = 'Selecione pelo menos um segmento.';

    setFormErrors(errors);
    const firstError = order.find((field) => errors[field]);
    if (firstError) focusField(firstError);

    return !firstError;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const leadScoreDetails = calculateLeadScore(formData);
    const leadData = buildLeadPayload(formData, leadScoreDetails);
    const webhookData = buildWebhookPayload(formData);

    console.log('Lead scoring detalhado:', leadScoreDetails);
    console.log('Dados preparados para Meta:', leadData);
    console.log('Dados preparados para webhook:', webhookData);
    setIsSubmitting(true);
    try {
      if (!leadScoreDetails.disqualified) {
        await trackLead(leadData);
        console.log('Lead enviado para Meta!');
      } else {
        console.log('Lead desqualificado pela curadoria:', leadScoreDetails);
      }

      if (leadScoreDetails.qualified) {
        await trackLeadQualificado(leadData);
        console.log('Lead qualificado enviado para Meta!');
      }

      await enviarParaWebhook(webhookData);
      setSubmissionStatus(leadScoreDetails.disqualified ? 'disqualified' : 'qualified');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={FORM_ID} className="py-24 bg-[#EFDE9D] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 italic text-[#7F8080]">
              <span className="md:hidden">
                {wrapSpecialChars("Dê o primeiro passo", "font-semibold", "italic", "font-montserrat")}
                <br />
                {wrapSpecialChars("para o crescimento", "font-semibold", "italic", "font-montserrat")}
                <br />
                {wrapSpecialChars("da sua loja!", "font-semibold", "italic", "font-montserrat")}
              </span>
              <span className="hidden md:block">
                {wrapSpecialChars("Dê o primeiro passo para", "font-semibold", "italic", "font-montserrat")}
                <br />
                {wrapSpecialChars("o crescimento da sua loja!", "font-semibold", "italic", "font-montserrat")}
              </span>
            </h2>
            <p className="text-[#7F8080]">{wrapSpecialChars("Preencha os dados abaixo para qualificação do cadastro.")}</p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 border border-stone-100">
            {isSubmitted ? (
              <div className="min-h-[360px] flex flex-col items-center justify-center text-center gap-6">
                {submissionStatus === 'disqualified' ? (
                  <>
                    <div className="w-36 h-36 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <X size={92} strokeWidth={2.6} />
                    </div>
                    <p className="text-[#7F8080]/80 text-lg max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
                      {`Infelizmente, informamos que o seu cadastro não foi selecionado para avançarmos neste momento. 

Como nosso processo de entrada passa por uma curadoria interna, não conseguiremos seguir com a parceria agora. 

Agradecemos o seu interesse na nossa marca e desejamos muito sucesso!`}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-36 h-36 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                      <CheckCircle2 size={92} strokeWidth={2.6} />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#7F8080] mb-3">
                        Obrigado pelo cadastro!
                      </h3>
                      <p className="text-[#7F8080]/75 text-lg max-w-xl mx-auto">
                        Recebemos suas informações. Nossa equipe entrará em contato em breve para falar sobre a parceria com o Grupo Cativa.
                      </p>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div data-field="nome">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("Nome completo *", "font-semibold")}</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => updateFormData('nome', e.target.value)}
                      className={getFieldClassName('nome')}
                      aria-invalid={!!formErrors.nome}
                      aria-describedby={formErrors.nome ? 'nome-error' : undefined}
                    />
                    {renderFieldError('nome')}
                  </div>
                  <div data-field="nomeLoja">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Nome da Loja *</label>
                    <input
                      type="text"
                      required
                      value={formData.nomeLoja}
                      onChange={(e) => updateFormData('nomeLoja', e.target.value)}
                      className={getFieldClassName('nomeLoja')}
                      aria-invalid={!!formErrors.nomeLoja}
                      aria-describedby={formErrors.nomeLoja ? 'nomeLoja-error' : undefined}
                    />
                    {renderFieldError('nomeLoja')}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div data-field="telefone">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("WhatsApp com DDD *")}</label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => updateFormData('telefone', telefoneMask(e.target.value))}
                      className={getFieldClassName('telefone')}
                      placeholder="(11) 99999-9999"
                      inputMode="tel"
                      maxLength={15}
                      aria-invalid={!!formErrors.telefone}
                      aria-describedby={formErrors.telefone ? 'telefone-error' : undefined}
                    />
                    {renderFieldError('telefone')}
                  </div>
                  <div data-field="email">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={getFieldClassName('email')}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {renderFieldError('email')}
                  </div>
                  <div data-field="cnpj">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">CNPJ *</label>
                    <input
                      type="text"
                      required
                      value={formData.cnpj}
                      onChange={(e) => updateFormData('cnpj', cnpjMask(e.target.value))}
                      className={getFieldClassName('cnpj')}
                      inputMode="numeric"
                      maxLength={18}
                      placeholder="00.000.000/0000-00"
                      aria-invalid={!!formErrors.cnpj}
                      aria-describedby={formErrors.cnpj ? 'cnpj-error' : undefined}
                    />
                    {renderFieldError('cnpj')}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div data-field="cidade">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Cidade *</label>
                    <input
                      type="text"
                      required
                      value={formData.cidade}
                      onChange={(e) => updateFormData('cidade', e.target.value)}
                      className={getFieldClassName('cidade')}
                      placeholder="Ex: São Paulo"
                      aria-invalid={!!formErrors.cidade}
                      aria-describedby={formErrors.cidade ? 'cidade-error' : undefined}
                    />
                    {renderFieldError('cidade')}
                  </div>
                  <div data-field="estado">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Em qual estado está localizado? *</label>
                    <select
                      required
                      value={formData.estado}
                      onChange={(e) => updateFormData('estado', e.target.value)}
                      className={getFieldClassName('estado', 'cursor-pointer text-[#7F8080]')}
                      aria-invalid={!!formErrors.estado}
                      aria-describedby={formErrors.estado ? 'estado-error' : undefined}
                    >
                      <option value="">Selecionar</option>
                      {leadScoreConfig.stateConfig.priorityStates.map((uf) => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                    {renderFieldError('estado')}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div data-field="instagram">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">@ do Instagram da Loja *</label>
                    <input
                      type="text"
                      required
                      value={formData.instagram}
                      onChange={(e) => updateFormData('instagram', e.target.value)}
                      className={getFieldClassName('instagram')}
                      aria-invalid={!!formErrors.instagram}
                      aria-describedby={formErrors.instagram ? 'instagram-error' : undefined}
                    />
                    {renderFieldError('instagram')}
                  </div>
                  <div data-field="marcasAtuais">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Marcas que vende hoje? *</label>
                    <input
                      type="text"
                      required
                      value={formData.marcasAtuais}
                      onChange={(e) => updateFormData('marcasAtuais', e.target.value)}
                      className={getFieldClassName('marcasAtuais')}
                      aria-invalid={!!formErrors.marcasAtuais}
                      aria-describedby={formErrors.marcasAtuais ? 'marcasAtuais-error' : undefined}
                    />
                    {renderFieldError('marcasAtuais')}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div data-field="storeType">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Qual o tipo da loja? *</label>
                    <select
                      required
                      value={formData.storeType}
                      onChange={(e) => updateFormData('storeType', e.target.value)}
                      className={getFieldClassName('storeType', 'cursor-pointer text-[#7F8080]')}
                      aria-invalid={!!formErrors.storeType}
                      aria-describedby={formErrors.storeType ? 'storeType-error' : undefined}
                    >
                      <option value="">Selecionar</option>
                      {leadScoreConfig.questions[0].options.map((option) => (
                        <option key={option.label} value={option.value || option.label}>{option.label}</option>
                      ))}
                    </select>
                    {renderFieldError('storeType')}
                  </div>
                  <div data-field="tempoCnpj">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">Há quanto tempo você possui CNPJ? *</label>
                    <select
                      required
                      value={formData.tempoCnpj}
                      onChange={(e) => updateFormData('tempoCnpj', e.target.value)}
                      className={getFieldClassName('tempoCnpj', 'cursor-pointer text-[#7F8080]')}
                      aria-invalid={!!formErrors.tempoCnpj}
                      aria-describedby={formErrors.tempoCnpj ? 'tempoCnpj-error' : undefined}
                    >
                      <option value="">Selecionar</option>
                      {leadScoreConfig.questions[3].options.map((option) => (
                        <option key={option.label} value={option.value || option.label}>{option.label}</option>
                      ))}
                    </select>
                    {renderFieldError('tempoCnpj')}
                  </div>
                  <div data-field="hasPhysicalStore">
                    <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("Possui loja física? *", "font-semibold")}</label>
                    <div className={`flex gap-8 rounded-xl border px-4 py-3 transition-colors ${getChoiceClassName('hasPhysicalStore')}`}>
                      {leadScoreConfig.questions[1].options.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="hasPhysicalStore"
                            required
                            value={option.value}
                            checked={formData.hasPhysicalStore === option.value}
                            onChange={(e) => updateFormData('hasPhysicalStore', e.target.value)}
                            className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                            aria-invalid={!!formErrors.hasPhysicalStore}
                            aria-describedby={formErrors.hasPhysicalStore ? 'hasPhysicalStore-error' : undefined}
                          />
                          <span className="text-[#7F8080] font-medium group-hover:text-brand-primary transition-colors">{wrapSpecialChars(option.label)}</span>
                        </label>
                      ))}
                    </div>
                    {renderFieldError('hasPhysicalStore')}
                  </div>
                </div>

                <div data-field="segments">
                  <label className="text-sm font-bold text-[#7F8080] block mb-3">Quais segmentos de produtos trabalha? *</label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {leadScoreConfig.questions[2].options.map((option) => (
                      <label key={option.value} className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${getChoiceClassName('segments')}`}>
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={formData.segments.includes(option.value)}
                          onChange={handleSegmentChange}
                          className="w-4 h-4 text-brand-primary focus:ring-brand-primary rounded"
                          aria-invalid={!!formErrors.segments}
                          aria-describedby={formErrors.segments ? 'segments-error' : undefined}
                        />
                        <span className="text-[#7F8080] font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {renderFieldError('segments')}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-[#7F8080] py-5 rounded-2xl text-xl font-bold hover:bg-brand-secondary disabled:opacity-70 disabled:cursor-wait transition-all shadow-xl shadow-brand-primary/20 uppercase tracking-widest mt-8"
                >
                  {isSubmitting ? 'Enviando...' : wrapSpecialChars("Enviar Cadastro", "font-bold")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.86 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
  </svg>
);

const WhatsAppCallout = ({ isVisible, onClose, brandName }: { isVisible: boolean; onClose: () => void; brandName: string }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 sm:bottom-32 right-4 z-40 bg-white rounded-lg shadow-lg p-4 max-w-xs sm:max-w-sm animate-slideInRight border border-gray-200">
      <div className="flex items-start gap-3">
        <button onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Fechar chamada do WhatsApp">
          <X className="w-4 h-4" />
        </button>
        <p className="text-gray-800 text-sm font-medium leading-relaxed">
          Clique no botão WhatsApp para ir direto ao formulário e ser um lojista parceiro <span className="font-bold text-green-600">{brandName}</span>!
        </p>
      </div>
      <div className="absolute bottom-0 right-9 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform translate-y-full drop-shadow-lg" />
    </div>
  );
};

const WhatsAppFloatingButtonScroll = ({ formId = FORM_ID, brandName = BRAND_NAME }: { formId?: string; brandName?: string }) => {
  const [showCallout, setShowCallout] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowCallout(true), 6000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showCallout) return;
    const hideTimer = setTimeout(() => setShowCallout(false), 12000);
    return () => clearTimeout(hideTimer);
  }, [showCallout]);

  const handleScrollToForm = () => {
    setShowCallout(false);
    const formElement = document.getElementById(formId);
    if (!formElement) return;

    formElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });

    const firstInput = formElement.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 1000);
    }
  };

  return (
    <>
      <WhatsAppCallout isVisible={showCallout} onClose={() => setShowCallout(false)} brandName={brandName} />
      <button
        onClick={handleScrollToForm}
        className="fixed bottom-4 right-4 z-30 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-float"
        aria-label={`Ir para formulário de contato ${brandName}`}
      >
        <WhatsAppIcon className="w-8 h-8" />
      </button>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <img 
            src="https://frwfcibbvbj5zog7.public.blob.vercel-storage.com/geral/logo-cativasem-simbolo-1778258363010.webp" 
            alt="CATIVA Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          
          <div className="text-stone-500 text-sm font-medium">
            2026, Mais Lojistas © Todos os direitos reservados.
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/cativa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-stone-100 flex items-center justify-center hover:bg-stone-50 text-stone-500 hover:text-brand-primary transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Collection />
      <Advantages />
      <Brand />
      <Conditions />
      <PartnershipForm />
      <WhatsAppFloatingButtonScroll formId={FORM_ID} brandName={BRAND_NAME} />
      <Footer />
    </div>
  );
}
