import { createStyledComponent } from 'react-native-component-styler';
import FormView from './Form';
import style from './style.json';

const Form = createStyledComponent(
    ['DEFAULT'],
    style,
    FormView
);

export default Form;
