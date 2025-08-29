import { SendIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const quickLinks = [
  "Accueil",
  "À propos",
  "Pourquoi nous ?",
  "Fonctionnalités",
  "Tarification",
  "Contact",
];

const socialIcons = [
  "/social-4.svg",
  "/social.svg",
  "/social-2.svg",
  "/social-3.svg",
  "/social-1.svg",
];

const contactInfo = [
  {
    icon: "/vuesax-linear-map.svg",
    text: "10, Cyber Park Zarzis, Medenine",
    href: "https://www.google.com/maps/place/OmegUp/@33.4966778,11.1157896,15z/data=!4m5!3m4!1s0x0:0xab85ea46c136a0b8!8m2!3d33.4966778!4d11.1157896?hl=en",
  },
  {
    icon: "/vuesax-linear-sms-tracking.svg",
    text: "contact@omegup.tn",
    href: "mailto:contact@omegup.tn",
  },
  {
    icon: "/vuesax-linear-call-incoming.svg",
    text: "+216 28 827 941",
    href: "tel:+216 28 827 941",
  },
];

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section id="Contact" className="flex flex-col w-full items-start relative">
      <div className="flex flex-col items-start gap-8 md:gap-[50px] p-6 md:p-[50px] relative self-stretch w-full flex-[0_0_auto] bg-black">
        <div className="flex flex-col items-start gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Krona_One',Helvetica] font-normal text-white text-xl md:text-[34px] text-center tracking-[-1.5px] md:tracking-[-2.18px] leading-[24px] md:leading-[37.4px]">
            Contactez-nous – Construisons ensemble l&apos;avenir de votre école
          </h2>

          <div className="relative self-stretch font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-light-blue text-[length:var(--mysticgrove-whisperingxs-font-size)] text-center tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] [font-style:var(--mysticgrove-whisperingxs-font-style)]">
            <span className="text-[#dee9ff] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
              Chez School-
            </span>

            <span className="text-[#3879f0] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
              UP
            </span>

            <span className="text-[#dee9ff] tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] font-mysticgrove-whisperingxs [font-style:var(--mysticgrove-whisperingxs-font-style)] font-[number:var(--mysticgrove-whisperingxs-font-weight)] leading-[var(--mysticgrove-whisperingxs-line-height)] text-[length:var(--mysticgrove-whisperingxs-font-size)]">
              , nous croyons en une communication ouverte. Que vous ayez une
              question, besoin d&apos;un devis, ou souhaitiez discuter d&apos;un
              projet, nous sommes là pour vous aider. Contactez-nous et
              découvrez la puissance de notre expertise en gestion scolaire.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative">
              <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
                <div className="relative self-stretch w-full h-px">
                  <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      Nom complet
                    </Label>

                    <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                      *
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                  <div className="flex w-[228px] items-center gap-1 relative">
                    <Input
                      className="flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Nom complet"
                    />
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
                </div>

                <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
              </div>
            </div>

            <div className="flex flex-col items-start relative rounded-[15px] md:rounded-[20px]">
              <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
                <div className="relative self-stretch w-full h-px">
                  <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      E-mail
                    </Label>

                    <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                      *
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                  <div className="flex w-[228px] items-center gap-1 relative">
                    <Input
                      className="flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="E-mail"
                      type="email"
                    />
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
                </div>

                <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
              </div>
            </div>

            <div className="flex flex-col items-start relative rounded-[15px] md:rounded-[20px]">
              <div className="flex flex-col items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
                <div className="relative self-stretch w-full h-px">
                  <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                    <Label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      Numéro de téléphone
                    </Label>

                    <span className="relative w-fit opacity-80 font-paragraph-xsmall-meduim font-[number:var(--paragraph-xsmall-meduim-font-weight)] text-red text-[length:var(--paragraph-xsmall-meduim-font-size)] tracking-[var(--paragraph-xsmall-meduim-letter-spacing)] leading-[var(--paragraph-xsmall-meduim-line-height)] [font-style:var(--paragraph-xsmall-meduim-font-style)]">
                      *
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-[0_0_auto] relative self-stretch w-full">
                  <div className="flex w-[228px] items-center gap-1 relative">
                    <Input
                      className="flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Numéro de téléphone"
                      type="tel"
                    />
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
                </div>

                <img className="relative w-72 h-px mb-[-1.00px]" alt="Icons" />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[120px] md:h-[143px] items-start relative self-stretch w-full rounded-[15px] md:rounded-[20px]">
            <div className="flex flex-col items-start gap-3 px-4 py-0 relative flex-1 self-stretch w-full grow bg-white rounded-[15px] md:rounded-[20px] border border-solid border-[#828282]">
              <div className="relative self-stretch w-full h-px">
                <div className="inline-flex items-center px-1 py-0 relative -top-2.5 bg-white rounded-[15px] md:rounded-[20px]">
                  <Label className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                    Message
                  </Label>

                  <span className="relative w-fit opacity-80 font-paragraph-xsmall-heavy font-[number:var(--paragraph-xsmall-heavy-font-weight)] text-red text-[length:var(--paragraph-xsmall-heavy-font-size)] tracking-[var(--paragraph-xsmall-heavy-letter-spacing)] leading-[var(--paragraph-xsmall-heavy-line-height)] whitespace-nowrap [font-style:var(--paragraph-xsmall-heavy-font-style)]">
                    *
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between relative flex-1 self-stretch w-full grow">
                <div className="flex w-[228px] items-start gap-1 relative">
                  <Textarea
                    className="flex-1 opacity-80 [font-family:'Quicksand',Helvetica] font-medium text-grey text-sm md:text-base tracking-[0] leading-5 md:leading-6 relative mt-[-1.00px] border-none bg-transparent p-0 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Message"
                  />
                </div>

                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]" />
              </div>

              <img
                className="h-3 mr-[-10.00px] relative self-stretch w-full"
                alt="Icons"
                src="/icons.svg"
              />
            </div>
          </div>

          <Button className="inline-flex items-end gap-2 md:gap-2.5 px-4 md:px-5 py-2.5 relative flex-[0_0_auto] bg-blue rounded-[22px] h-auto hover:bg-blue/90 w-full md:w-auto">
            <SendIcon className="relative w-5 h-5 md:w-6 md:h-6" />

            <span className="relative w-fit mt-[-1.00px] font-quicksand-easyread-semibold font-[number:var(--quicksand-easyread-semibold-font-weight)] text-light-blue text-[length:var(--quicksand-easyread-semibold-font-size)] tracking-[var(--quicksand-easyread-semibold-letter-spacing)] leading-[var(--quicksand-easyread-semibold-line-height)] whitespace-nowrap [font-style:var(--quicksand-easyread-semibold-font-style)]">
              Envoyer le message
            </span>
          </Button>
        </div>
      </div>
      {/* <footer className="flex flex-col md:flex-row items-start gap-8 md:gap-[50px] px-6 md:px-[117px] py-8 md:py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-blue">
        <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] w-full md:w-auto">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[170.85px] items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-8 h-10">
                <div className="absolute w-8 h-[34px] top-0 left-0 bg-[url(/vector-1.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-8 h-8 top-0 left-0"
                    alt="Vector"
                    src="/vector-4.svg"
                  />
                </div>

                <img
                  className="absolute w-4 h-1 top-9 left-2"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>

              <div className="relative w-fit mr-[-1.15px] font-mysticgrove-whisperingxs font-[number:var(--mysticgrove-whisperingxs-font-weight)] text-light-blue text-[length:var(--mysticgrove-whisperingxs-font-size)] text-center tracking-[var(--mysticgrove-whisperingxs-letter-spacing)] leading-[var(--mysticgrove-whisperingxs-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingxs-font-style)]">
                School-UP
              </div>
            </div>

            <div className="flex w-full md:w-[428px] items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-pearl-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] [font-style:var(--quicksand-delicatescript-font-style)]">
                Suivez School-UP sur nos réseaux sociaux pour des mises à jour
                quotidiennes, des conseils et des inspirations liés à
                l&apos;éducation et à la gestion scolaire. Partageons ensemble !
              </p>
            </div>
          </div>

          <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto] justify-center md:justify-start w-full md:w-auto">
            {socialIcons.map((icon, index) => (
              <img
                key={`social-${index}`}
                className="relative w-6 h-6"
                alt="Social"
                src={icon}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[50px] relative flex-1 grow w-full">
          <div className="flex gap-2.5 flex-1 grow flex-col items-start relative w-full md:w-auto">
            <h3 className="relative w-fit mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-pearl-white text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] text-center md:text-left tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
              Liens rapides
            </h3>

            <nav className="grid grid-cols-2 md:flex md:flex-col gap-2 md:gap-[5px] flex-[0_0_auto] items-start relative w-full">
              {quickLinks.map((link, index) => (
                <div
                  key={`link-${index}`}
                  className="inline-flex items-center justify-start md:justify-center gap-2.5 relative flex-[0_0_auto]"
                >
                  <a className="relative w-fit mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] text-left md:text-center tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] whitespace-nowrap [font-style:var(--quicksand-delicatescript-font-style)] hover:text-light-blue cursor-pointer">
                    {link}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex gap-2.5 flex-1 grow flex-col items-start relative w-full md:w-auto">
            <h3 className="relative w-fit mt-[-1.00px] font-mysticgrove-whisperingwillow font-[number:var(--mysticgrove-whisperingwillow-font-weight)] text-white text-lg md:text-[length:var(--mysticgrove-whisperingwillow-font-size)] text-center md:text-left tracking-[-1px] md:tracking-[var(--mysticgrove-whisperingwillow-letter-spacing)] leading-[22px] md:leading-[var(--mysticgrove-whisperingwillow-line-height)] whitespace-nowrap [font-style:var(--mysticgrove-whisperingwillow-font-style)]">
              Contact
            </h3>

            <div className="inline-flex gap-[5px] flex-[0_0_auto] flex-col items-start relative">
              {contactInfo.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
                >
                  <img
                    className="relative w-[21px] h-[21px]"
                    alt="Contact icon"
                    src={contact.icon}
                  />

                  <a
                    className="relative w-fit mt-[-1.00px] font-quicksand-delicatescript font-[number:var(--quicksand-delicatescript-font-weight)] text-white text-xs md:text-[length:var(--quicksand-delicatescript-font-size)] text-left md:text-center tracking-[var(--quicksand-delicatescript-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-delicatescript-line-height)] [font-style:var(--quicksand-delicatescript-font-style)] hover:text-light-blue break-words"
                    href={contact.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex h-auto md:h-[50px] items-center justify-center gap-2.5 px-4 md:px-2.5 py-4 md:py-[13px] relative self-stretch w-full bg-light-blue">
        <p className="relative w-fit mt-[-1.00px] font-quicksand-easyread font-[number:var(--quicksand-easyread-font-weight)] text-blue text-xs md:text-[length:var(--quicksand-easyread-font-size)] text-center tracking-[var(--quicksand-easyread-letter-spacing)] leading-[18px] md:leading-[var(--quicksand-easyread-line-height)] [font-style:var(--quicksand-easyread-font-style)]">
          Copyright Notice: © 2025 Omegup. All rights reserved.
        </p>
      </div> */}
    </section>
  );
};
