import { createStyledComponent } from 'react-native-component-styler';
import BottomActionView from './BottomAction';
import style from './style.json';

const BottomAction = createStyledComponent(
    ['DEFAULT'],
    style,
    BottomActionView
);

export default BottomAction;
