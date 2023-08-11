type LogoProps = {
  className?: string;
  height?: number;
};

export const TurboLogoCondensed = ({
  height = 32,
  className = "",
}: LogoProps) => (
  <img
    className={className}
    src="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/pack/D46F8A34-5C24-41AB-8EDC-B5D1097938CC.png"
    alt="Turbo Logo Condensed"
    height={height}
  />
);

const Turbo = ({ height = 32, className = "" }: LogoProps) => (
  <img
    className={className}
    src="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/repo/23737DBB-017F-48AC-8A44-ED5E17201DB2.png"
    alt="Turbo Logo"
    height={height}
  />
);

export default Turbo;
