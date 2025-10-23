import { useEffect, useState } from "react";
import logo from "@/assets/ecast-logo.png";

interface LogoProps {
  className?: string;
  scaleOnLoad?: boolean;
  scaleOnHover?: boolean;
}

const Logo = ({ className = "", scaleOnLoad = true, scaleOnHover = false }: LogoProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (scaleOnLoad) {
      const timer = setTimeout(() => {
        setScale(1.25);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scaleOnLoad]);

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
      className={`flex items-center h-10 w-10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={logo}
        alt="ecast"
        className="h-10 w-10 object-contain transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
};

export default Logo;
