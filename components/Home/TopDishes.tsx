"use client"

import React from "react";
import { ShoppingCart } from 'lucide-react';
import { useFetchAllFoodQuery } from "@/components/Redux/Feature/Food/foodAPI";

interface FoodItem {
    id: string | number
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    category?: string;
}

const TopDishes = () => {
    const { data, error, isLoading } = useFetchAllFoodQuery();
    const FoodData = Array.isArray(data?.data) ? data?.data : [];
    console.log(FoodData);


    return (
        <div className="mt-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="space-y-3">
                    <h1 className="text-start text-3xl sm:text-4xl font-semibold">
                        Top Dishes Near You
                    </h1>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {FoodData.map((item:FoodItem, index:Number) => (
                        <div
                            key={index.toString()}
                            className="relative bg-white rounded shadow-sm p-3 hover:shadow-md transition duration-200"
                        >
                            <div className="relative">
                                <img
                                    src={item.image || "/deserts.jpeg"}
                                    alt={item.name}
                                    className="w-full h-52 object-cover rounded"
                                />
                                <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                                    <ShoppingCart className="text-pink-500 cursor-pointer w-5 h-5" />
                                </div>
                            </div>
                            <div className="mt-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base font-bold truncate">{item.name}</h1>
                                    {/*<span className="text-yellow-400">{'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}</span>*/}
                                </div>
                                <p className="text-sm text-gray-500">{item.description}</p>
                                <h2 className="text-sm font-semibold text-red-500">${item.price}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDishes;
