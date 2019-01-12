import { createStyledComponent } from 'react-native-component-styler';
import BoxView from './Box';
import style from './style';

const Box = createStyledComponent(
    ['DEFAULT', 'EMOJI', 'ACTION', 'FULL'],
    style,
    BoxView
);

export default Box;
