import { useTranslation } from "react-i18next";

export const Frame1Subsection = (): JSX.Element => {
  const { t } = useTranslation("demo");

  return (
    <section className="w-full p-[25px] bg-[#3879F0] rounded-3xl inline-flex flex-col md:flex-row justify-start items-start md:items-center gap-2.5">
      <div className="self-stretch justify-start">
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
      <div className="flex h-8.5 w-[150px] px-[10px] py-[5px] box-border hover:bg-transparent hover:text-[#DEEAFF] rounded-[20px] bg-[#DEEAFF]  justify-center items-center gap-1.5   text-sm font-medium font-['Quicksand'] leading-tight">
        {t("button")}
        <img
          className="w-[24px] h-[24px] mt-[-3.95px] mb-[-3.95px]"
          alt="Vuesax linear arrow"
          src="/vuesax-linear-arrow-right.svg"
        />
      </div>
    </section>
  );
};
