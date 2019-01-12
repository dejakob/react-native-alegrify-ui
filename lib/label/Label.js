import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Label
 * 
 * ```jsx
 * <Label>Some text</Label>
 * ```
 */
function Label(props, s) {
    return (
        <Text
            style={s('Text')}
        >
            {props.children}
        </Text>
    )
}

Label.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Label;
