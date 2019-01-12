import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

/**
 * Form
 * 
 * ```jsx
 * <Form></Form>
 * ```
 */
function Form(props, s) {
    return (
        <KeyboardAvoidingView 
            style={s('Keyboard')}
            behavior="padding"
            enabled
        >
            <ScrollView
                style={s('Scroll')}
                contentContainerStyle={s('ScrollContent')}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="on-drag"
            >
                {props.children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Form;
