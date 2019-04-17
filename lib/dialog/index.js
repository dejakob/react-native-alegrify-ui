import { PureComponent } from 'react';
import { Animated, BackHandler, Dimensions, Platform } from 'react-native';
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
        this.handleAndroidBackButton = this.handleAndroidBackButton.bind(this);
    }

    componentWillMount() {
        const screenHeight = Dimensions.get('window').height
        const slideHeight = 0.83 * screenHeight;

        this.setState({
            show: false,
            isHiding: false,
            isShowing: false,

            opacity: new Animated.Value(0),
            crossOpacity: new Animated.Value(0),
            translate: new Animated.Value(slideHeight)
        });

        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.handleAndroidBackButton);
        }
    }

    componentDidMount() {
        if (this.props.show) {
            this.show();
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.show !== this.state.props) {
            if (newProps.show) {
                this.show();
            }
            else {
                this.hide();
            }
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.handleAndroidBackButton);
        }
    }

    show() {
        if (this.state.isShowing) {
            return false;
        }

        this.setState({
            show: true,
            isShowing: true
        });

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
            this.setState({ isShowing: false });

            if (typeof this.props.onShow === 'function') {
                this.props.onShow();
            }
        });
    }

    hide() {
        if (this.state.isHiding) {
            return false;
        }

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

        this.setState({ isHiding: true });

        Animated.sequence([
            Animated.parallel([
                translateAnimation,
                crossAnimation
            ]),
            opacityAnimation,
        ])
        .start(() => {
            this.setState({ show: false, isHiding: false });

            if (typeof this.props.onHide === 'function') {
                this.props.onHide();
            }
        });
    }

    handleAndroidBackButton() {
        if (this.state.show) {
            this.hide();
            return true;
        }
    }

    handleScroll(eventData) {
        if (eventData.nativeEvent.contentOffset.y < -0.1 * Dimensions.get('window').height) {
            this.hide();
        }
    }

    render() {
        if (!this.state.show && !this.state.isHiding) {
            return null;
        }

        return DialogView({ ...this.props, ...this.state, ...this.methods });
    }
}

export default Dialog;
