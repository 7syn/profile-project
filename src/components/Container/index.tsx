import React, { Fragment } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import customStyles from './styles';

type propsType = PropsWithChildren<{
    children: React.ReactNode;
    isDarkMode?: boolean;
}>;

const Container = ({ children, isDarkMode = false }: propsType) => {
    const styles = customStyles(isDarkMode);

    return (
        <Fragment>
            <SafeAreaView
                style={styles.container}
            >
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

export default Container;