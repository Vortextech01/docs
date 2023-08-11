export function TurborepoIconLight() {
  return (
    <Image 
      src="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/repo/23737DBB-017F-48AC-8A44-ED5E17201DB2.png" 
      alt="Turbopack Icon Light" 
      width={62} 
      height={62}
    />
  );
}

export function TurborepoIconDark() {
  return (
    <Image 
      src="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/repo/23751780-3E53-4E77-A81B-1E789736BE5D.png" 
      alt="Turbopack Icon Light" 
      width={62} 
      height={62}
    />
  );
}

export function TurborepoIconOutline() {
  return (
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="123"
        height="123"
        rx="61.5"
        stroke="black"
        strokeOpacity="0.05"
      />
    </svg>
  );
}

export function Turborepo() {
  return (
    <div className="relative w-24 h-24">
      <div className="pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF3358] to-[#FF4FD8] mix-blend-normal opacity-5 dark:opacity-[0.15] blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="contents dark:hidden">
          <TurborepoIconLight />
        </div>
        <div className="dark:contents hidden">
          <TurborepoIconDark />
        </div>
      </div>
    </div>
  );
}
