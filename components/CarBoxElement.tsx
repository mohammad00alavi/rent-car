import React from "react";
import Image from "next/image";
import { CarBoxElementProps } from "@/types/CarBoxElementProps";

const CarBoxElement: React.FC<CarBoxElementProps> = (props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Image
                src={props.imgSrc}
                width={20}
                height={20}
                alt={props.imgAlt}
            />
            <p className="text-[14px]">{props.data}</p>
        </div>
    );
};

export default CarBoxElement;
