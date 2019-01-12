import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

function Center(props, s) {
    return (
        <View
            style={s('Container')}
        >
            {props.children}
        </View>
    );
}

Center.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Center;
