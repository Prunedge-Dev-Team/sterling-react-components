export interface IOptionsProps {
    label: string
    icon?: any
    onOptionClick: () => void
}

export interface IMoreMenuProps {
    options: IOptionsProps[]
}