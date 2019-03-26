import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStyledComponent } from 'react-native-component-styler';
import style from './style.json';

/**
 * <SegmentedControl />
 * @param {Object} props 
 * @param {Function} s 
 */
function SegmentedControl(props, s) {
    return (
        <View
            style={s('SegmentedControl')}
        >
            {props.items.map((item, index) => 
                SegmentedControlItem({
                    ...props,
                    item,
                    index, 
                    separated: index > 0,
                    active: item === props.active
                }))
            }
        </View>
    
    );
}

const SegmentedControlItem = createStyledComponent(
    ['DEFAULT', 'SEPARATED', 'ACTIVE'],
    style,
    SegmentedControlItemView
);


function SegmentedControlItemView(props, s) {
    const { item, index } = props;
    let Content = null;

    if (typeof item === 'string') {
        Content = <Text>{item}</Text>
    }
    else {
        Content = item;
    }

    return (
        <View
            style={s('SegmentedControlItem')}
        >
            <TouchableOpacity
                onPress={() => props.onItemPress(item)}
                style={s('SegmentedControlItemTouch')}
                disabled={props.active}
            >
                <View
                    key={index}
                    style={s('SegmentedControlItemTouchContent')}
                >
                    {Content}
                </View>
            </TouchableOpacity>
        </View>
    );
}

SegmentedControl.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    ).isRequired
};

export default SegmentedControl;
