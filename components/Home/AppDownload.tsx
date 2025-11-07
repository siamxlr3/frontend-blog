"use client";
import React from "react";
import Image from "next/image";

const AppDownload = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 leading-tight">
                    For Better Experience Download
                    <br />
                    <span className="text-zinc-950 font-bold">Tomato App</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-5 mt-8">
                    <Image
                        src="/as.png"
                        alt="Get it on Google Play"
                        width={170}
                        height={60}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                    <Image
                        src="/gp.png"
                        alt="Download on the App Store"
                        width={170}
                        height={60}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
