import { createStyledComponent } from 'react-native-component-styler';
import DateIndicatorView from './DateIndicator';
import style from './style.json';

const DateIndicator = createStyledComponent(
    ['DEFAULT'],
    style,
    DateIndicatorView
);

export default DateIndicator;
