'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";


const CartTotal = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
            {/* Left Section - Cart Totals */}
            <div className="border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Cart Totals</h2>

                <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between border-b pb-2">
                        <span>Subtotal</span>
                        <span className="font-medium">0</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>Delivery Fee</span>
                        <span className="font-medium">2</span>
                    </div>

                    <div className="flex justify-between font-semibold text-gray-900 pt-2">
                        <span>Total</span>
                        <span>0</span>
                    </div>
                </div>

                <Button
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-2 cursor-pointer">
                    PROCEED TO CHECKOUT
                </Button>
            </div>

            {/* Right Section - Promo Code */}
            <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-700 mb-3">
                    If you have a promo code, enter it here
                </p>
                <div className="flex">
                    <Input
                        type="text"
                        placeholder="promo code"
                        className="rounded-r-none bg-gray-100 text-sm text-gray-700 border-gray-200 focus-visible:ring-0 focus-visible:border-gray-400"
                    />
                    <Button
                        variant="default"
                        className="rounded-l-none bg-black hover:bg-gray-800 text-white text-sm px-5 cursor-pointer"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
