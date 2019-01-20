import React from 'react';
import { TextInput, View, Slider } from 'react-native';
import { getTextContentTypeFromInputType, getKeyboardTypeFromInputType } from './helpers';
import Label from '../label';
import { COLORS } from '../config';
import INPUT_CONFIG from './config.json';

const { INPUT_TYPES } = INPUT_CONFIG;

function InputView(props, s) {
    return (
        <View
            style={s('Container')}
        >
            {
                props.label ? (
                    <Label>
                        {props.label}
                    </Label>
                ) : null
            }
            {
                props.type === 'range' ? (
                    <Slider
                        minimumValue={1}
                        maximumValue={10}
                        step={1}
                        minimumTrackTintColor={COLORS.primary}
                        maximumTrackTintColor={COLORS.secondary}
                        onValueChange={props.onValueChange}
                        value={props.value}
                    />
                ) : (
                    <TextInput
                        style={s('TextInput')}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        onChangeText={props.onChangeText}
                        autoCapitalize="none"
                        keyboardType={getKeyboardTypeFromInputType(props.type)}
                        textContentType={getTextContentTypeFromInputType(props.type)}
                        secureTextEntry={props.type === INPUT_TYPES.PASSWORD}
                        multiline={props.multiline}
                        value={props.value}
                        underlineColorAndroid="transparent"
                        disableFullscreenUI={false}
                    >
                        {props.children}
                    </TextInput>
                )
            }
            
            {
                props.error ? (
                    <Label
                        error
                    >
                        {props.error}
                    </Label>
                ) : null
            }
        </View>
    )
}

InputView.propTypes = {};

export default InputView;