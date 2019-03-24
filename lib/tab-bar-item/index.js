import { createStyledComponent } from 'react-native-component-styler';
import TabBarView from './TabBarItem';
import style from './style.json';

const TabBarItem = createStyledComponent(
    ['DEFAULT', 'ACTIVE', 'PRIMARY'],
    style,
    TabBarView
);

export default TabBarItem;
