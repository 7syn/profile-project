import React, { Fragment } from 'react';
import type { PropsWithChildren } from 'react';
import { StatusBar } from "react-native";
import { PRIMARY_COLOR } from '../../constants';
import Container from '../Container';

type propsType = PropsWithChildren<{
    children: React.ReactNode;
    isLogin?: boolean;
    isDarkMode?: boolean;
}>;

const NonAuthLayout = ({ children, isLogin = false, isDarkMode = false }: propsType) => {
    return (
        <Fragment>
            <StatusBar
                backgroundColor={PRIMARY_COLOR}
            />
            <Container isDarkMode={isDarkMode}>
                {children}
            </Container>
        </Fragment>
    );
}

export default NonAuthLayout;