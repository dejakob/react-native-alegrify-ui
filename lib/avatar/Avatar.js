import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

/**
 * <Avatar />
 * 
 * ```jsx
 * <Avatar
 *   uri="https://source.unsplash.com/random/100x100"
 *   xs
 * />
 * ```
 */
function Avatar(props, s) {
    return (
        <View
            style={s('Container')}
            testID={props.testID}
        >
            <Image
                source={{ uri: props.uri }}
                style={s('Image')}
            />
        </View>
    );
}

Avatar.propTypes = {
    uri: PropTypes.string
}

export default Avatar;
