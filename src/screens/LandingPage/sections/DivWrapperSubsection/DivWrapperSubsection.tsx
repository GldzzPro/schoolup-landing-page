import { navigationItems } from "../../../../config/navigation";

import { useTranslation } from "react-i18next";

export const DivWrapperSubsection = (): JSX.Element => {
  const { t } = useTranslation('advantages');
  
  return (
    <section id={navigationItems[2].id} className="flex flex-col w-full items-start gap-[15px] relative px-4 md:px-0">
      <h2 className="w-full font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-black text-lg md:text-[length:var(--quicksand-easyread-semibold-font-size)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[22px] md:leading-[var(--quicksand-easyread-semibold-line-height)] [font-style:var(--quicksand-easyread-semibold-font-style)]">
        {t('title')}
      </h2>

      <h3 className="w-full font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
        <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          {t('subtitle.part1')}
        </span>

        <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          {t('subtitle.part2')}
        </span>

        <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          {t('subtitle.part3')}
        </span>
      </h3>

      <p className="w-full [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6">
        {t('description')}
      </p>
    </section>
  );
};
