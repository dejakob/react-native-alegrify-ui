import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

function Dialog(props, s) {
    return (
        <View
            style={s('Dialog')}
        >
            <View
                style={s('DialogCrossAlign')}
            >
                <TouchableOpacity
                    onPress={props.onHide}
                >
                    <View
                        style={s('DialogCross')}
                    >
                        <Text
                            style={s('DialogCrossText')}
                        >
                            ╳
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={s('DialogContent')}
            >
                {props.children}
            </View>
        </View>
    );
}

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    open: PropTypes.bool,
    onHide: PropTypes.bool
};

export default Dialog;
