import React from 'react';
import PropTypes from 'prop-types';
import { Animated, View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, Platform } from 'react-native';

function Dialog(props, s) {
    const fadeAnimationStyle = {
        opacity: props.opacity
    };
    const translateAnimationStyle = {
        transform: [{ translateY: props.translate }]
    };
    const crossAnimationStyle = {
        opacity: props.crossOpacity
    };

    const PlatformSpecificKeyboardAvoidingView = Platform.OS === 'ios' ? KeyboardAvoidingView : View;

    return (
        <PlatformSpecificKeyboardAvoidingView
            style={s('Dialog')}
            behavior="padding"
            enabled
            testID={props.testID}
        >
            <Animated.View
                style={[s('DialogBackdrop'), fadeAnimationStyle]}
            />
            <ScrollView
                style={s('DialogScroll')}
                contentContainerStyle={s('DialogScrollContainerContent')}
                onScroll={props.onScroll}
                scrollEventThrottle={8}
            >
                <View
                    style={s('DialogCrossAlign')}
                >
                    <TouchableOpacity
                        onPress={props.onHide}
                        testID={props.hideTestID}
                    >
                        <Animated.View
                            style={[s('DialogCross'), crossAnimationStyle]}
                        >
                            <Text
                                style={s('DialogCrossText')}
                            >
                                ╳
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
                <Animated.View
                    style={[s('DialogContent'), translateAnimationStyle]}
                >
                    {props.children}
                </Animated.View>
            </ScrollView>
        </PlatformSpecificKeyboardAvoidingView>
    );
}

Dialog.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    open: PropTypes.bool,

    onShow: PropTypes.func,
    onHide: PropTypes.func,
};

export default Dialog;
