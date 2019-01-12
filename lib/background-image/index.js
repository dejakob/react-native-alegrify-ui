import { createStyledComponent } from 'react-native-component-styler';
import BackgroundImageView from './BackgroundImage';
import style from './style.json';

const BackgroundImage = createStyledComponent(
    ['DEFAULT'],
    style,
    BackgroundImageView
);

export default BackgroundImage;
