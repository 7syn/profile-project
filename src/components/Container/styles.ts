import { StyleSheet } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants';

const customStyles = (isDarkMode: boolean = false) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    },
    text: {
        color: isDarkMode ? LIGHT_COLOR : DARK_COLOR
    }
});

export default customStyles