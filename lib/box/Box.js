import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Emoji from '../emoji';

/**
 * Box
 * 
 * ```jsx
 * <Box></Box>
 * ```
 */
function Box(props, s) {
    const bottomSlop = StyleSheet.flatten(s('Flatten')).paddingBottom;

    return (
        <View
            style={s('Container')}
            hitSlop={{ top: 0, bottom: bottomSlop, left: 0, right: 0 }}
        >
            {props.emoji ? (
                <View
                    style={s('EmojiContainer')}
                >
                    <Emoji
                        xl
                    >
                        {props.emoji}
                    </Emoji>
                </View>
            ) : null}
            {props.children}
            {props.action ? (
                <View
                    style={s('Action')}
                >
                    {props.action}
                </View>
            ) : null}
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    emoji: PropTypes.string,
    action: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};

export default Box;
