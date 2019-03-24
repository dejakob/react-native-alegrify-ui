import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { COLORS } from '../config';

/**
 * TabBar
 * 
 * ```jsx
 * <TabBar
 *   items={[
 *     { icon: <Component />, onPress: () => {} },
 *     { icon: <Component />, onPress: () => {} }
 *   ]}
 * />
 * ```
 */
function TabBar(props, s) {
    const iconSize = Math.round(StyleSheet.flatten(s('Item')[0]).height * 0.4);
    const iconColor = COLORS.navInactiveItem;
    const activeIconColor = COLORS.navActiveItem;

    return (
        <React.Fragment>
            <View
                style={s('Placeholder')}
            />
            <View
                style={s('Container')}
            >
                {props.items.map((item, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={item.onPress}
                    >
                        <View
                            style={s('Item')}
                        >
                            {React.cloneElement(item.icon, {
                                height: iconSize,
                                width: iconSize,
                                color: item.isActive ? activeIconColor : iconColor
                            })}
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        </React.Fragment>
    );
}

TabBar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.node,
            onPress: PropTypes.func,
            isActive: PropTypes.bool
        })
    ).isRequired
};

export default TabBar;
