import { createStyledComponent } from 'react-native-component-styler';
import CenterView from './Center';
import style from './style';

const Center = createStyledComponent(
    ['DEFAULT', 'HORIZONTAL', 'VERTICAL'],
    style,
    CenterView
);

export default Center;
