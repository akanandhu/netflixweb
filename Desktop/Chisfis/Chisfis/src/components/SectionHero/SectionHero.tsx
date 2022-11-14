import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero-right.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col  lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2  flex flex-col items-start space-y-8 sm:space-y-10 pt-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-bold text-4xl md:text-5xl xl:text-5xl  !leading-[114%] ">
          The Future Depends on What You Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E2E85] to-[#9317CE]" >Today.</span>
          <br/> <span className="text-2xl font-semibold md:text-4xl xl:text-sm">Apply to 30+ Countries. Explore,Choose <span className="text-[#6B7280]">and</span> Apply</span>
          </h2>
          
          <ButtonPrimary>Get Started For Free</ButtonPrimary>
        </div>
        <div className="flex-grow">
          <img className="w-full ml-12 mb-48" src={imagePng} alt="hero" />
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
