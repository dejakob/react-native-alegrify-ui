import { createStyledComponent } from 'react-native-component-styler';
import ButtonView from './Button';
import style from './style.json';

const Button = createStyledComponent(
    ['DEFAULT', 'PRIMARY', 'FULL', 'LINK', 'BORDER', 'DISABLED'],
    style,
    ButtonView
);

export default Button;
