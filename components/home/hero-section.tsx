'use client';

import { BeakerIcon, ChevronRightIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
		title: 'Join the Community',
		subtitle: 'Become Part of Our Mission',
		description: 'Join thousands of satisfied customers worldwide',
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

interface ProductsModalProps {
	isOpen: boolean;
	onClose: () => void;
	category?: string;
}

function ProductsModal({ isOpen, onClose, category }: ProductsModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop with blur - darker background */}
			<div
				className="absolute inset-0 backdrop-blur-sm"
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.4)',
					animation: 'backdropFadeIn 0.3s ease-out',
				}}
				onClick={onClose}
			/>

			{/* Modal with animation */}
			<div
				className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden"
				style={{
					backgroundColor: 'white',
					border: '2px solid rgb(64,64,74)',
					boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
					animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				}}
			>
				<div
					className="sticky top-0 flex items-center justify-between p-6 border-b"
					style={{
						borderColor: 'rgb(64,64,74)',
						backgroundColor: 'rgb(64,64,74)',
					}}
				>
					<div>
						<h2
							className="text-xl font-semibold text-white"
							style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
						>
							Premium Products
						</h2>
					</div>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-600 rounded-md transition-colors duration-200 text-white text-xl"
						aria-label="Close modal"
					>
						×
					</button>
				</div>

				<div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
					<div className="prose prose-gray max-w-none">
						<div className="space-y-4 text-gray-700 leading-relaxed">
							<p>
								HeroChem is a one-stop online shop that provides you with high quality Deus Medical and Astera Steroids, SARMS, PEPTIDES, HGH and much more.
							</p>

							<p>
								Deus Medical is a pharmaceutical company located in India, and is
								one of the fastest growing companies that offer a wide range of
								world-class quality products. Deus Medical manufacturing is
								certified by WHO-GMP, fully compliant with EUGMP and UKMHRA.
							</p>

							<p>
								We verify every batch of every product. and all our products have
								test reports made by Janoshik Analytics - you can find independent
								third party laboratory test reports on each product down below. Also, all Deus Medical products have a unique product code,
								and with this code you can verify your product on the official Deus Medical Webpage.
							</p>

							<p>
								We ship Deus Medical and Astera products worldwide and all orders are shipped
								from EU warehouses using discreet packaging.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function HeroSection({ onOpenCommunityModal, onOpenLabReportsModal }: { onOpenCommunityModal: () => void, onOpenLabReportsModal: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  useEffect(() => {
	const interval = setInterval(() => {
	  setIsAnimating(true);
	  setTimeout(() => {
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		setIsAnimating(false);
	  }, 300);
	}, 6000);

	return () => clearInterval(interval);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  // Function to handle CTA button clicks
  const handleCtaClick = (ctaText: string) => {
	switch (ctaText) {
	  case 'Learn More':
		setIsProductsModalOpen(true);
		break;
	  case 'View Lab Reports':
		onOpenLabReportsModal();
		break;
	  case 'Join Community':
		onOpenCommunityModal();
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

  return (
	<div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
	  {/* Background Pattern */}
	  <div className="absolute inset-0 opacity-10">
		<div className="absolute inset-0 bg-[url('/pattern-hero.png')] bg-repeat opacity-20"></div>
	  </div>

	  {/* Animated Background Particles */}
	  <div className="absolute inset-0">
		{[...Array(20)].map((_, i) => (
		  <div
			key={i}
			className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-pulse"
			style={{
			  left: `${(i * 5.26) % 100}%`,
			  top: `${(i * 7.89) % 100}%`,
			  animationDelay: `${(i * 0.15) % 3}s`,
			  animationDuration: `${3 + (i * 0.2) % 4}s`,
			}}
		  />
		))}
	  </div>

	  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
		<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
		  {/* Left Content */}
		  <div
			className={`space-y-8 transition-all duration-500 ${
			  isAnimating
				? 'opacity-0 translate-x-[-20px]'
				: 'opacity-100 translate-x-0'
			}`}
		  >
			{/* Hero Badge */}
			<div className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 text-red-400 text-sm font-medium">
			  <ShieldCheckIcon className="h-4 w-4" />
			  <span>Certified Pharmaceutical Quality</span>
			</div>

			{/* Main Title */}
			<div className="space-y-4">
			  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
				<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Labor'
					: currentSlideData?.title.split(' ').slice(0, 2).join(' ')}
				</span>
				<br />
				<span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
				  {currentSlideData?.title === 'Labor Tested'
					? 'Tested'
					: currentSlideData?.title.split(' ').slice(2).join(' ')}
				</span>
			  </h1>

			  <h2 className="text-xl lg:text-2xl text-gray-300 font-medium">
				{currentSlideData?.subtitle}
			  </h2>

			  <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
				{currentSlideData?.description}
			  </p>
			</div>

			{/* CTA Buttons */}
			<div className="flex flex-col sm:flex-row gap-4">
			  <button
				onClick={() => handleCtaClick(currentSlideData?.cta || '')}
				className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
			  >
				<span>{currentSlideData?.cta}</span>
				<ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
			  </button>

			  <Link
				href="/categories?category=ALL%20PRODUCTS"
				className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-600/10"
			  >
				Discover Products
			  </Link>
			</div>

			{/* Slide Indicators */}
			<div className="flex space-x-2">
			  {heroSlides.map((_, index) => (
				<button
				  key={index}
				  onClick={() => setCurrentSlide(index)}
				  className={`w-3 h-3 rounded-full transition-all duration-300 ${
					index === currentSlide ? 'bg-red-600' : 'bg-gray-600 hover:bg-gray-500'
				  }`}
				/>
			  ))}
			</div>
		  </div>

		  {/* Right Content - Visual Elements */}
		  <div className="relative">
			{/* Main Visual */}
			<div className="relative">
			  {/* Floating Cards */}
			  <div className="space-y-6">
				{heroFeatures.map((feature, index) => (
				  <div
					key={index}
					className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style={{
					  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
					  animationDelay: `${index * 0.2}s`,
					}}
				  >
					<div className="flex items-center space-x-4">
					  <div className="flex-shrink-0">
						<div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
						  <feature.icon className="h-6 w-6 text-white" />
						</div>
					  </div>
					  <div>
						<h3 className="text-lg font-semibold text-white">
						  {feature.title}
						</h3>
						<p className="text-gray-400 text-sm">
						  {feature.description}
						</p>
					  </div>
					</div>
				  </div>
				))}
			  </div>

			  {/* Decorative Elements */}
			  <div
				className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl animate-pulse"
				style={{}}
			  ></div>
			  <div
				className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-xl animate-pulse"
				style={{ animationDelay: '1s' }}
			  ></div>
			</div>
		  </div>
		</div>
	  </div>

	  {/* Bottom Wave */}
	  <div className="absolute left-0 right-0" style={{ bottom: '-20px' }}>
		<svg viewBox="0 0 1200 120" className="w-full h-12 lg:h-20">
		  <path
			d="M0,60 C400,0 800,120 1200,60 L1200,120 L0,120 Z"
			fill="rgb(249, 250, 251)"
		  />
		</svg>
	  </div>

	  <style jsx>{`
		@keyframes float {
		  0%,
		  100% {
			transform: translateY(0px);
		  }
		  50% {
			transform: translateY(-10px);
		  }
		}
	  `}</style>

	  {/* Products Modal */}
	  <ProductsModal
		isOpen={isProductsModalOpen}
		onClose={() => setIsProductsModalOpen(false)}
	  />
	  {/* Community Modal is now rendered in HomePage */}
	</div>
  );
}
