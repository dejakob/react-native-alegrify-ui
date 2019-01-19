import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Input from '../input';

/**
 * <ListItem />
 * ```jsx
 * <ListItem>
 * 
 * </ListItem>
 * ```
 */
function ListItem(props, s) {
    if (typeof props.onPress === 'function') {
        return (
            <TouchableOpacity
                onPress={props.onPress}
            >
                {ListItemContent(props, s)}
            </TouchableOpacity>
        )
    }

    return ListItemContent(props, s);
}

function ListItemContent(props, s) {
    return (
        <View
            style={s('Container')}
        >
            {ListItemDescription(props, s)}
            
            {props.children}
        </View>
    );
}

function ListItemDescription(props, s) {
    if (typeof props.onChangeDescription === 'function') {
        return(
            <Input
                value={props.description}
                onChangeText={props.onChangeDescription}
                onBlur={props.onBlur}
                disabled={props.disabled}
                label={props.label}
                text
            />
        );
    }

    if (typeof props.description === 'string' && props.description.length) {
        return (
            <Text
                style={s('Description')}
            >
                {props.description}
            </Text>
        );
    }

    return null;
}

ListItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onChangeDescription: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool
};

export default ListItem;
