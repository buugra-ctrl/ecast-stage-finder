import { useEffect, useState } from "react";
import logo from "@/assets/ecast-logo.png";

interface LogoProps {
  className?: string;
  scaleOnLoad?: boolean;
  scaleOnHover?: boolean;
  scaleMultiplier?: number;
  size?: 'default' | 'large' | 'xlarge';
}

const Logo = ({ className = "", scaleOnLoad = true, scaleOnHover = false, scaleMultiplier = 1.25, size = 'default' }: LogoProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (scaleOnLoad) {
      const timer = setTimeout(() => {
        setScale(scaleMultiplier);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scaleOnLoad, scaleMultiplier]);

  const handleMouseEnter = () => {
    if (scaleOnHover) {
      setScale(1.25);
    }
  };

  const handleMouseLeave = () => {
    if (scaleOnHover) {
      setScale(1);
    }
  };

  const sizeClasses = size === 'large' ? 'h-36 w-36' : size === 'xlarge' ? 'h-16 w-16' : 'h-28 w-28';

  return (
    <div
      className={`flex items-center ${sizeClasses} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={logo}
        alt="ecast"
        className={`${sizeClasses} object-contain transition-transform duration-300 ease-out will-change-transform`}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          imageRendering: 'auto',
        }}
      />
    </div>
  );
};

export default Logo;
