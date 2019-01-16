
import { createStyledComponent } from 'react-native-component-styler';
import AvatarView from './Avatar';
import style from './style.json';

const Avatar = createStyledComponent(
    ['DEFAULT', 'XS', 'S', 'L', 'XL', 'LOADING'],
    style,
    AvatarView
);

export default Avatar;
