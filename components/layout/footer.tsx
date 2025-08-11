export default function Footer() {
  return (
    <footer 
      className="text-white shadow-lg shadow-black/30 relative" 
      style={{ 
        background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        zIndex: 10 
      }}
    >
      {/* Feature Boxes Section */}
      <div className="px-8 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
            
            {/* Textbox 1: Official Partner */}
            <div 
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:scale-105 w-full max-w-[160px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-1">
                <img 
                  src="/bottom/official.png" 
                  alt="Official Partner" 
                  className="object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)', width: '40px', height: '40px' }}
                />
              </div>
              <h3 className="text-xs font-bold mb-1 uppercase text-white">OFFICIAL PARTNER</h3>
              <p className="text-gray-200 leading-tight" style={{ fontSize: '9px' }}>
                We guarantee very<br />high quality products
              </p>
            </div>

            {/* Textbox 2: Lab Tested */}
            <div 
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:scale-105 w-full max-w-[160px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-1">
                <img 
                  src="/bottom/test.png" 
                  alt="Lab Tested" 
                  className="object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)', width: '40px', height: '40px' }}
                />
              </div>
              <h3 className="text-xs font-bold mb-1 uppercase text-white">LAB TESTED</h3>
              <p className="text-gray-200 leading-tight" style={{ fontSize: '9px' }}>
                Products are regularly tested<br />by independent laboratories
              </p>
            </div>

            {/* Textbox 3: Discreet Packaging */}
            <div 
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:scale-105 w-full max-w-[160px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-1">
                <img 
                  src="/bottom/paket.png" 
                  alt="Discreet Packaging" 
                  className="object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)', width: '40px', height: '40px' }}
                />
              </div>
              <h3 className="text-xs font-bold mb-1 uppercase text-white">DISCREET PACKAGING</h3>
              <p className="text-gray-200 leading-tight" style={{ fontSize: '9px' }}>
                The packaging provides no<br />indication of the contents
              </p>
            </div>

            {/* Textbox 4: 24/7 Support */}
            <div 
              className="flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:scale-105 w-full max-w-[160px]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-1">
                <img 
                  src="/bottom/support.png" 
                  alt="24/7 Support" 
                  className="object-contain mx-auto transition-transform duration-300 hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)', width: '40px', height: '40px' }}
                />
              </div>
              <h3 className="text-xs font-bold mb-1 uppercase text-white">24/7 SUPPORT</h3>
              <p className="text-gray-200 leading-tight" style={{ fontSize: '9px' }}>
                We are here to help you<br />around the clock
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}