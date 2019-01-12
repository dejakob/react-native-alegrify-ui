import { createStyledComponent } from 'react-native-component-styler';
import LabelView from './Label';
import style from './style.json';

const Label = createStyledComponent(
    ['DEFAULT', 'ERROR'],
    style,
    LabelView
);

export default Label;
