import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../components/styles';
import MenuStudent from '../components/MenuStudent';

const TrailsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image source={require('../assets/trilha.png')} style={styles.iconeBox} />
                <Text style={styles.textBox}>Trilhas</Text>
            </View>
            <View style={styles.main}>
                <ScrollView horizontal={true} style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={styles.trilha1}>
                        <Image source={require('../assets/fracao.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Frações</Text>
                    </View>
                    <View style={styles.trilha2}>
                        <Image source={require('../assets/por.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Porcentagem</Text>
                    </View>
                    <View style={styles.trilha3}>
                        <Image source={require('../assets/geo.png')} style={styles.img} />
                        <Text style={styles.text}>TTrilha de Geometria</Text>
                    </View>
                    <View style={styles.trilha4}>
                        <Image source={require('../assets/matriz.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de matrizes</Text>
                    </View>
                    <View style={styles.trilha5}>
                        <Image source={require('../assets/expre.png')} style={styles.img} />
                        <Text style={styles.text}>Trilha de Expressão</Text>
                    </View>
                </ScrollView>
            </View>
            <MenuStudent></MenuStudent>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default TrailsScreen