import { Dimensions, StyleSheet } from 'react-native';

const customStyles = () => StyleSheet.create({
    sectionHeader: {
        marginTop: 40,
        marginBottom: 0,
        marginHorizontal: 20,
    },
    sectionText: {
        marginVertical: 5,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
        fontWeight: "600"
    },
    sectionButton: {
        marginVertical: 10,
        marginHorizontal: 20,
        marginTop:40
    },
});

export default customStyles