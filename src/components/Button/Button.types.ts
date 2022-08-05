import { FC, MouseEventHandler } from "react";

export interface ButtonProps {
    buttonText: string | FC
    buttonType: 'primary' | 'secondary'
    rounded?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}