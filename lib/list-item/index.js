import { createStyledComponent } from 'react-native-component-styler';
import ListItemView from './ListItem';
import style from './style.json';

const ListItem = createStyledComponent(
    ['DEFAULT', 'SEPARATOR'],
    style,
    ListItemView
);

export default ListItem;
