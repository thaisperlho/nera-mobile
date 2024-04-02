import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet} from 'react-native';
import BottomMenuTeacher from './MenuTeacher';

const CreateClass = () => {
    const [className, setClassName] = useState('');
    const [selectedTrail, setSelectedTrail] = useState(false);
    const [selectedModule, setSelectedModule] = useState(false);
    const [classToken, setClassToken] = useState('Token da sala');

    const handleCriarSala = () => {
        // Aqui você pode adicionar a lógica para criar a sala com os dados do formulário



        // console.log('Nome da Sala:', className);
        // console.log('Trilha Selecionada:', selectTrail);
        // console.log('Módulo Selecionado:', selectedModule);
        // console.log('Token da sala', classToken);
    };

    return (
        <View style={styles.container}>
            <Text>Digite o nome da sala:</Text>
            <TextInput
                onChangeText={text => setClassName(text)}
                value={className}
                placeholder="Nome da Sala"
            />
            <Text style={styles.text}>Selecionar Trilha: </Text>
            <Picker
                selectedValue={selectedTrail}
                onValueChange={(itemValue, itemIndex) => setSelectedTrail(itemValue)}
            >
                <Picker.Item label="Trilha 1" value="Trilha 1" />
                <Picker.Item label="Trilha 2" value="Trilha 2" />
                <Picker.Item label="Trilha 3" value="Trilha 3" />
            </Picker>

            <Text style={styles.text}>Selecionar Módulo: </Text>
            <Picker
                selectedValue={selectedModule}
                onValueChange={(itemValue, itemIndex) => setSelectedModule(itemValue)}
            >
                <Picker.Item label="Modulo 1" value="Modulo 1" />
                <Picker.Item label="Modulo 2" value="Modulo 2" />
                <Picker.Item label="Modulo 3" value="Modulo 3" />
            </Picker>

            <Text style={styles.text}>Código da Sala:</Text>
            <Text style={styles.text}>{classToken}</Text>

            <Button style={styles.button}
                onPress={handleCriarSala}
                title="Criar Sala"
                accessibilityLabel="Criar Sala"
            />

            <BottomMenuTeacher/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CreateClass;