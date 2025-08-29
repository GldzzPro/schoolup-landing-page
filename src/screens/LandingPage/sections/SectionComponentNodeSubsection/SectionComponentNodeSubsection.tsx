import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  const [activeMainTab, setActiveMainTab] = useState("admin");
  const [activeSubTab, setActiveSubTab] = useState("dashboard");

  const mainTabs = [
    {
      id: "admin",
      label: "Espace Admin",
      icon: "/user-square.svg",
      active: true,
      primaryBgClass: "bg-[#3879F0]",
      lightBgClass: "bg-[#DEEAFF]",
      primaryTextClass: "text-[#3879F0]",
      lightTextClass: "text-[#DEEAFF]",
      whiteTextClass: "text-[#FFF]",
    },
    {
      id: "teacher",
      label: "Espace Enseignant",
      icon: "/briefcase.svg",
      active: false,
      primaryBgClass: "bg-[#A068AE]",
      lightBgClass: "bg-[#F6EAFE]",
      primaryTextClass: "text-[#A068AE]",
      lightTextClass: "text-[#F6EAFE]",
      whiteTextClass: "text-[#FFF]",
    },
    {
      id: "parent",
      label: "Espace Parent",
      icon: "/people-1.svg",
      active: false,
      primaryBgClass: "bg-[#FF9F51]",
      lightBgClass: "bg-[#FFE4CE]",
      primaryTextClass: "text-[#FF9F51]",
      lightTextClass: "text-[#FFE4CE]",
      whiteTextClass: "text-[#FFF]",
    },
    {
      id: "student",
      label: "Espace Élève",
      icon: "/teacher-1.svg",
      active: false,
      primaryBgClass: "bg-[#F37F73]",
      lightBgClass: "bg-[#FDE5E3]",
      primaryTextClass: "text-[#F37F73]",
      lightTextClass: "text-[#FDE5E3]",
      whiteTextClass: "text-[#FFF]",
    },
  ];

  const subTabs = [
    { id: "dashboard", label: "Tableau de bord", active: true },
    { id: "schedule", label: "Emploi du temps", active: false },
    { id: "fees", label: "Rapport des frais", active: false },
    { id: "invoice", label: "Overview facture", active: false },
    { id: "evaluation", label: "Système d'évaluation", active: false },
    { id: "grades", label: "Saisie de Notes", active: false },
    { id: "forms", label: "Création des formulaires", active: false },
    { id: "reports", label: "Bulletin de Notes", active: false },
  ];

  const features = [
    {
      title: "Aperçu global de l'établissement :",
      description:
        "Nombre de classes, d'enseignants, d'élèves et de parents\nTimeline scolaire visuelle avec les dates clés",
    },
    {
      title: "Gestion financière :",
      description:
        "Suivi des factures : montant total facturé, payé, restant à payer, prévisions",
    },
    {
      title: "Événements et agenda :",
      description:
        "Affichage des réunions de parents, journées portes ouvertes, remises de bulletins",
    },
    {
      title: "Présences en temps réel :",
      description:
        "Nombre d'absences justifiées, non justifiées, expulsions, retards, appels faits ou non",
    },
    {
      title: "Liste des tâches administratives :",
      description:
        "Suivi des inscriptions et admissions\nPlanification des horaires et emplois du temps\nSuivi des absences et retards",
    },
    {
      title: "Bloc notes et rappels internes :",
      description:
        "Informations sur les conseils, comités, et événements à venir\nAnniversaires des élèves et enseignants",
    },
    {
      title: "Multilingue :",
      description:
        "School-UP supporte plusieurs langues pour s'adapter à chaque utilisateur.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[15px] relative px-4 md:px-0">
      <div className="relative w-full mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
        <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          Fonctionnalités principales de
        </span>

        <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          School-UP
        </span>
      </div>
      <div className="relative w-full [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6">
        School-UP réunit dans une seule application l&apos;ensemble des outils
        nécessaires à la gestion et au suivi de la vie scolaire.
        Administrateurs, enseignants, parents et élèves disposent chacun de leur
        espace dédié, avec des fonctionnalités adaptées à leurs besoins :
        organisation des cours, suivi des notes et absences, communication en
        temps réel, facturation et rapports. Une solution complète, moderne et
        intuitive pour simplifier le quotidien de toute la communauté éducative.
      </div>

      <div className="w-full">
        <div className="flex flex-col ">
          <div className={`grid grid-cols-2 md:flex md:items-end gap-2 md:gap-[15px] px-4 md:px-[50px] py-4 md:py-[25px] relative self-stretch w-full flex-[0_0_auto] ${mainTabs.find(tab => tab.id === activeMainTab)?.primaryBgClass || 'bg-[#3879F0]'} rounded-[25px_25px_0px_0px] md:rounded-[50px_50px_0px_0px]`}>
            {mainTabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id)}
                className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2.5 px-2 md:px-5 py-2 md:py-2.5 relative flex-1 grow rounded-[20px] md:rounded-[50px] h-auto text-xs md:text-sm ${
                  activeMainTab === tab.id
                    ? `${tab.lightBgClass} ${tab.primaryTextClass}`
                    : "bg-transparent text-white hover:bg-white/10"
                }`}
                variant="ghost"
              >
                <img
                  className="relative w-4 h-4 md:w-6 md:h-6"
                  alt={tab.label}
                  src={tab.icon}
                />

                <div className="relative w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-xs md:text-[length:var(--quicksand-easyread-semibold-font-size)] text-center tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[16px] md:leading-[var(--quicksand-easyread-semibold-line-height)] md:whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
                  {tab.label}
                </div>
              </Button>
            ))}
          </div>

          <Card className={`flex flex-col h-auto md:h-[638px] items-start gap-4 md:gap-5 p-4 md:p-[25px] relative self-stretch w-full ${mainTabs.find(tab => tab.id === activeMainTab)?.lightBgClass || 'bg-[#DEEAFF]'} rounded-[0px_0px_25px_25px] md:rounded-[0px_0px_50px_50px] border-0`}>
            <CardContent className="p-0 w-full">
              <div className="flex items-start gap-2 md:gap-5 relative self-stretch w-full flex-[0_0_auto] overflow-hidden overflow-x-scroll scrollbar-hide  pb-2">
                {subTabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id)}
                    className={`inline-flex items-center justify-center gap-1 md:gap-2.5 px-3 md:px-5 py-2 md:py-2.5 relative flex-[0_0_auto] rounded-[25px] md:rounded-[50px] h-auto whitespace-nowrap ${
                      activeSubTab === tab.id
                        ? `${mainTabs.find(mainTab => mainTab.id === activeMainTab)?.primaryBgClass || 'bg-[#3879F0]'} ${mainTabs.find(mainTab => mainTab.id === activeMainTab)?.lightTextClass || 'text-[#DEEAFF]'}`
                        : "bg-transparent text-[#323232] hover:bg-white/20"
                    }`}
                    variant="ghost"
                  >
                    <div className="relative w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-xs md:text-[length:var(--quicksand-easyread-semibold-font-size)] text-center tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[16px] md:leading-[var(--quicksand-easyread-semibold-line-height)] whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
                      {tab.label}
                    </div>
                  </Button>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 relative self-stretch w-full flex-[0_0_auto] mb-[-7.00px]">
                <div className="flex flex-col items-start md:items-center gap-3 md:gap-[15px] relative flex-1 grow">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-4 md:leading-4"
                    >
                      <span className="font-[number:var(--quicksand-easyread-semibold-font-weight)] leading-[var(--quicksand-easyread-semibold-line-height)] font-quicksand-easyread-semibold [font-style:var(--quicksand-easyread-semibold-font-style)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] text-[length:var(--quicksand-easyread-semibold-font-size)]">
                        {feature.title}
                        <br />
                      </span>

                      <span className="font-medium text-xs md:text-sm leading-[18px] md:leading-[21px]">
                        {feature.description
                          .split("\n")
                          .map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                              {line}
                              {lineIndex <
                                feature.description.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative w-full md:w-[734px] h-[200px] md:h-[524px] rounded-[20px] bg-cover bg-[50%_50%] bg-gray-200" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
