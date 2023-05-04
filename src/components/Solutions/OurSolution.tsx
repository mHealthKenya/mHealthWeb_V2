import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "Lab Results Transmission System ",
    description: "mLab is a lab result transmission application that is used in 1,100+ healthcare facilities and transmitted 3.4M+ patient results. ALL RESULTS transmitted under <24 Hours and currently being used in 33 counties.",
    href: "#",
    mostPopular: false,
  },
  {
    title: "Automated Patient Appointment System",
    description: "Ushauri is an automated appointment diary with a defaulter tracing module that ensures patients are seen and followed up in the shortest time possible.  Ushauri system is currently been used in 600+ healthcare facilities, 400K+ patients receiving appointment reminders, 92% of defaulted patients have been traced and returned to care. System is currently being used in 33 counties.  ",
    href: "#",
    mostPopular: false,
  },
  {
    title: "Healthcare Workers Communication System",
    description: "Care for the Carer is a healthcare worker communication and training platform. The application is currently being used by over 11,000 healthcare workers, and covering facilities in  47 counties.",
    href: "#",
    mostPopular: false,
  },
  {
    title: "Medical Products' Procurement & Logistics System",
    description: "KEMSA eMobile is a logistics management information system that is used to order health commodities in 47 counties. It has contributed to the reduction of turn around time from order to receipt of commodities at facilities from 64 days to 7 days.This project had demonstrated a successful transition from",
    href: "#",
    mostPopular: false,
  },
  {
    title: "Emergency Alert & Response System (EARS)",
    description: "The Emergency Operation Centre at the Ministry of Health has been digitized, through EARS, to receive and respond to 40+ infectious diseases over the last 5 years. An additional module dubbed 'Jitenge System' has been developed as a  COVID19 Management platform  which is currently being used Nationally & at Border Points in response to COVID-19.This project had demonstrated a successful transition from",
    href: "#",
    mostPopular: true,
  },
  {
    title: "Food Security Management System",
    description: "LiMA has been developed, in partnership with icipe, as a cloud based agrovet platform that provides an end to end supply and logistics chain for farm inputs. With 1,000+ registered farmers with plans to expand this base to 300,000+, LiMA is continually being improved. ",
    href: "#",
    mostPopular: true,
  },
];

type BillingInterval = "year" | "month";

export default function OurSolution() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Our Solutions</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            href,
          }) => {
            return (
              <>
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Donorship to Ownership.
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    {/* <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{price}</span>
                      </p>
                    </div> */}

                    {/* Call to action */}
                    {/* <Link
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
                        mostPopular
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-black text-white dark:bg-white dark:text-black"
                      }`}
                    >
                       */}
                    {/* </Link> */}

                  </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
