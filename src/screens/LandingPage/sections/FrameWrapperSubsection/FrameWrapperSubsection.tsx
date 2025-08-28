import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const FrameWrapperSubsection = (): JSX.Element => {
  const tabsData = [
    {
      value: "mission",
      label: "01 – Notre mission",
      content:
        "Notre mission est de simplifier la vie scolaire grâce à une solution numérique complète et intuitive. Nous voulons permettre aux administrateurs de gérer efficacement leurs établissements, aux enseignants de se concentrer sur la pédagogie, aux parents de rester informés, et aux élèves de s'épanouir dans un environnement organisé et stimulant.",
    },
    {
      value: "vision",
      label: "02 – Notre vision",
      content:
        "Notre vision est de créer un écosystème éducatif connecté et harmonieux.",
    },
    {
      value: "valeurs",
      label: "03 – Nos valeurs",
      content: "Nos valeurs sont l'innovation, la simplicité et l'excellence.",
    },
    {
      value: "engagement",
      label: "04 – Notre engagement",
      content:
        "Notre engagement est de fournir un service de qualité supérieure.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[25px] relative px-4 md:px-0">
      <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-black text-lg md:text-[length:var(--quicksand-easyread-semibold-font-size)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[22px] md:leading-[var(--quicksand-easyread-semibold-line-height)] [font-style:var(--quicksand-easyread-semibold-font-style)]">
          Notre identité, notre vision
        </h2>

        <h3 className="relative self-stretch font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
          <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
            Ce qui définit School-
          </span>

          <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
            UP
          </span>
        </h3>

        <p className="relative self-stretch [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6">
          Notre mission est de transformer la gestion scolaire en une expérience
          simple, collaborative et moderne, où chaque acteur de l&apos;éducation
          trouve sa place.
        </p>
      </div>

      <Card className="relative self-stretch w-full flex-[0_0_auto] bg-light-blue rounded-[20px] shadow-drop-shadow-100 border-0">
        <CardContent className="p-0">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid grid-cols-2 md:flex md:items-start gap-2 md:gap-5 p-4 md:p-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent h-auto rounded-none">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-1 md:gap-2.5 p-3 md:p-5 relative rounded-[15px] md:rounded-[20px] data-[state=active]:bg-blue data-[state=inactive]:bg-transparent border-0 shadow-none h-auto"
                >
                  <div className="relative flex-1 mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] data-[state=active]:text-light-blue data-[state=inactive]:text-grey text-xs md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-0.5px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[16px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)] text-center">
                    {tab.label}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2.5 p-4 md:p-5 relative self-stretch w-full flex-[0_0_auto] mt-0"
              >
                <p className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  {tab.content}
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};
