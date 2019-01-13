import { createStyledComponent } from 'react-native-component-styler';
import EmojiView from './Emoji';
import style from './style.json';

const Emoji = createStyledComponent(
    ['DEFAULT', 'XL'],
    style,
    EmojiView
);

export default Emoji;
