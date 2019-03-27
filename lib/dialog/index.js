import { PureComponent } from 'react';
import { createStyledComponent } from 'react-native-component-styler';
import style from './style';
import BareDialogView from './Dialog';

const DialogView = createStyledComponent(
    ['DEFAULT', 'OPEN'],
    style,
    BareDialogView
);

/**
 * <Dialog />
 */
class Dialog extends PureComponent {
    constructor() {
        super();

        this.methods = {
            onHide: this.hide.bind(this)
        };
    }

    componentWillMount() {
        this.setState({ show: !!this.props.show });

        if (typeof this.props.onShow === 'function') {
            this.props.onShow();
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.show !== this.state.props) {
            this.setState({ show: newProps.show });
        }

        if (newProps.show && typeof this.props.onShow === 'function') {
            this.props.onShow();
        }
    }

    hide() {
        this.setState({ show: false });

        if (typeof this.props.onHide === 'function') {
            this.props.onHide();
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }

        return DialogView({ ...this.props, ...this.state, ...this.methods });
    }
}

export default Dialog;
