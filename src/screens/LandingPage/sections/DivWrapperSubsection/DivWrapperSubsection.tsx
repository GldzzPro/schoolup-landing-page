import React from "react";

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[15px] relative px-4 md:px-0">
      <h2 className="w-full font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-black text-lg md:text-[length:var(--quicksand-easyread-semibold-font-size)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[22px] md:leading-[var(--quicksand-easyread-semibold-line-height)] [font-style:var(--quicksand-easyread-semibold-font-style)]">
        Les avantages de notre solution
      </h2>

      <h3 className="w-full font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-black text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
        <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          Pourquoi choisir{" "}
        </span>

        <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          School-UP{" "}
        </span>

        <span className="text-[#323232] tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] font-mysticgrove-whisperingwillow [font-style:var(--mysticgrove-whisperingwillow-font-style)] font-[number:var(--mysticgrove-whisperingwillow-font-weight)] leading-[var(--mysticgrove-whisperingwillow-line-height)] text-[length:var(--mysticgrove-whisperingwillow-font-size)]">
          ?
        </span>
      </h3>

      <p className="w-full [font-family:'Quicksand',Helvetica] font-medium text-black text-sm md:text-base tracking-[0] leading-5 md:leading-6">
        Chez School-UP, nous plaçons nos utilisateurs au centre.
        Administrateurs, enseignants, parents et élèves disposent chacun de leur
        propre espace, conçu pour répondre à leurs besoins spécifiques. Notre
        solution est entièrement responsive et fonctionne aussi bien sur
        ordinateur que sur mobile, afin que chacun puisse accéder à son école,
        partout et à tout moment.
      </p>
    </section>
  );
};
