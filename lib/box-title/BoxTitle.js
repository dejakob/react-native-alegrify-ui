import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * BoxTitle
 * 
 * ```jsx
 * <BoxTitle>Some title</BoxTitle>
 * ```
 */
function BoxTitle(props, s) {
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

BoxTitle.propTypes = {
    children: PropTypes.string.isRequired
};

export default BoxTitle;
