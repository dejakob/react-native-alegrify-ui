import React from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity } from 'react-native';

function Dialog(props, s) {
    return (
        <KeyboardAvoidingView
            style={s('Dialog')}
            behavior="padding"
            enabled
        >
            <ScrollView
                style={s('DialogScroll')}
                contentContainerStyle={s('DialogScrollContainerContent')}
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
            </ScrollView>
        </KeyboardAvoidingView>
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
