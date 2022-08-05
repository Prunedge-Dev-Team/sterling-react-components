import { pxToRem } from "./util";

interface ResponsiveFontSize {
    sm: number;
    md: number;
    lg: number;
}

function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSize) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm)
        },
        '@media (min-width:960px)': {
            fontSize: pxToRem(md)
        },
        '@media (min-width:1280px)': {
            fontSize: pxToRem(lg)
        }
    };
};

const FONT_FAMILY = [
    'Roboto',
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

const typography = {
    fontFamily: FONT_FAMILY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 46, md: 46, lg: 46 })
    },
    h2: {
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 32, md: 32, lg: 32 })
    },
    h3: {
        fontWeight: 600,
        ...responsiveFontSizes({ sm: 26, md: 26, lg: 28 })
    },
    h4: {
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 23, md: 23, lg: 23 })
    },
    h5: {
        fontWeight: 600,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 })
    },
    h6: {
        fontWeight: 600,
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
    },
    subtitle1: {
        fontWeight: 600,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        fontSize: pxToRem(14)
    },
    body1: {
        fontSize: pxToRem(16)
    },
    body2: {
        fontSize: pxToRem(14)
    },
    caption: {
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 500,
        fontSize: pxToRem(12),
        textTransform: 'uppercase'
    },
    button: {
        fontWeight: 700,
        fontSize: pxToRem(14),
        textTransform: 'capitalize'
    }
};

export default typography;
