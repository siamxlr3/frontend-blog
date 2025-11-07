import React from 'react';
import Hero from "@/components/Home/Hero";
import Menu from "@/components/Home/Menu";
import TopDishes from "@/components/Home/TopDishes";
import AppDownload from "@/components/Home/AppDownload";

const Page = () => {
    return (
        <>
           <Hero/>
            <Menu/>
            <TopDishes/>
            <AppDownload/>
        </>
    );
};

export default Page;