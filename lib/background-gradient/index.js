import { createStyledComponent } from 'react-native-component-styler';
import BackgroundGradientView from './BackgroundGradient';
import style from './style.json';

const BackgroundGradient = createStyledComponent(
    ['DEFAULT'],
    style,
    BackgroundGradientView
)

export default BackgroundGradient;
