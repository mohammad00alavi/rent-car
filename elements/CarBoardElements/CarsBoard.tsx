"use client";

import { CarBox } from "@/components";
import useCars from "@/hooks/useCars";
import React from "react";
import { ShowMore } from ".";
import { FilterProps } from "@/types/FilterProps";
import { Car } from "@/types/Car";
interface CarsBoardProps {
    searchParams: FilterProps;
    data: Car[];
}

const CarsBoard: React.FC<CarsBoardProps> = ({ searchParams, data }) => {
    const { carData } = useCars();
    return (
        <section>
            <div className="home__cars-wrapper">
                {carData?.map((item) => (
                    <CarBox
                        data={item}
                        key={`${item.model}-${item.make}-${item.year}`}
                    />
                ))}
            </div>
            <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNextPage={(searchParams.limit || 10) > data.length}
            />
        </section>
    );
};

export default CarsBoard;
