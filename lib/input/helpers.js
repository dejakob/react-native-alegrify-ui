import INPUT_CONFIG from 'config.json';

const { INPUT_TYPES } = INPUT_CONFIG;

function getTextContentTypeFromInputType(inputType) {
    switch (inputType) {
        case INPUT_TYPES.EMAIL:
            return 'emailAddress';
        case INPUT_TYPES.PHONE:
            return 'telephoneNumber';
        case INPUT_TYPES.PASSWORD:
            return 'password';
        default:
            return 'none';
    }
}

function getKeyboardTypeFromInputType(inputType) {
    switch (inputType) {
        case INPUT_TYPES.EMAIL:
            return 'email-address';
        case INPUT_TYPES.PHONE:
            return 'phone-pad';
        case INPUT_TYPES.NUMBER:
            return 'numeric';
        default:
            return 'default';
    }
}

export {
    getTextContentTypeFromInputType,
    getKeyboardTypeFromInputType
};
