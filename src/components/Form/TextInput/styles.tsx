import { Dimensions, StyleSheet } from 'react-native';
import { GREY_COLOR, RED_COLOR } from '../../../constants';

const customStyles = () => StyleSheet.create({
    label: {
        marginVertical: 5
    },
    mandatory: {
        color: RED_COLOR
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: GREY_COLOR
    },
    textError: {
        marginTop: 5,
        color: RED_COLOR
    }
});

export default customStyles