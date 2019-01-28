import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, Dimensions } from 'react-native';
import { createStyledComponent } from 'react-native-component-styler';
import BareStepperView from './StepperView';
import style from './style.json';

const StepperView = createStyledComponent(
    ['DEFAULT', 'BLEED'],
    style,
    BareStepperView
);


/**
 * Stepper
 *  Animation components should be immediate child
 * 
 * ```jsx
 * <Stepper></Stepper>
 * ```
 */
class Stepper extends PureComponent {
    constructor() {
        super();

        this.methods = { 
            attachScrollView: this.attachScrollView.bind(this),
            handleScrollStart: this.handleScrollStart.bind(this),
            handleScrollEnd: this.handleScrollEnd.bind(this),
            handleAddAnimationComponentForIndex: this.handleAddAnimationComponentForIndex.bind(this)
        };
    }

    componentWillMount() {
        this.animationComponents = {};
        this.setState({ index: 0 });
    }

    attachScrollView(scrollView) {
        this.scrollView = scrollView;
    }

    goToStep(index) {
        // Todo: test on android
        if (this.scrollView && typeof this.scrollView.scrollTo === 'function') {
            this.scrollView.scrollTo({x: index * Dimensions.get('window').width, y: 0, animated: true});
        }
    }

    handleAddAnimationComponentForIndex(index, component) {
        this.animationComponents[index] = component;
    }

    handleScrollStart(eventData) {
        Object.keys(this.animationComponents).forEach(key => {
            if (
                this.animationComponents[key] &&
                typeof this.animationComponents[key].hideHalfway === 'function'
            ) {
                this.animationComponents[key].hideHalfway();
            }
        });
    }

    handleScrollEnd(eventData) {
        const { width } = Dimensions.get('window');
        const index = Platform.OS === 'android' ?
            eventData.nativeEvent.position + Math.round(eventData.nativeEvent.offset) :
            Math.round(eventData.nativeEvent.contentOffset.x / width);

        if (index !== this.state.index) {
            this.setState({ index });
        }

        Object.keys(this.animationComponents).forEach(key => {
            if (
                this.animationComponents[key] &&
                typeof this.animationComponents[key].show === 'function'
            ) {
                this.animationComponents[key].show();
            }
        });
    }

    render() {
        return StepperView({ ...this.props, ...this.methods });
    }
}



Stepper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Stepper;
