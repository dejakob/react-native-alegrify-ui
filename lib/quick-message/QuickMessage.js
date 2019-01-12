import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Quick message
 * 
 * ```jsx
 * <QuickMessage>some text</QuickMessage>
 * ```
 */
function QuickMessage(props, s) {
    return (
        <View
            style={s('Container')}
        >
            <Text
                style={s('Text')}
            >
                {props.children}
            </Text>
        </View>
    );
}

QuickMessage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default QuickMessage;
