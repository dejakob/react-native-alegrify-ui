import { createStyledComponent } from 'react-native-component-styler';
import BoxTitleView from './BoxTitle';
import style from './style.json';

const BoxTitle = createStyledComponent(
    ['DEFAULT'],
    style,
    BoxTitleView
);

export default BoxTitle;
