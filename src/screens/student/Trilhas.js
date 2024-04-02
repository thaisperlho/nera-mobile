import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../../styles';

const Trilhas = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>
            <View style={styles.box}>
                <Image source={require('../../image/trilha.png')} style={styles.iconeBox} />
                <Text style={styles.textBox}>Trilhas</Text>
            </View>
            <View style={styles.main}>
                <ScrollView horizontal={true} style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={styles.trilha1}>
                        <Image source={require('../../image/fracao.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Frações</Text>
                    </View>
                    <View style={styles.trilha2}>
                        <Image source={require('../../image/por.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Porcentagem</Text>
                    </View>
                    <View style={styles.trilha3}>
                        <Image source={require('../../image/geo.png')} style={styles.img} />
                        <Text style={styles.text}>TTrilha de Geometria</Text>
                    </View>
                    <View style={styles.trilha4}>
                        <Image source={require('../../image/matriz.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de matrizes</Text>
                    </View>
                    <View style={styles.trilha5}>
                        <Image source={require('../../image/expre.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Expressão</Text>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="" />
            <View style={styles.menubar}>
                <Text>Menu</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        backgroundColor: colors.cinza,
        width: '100%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: colors.branco,
        fontSize: 20,
    },

    box: {
        position: 'absolute',
        top: 75,
        flexDirection: 'row',
    },
    textBox: {
        color: colors.azulEscuro,
        fontSize: 30,
        marginBottom: 20,
        marginTop: "10%",
    },
    iconeBox: {
        width: 60,
        height: 54,
        padding: 30,
        marginRight: 10,
    },

    container: {
        flex: 1,
        backgroundColor: colors.branco,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.textTrilhas,
        fontSize: 30,
        marginBottom: 20,
        marginTop: "10%",
    }
    ,
    img: {
        width: 203,
        height: 203,
        padding: 20,
    },
    main: {
        backgroundColor: colors.branco,
        top: 35,
        position: 'absolute',
        width: "100%",
        height: "86%",
        zIndex: -1,
    },
    trilha1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.rosa}30`,
        width: "32%",
    },
    trilha2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.azulEscuro}30`,
        width: "32%",
    },
    trilha3: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.amarelo}30`,
        width: "32%",
    },
    trilha4: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.azulClaro}30`,
        width: "32%",
    },
    trilha5: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.amarelo}30`,
        width: "32%",dd
    },
    menubar: {
        backgroundColor: colors.verdeAgua,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});

export default Trilhas