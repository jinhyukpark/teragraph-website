"use client";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function TerraGraphLogo({ className = "h-10", showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Spider Icon */}
      <svg viewBox="0 0 60 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Spider Body - Hexagonal shape */}
        <defs>
          <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="legGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="legGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        
        {/* Main body hexagon */}
        <path d="M30 20 L38 25 L38 35 L30 40 L22 35 L22 25 Z" fill="url(#spiderGradient)" />
        <path d="M30 25 L34 27.5 L34 32.5 L30 35 L26 32.5 L26 27.5 Z" fill="rgba(255,255,255,0.2)" />
        
        {/* Left legs */}
        <path d="M22 26 L14 18 L8 12" stroke="url(#legGradientLeft)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="8" cy="12" r="1.5" fill="#A855F7" />
        
        <path d="M22 30 L12 28 L4 24" stroke="url(#legGradientLeft)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="4" cy="24" r="1.5" fill="#9333EA" />
        
        <path d="M22 34 L14 40 L8 48" stroke="url(#legGradientLeft)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="8" cy="48" r="1.5" fill="#7C3AED" />
        
        <path d="M24 37 L18 46 L14 54" stroke="url(#legGradientLeft)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="54" r="1.5" fill="#8B5CF6" />
        
        {/* Right legs */}
        <path d="M38 26 L46 18 L52 12" stroke="url(#legGradientRight)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="52" cy="12" r="1.5" fill="#22D3EE" />
        
        <path d="M38 30 L48 28 L56 24" stroke="url(#legGradientRight)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="56" cy="24" r="1.5" fill="#06B6D4" />
        
        <path d="M38 34 L46 40 L52 48" stroke="url(#legGradientRight)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="52" cy="48" r="1.5" fill="#14B8A6" />
        
        <path d="M36 37 L42 46 L46 54" stroke="url(#legGradientRight)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="46" cy="54" r="1.5" fill="#0EA5E9" />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="font-display font-bold tracking-tight text-[#4F46E5]" style={{ fontSize: 'inherit' }}>TERRA</span>
          <span className="font-display font-bold tracking-tight text-[#06B6D4]" style={{ fontSize: 'inherit' }}>GRAPH</span>
        </div>
        {showTagline && (
          <span className="text-[0.45em] text-muted-foreground tracking-[0.15em] uppercase">AI-Powered Data Intelligence</span>
        )}
      </div>
    </div>
  );
}

export function TerraGraphLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="spiderGradientIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="legGradientLeftIcon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="legGradientRightIcon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      
      <path d="M30 20 L38 25 L38 35 L30 40 L22 35 L22 25 Z" fill="url(#spiderGradientIcon)" />
      <path d="M30 25 L34 27.5 L34 32.5 L30 35 L26 32.5 L26 27.5 Z" fill="rgba(255,255,255,0.2)" />
      
      <path d="M22 26 L14 18 L8 12" stroke="url(#legGradientLeftIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="12" r="1.5" fill="#A855F7" />
      
      <path d="M22 30 L12 28 L4 24" stroke="url(#legGradientLeftIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="4" cy="24" r="1.5" fill="#9333EA" />
      
      <path d="M22 34 L14 40 L8 48" stroke="url(#legGradientLeftIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="48" r="1.5" fill="#7C3AED" />
      
      <path d="M24 37 L18 46 L14 54" stroke="url(#legGradientLeftIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="54" r="1.5" fill="#8B5CF6" />
      
      <path d="M38 26 L46 18 L52 12" stroke="url(#legGradientRightIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="52" cy="12" r="1.5" fill="#22D3EE" />
      
      <path d="M38 30 L48 28 L56 24" stroke="url(#legGradientRightIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="56" cy="24" r="1.5" fill="#06B6D4" />
      
      <path d="M38 34 L46 40 L52 48" stroke="url(#legGradientRightIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="52" cy="48" r="1.5" fill="#14B8A6" />
      
      <path d="M36 37 L42 46 L46 54" stroke="url(#legGradientRightIcon)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="54" r="1.5" fill="#0EA5E9" />
    </svg>
  );
}
