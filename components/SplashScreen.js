import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import IconNera from './IconNera'; // Importe o componente IconNera

const SplashScreen = ({ navigation }) => {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const rotateAnimation = Animated.timing(rotation, {
            toValue: 1,
            duration: 3000, // Duração da animação de rotação (milisegundos)
            easing: Easing.linear,
            useNativeDriver: true,
        });

        rotateAnimation.start(() => {
            // Navega para a próxima tela após o término da animação
            navigation.replace('Home');
        });

        return () => {
            rotateAnimation.stop();
        };
    }, [navigation, rotation]);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'], // Girar para a esquerda
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <View style={[styles.container, styles.whiteBackground]}>
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
                <IconNera />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteBackground: {
        backgroundColor: 'white',
    },
    imageContainer: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
