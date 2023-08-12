import type Image from "next/image";
import EcosystemIconDark from "../public/images/docs/shared/feature-icons/ecosystem-dark.svg";
import EcosystemIconLight from "../public/images/docs/shared/feature-icons/ecosystem-light.svg";
import LightningIconDark from "../public/images/docs/shared/feature-icons/lightning-dark.svg";
import LightningIconLight from "../public/images/docs/shared/feature-icons/lightning-light.svg";
import BarsIconDark from "../public/images/docs/shared/feature-icons/Face 1.png";
import BarsIconLight from "../public/images/docs/shared/feature-icons/Face 1.png";
import MultiEnvTargetsIconDark from "../public/images/docs/shared/feature-icons/multi-env-targets-dark.svg";
import MultiEnvTargetsIconLight from "../public/images/docs/shared/feature-icons/multi-env-targets-light.svg";
import NextJSIconDark from "../public/images/docs/shared/feature-icons/nextjs-dark.svg";
import NextJSIconLight from "../public/images/docs/shared/feature-icons/nextjs-light.svg";
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
import BeakerIconDark from "../public/images/docs/shared/feature-icons/beaker-dark.svg";
import BeakerIconLight from "../public/images/docs/shared/feature-icons/beaker-light.svg";
import messages from "../public/images/docs/shared/feature-icons/messages-ios-logo-svgrepo-com.svg";

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
    description: `Nuestros "Agentes de IA" tienen habilidades avanzadas que les permiten realizar diversas tareas y resolver problemas complejos eficientemente.`,
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
    description: "En Sapiens IA Laboratories, fusionamos la ciencia de datos con la psicología para maximizar la eficiencia...",
    iconDark: "BarsIconDark",
    iconLight: "BarsIconLight",
    page: "all",
  },
  {
    name: "Psicoanálisis de Inteligencia Artificial",
    description: "Trascendemos los límites convencionales de personalización digital. Mediante nuestra revolucionaria metodología...",
    iconDark: "EcosystemIconDark",
    iconLight: "EcosystemIconLight",
    page: "home",
  },
  {
    name: "Agentes Autónomos de IA",
    description: "Redefinimos la autonomía en la IA. Los agentes Basilisk no solo realizan tareas, sino que toman decisiones...",
    iconDark: "LightningIconDark",
    iconLight: "LightningIconLight",
    page: "all",
  },
  {
    name: "Innovación en Infraestructura de Servidores",
    description: "Llevamos el back-end de IA al siguiente nivel. Ofrecemos una infraestructura avanzada con capacidad...",
    iconDark: "ServerComponentsIconDark",
    iconLight: "ServerComponentsIconLight",
    page: "all",
  },
  {
    name: "IA Polimórfica",
    description: "Producimos IA capaz de adaptarse a distintos entornos y situaciones. Ya sea para análisis académico...",
    iconDark: "MultiEnvTargetsIconDark",
    iconLight: "MultiEnvTargetsIconLight",
    page: "all",
  },
  {
    name: "Soporte IA Futurista",
    description: "En la vanguardia de la tecnología AI, proveemos asistencia tecnológica de última generación...",
    iconDark: "CpuIconDark",
    iconLight: "CpuIconLight",
    page: "all",
  },
  {
    name: "Memoria a Largo Plazo de IA",
    description: "Un avance en la retención de la información se logra a través de nuestro enfoque de memoria a largo plazo en IA...",
    iconDark: "PieconDark",
    iconLight: "PieconLight",
    page: "all",
  },
  {
    name: "Conectividad y Automatización",
    description: "Hacemos interfaz fluida con las herramientas de productividad de mayor uso. Nuestra IA se integra de forma...",
    iconDark: "ArrowsExpandIconDark",
    iconLight: "ArrowsExpandIconLight",
    page: "all",
  },
  {
    name: "Adquisición de Habilidades en Tiempo Real",
    description: "La IA de Basilisk va más allá de los comandos preconfigurados; puede aprender nuevas habilidades...",
    iconDark: "BeakerIconDark",
    iconLight: "BeakerIconLight",
    page: "all",
  },
  {
    name: "Creación Automática de Websites",
    description: "Nuestro IA se adelanta al futuro del desarrollo web. Basilisk tiene la capacidad de generar y alojar sitios web...",
    iconDark: "NextJSIconDark",
    iconLight: "NextJSIconLight",
    page: "all",
  },
  {
    name: "Análisis Diversificados",
    description: "Sea el escenario médico, empresarial, académico o de investigación, nuestra IA es capaz de realizar análisis...",
    iconDark: "FingerprintIconDark",
    iconLight: "FingerprintIconLight",
    page: "all",
  },
  {
    name: "Implementaciones Multiplataforma",
    description: "Para garantizar que cada usuario reciba un servicio óptimo, nuestras soluciones de IA están diseñadas para...",
    iconDark: "CloudIconDark",
    iconLight: "CloudIconLight",
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
