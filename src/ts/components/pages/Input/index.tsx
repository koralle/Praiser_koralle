import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const Input = () => {
    return (
        <View style={styles.container}>
            <Text>Input</Text>
        </View>
    );
};

export default Input;