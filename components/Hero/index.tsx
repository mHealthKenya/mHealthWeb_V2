"use client"

import React from "react";
import Link from "next/link";
import * as BsIcons from 'react-icons/bs'

const Hero = () => {
  const [currentItem, setCurrentItem] = React.useState(0);

  // define carousel items
  const items = [
    { image: '/assests/images/g5.jpg', 
      title: 'Leveraging Technology for Improved Healthcare', 
      description: ' At mHealth Kenya, we recognize the potential of technology in improving healthcare outcomes. We are committed to developing and implementing digital solutions that address critical health challenges in Kenya and beyond. Through our innovative approach, we have been able to support the management of HIV/AIDS, respond to public health emergencies, and equip healthcare workers with the tools they need to deliver high-quality care.' },
    { image: '/assests/images/g2.jpg', title: 'Transforming Business Operations with Intelligent Technologies', description: 'At mHealth Kenya, we understand the importance of efficient and effective business operations. Our robotic process automation, smart technologies, and big data analytics are designed to streamline processes and optimize productivity. By leveraging the power of intelligent technologies, we help our customers achieve their business goals and maximize their profits.' },
    { image: '/assests/images/g8.jpg', title: 'Driving Successful Public-Private Partnerships in Healthcare', description: 'At mHealth Kenya, we believe that successful public-private partnerships are essential to improving healthcare outcomes. We have a proven track record of working closely with government agencies, healthcare providers, and other stakeholders to develop and implement innovative solutions that address critical health challenges. Through our collaborative approach, we are able to deliver meaningful impact and contribute to a healthier future for all.' },
  ];

   // advance to next item every 3 seconds
   React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((currentItem + 1) % items.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [currentItem, items.length]);
  return (
    <>
      <section
        id="home"
        // className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
     
<div className="relative h-screen">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition duration-700 ease-in-out ${currentItem === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h2 className="text-4xl font-bold">{item.title}</h2>
              <p className="mt-2 text-xl">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center border border-white">
        <div className="absolute bottom-0">
          <BsIcons.BsMouse className="border border-white"/>
        </div>
      </div>
      
    </div>
        
      </section>
    </>
  );
};

export default Hero;
