
type CategoryLabel =
  | 'INJECTION'
  | 'ORAL'
  | 'POST CYCLE'
  | 'FAT BURN'
  | 'SEXUAL WELLNESS'
  | 'PEPTIDES & HGH'
  | 'SARMS'
  | 'AMINO ACIDS'
  | 'ALL PRODUCTS';

type SidebarProps = {
  currentCategory: CategoryLabel;
  onSelectCategory: (cat: CategoryLabel) => void;
};

const categories: { label: CategoryLabel; icon: string }[] = [
  { label: 'INJECTION', icon: '/inject.png' },
  { label: 'ORAL', icon: '/oral.png' },
  { label: 'POST CYCLE', icon: '/post.png' },
  { label: 'FAT BURN', icon: '/fatburn.png' },
  { label: 'SEXUAL WELLNESS', icon: '/sexual.png' },
  { label: 'PEPTIDES & HGH', icon: '/peptides.png' },
  { label: 'SARMS', icon: '/sarms.png' },
  { label: 'AMINO ACIDS', icon: '/amino.png' },
  { label: 'ALL PRODUCTS', icon: '/products.png' },
];

export default function CategoriesSidebar({ currentCategory, onSelectCategory }: SidebarProps) {
  return (
    <div 
      className="w-64 min-h-screen border-r"
      style={{ 
        paddingTop: '0.25rem',
        animation: 'fadeInPage 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        animationDelay: '0.1s',
        opacity: '0',
        background: 'linear-gradient(135deg, rgba(64,64,74,0.95) 0%, rgba(45,45,52,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.1)',
        boxShadow: 'inset 1px 0 0 rgba(255,255,255,0.1)'
      }}
    >
      {/* Sidebar Header */}
      <div className="px-4 mb-8" style={{ paddingTop: '18pt' }}>
        <div className="flex items-center gap-2 mb-2">
          <img 
            src="/categories.png" 
            alt="Categories Icon" 
            className="w-7 h-7 object-contain" 
            style={{ 
              filter: 'brightness(0) invert(1)'
            }}
          />
          <h1 className="text-xl font-bold text-white uppercase">Categories</h1>
        </div>
        <div 
          className="h-[2px] mt-4"
          style={{ 
            background: 'linear-gradient(90deg, #e91111 0%, rgba(233, 17, 17, 0.1) 100%)',
            width: '100%'
          }}
        />
      </div>

      {/* Navigation Items */}
      <nav className="px-4">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.label}>
              <button
                onClick={() => onSelectCategory(category.label)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium uppercase transition-all duration-300 flex items-center gap-3 group overflow-hidden ${
                  currentCategory === category.label
                    ? 'text-white shadow-lg transform scale-[1.02]'
                    : 'text-neutral-300 hover:text-white hover:transform hover:scale-[1.02] hover:shadow-lg'
                }`}
                style={{
                  background: currentCategory === category.label
                    ? 'linear-gradient(135deg, rgba(233, 17, 17, 0.9) 0%, rgba(233, 17, 17, 0.7) 50%, rgba(233, 17, 17, 0.5) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: currentCategory === category.label
                    ? '1px solid rgba(233, 17, 17, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  if (currentCategory !== category.label) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(233, 17, 17, 0.3) 0%, rgba(233, 17, 17, 0.15) 50%, rgba(255, 255, 255, 0.05) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(233, 17, 17, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentCategory !== category.label) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                <img 
                  src={category.icon} 
                  alt={`${category.label} Icon`} 
                  className="w-5 h-5 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="truncate">{category.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
