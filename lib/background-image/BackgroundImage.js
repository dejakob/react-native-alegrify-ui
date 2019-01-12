import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * BackgroundImage
 * 
 * ```jsx
 * <BackgroundImage
 *   source={require('image.jpg')}
 * >
 *     <View />
 * </BackgroundImage>
 * ```
 */
function BackgroundImage(props, s) {
    return (
        <View
            style={s('Container')}
        >
            <Image
                source={props.source}
                style={s('Image')}
                resizeMode="cover"
            />
            {props.children}
        </View>
    );
}

BackgroundImage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    source: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ])
};

export default BackgroundImage;
