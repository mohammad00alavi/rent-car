"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calculateRentPrice } from "@/utils/calculateRentPrice";
import { Button, CarInfo } from ".";
import { Car } from "@/types/Car";
import { CarDetailsContainer } from "@/elements/CarBoardElements";

interface CarBoxProps {
    data: Car;
}

const CarBox: React.FC<CarBoxProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
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
            <div className="relative flex w-full mt-2">
                <CarDetailsContainer
                    transmission={transmission}
                    city_mpg={city_mpg}
                    drive={drive}
                />
                <div className="car-card__btn-container">
                    <Button
                        title={"View more"}
                        disabled={false}
                        type={"button"}
                        innerStyles={
                            "w-full py-[16px] rounded-full bg-primary-blue"
                        }
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarInfo />
        </div>
    );
};

export default CarBox;
