import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

/**
 * <ButtonAction />
 * 
 * ```jsx
 * <BottomAction
 *   action={<Button />}
 * >
 *     <View />
 * </BottomAction>
 * ```
 */
function BottomAction(props, s) {
    return (
        <View
            style={s('Container')}
        >
            <View
                style={s('Content')}
            >
                {props.children}
            </View>
            <View
                style={s('Footer')}
            >
                {props.action}
            </View>
        </View>
    );
}

BottomAction.propTypes = {
    action: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default BottomAction;
