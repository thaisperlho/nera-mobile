import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomMenuTeacher from './MenuTeacher';
import ButtonBlue from './ButtonBlue';
import IconNera from './IconNera';

const CreateClass = ({ navigation }) => {
    const [className, setClassName] = useState('');
    const [selectedTrail, setSelectedTrail] = useState(false);
    const [selectedModule, setSelectedModule] = useState(false);
    const [classToken, setClassToken] = useState('Token da sala');

    const handleCreateNewClass = () => {
        // Aqui você pode adicionar a lógica para criar a sala com os dados do formulário
        navigation.navigate('CreateNewClass');
    };

    return (
        <View style={styles.page}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>

            <View style={styles.containerCreateClass}>
                <Text style={styles.titleContainerCreateClassroom}>Criar Sala de Aula</Text>
            </View>

            <View>
               <TextInput style={styles.inputsToCreateClassroom}
                    onChangeText={text => setClassName(text)}
                    value={className}
                    placeholder="Digite o Nome da Sala"
                />
            </View>
            <View style={styles.containerCreateClass}>
                <Picker
                    style={styles.inputsToCreateClassroom}
                    selectedValue={selectedTrail}
                    onValueChange={(itemValue, itemIndex) => setSelectedTrail(itemValue)}
                >
                    <Picker.Item label="Selecione a Trilha" value="" />
                    <Picker.Item label="Trilha 1" value="Trilha 1" />
                    <Picker.Item label="Trilha 2" value="Trilha 2" />
                    <Picker.Item label="Trilha 3" value="Trilha 3" />
                </Picker>
            </View>
            <View style={styles.containerCreateClass}>
                <Picker
                    style={styles.inputsToCreateClassroom}
                    selectedValue={selectedModule}
                    onValueChange={(itemValue, itemIndex) => setSelectedModule(itemValue)}
                >
                    <Picker.Item label="Selecione o Módulo>" value="" />
                    <Picker.Item label="Modulo 1" value="Modulo 1" />
                    <Picker.Item label="Modulo 2" value="Modulo 2" />
                    <Picker.Item label="Modulo 3" value="Modulo 3" />
                </Picker>
            </View>
            <View style={styles.containerCreateClass}>
                <Text style={styles.text}>Código da Sala:</Text>
                <Text style={styles.text}>{classToken}</Text>
            </View>
            <View style={styles.containerCreateClass}>
            <ButtonBlue
                onPress={handleCreateNewClass}
                title="Criar Sala"
                accessibilityLabel="Criar Sala"
            />
            </View>
            <BottomMenuTeacher />
        </View >
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
    containerCreateClass: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '20%',
        left: '10%',
        // width: '80%',
        // height: '30%',
        elevation: 5,
    },

    titleContainerCreateClassroom: {
        flex: 1,
        fontSize: 25,
        top: '5%',
        fontWeight: '600',
    },
    inputsToCreateClassroom: {
        flex: 1,
        borderRadius: '5px',
        color: '#6296C4',
        width: '80%',
        height: '20%',
    },
    text: {
        fontSize: 20,
        fontWeight: '650',
    },
});

export default CreateClass;