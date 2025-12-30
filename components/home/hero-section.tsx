'use client';

import { BeakerIcon, BookOpenIcon, ChevronRightIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { useModal } from '../../contexts/modal-context';

const heroFeatures = [
	{
		icon: ShieldCheckIcon,
		title: 'Pharmaceutical Grade Quality',
		description: 'WHO-GMP certified production',
	},
	{
		icon: BeakerIcon,
		title: 'Laboratory Tested',
		description: 'Every batch is independently tested',
	},
	{
		icon: TruckIcon,
		title: 'Discreet Shipping',
		description: 'Worldwide discreet delivery',
	},
];

const heroSlides = [
	{
		title: 'Enhance Yourself',
		subtitle: 'Become the Best Version of Yourself',
		description: 'Place your first order and start the journey to a better experience of life',
		bgImage: '/hero-bg-1.jpg',
		cta: 'Go to Shop',
	},
	{
		title: 'Future of Healthcare',
		subtitle: 'Improve Your Quality of Life',
		description: 'Premium pharmaceutical products for performance and well-being',
		bgImage: '/hero-bg-1.jpg',
		cta: 'Learn More',
	},
	{
		title: 'Labor Tested',
		subtitle: 'Trust Through Transparency',
		description: 'Every product is tested by independent laboratories for purity and potency',
		bgImage: '/hero-bg-2.jpg',
		cta: 'View Lab Reports',
	},
	{
		title: 'GMP Quality Standards',
		subtitle: 'Excellence in Every Product',
		description: 'Manufactured under strict quality control and regulatory compliance',
		bgImage: '/hero-bg-4.jpg',
		cta: 'Learn More',
	},
	{
		title: 'Global Delivery Network',
		subtitle: 'Worldwide Shipping Solutions',
		description: 'Fast and secure delivery to customers around the globe',
		bgImage: '/hero-bg-5.jpg',
		cta: 'Learn More',
	},
	{
		title: 'Join the Community',
		subtitle: 'Become Part of Our Mission',
		description: 'Join our social media channels to interact with other customers',
		bgImage: '/hero-bg-3.jpg',
		cta: 'Join Community',
	},
];

// Featured products data
const featuredProducts = [
	{
		id: 1,
		name: 'TrenMax 100mg',
		category: 'Injectable',
		price: 89.99,
		image: '/products/trenmax.jpg',
		purity: '99.8%',
		inStock: true,
		bestseller: true,
	},
	{
		id: 2,
		name: 'TestoPro 250mg',
		category: 'Injectable',
		price: 69.99,
		image: '/products/testopro.jpg',
		purity: '99.5%',
		inStock: true,
		bestseller: false,
	},
	{
		id: 3,
		name: 'Anavar 50mg',
		category: 'Oral',
		price: 159.99,
		image: '/products/anavar.jpg',
		purity: '99.7%',
		inStock: true,
		bestseller: true,
	},
	{
		id: 4,
		name: 'Clomid 50mg',
		category: 'Post Cycle',
		price: 45.99,
		image: '/products/clomid.jpg',
		purity: '99.2%',
		inStock: true,
		bestseller: false,
	},
	{
		id: 5,
		name: 'Clenbuterol 40mcg',
		category: 'Fat Burn',
		price: 79.99,
		image: '/products/clenbuterol.jpg',
		purity: '99.6%',
		inStock: true,
		bestseller: true,
	},
	{
		id: 6,
		name: 'HGH Fragment 176-191',
		category: 'Peptides',
		price: 199.99,
		image: '/products/hgh-fragment.jpg',
		purity: '99.9%',
		inStock: true,
		bestseller: false,
	},
];

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [showBubbles, setShowBubbles] = useState(false);
	const {
    setProductsModalOpen, 
    setGMPModalOpen, 
    setDeliveryModalOpen,
    setCommunityModalOpen,
    setLabReportsModalOpen
  } = useModal();

  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
    setShowBubbles(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ...existing code...
  useEffect(() => {
	const interval = setInterval(() => {
	  setIsTransitioning(true);
	  setTimeout(() => {
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		setIsTransitioning(false);
	  }, 150);
	}, 15000);

	return () => clearInterval(interval);
  }, []);

  // Function to handle slide change with animation
  const changeSlide = (newSlide: number) => {
	if (newSlide !== currentSlide) {
	  setIsTransitioning(true);
	  setTimeout(() => {
		setCurrentSlide(newSlide);
		setIsTransitioning(false);
	  }, 150);
	}
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    if (e.targetTouches[0]) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left: go to next slide
      changeSlide((currentSlide + 1) % heroSlides.length);
    }
    
    if (isRightSwipe) {
      // Swipe right: go to previous slide
      changeSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
    }
  };

  const currentSlideData = heroSlides[currentSlide];

  // Function to handle CTA button clicks
  const handleCtaClick = (ctaText: string) => {
	switch (ctaText) {
	  case 'Learn More':
		// Check which slide is currently active to determine which modal to open
		if (currentSlideData?.title === 'Future of Healthcare') {
		  setProductsModalOpen(true);
		} else if (currentSlideData?.title === 'GMP Quality Standards') {
		  setGMPModalOpen(true);
		} else if (currentSlideData?.title === 'Global Delivery Network') {
		  setDeliveryModalOpen(true);
		} else {
		  // Default behavior for other "Learn More" buttons
		  setProductsModalOpen(true);
		}
		break;
	  case 'View Lab Reports':
		setLabReportsModalOpen(true);
		break;
	  case 'Join Community':
		setCommunityModalOpen(true);
		break;
	  default:
		window.location.href = '/categories';
	}
  };

  const getCtaUrl = (ctaText: string) => {
	switch (ctaText) {
	  case 'Learn More':
		return '#';
	  case 'View Lab Reports':
		return '#lab-reports';
	  case 'Join Community':
		return '#community';
	  default:
		return '/categories';
	}
  };

  // Memoize bubble positions to prevent re-rendering on view changes
  const bubblePositions = useMemo(() => {
	const positions = [];
	const COLUMNS = 5;
	const ROWS = 11;
	const TOTAL_DURATION = 20; // Gesamtzeit für einen kompletten Durchlauf
	
	for (let i = 0; i < COLUMNS * ROWS; i++) {
	  const col = i % COLUMNS;
	  const row = Math.floor(i / COLUMNS);
	  
	  // Use seeded pseudo-random based on index for consistent positioning
	  const seed = (i * 12345) % 10000;
	  const pseudoRandom1 = ((seed * 7919) % 10000) / 10000;
	  const pseudoRandom2 = ((seed * 2789) % 10000) / 10000;
	  const pseudoRandom3 = ((seed * 5843) % 10000) / 10000;
	  const pseudoRandom4 = ((seed * 3257) % 10000) / 10000;
	  const pseudoRandom5 = ((seed * 9871) % 10000) / 10000; // Für Visibility - anderer Multiplikator
	  const pseudoRandom6 = ((seed * 4127) % 10000) / 10000; // Für Icon-Auswahl - mehr Variation
	  
	  // Grid-based positioning with randomness
	  const baseLeft = (col / COLUMNS) * 100 + (100 / COLUMNS) / 2;
	  const baseTop = 50;
	  
	  const randomLeft = baseLeft + (pseudoRandom1 - 0.5) * 15;
	  const randomTop = baseTop + (pseudoRandom2 - 0.5) * 15;
	  
	  // Verzögerung basierend auf Reihe - jede Reihe startet gestaffelt später
	  // Oben: kleine Verzögerung (startet sofort), unten: große Verzögerung (später)
	  const rowDelay = (row / ROWS) * TOTAL_DURATION;
	  const randomDelay = rowDelay + pseudoRandom3 * 0.5;
	  
	  const randomDuration = TOTAL_DURATION;
	  const randomTx = (pseudoRandom4 - 0.5) * 40;
	  
	  // Zufällig etwa die Hälfte der Icons unsichtbar machen
	  const isHidden = pseudoRandom5 > 0.3;
	  
	  positions.push({
		left: randomLeft,
		top: randomTop,
		delay: randomDelay,
		duration: randomDuration,
		tx: randomTx,
		isHidden: isHidden,
	  });
	}
	return positions;
  }, []);

  return (
	<div 
	  className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden md:min-h-screen"
	  style={{ minHeight: isMobile ? '760px' : undefined }}
	  onTouchStart={onTouchStart}
	  onTouchMove={onTouchMove}
	  onTouchEnd={onTouchEnd}
	>
	  {/* Background Pattern */}
	  <div className="absolute inset-0 opacity-10">
		<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-20"></div>
	  </div>

	  {/* Animated Category Icon Bubbles - Floating upward */}
	  <style>{`
		@keyframes float-up {
		  0% {
			transform: translateY(0) translateX(0);
			opacity: 0;
		  }
		  5% {
			opacity: 0.3;
		  }
		  50% {
			opacity: 0.3;
		  }
		  55% {
			opacity: 0;
		  }
		  100% {
			transform: translateY(-1000px) translateX(var(--tx, 0px));
			opacity: 0;
		  }
		}
		.bubble-icon {
		  animation: float-up var(--duration, 8s) ease-in infinite;
		  animation-delay: var(--delay, 0s);
		  will-change: transform, opacity;
		  backface-visibility: hidden;
		}
	  `}</style>
	  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ left: '10px' }} suppressHydrationWarning>
		{showBubbles && bubblePositions.map((pos, i) => {
		  // Versteckte Icons nicht rendern
		  if (pos.isHidden) return null;
		  
		  const icons = ['/inject.png', '/oral.png', '/post.png', '/fatburn.png', '/sexual.png', '/peptides.png', '/sarms.png', '/amino.png'];
		  // Berechne einen zufälligen Icon-Index basierend auf dem Seed für mehr Variation
		  const seed = (i * 12345) % 10000;
		  const pseudoRandom6 = ((seed * 4127) % 10000) / 10000;
		  const iconIndex = Math.floor(pseudoRandom6 * icons.length);
		  const randomIcon = icons[iconIndex];
		  
		  return (
			<div
			  key={i}
			  className="bubble-icon absolute w-8 h-8"
			  style={{
				left: `${pos.left}%`,
				top: `${pos.top}%`,
				'--delay': `${pos.delay}s`,
				'--duration': `${pos.duration}s`,
				'--tx': `${pos.tx}px`,
				opacity: 0,
			  } as React.CSSProperties}
			  suppressHydrationWarning
			>
			  <img
				src={randomIcon}
				alt="category-icon"
				className="w-full h-full object-contain"
				style={{
				  filter: 'brightness(0) invert(1)',
				  opacity: '0.7'
				}}
			  />
			</div>
		  );
		})}
	  </div>

	  <div 
	    className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 sm:pt-14 lg:pt-[95px]"
	    style={{ paddingLeft: isMobile ? '16px' : undefined, paddingRight: isMobile ? '16px' : undefined, paddingTop: isMobile ? '20px' : undefined, paddingBottom: isMobile ? '64px' : '64px' }}
	  >
		{/* PLACEMARKER FOR ANY TOP ITEM TO BE PLACED ON MOBILE VERSION HERO SECTION */}
		

		{/* Desktop Layout - Logo and Dynamic Elements at same height */}
		<div className="hidden lg:block">
		  <div className="flex justify-between items-start -mb-2 mt-8">
			{/* HEROCHEM Logo Text - Desktop Only (Left) */}
			<div>
			  <h1 className="text-6xl xl:text-7xl font-bold leading-tight">
				<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
				  HERO
				</span>
				<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
				  CHEM
				</span>
			  </h1>
			</div>

			{/* Dynamic Elements - Desktop Only (Right) - Quadratic Layout */}
			<div className="flex space-x-5">
			  {heroFeatures.map((feature, index) => (
				<div
				  key={index}
				  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:bg-gray-800/80 transition-colors duration-300 w-31 h-30 flex flex-col items-center justify-center animate-float"
				  style={{
					animationDelay: `${index * 0.2}s`,
					animationDuration: '3s',
					boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)'
				  }}
				>
				  <div className="flex flex-col items-center space-y-1">
					<div className="w-8 h-8 bg-[#e91111] rounded-xl flex items-center justify-center">
					  <feature.icon className="h-4 w-4 text-white" />
					</div>
					<h3 className="text-xs font-semibold text-white text-center leading-tight">
					  {feature.title.split(' ').slice(0, 2).join(' ')}
					</h3>
				  </div>
				</div>
			  ))}
			</div>
		  </div>

		  {/* News Section - Desktop Only - Below floating elements */}
		  <div className="mt-8 flex justify-end">
			<div className="w-[26rem] py-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl" style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)' }}>
			  <div className="px-8">
				
				{/* Scrolling Text Banner */}
				<div className="mb-5 overflow-hidden relative">
				  <div 
					className="flex whitespace-nowrap animate-scroll"
					style={{
					  animation: 'scroll-left 15.4s linear infinite'
					}}
				  >
					<span className="text-red-500 font-bold text-base mr-4">CRYPTO DISCOUNT</span>
					<span className="text-gray-300 font-bold text-base mr-4">•</span>
					<span className="text-gray-300 font-bold text-base mr-4">5% OFF EVERY ORDER</span>
					<span className="text-gray-300 font-bold text-base mr-4">•</span>
					<span className="text-red-500 font-bold text-base mr-4">CRYPTO DISCOUNT</span>
					<span className="text-gray-300 font-bold text-base mr-4">•</span>
					<span className="text-gray-300 font-bold text-base mr-4">5% OFF EVERY ORDER</span>
					<span className="text-gray-300 font-bold text-base mr-4">•</span>
				  </div>
				  
				  {/* Fade out effects */}
				  <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-800/40 to-transparent pointer-events-none"></div>
				  <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-800/40 to-transparent pointer-events-none"></div>
				</div>

				{/* Banner Images - Compact for Desktop */}
				<div className="space-y-4">
				  {/* Deus Banner */}
				  <div className="relative w-full h-26 rounded-xl">
					<Image
					  src="/deus_banner.jpg"
					  alt="Deus Medical Banner"
					  fill
					  className="object-cover rounded-xl z-10"
					  sizes="416px"
					/>
					{/* Overlay Content */}
					<div className="absolute top-3 left-3 z-20">
					  <h3 className="text-base font-bold">
						<span className="text-black">DEUS</span>
						<span className="text-red-600">MEDICAL</span>
					  </h3>
					</div>
					<div className="absolute bottom-3 left-3 z-20">
					  <Link 
					    href="/categories?brand=deus"
					    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-xs font-medium rounded-xl transition-colors cursor-pointer"
					  >
						SHOP NOW
					  </Link>
					</div>
				  </div>
				  
				  {/* Astera Banner */}
				  <div className="relative w-full h-26 rounded-xl">
					<Image
					  src="/astera_banner.jpg"
					  alt="Astera Labs Banner"
					  fill
					  className="object-cover rounded-xl z-10"
					  sizes="416px"
					/>
					{/* Overlay Content */}
					<div className="absolute top-3 left-3 z-20">
					  <h3 className="text-base font-bold text-black">
						ASTERA LABS
					  </h3>
					</div>
					<div className="absolute bottom-3 left-3 z-20">
					  <Link 
					    href="/categories?brand=astera"
					    className="bg-[#d67f3f] hover:bg-[#c6723a] text-white px-3 py-1.5 text-xs font-medium rounded-xl transition-colors cursor-pointer"
					  >
						SHOP NOW
					  </Link>
					</div>
				  </div>
				</div>
				
			  </div>
			</div>
		  </div>

		  {/* HeroGuide Section - Desktop Only - Below News Section */}
		  {!isMobile && (
		  <div className="mt-6 flex justify-end">
			<div className="w-[26rem] py-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl" style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)' }}>
			  <div className="px-8 text-center">
				
				{/* HeroGuide Title */}
				<div className="mb-4">
				  <h3 className="text-2xl font-bold leading-tight">
					<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
					  HERO
					</span>
					<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
					  GUIDE
					</span>
				  </h3>
				  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
					Plan and track your complete cycle journey with our intelligent guidance system
				  </p>
				</div>

				{/* Dynamic HeroGuide Button */}
				<div className="relative">
				  <button 
					className="group relative w-full py-4 pl-4 pr-6 bg-transparent hover:from-red-600/20 hover:to-red-700/20 rounded-xl transition-colors duration-300 flex items-center space-x-3"
				  >
				{/* Icon */}
				<div className="w-8 h-8 bg-[#e91111] rounded-xl flex items-center justify-center flex-shrink-0 pointer-events-none">
				  <BookOpenIcon className="w-4 h-4 text-white pointer-events-none" />
				</div>					{/* Text - Center flex container */}
					<div className="flex-1 text-left pointer-events-none">
					  <div className="text-white font-semibold text-base group-hover:text-red-100 transition-colors duration-300 pointer-events-none">
						Start Your Cycle Planning
					  </div>
					  <div className="text-gray-400 text-xs group-hover:text-red-200/80 transition-colors duration-300 pointer-events-none">
						Advanced Cycle Tracker
					  </div>
					</div>
					
					{/* Arrow */}
					<div className="flex-shrink-0 pointer-events-none">
					  <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300 pointer-events-none" />
					</div>
				  </button>
				</div>
				
			  </div>
			</div>
		  </div>
		  )}
		</div>

		<div className="grid lg:grid-cols-1 grid-cols-1 lg:gap-0 items-center min-h-0 lg:min-h-0 lg:-mt-120" style={{ gap: isMobile ? '48px' : undefined }}>
		  {/* Navigation Container - Desktop Only */}
		  <div className="hidden lg:flex items-start justify-start relative">
			{/* Content Container */}
			<div className="text-left rounded-xl relative w-[600px]" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			{/* Left Arrow */}
			{isClient && (
			  <button
				onClick={() => changeSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
				className="absolute z-20 p-2 rounded-full transition-all duration-300 group"
				aria-label="Previous slide"
				style={{ left: '-4rem', top: '50%', transform: 'translateY(-50%)' }}
			  >
				<ChevronRightIcon className="h-8 w-8 text-white/40 group-hover:text-white group-hover:scale-110 rotate-180 transition-all duration-300" />
			  </button>
			)}

			{/* Right Arrow */}
			{isClient && (
			  <button
				onClick={() => changeSlide((currentSlide + 1) % heroSlides.length)}
				className="absolute z-20 p-2 rounded-full transition-all duration-300 group"
				aria-label="Next slide"
				style={{ right: '-1rem', top: '50%', transform: 'translateY(-50%)' }}
			  >
				<ChevronRightIcon className="h-8 w-8 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
			  </button>
			)}
			{/* Hero Badge */}
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
			  <div 
			    className={`inline-flex items-center space-x-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 lg:px-4 py-1.5 lg:py-2 text-gray-300 text-[10px] lg:text-xs font-medium mt-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}
			    style={{
				  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)'
			    }}
			  >
			    <ShieldCheckIcon className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-white" />
			    <span>Certified Pharmaceutical Products</span>
			  </div>
			</div>

			{/* Main Title */}
			<div className={`space-y-4 lg:space-y-5 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
			  <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
				<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Labor'
					: currentSlideData?.title === 'Enhance Yourself'
					? 'Enhance'
					: currentSlideData?.title.split(' ').slice(0, 2).join(' ')}
				</span>
				<br />
				<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Tested'
					: currentSlideData?.title === 'Enhance Yourself'
					? 'Yourself'
					: currentSlideData?.title.split(' ').slice(2).join(' ')}
				</span>
			  </h1>

			  <h2 className="text-base lg:text-xl text-gray-300 font-medium">
				{currentSlideData?.subtitle}
			  </h2>

			  <p className="text-sm lg:text-base text-gray-400 max-w-lg lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
				{currentSlideData?.description}
			  </p>
			</div>

			{/* CTA Buttons */}
			<div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 justify-start transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
			  {/* Desktop: Anti-scaling wrapper, Mobile: Normal button */}
			  <div className="hidden sm:block"
				style={{ 
				  transform: 'none !important', 
				  scale: 'none !important',
				  transition: 'background-color 0.3s ease, border-color 0.3s ease !important' 
				}}
			  >
				<Link
				  href="/categories"
				  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 border border-gray-600 lg:border-2 hover:border-red-600 text-gray-300 hover:text-white font-medium lg:text-lg rounded-xl transition-all duration-300 hover:bg-red-600/10 hover:scale-[1.02] active:scale-[0.98]"
				  style={{
					boxShadow: '0 4px 15px rgba(75, 85, 99, 0.3)'
				  }}
				  onMouseEnter={(e) => { 
					e.currentTarget.style.transform = 'none !important'; 
					e.currentTarget.style.scale = '1 !important'; 
					e.currentTarget.parentElement!.style.transform = 'none !important';
				  }}
				  onMouseLeave={(e) => { 
					e.currentTarget.style.transform = 'none !important'; 
					e.currentTarget.style.scale = '1 !important';
					e.currentTarget.parentElement!.style.transform = 'none !important';
				  }}
				>
				  <span>{currentSlideData?.cta}</span>
				  <ChevronRightIcon className="ml-2 h-3.5 w-3.5 lg:h-4 lg:w-4" />
				</Link>
			  </div>

			  {/* Mobile: Original simple button */}
			  <Link
				href="/categories"
				className="sm:hidden inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 border border-gray-600 lg:border-2 hover:border-red-600 text-gray-300 hover:text-white font-medium lg:text-lg rounded-xl transition-all duration-300 hover:bg-red-600/10 hover:scale-[1.02] active:scale-[0.98]"
				style={{
				  boxShadow: '0 4px 15px rgba(75, 85, 99, 0.3)'
				}}
			  >
				<span>{currentSlideData?.cta}</span>
				<ChevronRightIcon className="ml-2 h-3.5 w-3.5 lg:h-4 lg:w-4" />
			  </Link>

			  <Link
				href="/categories"
				className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 border border-gray-600 lg:border-2 hover:border-red-600 text-gray-300 hover:text-white font-medium lg:text-lg rounded-xl transition-all duration-300 hover:bg-red-600/10 hover:scale-[1.02] active:scale-[0.98]"
				style={{
				  boxShadow: '0 4px 15px rgba(75, 85, 99, 0.3)'
				}}
			  >
				Discover Products
			  </Link>
			</div>

			{/* Slide Indicators */}
			<div className={`flex space-x-2 lg:space-x-3 justify-center lg:justify-start transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
			  {heroSlides.map((_, index) => (
				<button
				  key={index}
				  onClick={() => changeSlide(index)}
				  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors duration-300 ${
					index === currentSlide ? 'bg-red-600' : 'bg-gray-600'
				  }`}
				/>
			  ))}
			</div>
			</div>
		  </div>		  {/* Mobile Content */}
		  <div className="lg:hidden">
			<div className="text-center lg:text-left" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			{/* Feature Items - Mobile Only - At Top */}
			<div className="flex justify-center" style={{ gap: '12px', marginTop: '24px' }}>
			  {heroFeatures.map((feature, index) => (
				<div
				  key={index}
				  className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 rounded-xl flex flex-col items-center justify-center animate-float"
				  style={{
					padding: '12px',
					width: '100px',
					boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)',
					animationDelay: `${index * 0.2}s`,
					animationDuration: '3s'
				  }}
				>
				  <div className="flex flex-col items-center" style={{ gap: '6px' }}>
					<div className="bg-[#e91111] rounded-xl flex items-center justify-center" style={{ width: '28px', height: '28px' }}>
					  <feature.icon className="text-white" style={{ width: '14px', height: '14px' }} />
					</div>
					<h3 className="font-semibold text-white text-center leading-tight" style={{ fontSize: '9px' }}>
					  {feature.title.split(' ').slice(0, 2).join(' ')}
					</h3>
				  </div>
				</div>
			  ))}
			</div>

			{/* Main Title */}
			<div 
			  className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}
			  style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '324px', margin: '0 auto' }}
			>
			  <h1 className="font-bold text-white leading-tight" style={{ fontSize: '30px' }}>
				<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Labor'
					: currentSlideData?.title === 'Enhance Yourself'
					? 'Enhance'
					: currentSlideData?.title.split(' ').slice(0, 2).join(' ')}
				</span>
				<br />
				<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Tested'
					: currentSlideData?.title === 'Enhance Yourself'
					? 'Yourself'
					: currentSlideData?.title.split(' ').slice(2).join(' ')}
				</span>
			  </h1>

			  <h2 className="text-gray-300 font-medium" style={{ fontSize: '16px' }}>
				{currentSlideData?.subtitle}
			  </h2>

			  <p className="text-gray-400 leading-relaxed" style={{ fontSize: '14px' }}>
				{currentSlideData?.title === 'Global Delivery Network' ? (
				  <>Fast and secure delivery to customers around the globe</>
				) : (
				  currentSlideData?.description
				)}
			  </p>
			</div>

			{/* CTA Buttons */}
			<div 
			  className={`flex flex-col sm:flex-row transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}
			  style={{ gap: '12px', width: '324px', margin: '0 auto' }}
			>
			  {/* Mobile: Original simple button */}
			  <Link
				href="/categories"
				className="inline-flex items-center justify-center bg-gray-800/40 backdrop-blur-sm border border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-red-600/10 hover:scale-[1.02] active:scale-[0.98]"
				style={{
				  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.08)',
				  paddingLeft: '20px',
				  paddingRight: '20px',
				  paddingTop: '10px',
				  paddingBottom: '10px',
				  flex: 1
				}}
			  >
				<span>{currentSlideData?.cta}</span>
				<ChevronRightIcon className="h-3.5 w-3.5" style={{ marginLeft: '8px' }} />
			  </Link>

			  <Link
				href="/categories"
				className="inline-flex items-center justify-center bg-gray-800/40 backdrop-blur-sm border border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-red-600/10 hover:scale-[1.02] active:scale-[0.98]"
				style={{
				  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.08)',
				  paddingLeft: '20px',
				  paddingRight: '20px',
				  paddingTop: '10px',
				  paddingBottom: '10px',
				  flex: 1
				}}
			  >
				Discover Products
			  </Link>
			</div>

			{/* Slide Indicators */}
			<div 
			  className={`flex justify-center lg:justify-start transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
			  style={{ gap: '8px', width: '324px', margin: '0 auto' }}
			>
			  {heroSlides.map((_, index) => (
				<button
				  key={index}
				  onClick={() => changeSlide(index)}
				  className={`rounded-full transition-colors duration-300 ${
					index === currentSlide ? 'bg-red-600' : 'bg-gray-600'
				  }`}
				  style={{ width: '8px', height: '8px' }}
				/>
			  ))}
			</div>

		  </div>
		  </div>
		</div>
	  </div>

	  {/* Bottom Wave - Fixed position and height for consistent mobile layout */}
	  <div className="absolute left-0 right-0" style={{ bottom: isMobile ? '240px' : '-20px' }}>
		<svg viewBox="0 0 1200 120" className="w-full" style={{ height: isMobile ? '60px' : '80px' }}>
		  <path
			d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
			fill="rgb(249, 250, 251)"
		  />
		</svg>
	  </div>

	  <style jsx>{`
		@keyframes float {
		  0%, 100% { transform: translateY(0px); }
		  50% { transform: translateY(-8px); }
		}
		
		.animate-float {
		  animation: float 3s ease-in-out infinite;
		}
	  `}</style>

	  {/* Community Modal is now rendered in HomePage */}
	</div>
  );
}
