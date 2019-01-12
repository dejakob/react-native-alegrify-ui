import { createStyledComponent } from 'react-native-component-styler';
import PaddingView from './Padding';
import style from './style.json';

const Padding = createStyledComponent(
    ['DEFAULT', 'XS', 'S', 'M', 'L', 'XL'],
    style,
    PaddingView
);

export default Padding;
