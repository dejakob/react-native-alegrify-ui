import { createStyledComponent } from 'react-native-component-styler';
import QuickMessageView from './QuickMessage';
import style from './style.json';

const QuickMessage = createStyledComponent(
    ['DEFAULT', 'SMALL'],
    style,
    QuickMessageView
);

export default QuickMessage;
