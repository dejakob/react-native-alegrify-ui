import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { LinearGradient, Stop, Svg, Defs, Rect } from 'react-native-svg';
import { COLORS } from '../config';

/**
 * BackgroundGradient
 * 
 * @requires react-native-svg [Important: React native SVG needs to be linked]
 * 
 * ```jsx
 * <BackgroundGradient>
 *     <View />
 * </BackgroundGradient>
 * ```
 */
function BackgroundGradient(props, s) {
    return (
        <View
            style={s('Container')}
        >
            <Svg
                style={s('Gradient')}
                height={Dimensions.get('window').height}
                width={Dimensions.get('window').width}
            >
                <Defs>
                    <LinearGradient
                        id="Gradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="100%"
                    >
                        <Stop offset="0" stopColor={props.from || COLORS.primary} stopOpacity="0.9" />
                        <Stop offset="1" stopColor={props.to || COLORS.body} stopOpacity="0.9" />
                    </LinearGradient>
                </Defs>
                <Rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill="url(#Gradient)"
                />
            </Svg>

            <View
                style={s('Content')}
            >
                {props.children}
            </View>
        </View>
    );
}

BackgroundGradient.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    from: PropTypes.string,
    to: PropTypes.string
};

export default BackgroundGradient;