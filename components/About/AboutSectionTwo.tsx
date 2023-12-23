import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  const data = [
    {
      'title': 'Human Health',
      'description': 'Health care is improvement and maintenance of Health and it can be reinvented and reinforced with innovative solutions. At mHealth Kenya we have created applications/software that continually meet the needs of the Health and Healthcare industry. We have delivered critical results for care via Mobile Lab; We have ensured patients are cared for and seen in good time via our Ushauri platform; and we have continually supported healthcare workers to get the training they need and better communicate via our Care for the Carer system.'
    },
    {
      'title': 'Animal Health',
      'description': 'Healthy animals could contribute to eradication of hunger. At mHealth Kenya we have developed applications that are currently being used to improve the health of livestock and donkeys in various communities by accessing veterinary services. We are improving the quality of human lives through healthy animals.'
    },
    {
      'title': 'Agriculture',
      'description': 'We endeavor to provide solutions that are impactful and secure productivity in the agricultural industry. This has been through continuous stakeholder engagement with farmers and multisectoral organizations like ICIPE to innovate solutions that meet ready markets.'
    },
    {
      'title': 'Government',
      'description': 'At mHealth Kenya we have been core in partnering with the government in developing policies, standards, and guidelines that help put structures and systems into perspective for Governments.'
    },
  ];

  return (
    <>
    <div className="container mb-8 md:mb-12 lg:mb-16">
      <SectionTitle
        title="mHealth Tapped industries"
        paragraph=""
        center
        mb="80px"
      />
    </div>

    <section className="py-16 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <div key={index} className="relative flex flex-col mt-6 text-gray-700 dark:bg-[#1D2144] shadow-md bg-clip-border rounded-xl max-w-xs mx-auto md:max-w-md lg:max-w-full">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              {item.title}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-white">
              {item.description}
            </p>
          </div>
          <div className="p-6 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 bg-color"
                type="button"
              >
                Read More
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  </>
  );
};

export default AboutSectionTwo;
