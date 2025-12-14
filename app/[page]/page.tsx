import Prose from "components/prose";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageContentProps {
  page: {
    title: string;
    body: string;
    updatedAt?: string;
  };
}

function PageContent({ page }: PageContentProps) {
  // Special handling for about page
  if (page.title === "About HeroChem") {
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
                animationDuration: `${3 + ((i * 0.2) % 4)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-4" style={{ marginTop: '-40px' }}>
            {/* Subtitle */}
            <p className="text-sm sm:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-6">
              Discover our commitment to quality, innovation, and excellence
              in performance enhancement.
            </p>

            {/* Main Title */}
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                HERO
              </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                CHEM
              </span>
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto space-y-8 text-center">
            <div>
              <h3 className="text-base lg:text-xl font-semibold mb-0 text-gray-300">Our Mission</h3>
              <div 
                className="h-[1px] mb-4 rounded-full mx-auto"
                style={{ width: "110px", backgroundColor: "#e91111" }}
              />
              <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-4xl mx-auto">
                At HERO<span className="text-[#e91111]">CHEM</span>, we are dedicated to providing premium supplements and performance enhancement products. 
                Our commitment to quality and innovation drives everything we do, ensuring our customers receive 
                only the finest products to support their fitness and wellness journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-base lg:text-xl font-semibold mb-0 text-gray-300">High Quality</h3>
                <div 
                  className="h-[1px] mb-4 rounded-full mx-auto"
                  style={{ width: "100px", backgroundColor: "#e91111" }}
                />
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                  Every product undergoes rigorous testing and quality control to ensure 
                  safety, purity, and effectiveness. We partner with certified laboratories 
                  and follow strict manufacturing standards.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-base lg:text-xl font-semibold mb-0 text-gray-300">Best Support</h3>
                <div 
                  className="h-[1px] mb-4 rounded-full mx-auto"
                  style={{ width: "105px", backgroundColor: "#e91111" }}
                />
                <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
                  We provide the best support for our customers. You can always write to our support if you have any question about our products or your order. If you are not sure how to use any of our products, feel free to write us an email or contact us on Telegram. We typically reply within 1 hour.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-base lg:text-xl font-semibold mb-0 text-gray-300">Our Brands</h3>
              <div 
                className="h-[1px] mb-4 rounded-full mx-auto"
                style={{ width: "95px", backgroundColor: "#e91111" }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-stretch max-w-4xl mx-auto">
                <div className="rounded-xl p-3 md:p-6 bg-transparent flex flex-col h-full min-h-[120px] md:min-h-[140px] transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <img
                      src="/deus/deus.png"
                      alt="Deus"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain filter brightness-0 invert"
                    />
                    <h3 className="text-gray-400 font-bold text-xs md:text-lg ml-2">
                      DEUS MEDICAL
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm text-center leading-tight flex-grow">
                    Premium quality from pharmaceutical manufacturing with
                    highest quality standards. Learn more at{" "}
                    <a
                      href="https://deusmedical.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors"
                    >
                      https://deusmedical.com
                    </a>
                  </p>
                </div>

                <div className="rounded-xl p-3 md:p-6 bg-transparent flex flex-col h-full min-h-[120px] md:min-h-[140px] transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 md:mb-4">
                    <img
                      src="/astera/astera.png"
                      alt="Astera"
                      className="w-12 h-12 md:w-16 md:h-16 object-contain filter brightness-0 invert"
                    />
                    <h3 className="text-gray-400 font-bold text-xs md:text-lg ml-2">
                      ASTERA
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm text-center leading-tight flex-grow">
                    Bringing the future of healthcare and improve your
                    quality of life. Learn more at{" "}
                    <a
                      href="https://asteralabs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e91111] hover:text-[#ff2222] hover:underline transition-colors"
                    >
                      https://asteralabs.org
                    </a>
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }

  // Default page rendering for other pages
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
              animationDuration: `${3 + ((i * 0.2) % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-6">
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Discover our commitment to quality, innovation, and excellence in
            performance enhancement.
          </p>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              HERO
            </span>
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              CHEM
            </span>
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <Prose className="text-center" html={page.body} />
        </div>
      </div>
    </div>
  );
}

// Dummy page data for demo
const dummyPages: Record<
  string,
  {
    title: string;
    body: string;
    seo?: { title?: string; description?: string };
    createdAt?: string;
    updatedAt?: string;
    bodySummary?: string;
  }
> = {
  about: {
    title: "About HeroChem",
    body: ``,
    seo: {
      title: "HEROCHEM - About Us",
      description:
        "Learn about HeroChem's mission, quality standards, and premium supplement brands DEUS and ASTERA.",
    },
    createdAt: "2025-01-01",
    updatedAt: "2025-09-15",
    bodySummary:
      "Discover HeroChem's commitment to premium supplements and performance enhancement.",
  },
};

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = dummyPages[params.page];

  if (!page) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
    };
  }

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = dummyPages[params.page];

  // If page doesn't exist in our defined pages, trigger 404
  if (!page) {
    notFound();
  }

  return <PageContent page={page} />;
}
