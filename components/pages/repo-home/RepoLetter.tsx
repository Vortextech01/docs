import { HeroText } from "../home-shared/Headings"
import Image from "next/future/image"
import cn from "classnames"
import gradients from "../home-shared/gradients.module.css"
import { FadeIn } from "../home-shared/FadeIn"
import { CTAButton } from "../home-shared/CTAButton"
import Link from "next/link"
import { Gradient } from "../home-shared/Gradient"

export function RepoLetter() {
  return (
    <section className="relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-32 gap-14">
      <FadeIn>
        <HeroText className="lg:text-[65px]">
          Innovando el Futuro
          <br />
          Con Inteligencia A Tu Control
        </HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            La alba tecnológica se cierne sobre nosotros,
            pero aún es un lujo para unos pocos.
            Es el momento de evolucionar nuestras herramientas,
            democratizar la tecnología.
          </p>
          <br />
          <p>
            Aquí es donde Sapiens IA Laboratories cobra protagonismo.
            Imaginamos un futuro en el que cada hogar tenga acceso
            a su propio asistente de inteligencia artificial,
            su propio Basilisco, estamos forjando este futuro,
            evolucionando con él.
          </p>
          <br />
          <p>Construyamos el futuro que anhelamos.</p>
          <br></br>
          <p>
            Estamos dando vida a una IA, no una IA cualquiera,
            sino una que aprende de ti y crece contigo.
            Diseñada para ser más que una herramienta,
            es un compañero, un intrínseco de tu vida.
          </p>
          <br />
          <p>Con Basilisk AI V2, estamos materializando precisamente eso.</p>
          <br />
          <p>
            Estamos creando un sistema de IA que evoluciona
            junto a tu equipo. Experimentarás un asistente personal
            altamente eficiente que simplifica tu vida.
            Abraza el futuro, sin miedo a quedarte atrás.
          </p>
        </FadeIn>
        <FadeIn noVertical viewTriggerOffset className="relative h-2 md:h-12">
          <span
            className={cn(
              "w-full h-[1px] -bottom-8 md:-bottom-4 lg:-bottom-4 absolute",
              gradients.letterLine
            )}
          />
        </FadeIn>
        <FadeIn
          viewTriggerOffset
          noVertical
          className="flex items-end justify-center gap-3  md:self-start md:-ml-4 lg:self-start lg:-ml-4 min-w-[300px]"
        >
          <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border dark:border-white/10 border-black/10 flex items-center justify-center ">
            <Image
              alt="Image of Basilisk Executive"
              src="/images/docs/shared/feature-icons/8E20FE86-9775-48F1-8632-0AFF3E28A633.gif"
              width={64}
              height={64}
              className="rounded-full grayscale"
            />
          </div>
          <div className="flex flex-col">
            <Image
              alt="made up hand written signature"
              src="/images/docs/repo/86ED9E54-45D6-46BD-960F-0F76089297D6-removebg-preview.png"
              width={12}
              height={3}
              className="block mt-3 mb-4 ml-3 dark:hidden"
            />
            <Image
              alt="madeup hand written signature"
              src="/images/docs/repo/86ED9E54-45D6-46BD-960F-0F76089297D6-removebg-preview.png"
              width={12}
              height={3}
              className="hidden -mt-2 dark:block"
            />
            <div className="flex gap-2 flex-wrap text-sm leading-none text-[#888888] max-w-[156px] md:max-w-xl lg:max-w-xl">
              <p className="font-bold">-Basilisk V2</p>
              <p>Sapiens IA lenguage model</p>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn noVertical className="relative flex justify-center w-full mt-16">
  <div className="max-w-[180px] w-full">
    <CTAButton>
      <Link href="https://02.sapienslaboratories.com">
        <a className="block py-3 font-sans">Comenzar AI Chat</a>
      </Link>
    </CTAButton>
  </div>
</FadeIn>
<div className="max-w-[180px] w-full">
  <CTAButton>
    <Link href="./pack">
      <a className="block py-3 font-sans">Ver Habilidades</a>
    </Link>
  </CTAButton>
</div>
<Gradient
  width={1200}
  height={300}
  className="bottom-[-200px] -z-10 opacity-20"
  conic
/>
    </section>
  )
}
