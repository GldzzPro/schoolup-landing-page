import { useState } from "react";

export const FrameWrapperSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabsData = [
    {
      value: "mission",
      label: "01 – Notre mission",
      content:
        "Notre mission est de simplifier la vie scolaire grâce à une solution numérique complète et intuitive. Nous voulons permettre aux administrateurs de gérer efficacement leurs établissements, aux enseignants de se concentrer sur la pédagogie, aux parents de rester informés, et aux élèves de s'épanouir dans un environnement organisé et stimulant.",
      cardBgClass: "bg-[#E0E7FF]",
      activeBgClass: "bg-[#3879F0]",
      activeTextClass: "text-[#DEEAFF]",
    },
    {
      value: "vision",
      label: "02 – Notre vision",
      content:
        "Nous aspirons à bâtir une école connectée où la technologie soutient la pédagogie. Notre vision est celle d'un écosystème scolaire moderne, où les outils numériques ne sont pas une contrainte, mais une opportunité pour gagner du temps, renforcer la transparence et encourager la réussite des élèves. Nous voulons faire de School-UP le partenaire incontournable de la transformation digitale des établissements scolaires.",
      cardBgClass: "bg-[#F6EAFE]",
      activeBgClass: "bg-[#A068AE]",
      activeTextClass: "text-[#F6EAFE]",
    },
    {
      value: "valeurs",
      label: "03 – Nos valeurs",
      content: "Nos valeurs sont l'innovation, la simplicité et l'excellence.",
      cardBgClass: "bg-[#FDF4DE]",
      activeBgClass: "bg-[#F7C758]",
      activeTextClass: "text-[#FDF4DE]",
    },
    {
      value: "engagement",
      label: "04 – Notre engagement",
      content: "Notre engagement est de fournir un service de qualité supérieure.",
      cardBgClass: "bg-[#FFE4CE]",
      activeBgClass: "bg-[#FF9F51]",
      activeTextClass: "text-white",
    },
  ];

  const activeTabData = tabsData.find((tab) => tab.value === activeTab);

  return (
    <section
      id="Pourquoinous?"
      className="flex flex-col w-full items-start gap-6 px-4 md:px-0"
    >
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-quicksand text-[16px] font-semibold text-[#323232] leading-[150%]">
          Notre identité, notre vision
        </h2>
        <h3 className="font-['Krona_One'] text-[24px] font-normal leading-[110%] tracking-[-1.536px]">
          <span className="text-[#323232]">Ce qui définit School-</span>
          <span className="text-[#3879F0]">UP</span>
        </h3>
        <p className="font-quicksand text-[16px] font-medium text-[#323232] leading-[150%]">
          Notre mission est de transformer la gestion scolaire en une expérience
          simple, collaborative et moderne, où chaque acteur de l&apos;éducation
          trouve sa place.
        </p>
      </div>

      <div className={`w-full md:w-[1340px] rounded-[20px] shadow-[0_1px_4px_rgba(12,12,13,0.05)] inline-flex flex-col items-start ${activeTabData?.cardBgClass || 'bg-[#E0E7FF]'}`}>
        <div className="self-stretch p-5 flex flex-col md:flex-row  gap-5">
          {tabsData.map((tab) => (
            <div
              key={tab.value}
              className={`self-stretch md:self-auto p-5 box-border rounded-[20px] flex items-center gap-2.5 cursor-pointer transition-colors ${
                tab.value === activeTab 
                  ? `${tab.activeBgClass} ${tab.activeTextClass}` 
                  : "hover:text-[#3F3F46] hover:bg-transparent text-[#838383]"
              } ${tab.value === "engagement" ? "md:w-96" : "md:w-72"}`}
              onClick={() => setActiveTab(tab.value)}
              role="button"
              aria-label={tab.label}
            >
              <div className="self-stretch  justify-start text-[24px] font-normal font-['Krona_One'] leading-relaxed  [letter-spacing:-1.536px]">
                {tab.label}
              </div>
            </div>
          ))}
        </div>
        <div className="self-stretch p-5 flex items-center gap-2.5">
          <div className="flex-1 text-[#27272A] font-quicksand font-medium text-[16px] leading-normal text-left">
            {activeTabData?.content}
          </div>
        </div>
      </div>
    </section>
  );
};