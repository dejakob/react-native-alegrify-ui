import { createStyledComponent } from 'react-native-component-styler';
import BoxParagraphView from './BoxParagraph';
import style from './style.json';

const BoxParagraph = createStyledComponent(
    ['DEFAULT'],
    style,
    BoxParagraphView
);

export default BoxParagraph;
