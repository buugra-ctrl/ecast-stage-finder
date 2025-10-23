import { useEffect, useState } from "react";
import logo from "@/assets/ecast-logo.png";

interface LogoProps {
  className?: string;
  scaleOnLoad?: boolean;
  scaleOnHover?: boolean;
  scaleMultiplier?: number;
}

const Logo = ({ className = "", scaleOnLoad = true, scaleOnHover = false, scaleMultiplier = 1.25 }: LogoProps) => {
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

  return (
    <div
      className={`flex items-center h-26 w-26 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={logo}
        alt="ecast"
        className="h-26 w-26 object-contain transition-transform duration-300 ease-out will-change-transform"
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
