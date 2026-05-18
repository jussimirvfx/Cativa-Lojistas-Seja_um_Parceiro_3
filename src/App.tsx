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
  Menu,
  X,
  Quote
} from 'lucide-react';
import { useState, useEffect, useRef, FormEvent } from 'react';

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
          <a href="#contato" className="bg-brand-gold text-stone-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-gold/90 transition-all tracking-wide">
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
                href="#contato"
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
            href="#contato"
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

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    nomeProprietario: '',
    nomeLoja: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    cidade: '',
    estado: '',
    instagram: '',
    marcasAtuais: '',
    tipoLoja: '',
    tempoCnpj: '',
    lojaFisica: 'Sim'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Cadastro enviado com sucesso! Nossa equipe entrará em contato em breve.');
  };

  return (
    <section id="contato" className="py-24 bg-[#EFDE9D]">
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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("Nome do Proprietário *", "font-semibold")}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.nomeProprietario}
                    onChange={(e) => setFormData({...formData, nomeProprietario: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">Nome da Loja *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.nomeLoja}
                    onChange={(e) => setFormData({...formData, nomeLoja: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("WhatsApp *")}</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value.replace(/\D/g, '')})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                    placeholder="(00) 00000-0000" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">CNPJ *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.cnpj}
                    onChange={(e) => setFormData({...formData, cnpj: e.target.value.replace(/\D/g, '')})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("Cidade/Estado *")}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.cidade}
                    onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                    placeholder="Ex: Maringá/PR" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">@ do Instagram da Loja *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">Marcas que vende hoje? *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.marcasAtuais}
                    onChange={(e) => setFormData({...formData, marcasAtuais: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">Tipo de Loja *</label>
                  <select 
                    required 
                    value={formData.tipoLoja}
                    onChange={(e) => setFormData({...formData, tipoLoja: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all cursor-pointer text-[#7F8080]"
                  >
                    <option value="">Selecione</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Multimarcas">Multimarcas</option>
                    <option value="Loja de Shopping">Loja de Shopping</option>
                    <option value="Loja online">Loja online</option>
                    <option value="Revendedor autônomo">Revendedor autônomo</option>
                    <option value="Magazine">Magazine</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">Tempo de CNPJ *</label>
                  <select 
                    required 
                    value={formData.tempoCnpj}
                    onChange={(e) => setFormData({...formData, tempoCnpj: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all cursor-pointer text-[#7F8080]"
                  >
                    <option value="">Selecione</option>
                    <option value="Menos de 1 ano">Menos de 1 ano</option>
                    <option value="De 1 a 2 anos">De 1 a 2 anos</option>
                    <option value="De 2 a 5 anos">De 2 a 5 anos</option>
                    <option value="Mais de 5 anos">Mais de 5 anos</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-[#7F8080] block mb-2">{wrapSpecialChars("Possui loja física? *", "font-semibold")}</label>
                  <div className="flex gap-8 py-3">
                    {['Sim', 'Não'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="lojaFisica" 
                          required
                          value={opt} 
                          checked={formData.lojaFisica === opt}
                          onChange={(e) => setFormData({...formData, lojaFisica: e.target.value})}
                          className="w-4 h-4 text-brand-primary focus:ring-brand-primary" 
                        />
                        <span className="text-[#7F8080] font-medium group-hover:text-brand-primary transition-colors">{wrapSpecialChars(opt)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-brand-primary text-[#7F8080] py-5 rounded-2xl text-xl font-bold hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 uppercase tracking-widest mt-8"
              >
                {wrapSpecialChars("Enviar Cadastro", "font-bold")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
      <Footer />
    </div>
  );
}
