import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './Main';

const LoginRoutes = () => {
    return (
        <NavigationContainer>
            <MainRoutes />
        </NavigationContainer>
    );
};

export default LoginRoutes;