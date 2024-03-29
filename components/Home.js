import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  BottomMenuTeacher from './MenuTeacher'; // Importe o componente BottomMenu


const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Conteúdo da tela Home</Text>
            {/* Renderize o componente BottomMenuTeacher */}
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;
