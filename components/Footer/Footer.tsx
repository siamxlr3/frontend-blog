import React from "react";
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-gray-300 py-12 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto flex items-start justify-between gap-y-10 gap-x-8">

                <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold text-[#E23744]">Tomato.</h1>
                  <p className="text-sm max-w-md text-gray-300 leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                    <div className="flex items-center gap-x-8">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#ff4b2b] transition-colors"
                            >
                                <FaFacebookF/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#ff4b2b] transition-colors"
                            >
                                <FaTwitter/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-[#ff4b2b] transition-colors"
                            >
                                <FaLinkedinIn/>
                            </a>
                    </div>
                </div>

                <div className="min-w-[180px] space-y-3">
                    <h1 className="text-xl font-semibold text-white">COMPANY</h1>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>
                            <h1 className="hover:text-red-500 transition-colors">
                                Home
                            </h1>
                        </li>
                        <li>
                            <h1 className="hover:text-red-500 transition-colors">
                                About Us
                            </h1>
                        </li>
                        <li>
                            <h1 className="hover:text-red-500 transition-colors">
                                Our Blog
                            </h1>
                        </li>
                        <li>
                            <h1 className="hover:text-red-500 transition-colors">
                                Terms & Conditions
                            </h1>
                        </li>
                    </ul>
                </div>

                <div className="min-w-[220px] space-y-3">
                    <h1 className="text-xl font-semibold text-white">GET IN TOUCH</h1>
                    <p className="text-sm leading-relaxed">
                        Have questions or feedback? Feel free to reach out anytime — we’d love to hear from you.
                    </p>
                    <p className="text-sm mt-2">
                        Email: <span className="text-red-500">support@Tomato.com</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
