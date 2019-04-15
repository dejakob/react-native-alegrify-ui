import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PanResponder } from 'react-native';
import { getStyle } from 'react-native-styler';
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

        this.THUMB_WIDTH = getStyle(RangeInputView._name + '__Thumb__DEFAULT').width;
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value !== this.state.value && !this.state.isSliding) {
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
        let locationX = eventData.nativeEvent.locationX;
        const { minimumValue, maximumValue } = this.props;

        if (eventData.nativeEvent.target === this.thumb._nativeTag) {
            locationX += (this.state.thumbPosition - this.THUMB_WIDTH);
        }


        if (this.container && typeof this.container.measure === 'function') {
            this.container.measure((x, y, width) => {
                const percentage = Math.max(Math.min(locationX / width, 1), 0);
                const value = minimumValue + (maximumValue - minimumValue) * percentage;

                this.setState({ thumbPosition: percentage * width, value });

                if (typeof this.props.onValueChange === 'function') {
                    this.props.onValueChange(value);
                }
            });
        }
    }

    moveThumbBasedOnValue(value) {
        const percentage = (value - this.props.minimumValue) / (this.props.maximumValue - this.props.minimumValue);

        if (this.container && typeof this.container.measure === 'function') {
            this.container.measure((x, y, width) => {
                this.setState({ thumbPosition: percentage * width, value });
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
