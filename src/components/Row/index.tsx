import React from "react";
import { View } from "react-native";
import customStyles from "./styles";

const Row = ({ children }: any) => {
    const styles = customStyles();

    return <React.Fragment>
        <View style={styles.row}>
            {children}
        </View>
    </React.Fragment >
}

export default Row