import {  MouseEventHandler } from "react";

export interface ButtonProps {
    buttonText?: string;
    buttonType: 'primary' | 'secondary';
    rounded?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}