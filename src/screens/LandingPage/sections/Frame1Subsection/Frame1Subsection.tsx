import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";

export const Frame1Subsection = (): JSX.Element => {
  const { t } = useTranslation('demo');
  
  return (
    <section className="flex flex-col md:flex-row w-full items-start md:items-center gap-4 md:gap-2.5 p-4 md:p-[25px] bg-blue rounded-[25px]  md:mx-0">
      <div className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-5 md:leading-4">
        <span className="font-medium leading-6">
          {t('description.part1')}
        </span>

        <span className="font-[number:var(--quicksand-easyread-semibold-font-weight)] leading-[var(--quicksand-easyread-semibold-line-height)] font-quicksand-easyread-semibold [font-style:var(--quicksand-easyread-semibold-font-style)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] text-[length:var(--quicksand-easyread-semibold-font-size)]">
          {t('description.part2')}
        </span>

        <span className="font-medium leading-6">
          {t('description.part3')}
        </span>
      </div>

      <Button className="inline-flex h-[34px] items-center justify-center gap-1.5 md:gap-2.5 px-2 md:px-2.5 py-[5px] flex-[0_0_auto] bg-light-blue rounded-[20px] hover:bg-[#3879F0] hover:text-white text-blue [font-family:'Quicksand',Helvetica] font-medium text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
        {t('button')}
        <ArrowRightIcon className="w-5 h-5 md:w-[31.89px] md:h-[31.89px]" />
      </Button>
    </section>
  );
};
