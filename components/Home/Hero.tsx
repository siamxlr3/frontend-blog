import React from 'react';

const Hero = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <div
                className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('hero.webp')",
                    minHeight: '500px',
                }}
            >
                {/* Overlay for dimming background */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* You can adjust bg-black/30 → bg-black/50 for darker, bg-black/20 for lighter */}

                {/* Content on top */}
                <div className="relative z-10 flex items-center h-full px-8 md:px-16 py-16 md:py-20">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Order your favourite food here
                        </h1>

                        <p className="text-white text-base md:text-lg mb-8 leading-relaxed opacity-95">
                            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
                            ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your
                            dining experience, one delicious meal at a time.
                        </p>

                        <button className="bg-white text-gray-800 px-8 py-3.5 rounded-full font-semibold text-base
                             hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl
                             hover:scale-105 active:scale-95 cursor-pointer">
                            View Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
