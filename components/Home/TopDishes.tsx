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
    const FoodData = Array.isArray(data?.data?.data) ? data.data.data : [];


    return (
        <div className="mt-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="text-start mb-8">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                        Top Dishes Near You
                    </h1>
                    <p className="text-gray-500 mt-1 text-sm sm:text-base">
                        Discover the most popular dishes around your area — handpicked for you.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {FoodData.map((item: FoodItem, index: number) => (
                        <div
                            key={index.toString()}
                            className="group relative bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image Section */}
                            <div className="relative">
                                <img
                                    src={item.image || "/deserts.jpeg"}
                                    alt={item.name}
                                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Cart Button */}
                                <button
                                    className="absolute top-3 right-3 bg-pink-500 p-2 rounded-full shadow cursor-pointer"
                                >
                                    <ShoppingCart className="text-white w-5 h-5"/>
                                </button>
                                <div
                                    className="absolute bottom-2 left-2 bg-pink-600 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow">
                                    {item.category || "Popular"}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900 truncate">
                                        {item.name}
                                    </h2>
                                </div>

                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between mt-3">
                                    <h3 className="text-base font-semibold text-pink-600">
                                        ${item.price}
                                    </h3>
                                    <button
                                        className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer">
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDishes;
