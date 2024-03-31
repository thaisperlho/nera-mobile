import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import colors from '../styles';

function login() {
    const [cor, setCor] = useState(colors.amarelo);
    const [flexDirection, setflexDirection] = useState("column");
    const changeColor = (corFunc, flexDirect) => {
        setCor(corFunc);
        setflexDirection(flexDirect)
    };

    return (
        //view principal
        <View style={stylesButtons.container}>
            <StatusBar style="" />
            {/*view img*/}
            <View style={stylesButtons.top}>
                <Image source={require('../image/logoneraMinimizado.png')} style={stylesButtons.img} />
            </View>

            {/*view form*/}
            <View style={[stylesButtons.div_form, { backgroundColor: cor }]}>
                {/*view form buttons*/}

                <View style={stylesButtons.div_buttons}>
                    <Pressable style={stylesButtons.button_professor} onPress={() => changeColor(colors.amarelo)}>
                        <Text>professor</Text>
                    </Pressable>
                    <View style={[stylesButtons.div_transction, { flexDirection: flexDirection }]}>
                        <View style={stylesButtons.div_prof}>
                            <Pressable style={stylesButtons.press_prof} onPress={() => changeColor(colors.amarelo)}></Pressable>
                        </View>
                        <View style={stylesButtons.div_aluno}>
                            <Pressable style={stylesButtons.press_aluno} onPress={() => changeColor(colors.laranja, 'column-reverse')}></Pressable>
                        </View>
                    </View>
                    <Pressable style={stylesButtons.button_aluno} onPress={() => changeColor(colors.laranja, 'column-reverse')}>
                        <Text>aluno</Text>
                    </Pressable>
                </View>

                {/*view form formulario*/}
                <View style={stylesForm.formulario}>

                    <TextInput style={stylesForm.input_email} placeholder='Email'></TextInput>
                    <TextInput style={stylesForm.input_cpf} placeholder='CPF'></TextInput>
                    <TextInput style={stylesForm.input_senha} placeholder='Senha'></TextInput>



                </View>
                <Text style={[{ width: '100%' }, { height: '5%' }, { backgroundColor: 'black' }]}>Teste</Text>
                    
                    <Pressable style={[{ width: '100%' }, { height: '10%' }, { backgroundColor: 'green' }]}></Pressable>

                    <Text style={[{ width: '100%' }, { height: '5%' }, { backgroundColor: 'black' }]}>OU</Text>

                    <Pressable style={[{ width: '100%' }, { height: '10%' }, { backgroundColor: 'lightgreen' }]}></Pressable>

            </View>
        </View>
    )
}

const stylesForm = StyleSheet.create({

    formulario: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '40%',
        paddingTop: 20,
        gap: 20,
        alignItems:'center'
    },

    input_email: {
        width: '90%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_cpf: {
        width: '90%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_senha: {
        width: '90%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.branco
    }
})






const stylesButtons = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: '100%',
        width: '100%',
        padding: '5%',
        paddingTop: '0%',
        gap: 10
    },

    div_form: {
        width: '100%',
        height: "70%",
        borderRadius: 50,
        alignItems: "center"
    },

    top: {
        width: '100%',
        height: '30%',
        alignItems: "center",

    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },


    div_buttons: {
        display: 'flex',
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: '15%',
    },

    button_aluno: {
        alignItems: "center",
        width: '40%',
        height: '100%',
        backgroundColor: colors.laranja,
        borderTopRightRadius: 50,
        resizeMode: "contain"
    },

    button_professor: {
        alignItems: "center",
        width: '40%',
        height: '100%',
        backgroundColor: colors.amarelo,
        borderTopLeftRadius: 50,
        resizeMode: "contain"
    },

    div_transction: {
        display: "flex",
        width: '20%',
        height: '100%',
        resizeMode: "contain"
    },

    div_prof: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.laranja,
    },

    press_prof: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.amarelo,
    },

    div_aluno: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.amarelo,
    },

    press_aluno: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: colors.laranja,
    },
})



export default login;