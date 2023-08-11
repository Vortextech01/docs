import Image from 'next/image';
import TurboLogo, { TurboLogoCondensed } from "./logos/Turbo";
import SiteSwitcher from "./SiteSwitcher";
import Link from "next/link";
import styles from "./header-logo.module.css";
import { useTheme } from "next-themes";

function HeaderLogo() {
  return (
    <>
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noreferrer"
        title="vercel.com homepage"
      >
        <Image
          src="https://raw.githubusercontent.com/Vortextech01/docs/main/public/images/docs/repo/BDD5B0D4-222E-4C92-9A12-38603051C46A-removebg-preview.png" // replace with your image URL
          alt="Vercel Logo"
          width={300}
          height={300}
          className="dark:fill-white fill-black" 
        />
      </a>
      <svg
        data-testid="geist-icon"
        fill="none"
        height={24}
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        className="dark:text-[#333] text-[#eaeaea] ml-2 mr-1"
      >
        <path d="M16.88 3.549L7.12 20.451" />
      </svg>
      <Link href="/" passHref>
        <a title="Home" className="hover:opacity-75 flex flex-row items-center">
          <TurboLogo height={32} className={styles.desktopLogo} />
          <TurboLogoCondensed height={32} className={styles.mobileLogo} />
          <span className={`font-medium ml-1 ${styles.desktopLogo}`}>中文</span>
        </a>
      </Link>
      <div className={styles.siteSwitcher}>
        <SiteSwitcher />
      </div>
    </>
  );
}

export default HeaderLogo;
