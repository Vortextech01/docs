import cn from "classnames";
import Image from "next/future/image";
import Link from "next/link";
// import { Marquee } from "../../clients/Marquee";
// import { Clients } from "../../clients/Clients";
import gradients from "../home-shared/gradients.module.css";
import { HeroText, SectionSubtext } from "../home-shared/Headings";
import { Gradient } from "../home-shared/Gradient";
import { FadeIn } from "../home-shared/FadeIn";
import { CTAButton } from "../home-shared/CTAButton";
import PackLogo from "../../logos/PackLogo";

export function PackHero() {
  return (
    <>
      <FadeIn
        noVertical
        className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0"
      >
        <FadeIn className="z-50 flex items-center justify-center w-full">
          <div className="absolute min-w-[614px] min-h-[614px]">
            <Image
              alt="Turbopack"
              src="/images/docs/pack/turbopack-hero-hexagons-dark.svg"
              width={614}
              height={614}
              className="hidden dark:block"
            />
            <Image
              alt="Turbopack"
              src="/images/docs/pack/turbopack-hero-hexagons-light.svg"
              width={614}
              height={614}
              className="block dark:hidden"
            />
          </div>
          <div className="absolute z-50 flex items-center justify-center w-64 h-64">
            <Gradient
              small
              width={120}
              height={120}
              conic
              className="dark:opacity-100 opacity-40"
            />
          </div>

          <div className="w-[120px] z-50 mt-[-8.075px] mb-[-8.075px]">
            <Image
              alt=""
              src={`/images/docs/pack/CADD876D-9A14-4796-B9E1-536A1A5EFDAA.png`}
              width={120}
              height={136.15}
              className="hidden dark:block"
            />
            <Image
              alt=""
              src={`/images/docs/pack/D46F8A34-5C24-41AB-8EDC-B5D1097938CC.png`}
              width={120}
              height={136.15}
              className="block dark:hidden"
            />
          </div>
        </FadeIn>
        <Gradient
          width={1000}
          height={1000}
          className="top-[-500px] dark:opacity-20 opacity-[0.15]"
          conic
        />
        <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b" />
        <FadeIn
          delay={0.15}
          className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6"
        >
          <PackLogo
            alt="Turbopack"
            width="200"
            className="w-[160px] md:w-[200px] fill-black dark:fill-white"
          />
          <HeroText h1>Diseña, Entrena Y Crea Tu Propio Basilisk Personalizado</HeroText>
          <SectionSubtext hero>
            Conoce nuestro Modelo de lenguaje inteligente, entrenable y altamente flexible - Basilisk AI V.02
          </SectionSubtext>
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6"
        >
          <div className="flex flex-col w-full gap-3 md:!flex-row">
            <CTAButton>
              <Link href="../blog" className="block py-3">
                THE ARCHIVES🧬 
              </Link>
            </CTAButton>
            <CTAButton outline>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/message/VH3VN2CKQR7ZF1"
                className="block py-3"
              >
                CONTACTANOS🚀
              </a>
            </CTAButton>
          </div>
          <p className="text-sm text-[#666666]">Powered by Sapiens IA</p>
        </FadeIn>
        <FadeIn delay={0.5} className="relative w-full">
          <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t" />
        </FadeIn>
      </FadeIn>
    </>
  );
}
