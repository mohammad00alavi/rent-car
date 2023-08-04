"use client";

import { ButtonProps } from "@/types/ButtonProps";
import Image from "next/image";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            disabled={props.disabled}
            type={props.type}
            className={`custom-btn ${props.innerStyles}`}
            onClick={props.handleClick}
        >
            <div className={`flex-1 ${props?.textStyles}`}>
                {props?.rightIcon ? (
                    <div className="flex flex-row justify-center gap-2 align-center">
                        <span>{props.title}</span>
                        <Image
                            src={props.rightIcon}
                            alt="Button Icon"
                            width={15}
                            height={15}
                        />
                    </div>
                ) : (
                    <span>{props.title}</span>
                )}
            </div>
        </button>
    );
};

export default Button;
