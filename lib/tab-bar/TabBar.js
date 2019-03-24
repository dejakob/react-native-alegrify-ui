import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TabBarItem from '../tab-bar-item';

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
    return (
        <React.Fragment>
            <View
                style={s('Placeholder')}
            />
            <View
                style={s('Container')}
            >
                {props.items.map((item, index) => (
                    <TabBarItem
                        key={index}
                        {...item}
                    />
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
            active: PropTypes.bool,
            primary: PropTypes.bool
        })
    ).isRequired
};

export default TabBar;
