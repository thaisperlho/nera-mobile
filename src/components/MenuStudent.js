import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import profileIcon from '../assets/profileIcon.png'; 
import homeIcon from '../assets/home.png'; 

const BottomMenuStudent = () => {
    const navigation = useNavigation();

    const goToStudentProfile = () => {
        navigation.navigate('StudentProfile');
    };

    const goToHomeStudent = () => {
        navigation.navigate('HomeStudent');
    };

    const getIconStyle = (routeName) => {
        return {
            ...styles.icon,
            tintColor: navigation.getState().routes[navigation.getState().index].name === routeName ? '#F20574' : '#135794',
        };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToHomeStudent}>
                <Image source={homeIcon} style={getIconStyle('HomeStudent')} />
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.button} onPress={goToStudentProfile}>
                <Image source={profileIcon} style={getIconStyle('StudentProfile')} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    button: {
        alignItems: 'center',
    },

    icon: {
        width: 28,
        height: 30,
    },
});

export default BottomMenuStudent;
