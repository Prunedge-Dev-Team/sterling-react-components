import { useRef, useState } from 'react';
import {
    ListItemIcon,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Popover,
} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { IMoreMenuProps, IOptionsProps } from './moreMenu.types';

export default function MoreMenu(props: IMoreMenuProps) {
    const { options } = props;
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(prevState => !prevState);
    };

    const handleOptionClick = (option: IOptionsProps) => () => {
        option.onOptionClick();
        setOpen(false)
    }

    return (
        <>
            <IconButton ref={anchorRef} onClick={handleOpen}>
                <DehazeIcon color="primary" />
            </IconButton>

            <Popover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                keepMounted
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        minWidth: 200
                    }
                  }}
            >
                <List disablePadding>
                    {options.map((option) => (
                        <ListItem
                            button
                            disableGutters
                            key={option.label}
                            onClick={handleOptionClick(option)}
                            sx={{
                                py: 1,
                                px: 2,
                            }}
                        >
                            <ListItemIcon sx={{minWidth:32}}>
                                {option.icon}
                            </ListItemIcon>
                            <ListItemText primary={
                                <Typography variant="body2" noWrap>
                                    {option.label}
                                </Typography>
                            } />
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </>
    );
}
