import React from "react";

const menuItems = [
    { name: "Salad", img: "/download.jpeg" },
    { name: "Rolls", img: "/images.jpeg" },
    { name: "Deserts", img: "/deserts.jpeg" },
    { name: "Sandwich", img: "/sandwich.jpeg" },
    { name: "Cake", img: "/cake.jpeg" },
    { name: "Pure Veg", img: "/veg.jpeg" },
    { name: "Pasta", img: "/pasta.jpeg" },
    { name: "Noodles", img: "/noodles.jpeg" },
];

const Menu = () => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold mb-4">Explore our menu</h2>
                <p className="text-gray-600 max-w-2xl">
                    Choose from a diverse menu featuring a delectable array of dishes.
                    Our mission is to satisfy your cravings and elevate your dining
                    experience, one delicious meal at a time.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
                {menuItems.map((item, index) => (
                    <div key={index} className="text-center cursor-pointer">
                        <div
                            className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-gray-800">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
