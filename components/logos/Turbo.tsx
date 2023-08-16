type LogoProps = {
  className?: string;
  height?: number;
};

export const TurboLogoCondensed = ({ height = 40, className = "", }: LogoProps) => (
  <svg
    className={className}
    width="40"
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Image Circle</title>
    <image href="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/C7D5ACC4-04E1-48D6-8DE9-B4A9EE-unscreen.gif" height="32" width="32"/>
  </svg>
);

const Turbo = ({ height = 32, className = "" }: LogoProps) => (
  <span className={className} style={{ fontSize: `${height * 0.5}px`, fontWeight: 'bold' }}>
    Sapiens•IA
  </span>
);

export default Turbo;
