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
                onFocus={props.onFocus}
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

    /* Content */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,

    /* Is editing value disabled */
    disabled: PropTypes.bool,

    /* Label in the list item */
    label: PropTypes.string,

    /* Editable value in the list item */
    description: PropTypes.description,
    
    /* On focus of the editable field */
    onFocus: PropTypes.func,

    /* On blur of the editable field */
    onBlur: PropTypes.func,

    /* When editable field changes */
    onChangeDescription: PropTypes.func,
};

export default ListItem;
