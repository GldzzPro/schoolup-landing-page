import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from 'react-i18next';

export const DivSubsection = (): JSX.Element => {
  const { t } = useTranslation('spaces');
  const spaces = [
    {
      icon: "/user-square-1.svg",
      title: t('adminSpace.title'),
      titleColor: "text-blue",
      backgroundColor: "bg-[#dee9ff80]",
      description: t('adminSpace.description'),
    },
    {
      icon: "/briefcase-1.svg",
      title: t('teacherSpace.title'),
      titleColor: "text-purple",
      backgroundColor: "bg-[#f6eafeb2]",
      description: t('teacherSpace.description'),
    },
    {
      icon: "/people.svg",
      title: t('parentSpace.title'),
      titleColor: "text-orange",
      backgroundColor: "bg-[#ffe4ce80]",
      description: t('parentSpace.description'),
    },
    {
      icon: "/teacher.svg",
      title: t('studentSpace.title'),
      titleColor: "text-red",
      backgroundColor: "bg-[#fde5e3b2]",
      description: t('studentSpace.description'),
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
