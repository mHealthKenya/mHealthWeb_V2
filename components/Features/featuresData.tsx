
// "use client";
import Image from "next/image";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
                  src="/assests/images/mimbap.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "mPlus (mimbaPlus)",
    paragraph:
      "Mimba + app is a mobile and web-based system that links expectant Mothers, to healthcare workers (Community Health Volunteers, Traditional Birth Attendants) and to connect to quality services; improve communication and health outcomes. ~ World Friends",
  },
  {
    id: 1,
    icon: (
      <Image
                  src="/assests/images/lima.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "Lima",
    paragraph:
      "A cloud-based platform that links the producers of Agri-products to the farmers, including veterinary services. ~ International Centre of Insect Physiology and Ecology (ICIPE)",
  },
  {
    id: 1,
    icon: (
      <Image
                  src="/assests/images/kenum.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "KeNum",
    paragraph:
      "A mobile and integrated web platform that enables nurses and midwives in Kenya to access services offered by NCK from the comfort of their mobile phones. ~ Nursing Council of Kenya (NCK)",
  },
  {
    id: 1,
    icon: (
      <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "EOC System",
    paragraph:
      "The EOC system is designed to enable early detection of health-related events by collecting data from various sources and analyzing it effectively for decision-making, the EOC system aims to efficiently gather, analyze, and disseminate health-related data to aid decision-makers in responding promptly to potential health threats.",
  },
  {
    id: 1,
    icon: (
      <Image
                  src="/assests/images/partners/moh.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "Jitenge",
    paragraph:
      "Jitenge is an app that plugs in to the Emergency Alert and Response System used by the Kenyan government for emergency and response. This app helps the user to self evaluate their health during self quarantine when there is an outbreak or epidemic. ~ Ministiry Of Health Kenya",
  },
  {
    id: 1,
    icon: (
      <Image
                  src="/assests/images/cdc.png"
                  alt="logo"
                  width={60}
                  height={60}
                  // className="w-full dark:hidden"
                />
    ),
    title: "PEPFAR CDC",
    paragraph:
      "The President's Emergency Plan for AIDS Relief (PEPFAR) is a groundbreaking initiative launched to combat the global HIV/AIDS epidemic with unprecedented vigor and commitment. PEPFAR's primary objective extends beyond merely addressing the immediate crisis; it strives to catalyze a transformative shift towards sustainable, long-term solutions. By transitioning from emergency response measures to comprehensive, enduring programs, PEPFAR aims to lay the foundation for lasting impact in the fight against HIV/AIDS. ~ CDC",
  },
];
export default featuresData;
