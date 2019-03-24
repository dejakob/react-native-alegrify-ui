import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../config';

const ICON_COLOR = COLORS.navInactiveItem;
const ACTIVE_ICON_COLOR = COLORS.navActiveItem;

/**
 * <TabBarItem />
 * @param {Object} props 
 * @param {Function} s
 */
function TabBarItem(props, s) {
    const iconSize = Math.round(StyleSheet.flatten(s('ItemContainer')[0]).height * 0.4);

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={s('ItemTouch')}
        >
            <View
                style={s('ItemContainer')}
            >
                {React.cloneElement(props.icon, {
                    height: iconSize,
                    width: iconSize,
                    color: props.active ? ACTIVE_ICON_COLOR : ICON_COLOR
                })}
            </View>
        </TouchableOpacity>
    );
}

TabBarItem.propTypes = {
    active: PropTypes.bool,
    primary: PropTypes.bool,
    icon: PropTypes.node,
    onPress: PropTypes.func,
};

export default TabBarItem;
