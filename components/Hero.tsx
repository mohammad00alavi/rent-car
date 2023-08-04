"use client";

import React from "react";
import { Button } from ".";
import Image from "next/image";

const Hero = () => {
    const clickHandler = () => {};
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find Your Perfect Rental Car</h1>
                <p className="hero__subtitle">
                    Booking a rental car is quick and easy, providing you with
                    convenience and peace of mind.
                </p>
                <Button
                    title="View Options"
                    disabled={false}
                    type="button"
                    innerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={clickHandler}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
