import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
       <footer className="bg-gray dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Solutions</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Publications</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">WhatsApp</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-100">
              <div className="aspect-w-16 aspect-h-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.25498946049!2d36.71474915820311!3d-1.2763273999999938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176de0cc1f0b%3A0xa44ef6a1e882a54c!2smHealth%20Kenya%20Offices!5e0!3m2!1sen!2ske!4v1681303397434!5m2!1sen!2ske" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray dark:bg-gray md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="">mHealth</a>. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>
    </>
  );
};

export default Footer;
