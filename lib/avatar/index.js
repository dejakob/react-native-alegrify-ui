import PropTypes from 'prop-types';
import { createStyledComponent } from 'react-native-component-styler';
import AvatarView from './Avatar';
import style from './style.json';

const Avatar = createStyledComponent(
    ['DEFAULT', 'XS', 'S', 'L', 'XL', 'LOADING'],
    style,
    AvatarView
);

Avatar.propTypes = {

    /* Path of avatar to show */
    uri: PropTypes.string.isRequired
}

export default Avatar;
