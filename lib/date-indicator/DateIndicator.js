import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * DateIndicator
 * 
 * ```jsx
 * <DateIndicator
 *   date="2018-12-01T00:00:00"
 * />
 * ```
 */
function DateIndicator(props, s) {
    const month = moment(props.date).format('MMM');
    const day = moment(props.date).format('DD');

    return (
        <View
            style={s('Container')}
            testID={props.testID}
        >
            <View
                style={s('Month')}
            >
                <Text
                    style={s('MonthText')}
                >
                    {month.toUpperCase()}
                </Text>
            </View>
            <View
                style={s('Day')}
            >
                <Text
                    style={s('DayText')}
                >
                    {day}
                </Text>
            </View>
        </View>
    );
}

DateIndicator.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export default DateIndicator;
