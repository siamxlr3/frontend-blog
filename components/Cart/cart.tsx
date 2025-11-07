import React from "react";
import Image from "next/image";
import { X } from "lucide-react"

const Cart = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-gray-50 text-gray-600 font-medium">
                <tr>
                    <th className="py-3 px-4">Items</th>
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4 text-center">Remove</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                    <td className="py-4 px-4">
                        <div className="w-14 h-14 overflow-hidden rounded-md border">
                            <Image
                                src="/deserts.jpeg"
                                alt="Greek salad"
                                width={56}
                                height={56}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </td>
                    <td className="py-4 px-4 text-gray-800 font-medium">Greek salad</td>
                    <td className="py-4 px-4 text-gray-700 font-semibold">$12</td>
                    <td className="py-4 px-4 text-gray-700">2</td>
                    <td className="py-4 px-4 text-gray-900 font-semibold">$24</td>
                    <td className="py-4 px-4 text-center">
                        <button
                            className="text-red-500 hover:text-red-600 transition cursor-pointer"
                            aria-label="Remove item"
                        >
                            <X size={18} strokeWidth={2}/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
