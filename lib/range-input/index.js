import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PanResponder } from 'react-native';
import { createStyledComponent } from 'react-native-component-styler';
import BareRangeInputView from './RangeInput';
import style from './style.json';

const RangeInputView = createStyledComponent(
    ['DEFAULT'],
    style,
    BareRangeInputView
);

class RangeInput extends PureComponent {
    constructor() {
        super();

        this.attachContainerRef = this.attachContainerRef.bind(this);
        this.attachThumbRef = this.attachThumbRef.bind(this);
        this.handleThumbMove = this.handleThumbMove.bind(this);
        this.moveThumbBasedOnValue = this.moveThumbBasedOnValue.bind(this);
    }

    componentWillMount() {
        this.setState({
            thumbPosition: 0,
            value: this.props.value
        });

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderStart: (eventData) => {
                if (typeof this.props.onSlidingStart === 'function') {
                    this.props.onSlidingStart();
                }

                this.handleThumbMove(eventData)
            },
            onPanResponderMove: this.handleThumbMove,
            onPanResponderEnd: () => {
                if (typeof this.props.onSlidingComplete === 'function') {
                    this.props.onSlidingComplete();
                }
            }
        });
    }

    componentWillUpdate(nextProps) {
        if (
            nextProps.value !== this.state.value &&
            typeof this.props.onValueChange === 'function'
        ) {
            this.moveThumbBasedOnValue(nextProps.value);
        }
    }

    attachContainerRef(container) {
        this.container = container;
        this.moveThumbBasedOnValue(this.props.value);
    }

    attachThumbRef(thumb) {
        this.thumb = thumb;
    }

    handleThumbMove(eventData) {
        const pageX = eventData.nativeEvent.pageX;
        const { minimumValue, maximumValue } = this.props;

        if (
            typeof this.containerWidth === 'number' &&
            typeof this.containerPageX === 'number'
        ) {
            const locationX = pageX - this.containerPageX;
            const percentage = Math.max(Math.min(locationX / this.containerWidth, 1), 0);
            const value = minimumValue + (maximumValue - minimumValue) * percentage;

            this.setState({
                thumbPosition: percentage * this.containerWidth,
                value
            });

            if (typeof this.props.onValueChange === 'function') {
                this.props.onValueChange(value);
            }
        }
    }

    moveThumbBasedOnValue(value) {
        const percentage = (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue);

        if (this.containerWidth > 0) {
            this.setState({
                thumbPosition: percentage * this.containerWidth,
                value
            });
        }
        else if (this.container) {
            this.container.measure((x, y, width, height, pageX) => {
                this.containerWidth = width;
                this.containerPageX = pageX;
                this.moveThumbBasedOnValue(value);
            });
        }
    }

    render() {
        return RangeInputView({
            ...this.props,
            ...this.state,
            panResponder: this.panResponder,
            attachContainerRef: this.attachContainerRef,
            attachThumbRef: this.attachThumbRef,
        });
    }
}

RangeInput.defaultProps = {
    minimumValue: 1,
    maximumValue: 10,
    value: 5,
}
RangeInput.propTypes = {
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    value: PropTypes.number,
    onValueChange: PropTypes.func,
    onSlidingStart: PropTypes.func,
    onSlidingComplete: PropTypes.func
};

export default RangeInput;
