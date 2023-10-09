import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
      />
       <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">Our Mission</h2>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">At our core, we are driven by the commitment to upholding the highest quality and professional standards in all aspects of our work. Our approach extends beyond mere collaboration; we cultivate deep partnerships with our stakeholders, leveraging their expertise to foster innovation and swiftly implement scalable solutions. Our focus lies in the development, implementation, and long-term sustenance of technological advancements that enhance quality of life and improve health outcomes. In tackling the ever-evolving complexities of healthcare challenges, we remain dedicated to offering simple, practical solutions that address the needs of the present while adapting to future demands. Crucially, we embrace honesty, acknowledging and learning from our mistakes, and possess the courage to initiate necessary changes as we continuously strive for excellence.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10 mt-10">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Our Vision</h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Preferred innovative global eHealth solutions provider with sustainable impact</p>
            

            </div>
        </div>
        <div className="w-full lg:w-6/12">
            <img className="lg:block hidden w-full" src="/assests/images/g6.jpg" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full" src="/assests/images/g6.jpg" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="/assests/images/g6.jpg" alt="people discussing on board" />
        </div>
    </div>

    <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
            </div>

          <img className="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />

           <img className="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Founded 2012</p>
        </div>
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50+ solutions</p>
        </div>
        <div className="sm:block hidden">
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
        </div>
    </div>
    <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="user" />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>
    <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
        </div>
    </div>

    
</div>
<Gallery />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
