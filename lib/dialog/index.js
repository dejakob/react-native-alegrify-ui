import { PureComponent } from 'react';
import { Animated, Dimensions } from 'react-native';
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
            onHide: this.hide.bind(this),
            onScroll: this.handleScroll.bind(this),
        };

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    componentWillMount() {
        this.setState({
            show: false,

            opacity: new Animated.Value(0),
            crossOpacity: new Animated.Value(0),
            translate: new Animated.Value(400)
        });
    }

    componentDidMount() {
        if (this.props.show) {
            this.show();
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.show && newProps.show !== this.state.props) {
            this.show();
        }
    }

    show() {
        this.setState({
            show: true
        });

        setTimeout(() => {
            const opacityAnimation = Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            });
            const translateAnimation = Animated.timing(this.state.translate, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true
            });
            const crossAnimation = Animated.timing(this.state.crossOpacity, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true
            });
    
            Animated.sequence([
                Animated.parallel([
                    opacityAnimation,
                    translateAnimation
                ]),
                crossAnimation
            ])
            .start(() => {
                if (typeof this.props.onShow === 'function') {
                    this.props.onShow();
                }
            });
        });
    }

    hide() {
        const opacityAnimation = Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        });
        const translateAnimation = Animated.timing(this.state.translate, {
            toValue: 400,
            duration: 400,
            useNativeDriver: true
        });
        const crossAnimation = Animated.timing(this.state.crossOpacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        });

        Animated.sequence([
            Animated.parallel([
                translateAnimation,
                crossAnimation
            ]),
            opacityAnimation,
        ])
        .start(() => {
            this.setState({ show: false });

            if (typeof this.props.onHide === 'function') {
                this.props.onHide();
            }
        });
    }

    handleScroll(eventData) {
        if (eventData.nativeEvent.contentOffset.y < -0.1 * Dimensions.get('window').height) {
            this.hide();
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
