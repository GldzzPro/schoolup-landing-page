export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="w-full p-6 bg-[#3879F0] rounded-3xl inline-flex flex-col md:flex-row justify-start items-center gap-2.5">
      <div className="flex-1 justify-start">
        <span className="text-white text-base font-medium font-['Quicksand'] leading-normal mr-1">
          Bien que nous ayons présenté les principales fonctionnalités de
        </span>
        <span className="text-white text-base font-semibold font-['Quicksand'] leading-normal">
          School-UP
        </span>
        <span className="text-white text-base font-medium font-['Quicksand'] leading-normal">
          , sachez qu’une grande partie de ces outils est partagée entre les
          quatre espaces (admin, parents, élèves, enseignants), et il existe
          beaucoup d’autres fonctionnalités avancées que vous pourrez découvrir
          en explorant la plateforme. Ce que vous voyez ici n’est qu’une goutte
          d’eau dans l’océan des possibilités offertes par School-UP.
        </span>
      </div>
      <div className="h-8 px-2.5 py-[5px] bg-[#DEEAFF] rounded-[20px] md:flex inline-flex justify-center items-center gap-2.5 hover:bg-[#3879F0]">
        <div className="flex hover:text-white text-[#3879F0] items-center gap-1.5 md:gap-2.5 text-center justify-start text-blue-500 text-sm font-medium font-['Quicksand'] leading-tight">
          Démo Gratuit
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
