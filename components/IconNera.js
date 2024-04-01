// IconNera.js

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const IconNera = () => {
    return (
        <Image
            source={require('../assets/Icone.png')}
            style={styles.image}
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 56,
        marginTop: 10, // Defina a margem somente na parte superior
        alignSelf: 'center', // Centralize o ícone horizontalmente
    },
});

export default IconNera;
