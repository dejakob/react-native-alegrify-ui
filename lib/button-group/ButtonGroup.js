import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

/**
 * <ButtonGroup />
 * 
 * ```jsx
 * <ButtonGroup>
 *   <Button />
 *   <Button />
 * </ButtonGroup>
 * ```
 */
function ButtonGroup(props, s) {
    return (
        <View
            style={s('Container')}
        >
            {props.children}
        </View>
    )
}

ButtonGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ButtonGroup;
