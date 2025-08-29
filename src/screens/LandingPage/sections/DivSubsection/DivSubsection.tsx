import { Card, CardContent } from "../../../../components/ui/card";

export const DivSubsection = (): JSX.Element => {
  const spaces = [
    {
      icon: "/user-square-1.svg",
      title: "Espace Admin",
      titleColor: "text-blue",
      backgroundColor: "bg-[#dee9ff80]",
      description:
        "Gérez les emplois, suivez les élèves et enseignants, contrôlez la facturation et accédez à des rapports détaillés.",
    },
    {
      icon: "/briefcase-1.svg",
      title: "Espace Enseignant",
      titleColor: "text-purple",
      backgroundColor: "bg-[#f6eafeb2]",
      description:
        "Accédez à vos classes, saisissez les notes, partagez des ressources et communiquez facilement avec vos élèves et leurs parents.",
    },
    {
      icon: "/people.svg",
      title: "Espace Parent",
      titleColor: "text-orange",
      backgroundColor: "bg-[#ffe4ce80]",
      description:
        "Accédez aux notes, absences et emplois du temps, consultez les factures, échangez avec les enseignants.",
    },
    {
      icon: "/teacher.svg",
      title: "Espace Élève",
      titleColor: "text-red",
      backgroundColor: "bg-[#fde5e3b2]",
      description:
        "Consultez vos cours, emploi du temps, résultats et restez connecté à votre école grâce à une interface simple et intuitive.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 md:gap-5 relative">
      {spaces.map((space, index) => (
        <Card
          key={index}
          className={`w-full ${space.backgroundColor} rounded-[20px] shadow-drop-shadow-100 border-0`}
        >
          <CardContent className="flex flex-col items-center gap-2.5 p-4 md:p-5">
            <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <img
                className="relative w-6 h-6"
                alt={space.title}
                src={space.icon}
              />

              <div
                className={`${space.titleColor} relative w-fit font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-[length:var(--mysticgrove-whisperingxs-font-size)] text-center tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingxs-font-style)]`}
              >
                {space.title}
              </div>
            </div>

            <div className="relative self-stretch font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-black text-sm md:text-[length:var(--quicksand-easyread-semibold-font-size)] text-center tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[20px] md:leading-[var(--quicksand-easyread-semibold-line-height)] [font-style:var(--quicksand-easyread-semibold-font-style)]">
              {space.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
