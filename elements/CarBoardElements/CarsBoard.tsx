"use client";

import { CarBox } from "@/components";
import useCars from "@/hooks/useCars";
import React from "react";

const CarsBoard = () => {
    const { carData } = useCars();
    return (
        <section>
            <div className="home__cars-wrapper">
                {carData?.map((item) => (
                    <CarBox data={item} />
                ))}
            </div>
        </section>
    );
};

export default CarsBoard;
