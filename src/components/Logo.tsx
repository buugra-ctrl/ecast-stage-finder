import logo from "@/assets/ecast-logo.png";

interface LogoProps {
  className?: string;
  size?: 'small' | 'default' | 'large' | 'xlarge';
}

const Logo = ({ className = "", size = 'default' }: LogoProps) => {
  const sizeClasses = size === 'small' ? 'h-20' : size === 'large' ? 'h-36' : size === 'xlarge' ? 'h-16' : 'h-28';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="ecast"
        className={`${sizeClasses} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;
