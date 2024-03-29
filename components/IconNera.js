import React from 'react';
import { Image, StyleSheet } from 'react-native';

const IconNera = ({ source }) => {
    return (
        <Image
            source={require('../assets/icone.png')}
            style={styles.image}
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
});

export default IconNera;