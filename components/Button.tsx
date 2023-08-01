"use client";

import { ButtonProps } from "@/types/ButtonProps";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            disabled={props.disabled}
            type={props.type}
            className={`custom-btn ${props.innerStyles}`}
            onClick={props.handleClick}
        >
            <span className={`flex-1`}>{props.title}</span>
        </button>
    );
};

export default Button;
