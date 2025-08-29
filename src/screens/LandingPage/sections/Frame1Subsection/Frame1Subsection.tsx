import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-2.5 p-4 md:p-[25px] bg-blue rounded-[25px] mx-4 md:mx-0">
      <div className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-5 md:leading-4">
        <span className="font-medium leading-6">
          Bien que nous ayons présenté les principales fonctionnalités de{" "}
        </span>

        <span className="font-[number:var(--quicksand-easyread-semibold-font-weight)] leading-[var(--quicksand-easyread-semibold-line-height)] font-quicksand-easyread-semibold [font-style:var(--quicksand-easyread-semibold-font-style)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] text-[length:var(--quicksand-easyread-semibold-font-size)]">
          School-UP
        </span>

        <span className="font-medium leading-6">
          , sachez qu&apos;une grande partie de ces outils est partagée entre
          les quatre espaces (admin, parents, élèves, enseignants), et il existe
          beaucoup d&apos;autres fonctionnalités avancées que vous pourrez
          découvrir en explorant la plateforme. Ce que vous voyez ici n&apos;est
          qu&apos;une goutte d&apos;eau dans l&apos;océan des possibilités
          offertes par School-UP.
        </span>
      </div>

      <Button className="inline-flex h-[34px] items-center justify-center gap-1.5 md:gap-2.5 px-2 md:px-2.5 py-[5px] flex-[0_0_auto] bg-light-blue rounded-[20px] hover:bg-light-blue/90 text-blue [font-family:'Quicksand',Helvetica] font-medium text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
        Démo Gratuit
        <ArrowRightIcon className="w-5 h-5 md:w-[31.89px] md:h-[31.89px]" />
      </Button>
    </section>
  );
};
