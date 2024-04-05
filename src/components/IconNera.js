// IconNera.js

import React from 'react';
import { Image, StyleSheet } from 'react-native';
import icone from '../assets/Icone.png';

const IconNera = () => {
    return (
        <Image
            source={icone}
            style={styles.image}
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 56,
        marginTop: 10, 
        alignSelf: 'center',
    },
});

export default IconNera;
