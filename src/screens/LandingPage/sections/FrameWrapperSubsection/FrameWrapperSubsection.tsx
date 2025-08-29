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
        content:"Notre mission est de simplifier la vie scolaire grâce à une solution numérique complète et intuitive. Nous voulons permettre aux administrateurs de gérer efficacement leurs établissements, aux enseignants de se concentrer sur la pédagogie, aux parents de rester informés, et aux élèves de s'épanouir dans un environnement organisé et stimulant.",},
      {
        value: "vision",
        label: "02 – Notre vision",
        content:
          "Nous aspirons à bâtir une école connectée où la technologie soutient la pédagogie. Notre vision est celle d’un écosystème scolaire moderne, où les outils numériques ne sont pas une contrainte, mais une opportunité pour gagner du temps, renforcer la transparence et encourager la réussite des élèves. Nous voulons faire de School-UP le partenaire incontournable de la transformation digitale des établissements scolaires.",
      },
      {
        value: "valeurs",
        label: "03 – Nos valeurs",
        content: "Nos valeurs sont l'innovation, la simplicité et l'excellence.",
      },
      {
        value: "engagement",
        label: "04 – Notre engagement",
        content:"Notre engagement est de fournir un service de qualité supérieure."},
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

      <Card className="self-stretch w-full flex-[0_0_auto] bg-light-blue rounded-[20px] shadow-drop-shadow-100 border-0">
        <CardContent className="p-0">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid grid-cols-2 md:flex md:items-start gap-2 md:gap-5 p-4 md:p-5 relative self-stretch w-full flex-[0_0_auto] bg-transparent h-auto rounded-none">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center gap-1 md:gap-2.5 p-2 md:p-5 relative rounded-[15px] md:rounded-[20px] data-[state=active]:bg-blue data-[state=inactive]:bg-transparent border-0 shadow-none h-auto min-h-[60px] md:min-h-auto overflow-hidden"
                >
                  <div className="w-full max-w-full mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] data-[state=active]:text-light-blue data-[state=inactive]:text-grey text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-0.2px] xs:tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.8px] xl:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[10px] xs:leading-[11px] sm:leading-[12px] md:leading-[14px] lg:leading-[16px] xl:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)] text-center break-words hyphens-auto">
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
                <p className="flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-black text-xs sm:text-sm md:text-base lg:text-lg tracking-[0] leading-4 sm:leading-5 md:leading-6 lg:leading-7">
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