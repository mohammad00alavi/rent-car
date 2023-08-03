import { CarBoxElement } from "@/components";
import { CarBoxElements } from "@/types/CarBoxDetails";
import { FactoryComponent } from "@/types/FactoryComponent";
import { mpgToLper100km } from "@/utils/mpgToLper100km";
import React from "react";

const CarDetailsContainer: React.FC<FactoryComponent<CarBoxElements>> = (
    props
) => {
    return (
        <div className="flex group-hover:invisible w-full justify-between text-gray">
            <CarBoxElement
                data={props.transmission === "a" ? "Automatic" : "Manual"}
                imgSrc={"/tire.svg"}
                imgAlt={"tire"}
            />
            <CarBoxElement
                data={props.drive.toUpperCase()}
                imgSrc={"/tire.svg"}
                imgAlt={"tire"}
            />
            <CarBoxElement
                data={`${mpgToLper100km(props.city_mpg)} L/100km`}
                imgSrc={"/gas.svg"}
                imgAlt={"gas"}
            />
        </div>
    );
};

export default CarDetailsContainer;
