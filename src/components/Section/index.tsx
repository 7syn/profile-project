import React from 'react';
import type { PropsWithChildren } from 'react';
import { View } from "react-native";

type propsType = PropsWithChildren<{
    children: React.ReactNode;
    style?: any;
}>;

const Section = ({ children, style = null }: propsType) => {
    return (
        <View style={[style]}>
            {children}
        </View>
    );
}

export default Section;