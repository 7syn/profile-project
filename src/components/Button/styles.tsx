import { StyleSheet } from 'react-native';
import { LIGHT_COLOR } from '../../constants';

const customStyles = () => StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    textButton: {
        textAlign: "center",
        color: LIGHT_COLOR,
        fontSize: 16
    }
});

export default customStyles