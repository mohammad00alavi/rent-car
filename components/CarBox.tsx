"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calculateRentPrice } from "@/utils/calculateRentPrice";
import { Button, CarInfo } from ".";
import { Car } from "@/types/Car";
import { CarDetailsContainer } from "@/elements/CarBoardElements";
import { generateCarImageUrl } from "@/fetchers/generateCarImageUrl";

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
                <Image
                    src={generateCarImageUrl(data)}
                    alt="car picture"
                    fill
                    priority
                    className={"object-contain"}
                />
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
                        innerStyles={"w-full py-16 rounded-full bg-emerald-300"}
                        textStyles="text-black text-[14px] leading-[17px] font-bold"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarInfo
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                data={data}
            />
        </div>
    );
};

export default CarBox;
