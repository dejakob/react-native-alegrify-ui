import { PureComponent } from 'react';
import { createStyledComponent } from 'react-native-component-styler';
import PropTypes from 'prop-types';
import BareInputView from './InputView';
import INPUT_CONFIG from './config.json';
import style from './style';

const { INPUT_TYPES, INPUT_VARIANTS } = INPUT_CONFIG;

const InputView = createStyledComponent(
    INPUT_VARIANTS,
    style,
    BareInputView
);

/**
 * <Input />
 * 
 * ```jsx
 * <Input
 *   value="test"
 *   onChangeText={value => {}}
 * />
 * ```
 */
class Input extends PureComponent {
    constructor() {
        super();

        this.methods = {
            onBlur: this.handleBlur.bind(this),
            onFocus: this.handleFocus.bind(this)
        };
    }

    componentWillMount() {
        this.setState({
            focus: false
        });
    }

    handleBlur(event) {
        this.setState({
            focus: false
        });

        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(event);
        }
    }

    handleFocus(event) {
        this.setState({
            focus: true
        });

        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus(event);
        }
    }

    render() {
        return InputView({ ...this.props, ...this.state, ...this.methods });
    }
}

Input.TYPES = INPUT_TYPES;
Input.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    multiline: PropTypes.bool,

    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    onValueChange: PropTypes.func,
    onFocus: PropTypes.func,

    error: PropTypes.string
};

export default Input;
