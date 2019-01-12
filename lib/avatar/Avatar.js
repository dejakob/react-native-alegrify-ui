import React from 'react';
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
        >
            <Image
                source={{ uri: props.uri }}
                style={s('Image')}
            />
        </View>
    );
}

export default Avatar;
