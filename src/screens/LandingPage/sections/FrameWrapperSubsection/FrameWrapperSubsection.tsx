import { useState } from "react";
import { useTranslation } from "react-i18next";
import { navigationItems } from "../../../../config/navigation";

export const FrameWrapperSubsection = (): JSX.Element => {
  const { t } = useTranslation('about');
  const [activeTab, setActiveTab] = useState("mission");

  const tabsData = [
    {
      value: "mission",
      label: t('tabs.mission.label'),
      content: t('tabs.mission.content'),
      cardBgClass: "bg-[#E0E7FF]",
      activeBgClass: "bg-[#3879F0]",
      activeTextClass: "text-[#DEEAFF]",
    },
    {
      value: "vision",
      label: t('tabs.vision.label'),
      content: t('tabs.vision.content'),
      cardBgClass: "bg-[#F6EAFE]",
      activeBgClass: "bg-[#A068AE]",
      activeTextClass: "text-[#F6EAFE]",
    },
    {
      value: "valeurs",
      label: t('tabs.valeurs.label'),
      content: t('tabs.valeurs.content'),
      cardBgClass: "bg-[#FDF4DE]",
      activeBgClass: "bg-[#F7C758]",
      activeTextClass: "text-[#FDF4DE]",
    },
    {
      value: "engagement",
      label: t('tabs.engagement.label'),
      content: t('tabs.engagement.content'),
      cardBgClass: "bg-[#FFE4CE]",
      activeBgClass: "bg-[#FF9F51]",
      activeTextClass: "text-white",
    },
  ];

  const activeTabData = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div
      className="flex flex-col w-full items-start gap-6 px-4 md:px-0"
    >
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="font-quicksand text-[16px] font-semibold text-[#323232] leading-[150%]">
          {t('sectionTitle')}
        </h2>
        <h3 className="font-['Krona_One'] text-[24px] font-normal leading-[110%] tracking-[-1.536px]">
          <span className="text-[#323232]">{t('mainTitle.part1')}</span>
          <span className="text-[#3879F0]">{t('mainTitle.part2')}</span>
        </h3>
        <p className="font-quicksand text-[16px] font-medium text-[#323232] leading-[150%]">
          {t('description')}
        </p>
      </div>

      <section id={navigationItems[1].id} className={`w-full  rounded-[20px] shadow-[0_1px_4px_rgba(12,12,13,0.05)]  inline-flex flex-col items-start ${activeTabData?.cardBgClass || 'bg-[#E0E7FF]'}`}>
        <div className="self-stretch  p-5 flex flex-col md:flex-row md:flex-wrap md:justify-between  gap-5">
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
              <div className="self-stretch overflow-hidden text-nowrap text-ellipsis  justify-start text-[24px] font-normal font-['Krona_One'] leading-relaxed  [letter-spacing:-1.536px]">
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
      </section>
    </div>
  );
};