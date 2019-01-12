import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Padding
 * 
 * ```jsx
 * <Padding></Padding>
 * ```
 */
function Padding(props, s) {
    return (
        <View
            style={s('Container')}
        >
            {props.children}
        </View>
    );
}

Padding.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Padding;
