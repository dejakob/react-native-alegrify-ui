import { createStyledComponent } from 'react-native-component-styler';
import TabBarView from './TabBar';
import style from './style.json';

const TabBar = createStyledComponent(
    ['DEFAULT'],
    style,
    TabBarView
);

export default TabBar;
