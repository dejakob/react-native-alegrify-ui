import { createStyledComponent } from 'react-native-component-styler';
import SegmentedControlView from './SegmentedControl';
import style from './style.json';

const SegmentedControl = createStyledComponent(
    ['DEFAULT'],
    style,
    SegmentedControlView
);

export default SegmentedControl;
