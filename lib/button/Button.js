import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

/**
 * <Button />
 * 
 * Regular button
 * 
 * ```jsx
 * <Button
 *   primary
 * >
 *  Hi, I'm a primary button! 🎉
 * </Button>
 * ```
 */
function Button(props, s) {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.onPress}
            onPressIn={props.onPressIn}
            onPressOut={props.onPressOut}
        >
            <View
                style={s('Container')}
            >
                <Text
                    style={s('Text')}
                >
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

Button.propTypes = {

    /**
     * Button text / button content
     */
    children: PropTypes.string.isRequired,

    /**
     * Disabled?
     */
    disabled: PropTypes.bool,

    /**
     * press action
     */
    onPress: PropTypes.func,
    
    /**
     * press in action
     */
    onPressIn: PropTypes.func,

    /**
     * press out action
     */
    onPressOut: PropTypes.func,
};

export default Button;
