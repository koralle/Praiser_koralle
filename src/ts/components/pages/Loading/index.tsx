import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    );
};

export default Loading;
