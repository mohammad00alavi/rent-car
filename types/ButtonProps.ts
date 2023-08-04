import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    disabled: boolean;
    type: "submit" | "button";
    innerStyles: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
}
