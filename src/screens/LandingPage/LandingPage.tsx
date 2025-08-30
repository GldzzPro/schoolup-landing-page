import { DivSubsection } from "./sections/DivSubsection/DivSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection/DivWrapperSubsection";
import { Frame1Subsection } from "./sections/Frame1Subsection/Frame1Subsection";
import { Frame2Subsection } from "./sections/Frame2Subsection/Frame2Subsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GroupSubsection } from "./sections/GroupSubsection/GroupSubsection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection/SectionComponentNodeSubsection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-[#fffffe] w-full min-h-screen">
      <div className="bg-pure-snow w-full  mx-auto relative space-y-8 md:space-y-12">
        <div className="px-4 md:px-8 lg:px-12 py-4 md:pt-8 sticky top-0 z-10 bg-[#fffffe]  ">
          <GroupSubsection />
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <FrameSubsection />
        </div>
        <div className="px-4 md:px-8 lg:px-12">
          <FrameWrapperSubsection />
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <DivWrapperSubsection />
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <DivSubsection />
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <SectionComponentNodeSubsection />
        </div>

        <div className="px-4 md:px-8 lg:px-12">
          <Frame1Subsection />
        </div>

        <Frame2Subsection />
      </div>
    </div>
  );
};
