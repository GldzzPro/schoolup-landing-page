import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
  const statistics = [
    {
      number: "20",
      symbol: "+",
      description: "Écoles nous font confiance",
    },
    {
      number: "5000",
      symbol: "+",
      description: "Utilisateurs connectés chaque jour",
    },
    {
      number: "3 ans",
      symbol: "+",
      description: "D'innovation au service de l'éducation",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start relative shadow-drop-shadow-100">
      <Card className="relative w-full h-auto md:h-[989px] bg-[#dee9ffb2] rounded-[25px] md:rounded-[50px_50px_0px_0px] overflow-hidden border-0">
        <CardContent className="flex flex-col w-full max-w-[1133px] items-center gap-5 md:gap-5 relative md:absolute md:top-[50px] md:left-1/2 md:transform md:-translate-x-1/2 px-4 md:px-0 py-8 md:py-0">
          <h1 className="relative w-full mt-[-1.00px] [font-family:'Krona_One',Helvetica] font-normal text-black text-2xl md:text-[34px] text-center tracking-[-1.5px] md:tracking-[-2.18px] leading-[28px] md:leading-[37.4px]">
            <span className="text-[#323232] tracking-[-0.74px]">
              Une seule{" "}
            </span>
            <span className="text-[#3879f0] tracking-[-0.74px]">
              application
            </span>
            <span className="text-[#323232] tracking-[-0.74px]">
              {" "}
              pour toute la vie scolaire.
            </span>
          </h1>

          <h2 className="relative w-full font-mysticgrove-enchantedcharm font-[number:var(--mysticgrove-enchantedcharm-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-enchantedcharm-font-size)] text-center tracking-[-1px] md:tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-enchantedcharm-line-height)] [font-style:var(--mysticgrove-enchantedcharm-font-style)]">
            <span className="text-[#323232] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              Un espace unique pour chaque{" "}
            </span>
            <span className="text-[#3879f0] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              utilisateur
            </span>
            <span className="text-[#323232] tracking-[var(--mysticgrove-enchantedcharm-letter-spacing)] font-mysticgrove-enchantedcharm [font-style:var(--mysticgrove-enchantedcharm-font-style)] font-[number:var(--mysticgrove-enchantedcharm-font-weight)] leading-[var(--mysticgrove-enchantedcharm-line-height)] text-[length:var(--mysticgrove-enchantedcharm-font-size)]">
              , adapté à ses besoins.
            </span>
          </h2>

          <p className="relative w-full [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base text-center tracking-[0] leading-5 md:leading-6 px-4 md:px-0">
            &quot;School-UP est une application tout-en-un qui réunit
            administrateurs, enseignants, parents et élèves dans un même espace
            numérique. Grâce à ses fonctionnalités modernes — gestion des cours,
            emploi du temps, suivi des notes, messagerie et facturation — la
            plateforme simplifie la vie scolaire au quotidien et renforce la
            collaboration entre tous les acteurs de l&apos;éducation.&quot;
          </p>

          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-5 px-5 py-2.5 relative flex-[0_0_auto]">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative flex-1 grow"
              >
                <div className="w-fit font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-black text-[length:var(--mysticgrove-whisperingxs-font-size)] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] whitespace-nowrap relative mt-[-1.00px] [font-style:var(--mysticgrove-whisperingxs-font-style)]">
                  <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
                    {stat.number}{" "}
                  </span>
                  <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
                    {stat.symbol}
                  </span>
                </div>
                <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6 text-center">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[15px] relative w-full flex-[0_0_auto]">
            <Button className="inline-flex h-[34px] items-center justify-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-blue rounded-[20px] hover:bg-blue/90 h-auto">
              <span className="relative w-fit [font-family:'Quicksand',Helvetica] font-medium text-light-blue text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                Démo Gratuit
              </span>
              <img
                className="relative w-[31.89px] h-[31.89px] mt-[-3.95px] mb-[-3.95px]"
                alt="Vuesax linear arrow"
                src="/vuesax-linear-arrow-right.svg"
              />
            </Button>

            <Button
              variant="ghost"
              className="inline-flex items-center justify-center gap-[5px] px-2.5 py-[5px] relative flex-[0_0_auto] rounded-[20px] hover:bg-white/10 h-auto"
            >
              <img className="relative w-6 h-6" alt="Grid" src="/grid-6.svg" />
              <span className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-6 text-center md:whitespace-nowrap">
                Découvrir les fonctionnalités
              </span>
            </Button>
          </div>
        </CardContent>

        <div className="hidden md:block absolute w-[1143px] h-[816px] top-[410px] left-[100px] rounded-[50px] border-[5px] border-solid border-[#494949] bg-cover bg-[50%_50%]" />
      </Card>

      <img
        className="relative w-full flex-[0_0_auto]"
        alt="Coles qui utilisent"
        src="/-coles-qui-utilisent-school-up.svg"
      />
    </section>
  );
};
