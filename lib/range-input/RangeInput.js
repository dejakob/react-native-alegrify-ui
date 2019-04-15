import React from 'react';
import { View } from 'react-native';

function RangeInput(props, s) {
    return (
        <View
            style={s('Container')}
            ref={props.attachContainerRef}
            testID={props.testID}
            collapsable={false}
            {...props.panResponder.panHandlers}
        >
            <View
                style={s('Bar')}
            />
            <View
                style={[
                    s('Thumb'),
                    { transform: [{ translateX: props.thumbPosition }] },
                    {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }
                ]}
                ref={props.attachThumbRef}
            />
        </View>
    );
}

export default RangeInput;
