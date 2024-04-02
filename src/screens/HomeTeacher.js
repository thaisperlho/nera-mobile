import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconNera from '../components/IconNera';
import BottomMenuTeacher from '../components/MenuTeacher';
import ButtonBlue from '../components/ButtonBlue';

const Home = ({ navigation }) => {
    const handleCreateClassPress = () => {
        navigation.navigate('CreateClass');
    };
    return (
        <View style={styles.page}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>

            <View style={styles.containerMyClassroom}>
                <Text style={styles.titleContainerMyClassroom}>Minhas salas</Text>
                
            </View>

            <View style={styles.containerCreateClassroom}>
                <ButtonBlue onPress={handleCreateClassPress} title="Criar nova sala" />
            </View>
            <BottomMenuTeacher/>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
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

    containerMyClassroom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '30%',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    titleContainerMyClassroom: {
        flex: 1,
        fontSize: 25,
        top: '5%',
        fontWeight: '600',

    },

    containerCreateClassroom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: [{ translateX: '-50%' }],
        width: '80%',
        height: '10%',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    buttonText: {
        fontSize: 16,
        color: 'white',
    },



});

export default Home;
