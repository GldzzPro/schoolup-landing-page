import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";

export const Frame1Subsection = (): JSX.Element => {
  const { t } = useTranslation("demo");

  return (
    <section className="w-full p-6 bg-[#3879F0] rounded-3xl inline-flex flex-col md:flex-row justify-start items-center gap-2.5">
      <div className="flex-1 justify-start">
        <span className="text-white text-base font-medium font-['Quicksand'] leading-normal mr-1">
          {t("description.part1")}{" "}
        </span>
        <span className="text-white text-base font-semibold font-['Quicksand'] leading-normal">
          {t("description.part2")}{" "}
        </span>
        <span className="text-white text-base font-medium font-['Quicksand'] leading-normal">
          {t("description.part3")}
        </span>
      </div>
      <div className="h-8 px-2.5 py-[5px] bg-[#DEEAFF] rounded-[20px] md:flex inline-flex justify-center items-center gap-2.5 hover:bg-[#3879F0]">
        <div className="flex hover:text-white text-[#3879F0] items-center gap-1.5 md:gap-2.5 text-center justify-start text-blue-500 text-sm font-medium font-['Quicksand'] leading-tight">
          {t("button")}
          <img
            className="w-[24px] h-[24px] mt-[-3.95px] mb-[-3.95px]"
            alt="Vuesax linear arrow"
            src="/vuesax-linear-arrow-right.svg"
          />
        </div>
      </div>
    </section>
  );
};
