"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Transforming Your Experience"
          paragraph="Empowering You with Our Service"
          center
          width="665px"
        />


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            price="Software Development"
            subtitle="We conceptualize, develop, and deliver on cutting edge solutions based on clients needs."         >
              <></>
          </PricingBox>
          <PricingBox
            price="Monitoring & Evaluation"
            subtitle="We constantly monitor and evaluate our products and services in collaboration with our partners and stakeholders.

            We also extend our vast experience to our partners by providing our monitoring and evaluation consultancy services. ."
          >
            <></>
          </PricingBox>
          <PricingBox
            price="
            software as a service"
            subtitle="We have developed market disruptive software that can be used to handle your day to day business activities at the comfort of your computer, smartphone, tablet or even your generic devices. "
          >
            <></>
          </PricingBox>
          <PricingBox
            price="Research"
            subtitle="We innovate to solve problems and we develop to chase after perfection and excellence. Our research team is dedicated to coming up with disruptive research ideas that are translated into innovative solutions."
          >
            <></>
          </PricingBox>
          <PricingBox
            price="Consulting"
            subtitle="We provide around the close consultancy on the topics of software development, digital health, e-health policies and public private partnerships. "
          >
            <></>
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
