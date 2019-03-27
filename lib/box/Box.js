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
    const bottomSlop = props.action ? 
        StyleSheet.flatten(s('Container')).paddingBottom :
        0;

    return (
        <View
            style={s('Container')}
            hitSlop={props.action ? { top: 0, bottom: bottomSlop, left: 0, right: 0 } : undefined}
            testID={props.testID}
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
