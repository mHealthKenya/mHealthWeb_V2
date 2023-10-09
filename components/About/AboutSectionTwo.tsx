import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
           
               <SectionTitle
                title="mHealth Tapped industries"
                paragraph=""
                mb="44px"
              /> 

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold Honesty & Integritytext-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Human Health
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Health care  is improvement and maintenance of Health and it can be reinvented and reinforced with innovative solutions. At mHealth Kenya we have created applications/software that continually meet the needs of the Health and Healthcare industry. We have delivered critical results for care via Mobile Lab; We have ensured patients are cared for and seen in good time via our Ushauri platform; and we have continually supported healthcare workers to get the training they need and better communicate via our Care for the Carer system.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Animal Health
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Healthy animals could contribute to eradication of hunger. At mHealth Kenya we have developed applications that are currently being used to improve the health of livestock and donkeys in various communities by accessing veterinary services. We are improving the quality of human lives through healthy animals.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Agriculture
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We endeavor to provide solutions that are impactful and secure productivity in the agricultural industry. This has been through a continuous stakeholder engagement with farmers and multisectoral organizations like ICIPE to innovate solutions that meet ready markets.  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Government
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Dr. Maxwell says: `Everything falls and rises on leadership`. At mHealth Kenya we have been core in partnering with the government in developing policies, standards and guidelines that helphave put structures and systems into perspective for Governments.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
