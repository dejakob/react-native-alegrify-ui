import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

/**
 * Emoji
 * 
 * ```jsx
 * <Emoji>👊</Emoji>
 * ```
 */
function Emoji(props, s) {
    return (
        <Text
            style={s('Text')}
        >
            {props.children}
        </Text>
    );
}

Emoji.propTypes = {

    /**
     * Should be an emoji
     */
    children: PropTypes.string.isRequired
};

export default Emoji;
