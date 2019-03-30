import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

/**
 * Form
 * 
 * ```jsx
 * <Form></Form>
 * ```
 */
function Form(props, s) {
    if (Platform.OS === 'android') {
        return FormContent(props, s);
    }
    
    return (
        <KeyboardAvoidingView 
            style={s('Keyboard')}
            behavior="padding"
            enabled
        >
            {FormContent(props, s)}
        </KeyboardAvoidingView>
    );
}

function FormContent(props, s) {
    return (
        <ScrollView
            style={s('Scroll')}
            contentContainerStyle={s('ScrollContent')}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            bounces={props.bounces}
        >
            {props.children}
        </ScrollView>
    )
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    bounces: PropTypes.bool
};

export default Form;
