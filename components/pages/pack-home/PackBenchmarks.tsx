import { useState } from "react";
import { FadeIn } from "../home-shared/FadeIn";
import { SectionHeader, SectionSubtext } from "../home-shared/Headings";
import { BenchmarksGraph } from "./PackBenchmarksGraph";
import { PackBenchmarksPicker } from "./PackBenchmarksPicker";
import { PackBenchmarkTabs } from "./PackBenchmarkTabs";

export type BenchmarkNumberOfModules = "1000" | "5000" | "10000" | "30000";
export type BenchmarkCategory =
  | "cold"
  | "from_cache"
  | "file_change"
  | "code_build"
  | "build_from_cache";
export interface BenchmarkData {
  next13: number;
  next12: number;
  vite: number;
  next11: number;
}

export interface BenchmarkBar {
  label: string;
  version: string;
  key: keyof BenchmarkData;
  turbo?: true;
  swc?: true;
}

export const DEFAULT_BARS: BenchmarkBar[] = [
  {
    key: "next11",
    label: "Inteligencia",
    version: "13.4",
    turbo: true,
  },
  {
    key: "vite",
    label: "Velocidad",
    version: "4.3.1",
    swc: true,
  },
  {
    key: "next12",
    label: "Creatividad",
    version: "12.3.4",
  },
  {
    key: "next11",
    label: "Cap.Memoria",
    version: "11.1.4",
  },
];
export const HMR_BARS: BenchmarkBar[] = [
  {
    key: "next13",
    label: "Inteligencia",
    version: "13.4",
    turbo: true,
  },
  {
    key: "vite",
    label: "Velocidad",
    version: "4.3.1",
    swc: true,
  },
  {
    key: "next12",
    label: "Creatividad",
    version: "12.3.4",
  },
  {
    key: "next11",
    label: "Cap.Memoria",
    version: "11.1.4",
  },
];

export function PackBenchmarks() {
  const [numberOfModules, setNumberOfModules] =
    useState<BenchmarkNumberOfModules>("1000");
  const [category, setCategory] = useState<BenchmarkCategory>("cold");

  return (
    <FadeIn className="relative flex flex-col items-center justify-center w-full gap-10 py-16 font-sans md:py-24 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-6">
        <SectionHeader>Velocidad inteligente</SectionHeader>
        <SectionSubtext>
          Cada modelo es distinto, elige el que mejor se adapte
          a tu vision y crea agentes inteligentes de alto nivel.
        </SectionSubtext>
      </div>
      <div className="flex flex-col items-center w-full">
        <PackBenchmarkTabs onTabChange={setCategory} />
        <BenchmarksGraph
          category={category}
          numberOfModules={numberOfModules}
          bars={DEFAULT_BARS}
        />
      </div>
      <PackBenchmarksPicker
        setNumberOfModules={setNumberOfModules}
      ></PackBenchmarksPicker>
    </FadeIn>
  );
}
