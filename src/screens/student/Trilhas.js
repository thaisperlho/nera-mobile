import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../styles';
import ScrollView from '../../components/ScrollView';

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
            <Image source={require('../../image/fracao.png')} style={styles.img} />
            <Text style={styles.text}>Trilha de Frações</Text>
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
        backgroundColor: `${colors.rosa}30`,
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