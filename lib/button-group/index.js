import { createStyledComponent } from 'react-native-component-styler';
import ButtonGroupView from './ButtonGroup';
import style from './style.json';

const ButtonGroup = createStyledComponent(
    ['DEFAULT'],
    style,
    ButtonGroupView
);

export default ButtonGroup;
