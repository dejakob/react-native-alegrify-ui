import { createTheme } from 'react-native-styler';
import { addGlobalContainerVariants } from 'react-native-component-styler';

const COLORS = {
    primary: '#4e4cc1',
    secondary: '#953495',
    body: '#000000',
    action: '#ffffff',
    error: '#900505',
    nav: '#333333',
    inactive: '#cccccc'
};
const SPACING = {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
};
const FONT_SIZES = {
    xxs: '8h4s',
    xs: '11h4s',
    s: '13h4s',
    m: '16h4s',
    l: '20h4s',
    xl: '24h4s',
    xxl: '32h4s'
};

createTheme({
    colors: COLORS,
    spacing: SPACING,
    fontSizes: FONT_SIZES
});

addGlobalContainerVariants({
    spaceXS: { marginBottom: `${SPACING.xs}h4s` },
    spaceS: { marginBottom: `${SPACING.s}h4s` },
    spaceM: { marginBottom: `${SPACING.m}h4s` },
    spaceL: { marginBottom: `${SPACING.l}h4s` },
    spaceXL: { marginBottom: `${SPACING.xl}h4s` },
});

export {
    COLORS,
    SPACING,
    FONT_SIZES
};
