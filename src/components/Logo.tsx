const Logo = ({ className = "w-32" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(270, 70%, 60%)" />
          </linearGradient>
        </defs>
        <path 
          d="M5 5 L20 20 M35 5 L20 20 M20 20 L5 35 M20 20 L35 35" 
          stroke="url(#logoGradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </svg>
      <span className="text-2xl font-bold text-foreground">NxtAI</span>
    </div>
  );
};

export default Logo;