import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'


interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Honesty & Integrity.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Ethical & Professional.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Accountability & Leadership.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
      heading: "Learning & Innovative.",
      imgSrc: "/images/aboutus/imgOne.svg",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more'
  },
  {
      heading: "Teamwork & Inclusiveness.",
      imgSrc: "/images/aboutus/imgTwo.svg",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more'
  },
  {
      heading: "Humane & Diverse.",
      imgSrc: "/images/aboutus/imgThree.svg",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
      link: 'Learn more'
  },
]

const Values = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                {/* <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" /> */}
                <h3 className='text-center text-blue text-lg tracking-widest'>Our Core Values</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Know more about us.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-navyblue rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl'>
                            <h4 className='text-4xl font-semibold  text-blue mb-5'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-offwhite mb-5'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Values;