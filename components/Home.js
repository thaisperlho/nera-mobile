import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconNera from './IconNera'; // Importe o componente IconNera
import BottomMenuTeacher from './MenuTeacher'; // Importe o componente BottomMenu

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>
            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F6F7FF',
    },
    topIcon: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 50
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;
