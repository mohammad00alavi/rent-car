"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calculateRentPrice } from "@/utils/calculateRentPrice";

interface Car {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

interface CarBoxProps {
    data: Car;
}

const CarBox: React.FC<CarBoxProps> = ({ data }) => {
    const { city_mpg, year, make, model, transmission, drive } = data;
    const carRentPrice = calculateRentPrice(city_mpg, year);
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">€</span>
                {carRentPrice}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" alt="car picture" fill priority />
            </div>
        </div>
    );
};

export default CarBox;
