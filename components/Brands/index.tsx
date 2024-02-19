import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "IFA",
    href: "https://ifa.co.ke/",
    image: "/images/partners/ifa.png",
  },
  {
    id: 2,
    name: "KEMSA",
    href: "https://www.kemsa.go.ke/",
    image: "/images/partners/kemsa.png",
  },
  {
    id: 3,
    name: "Ministry Of Health Kenya",
    href: "https://www.health.go.ke/",
    image: "/assests/images/partners/moh.png",
  },
  {
    id: 4,
    name: "UCSF",
    href: "https://www.ucsfhealth.org/",
    image: "/assests/images/partners/ucsf.png",
  },
  {
    id: 5,
    name: "ICIPE",
    href: "http://www.icipe.org/",
    image: "/images/partners/icipe.png",
  },
];

const Brands = () => {
  return (
    <>
    <section className="pt-16 mb-10">
      <div className="container">
        <SectionTitle
          title="Our Partners"
          paragraph=""
          center
          mb="80px"
        />

        <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[50px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[50px] after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="slider-container animate-infinite-slider flex">
            {brandsData.map((brand, index) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
            {brandsData.map((brand, index) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
            
          </div>
        </div>
      </div>
    </section>
    
    {/* <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Awards"
          paragraph=""
          center
          mb="80px"
        />

        <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[50px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[50px] after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="slider-container animate-infinite-slider flex">
            {brandsData.map((brand, index) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
            {brandsData.map((brand, index) => (
              <SingleBrand key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section> */}
    
    </>
    
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full   transition hover:opacity-100  "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
