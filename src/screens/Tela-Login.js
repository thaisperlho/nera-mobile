import { StatusBar, StyleSheet, Text, View, Image, Pressable } from "react-native";
import colors from '../styles';




function login() {
    return (
        //view principal
        <View style={styles.container}>
            <StatusBar style="" />
            {/*view img*/}
            <View style={styles.top}>
                <Image source={require('../image/logoneraMinimizado.png')} style={styles.img} />
            </View>

            {/*view form*/}
            <View style={styles.div_form}>
                {/*view form buttons*/}
                <View style={styles.div_buttons}>
                    <Pressable style={styles.button_professor} onPress={() => alert("teste")}>

                        <Text>professor</Text>

                    </Pressable>
                    <Pressable style={styles.button_aluno} onPress={() => alert("teste")}>

                        <Text>aluno</Text>

                    </Pressable>
                </View>
                {/*view form formulario*/}
                <View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

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
        backgroundColor: colors.amarelo,
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
        height: '20%',
    },

    button_aluno: {
        alignItems: "center",
        width: '50%',
        height: '100%',
        backgroundColor: colors.laranja,
        borderTopRightRadius: 50,
        resizeMode: "contain"
    },

    button_professor: {
        alignItems: "center",
        width: '50%',
        height: '100%',
        backgroundColor: colors.amarelo,
        borderTopLeftRadius: 50,   
        resizeMode: "contain"
    },
})
export default login;