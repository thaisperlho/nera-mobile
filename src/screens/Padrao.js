import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../styles';


function Padrao() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <Text style={styles.text}>Nera</Text>
      <Image source={require('../image/Icone.png')} style={styles.img}/>
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
  container: {
    flex: 1,
    backgroundColor: colors.branco,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.azulEscuro,
    fontSize: 50,
    marginBottom: 20,
  }
  ,
  img: {
    width: 100,
    height: 100,
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

export default Padrao;