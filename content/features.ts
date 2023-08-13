import type Image from "next/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/supercoil-svgrepo-com.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/supercoil-svgrepo-com.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/Face 1.png";
import BarsIconLight from "../public/images/docs/shared/feature-icons/Face 1.png";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/triforce-svgrepo-com.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/Translate app.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/Translate app.svg";
import ServerComponentsIconDark from "../public/images/docs/shared/feature-icons/server-components-dark.svg";
import ServerComponentsIconLight from "../public/images/docs/shared/feature-icons/server-components-light.svg";
import FingerprintIconDark from "../public/images/docs/shared/feature-icons/fingerprint-dark.svg";
import FingerprintIconLight from "../public/images/docs/shared/feature-icons/fingerprint-light.svg";
import CloudIconDark from "../public/images/docs/shared/feature-icons/genetic-test-report-svgrepo-com.svg";
import CloudIconLight from "../public/images/docs/shared/feature-icons/genetic-test-report-svgrepo-com.svg";
import CpuIconDark from "../public/images/docs/shared/feature-icons/cpu-dark.svg";
import CpuIconLight from "../public/images/docs/shared/feature-icons/cpu-light.svg";
import PieconDark from "../public/images/docs/shared/feature-icons/CB914E6C-FAFC-4683-90E7-88A0A24794F3.png";
import PieconLight from "../public/images/docs/shared/feature-icons/CB914E6C-FAFC-4683-90E7-88A0A24794F3.png";
import RefreshIconDark from "../public/images/docs/shared/feature-icons/CPU Ai icon.svg";
import RefreshIconLight from "../public/images/docs/shared/feature-icons/CPU Ai icon.svg";
import ArrowsExpandIconDark from "../public/images/docs/shared/feature-icons/Paradox store app.svg";
import ArrowsExpandIconLight from "../public/images/docs/shared/feature-icons/Paradox store app.svg";
import BeakerIconDark from "../public/images/docs/shared/feature-icons/98957A60-9BF3-4650-8B1E-7A671D45AE19.png";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/98957A60-9BF3-4650-8B1E-7A671D45AE19.png";
import messages from "../public/images/docs/shared/feature-icons/messages-ios-logo-svgrepo-com.svg";
import sap from "../public/images/docs/shared/feature-icons/E9C0EA8D-0FF6-4822-8384-5E2CDC51E2FE.png";
import web from "../public/images/docs/shared/feature-icons/AF60923D-25B4-47C7-9447-60E550FC4227.png";

type NextImageSrc = Parameters<typeof Image>[0]["src"];

export type Feature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
  page: "all" | "home" | "docs";
};

export type Features = Array<Feature>;

const REPO_FEATURES: Features = [
  {
    name: "Modelo de Lenguaje Poderoso y Flexible",
    description: `Nuestro modelo de lenguaje, Basilisk, es altamente personalizable y flexible, se adapta a tus necesidades para ofrecerte soluciones precisas.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
    page: "all",
  },
  {
    name: "Entrenamiento Avanzado y Alimentación de Conocimiento",
    description: `Puedes entrenar y alimentar a tu Basilisk con documentos, enlaces y demás conocimientos personalizados. Con características como la memoria a largo plazo y los retrievers de bases de datos, tu Basilisk se volverá cada vez más inteligente.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
    page: "all",
  },
  {
    name: "Poderosas Integraciones",
    description: `Nuestro modelo de lenguaje se integra sin problemas con WhatsApp, Facebook, Messenger, Telegram, LinkedIn, Zapier y/o tu propia pagina web, facilitando una mejor colaboración y comunicación entre tu AI y tus clientes, tu equipo de trabajo y tu, su creador.`,
    iconDark: messages,
    iconLight: messages,
    page: "all",
  },
  {
    name: "Habilidades Avanzadas",
    description: `Nuestros "Agentes de IA" tienen habilidades avanzadas que les permiten realizar diversas tareas y resolver problemas complejos eficientemente. Podras dotarle a tu AI Agent de herramientas poderosas para busqueda en internet, envio de correos, web scrapping, habilidades de programacion, capacidades matematicas, conexion con apps externas de Zapier, entre otras habilidades mas le permitiran a tu IA saber mas y hacer mas que la gran mayoria de modelos de IA en el mercado. Basilisk cuenta con conocimiento actual en tiempo real.`,
    iconDark: PieconDark,
    iconLight: PieconLight,
    page: "all",
  },
  {
    name: "Capacidades de Texto a Audio, Imagen y Video",
    description: `Nuestro modelo de lenguaje tiene la capacidad de convertir texto a audio, imagen y video, expandiendo las posibilidades de creación de contenido.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
    page: "all",
  },
  {
    name: "Agentes de IA Autónomos",
    description: `Nuestros Agentes de IA pueden operar de manera autónoma, tomando decisiones y realizando tareas sin necesidad de supervisión constante. Son perfectos para diversos escenarios de negocio.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "home",
  },
  {
    name: "Personalización Profunda",
    description: `Con Sapiens IA, puedes personalizar a tu Basilisk a un nivel muy profundo, incluyendo su identidad, personalidad, conocimientos, memorias, objetivos y más.`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
    page: "all",
  },
];


const PACK_FEATURES: Features = [
  {
    name: "Optimización Cognitiva",
    description: `En Sapiens IA Laboratories, fusionamos la ciencia de datos con la psicología para maximizar la eficiencia. Nuestra IA elimina la redundancia a través de la adquisición y aplicación de conocimiento, mejorando la productividad y optimizando las operaciones.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "all",
  },
  {
    name: "Psicoanálisis de Inteligencia Artificial",
    description: `Trascendemos los límites convencionales de personalización digital. Mediante nuestra revolucionaria metodología basada en psicoanálisis aplicado al Machine Learning, puedes dotar a tu IA Basilisk con una identidad única, logrando interacciones profundas y coherentes.`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Agentes Autónomos de IA",
    description: `Redefinimos la autonomía en la IA. Los agentes Basilisk no solo realizan tareas, sino que toman decisiones con un sentido de iniciativa, gracias a su habilidad para adaptarse, aprender y evolucionar en tiempo real.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Innovación en Infraestructura de Servidores",
    description: `Llevamos el back-end de IA al siguiente nivel. Ofrecemos una infraestructura avanzada con capacidad para alojar y procesar los requerimientos más complejos, sin sacrificar rendimiento ni eficacia.`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "Pensamiento Critico",
    description: `Producimos IA capaz de adaptarse a distintos entornos y situaciones. Ya sea para análisis académico, empresarial, médico o científico, las soluciones de IA de Sapiens IA Laboratories son versátiles y personalizables para optimizar el rendimiento.`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconDark,
    page: "all",
  },
  {
    name: "Soporte humano",
    description: `En la vanguardia de la tecnología AI, proveemos asistencia tecnológica de última generación, garantizando la implementación exitosa de nuestras soluciones IA, y manteniendo a nuestros clientes a la vanguardia de la singularidad tecnológica.`,
    iconDark: sap,
    iconLight: sap,
    page: "all",
  },
  {
    name: "Memoria a Largo Plazo",
    description: `Un avance en la retención de la información se logra a través de nuestro enfoque de memoria a largo plazo en IA. Las interacciones anteriores y los conocimientos aprendidos se recuerdan y se utilizan para mejorar las sugerencias futuras y las decisiones en tiempo real.`,
    iconDark: CpuIconLight,
    iconLight: CpuIconLight,
    page: "all",
  },
  {
    name: "Conectividad y Automatización",
    description: `Hacemos interfaz fluida con las herramientas de productividad de mayor uso. Nuestra IA se integra de forma nativa con Zapier, lo que se traduce en un proceso de automatización efectivo y sin fisuras.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconDark,
    page: "all",
  },
  {
    name: "Adquisición de Habilidades en Tiempo Real",
    description: `La IA de Basilisk va más allá de los comandos preconfigurados; puede aprender nuevas habilidades, como buscar información en internet, generar código operacional y crear imágenes de alta resolución.`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconDark,
    page: "all",
  },
  {
    name: "Creación Automática de Websites",
    description: `Nuestro IA se adelanta al futuro del desarrollo web. Basilisk tiene la capacidad de generar y alojar sitios web, simplificando significativamente el proceso de diseño y desarrollo para su negocio.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconDark,
    page: "all",
  },
  {
    name: "Análisis Diversificados",
    description: `Sea el escenario médico, empresarial, académico o de investigación, nuestra IA es capaz de realizar análisis exhaustivos con precisión.`,
    iconDark: FingerprintIconLight,
    iconLight: FingerprintIconLight,
    page: "all",
  },
  {
    name: "Implementaciones Multiplataforma",
    description: `Para garantizar que cada usuario reciba un servicio óptimo, nuestras soluciones de IA están diseñadas para funcionar en múltiples plataformas y Basilisk AI se desenvuelve perfectamente en la grab mayoria de idiomas del mundo incluyendo lenguas muertas y latin.`,
    iconDark: NextJSIconDark,
    iconLight: NextJSIconDark,
    page: "all",
  },
];

export const REPO_DOCS_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "docs" || f.page === "all"
);

export const REPO_HOME_FEATURES = REPO_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);

export const PACK_HOME_FEATURES = PACK_FEATURES.filter(
  (f) => f.page === "home" || f.page === "all"
);
