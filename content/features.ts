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
    name: "Diseño Eficiente",
    description: `En Sapiens IA, la eficiencia es clave. Nuestras soluciones de IA están diseñadas para minimizar las tareas redundantes y maximizar tu productividad.`,
    iconDark: BarsIconDark,
    iconLight: BarsIconLight,
    page: "all",
  },
  {
    name: "Personalización de Personalidad",
    description: `Sapiens IA lleva la personalización a otro nivel. Nuestras soluciones te permiten darle a tu IA una personalidad única, creando una interacción más natural y efectiva.`,
    iconDark: EcosystemIconDark,
    iconLight: EcosystemIconLight,
    page: "home",
  },
  {
    name: "Agentes de IA Autónomos",
    description: `Sapiens IA redefine la autonomía. Nuestros agentes de IA pueden operar de manera independiente, tomando decisiones y realizando tareas sin necesidad de supervisión constante.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
    page: "all",
  },
  {
    name: "Soluciones Avanzadas de Servidor",
    description: `Sapiens IA lleva las soluciones de servidor al siguiente nivel. Ofrecemos soluciones avanzadas para satisfacer las necesidades de IA más complejas.`,
    iconDark: ServerComponentsIconDark,
    iconLight: ServerComponentsIconLight,
    page: "all",
  },
  {
    name: "Soluciones Multi-Entorno",
    description: `Sapiens IA se adapta a cualquier entorno. Nuestras soluciones de IA están diseñadas para trabajar de manera eficiente en una variedad de entornos, garantizando siempre el máximo rendimiento.`,
    iconDark: MultiEnvTargetsIconDark,
    iconLight: MultiEnvTargetsIconLight,
    page: "all",
  },
  {
    name: "Soporte de IA de Última Generación",
    description: `En Sapiens IA, estamos comprometidos a estar a la vanguardia de la tecnología de IA. Ofrecemos soporte de IA de última generación, garantizando que siempre estés un paso adelante.`,
    iconDark: CpuIconDark,
    iconLight: CpuIconLight,
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
