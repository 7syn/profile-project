import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import customStyles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PRIMARY_COLOR } from "../../constants";

const Button = ({ title, onPress, disabled = false, backgroundColor = null, isLoading = false }: any) => {
    const styles = customStyles();

    return <React.Fragment>
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.button, { backgroundColor: backgroundColor ? backgroundColor : PRIMARY_COLOR }]}>

            {
                isLoading
                    ? <ActivityIndicator color={'#fff'} />
                    : <Text style={styles.textButton}>{title}</Text>
            }
        </TouchableOpacity>
    </React.Fragment >
}

export default Button